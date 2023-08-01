import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { IS_PUBLIC_KEY } from 'src/shared/public.decorator';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService, private reflector: Reflector) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const gqlContext = GqlExecutionContext.create(context);
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            gqlContext.getHandler(),
            gqlContext.getClass(),
        ]);

        if (isPublic) {
            // 💡 See this condition
            return true;
        }

        const isHttp = context.getType() === 'http';

        if (isHttp) {
            // Handle HTTP requests
            const request = context.switchToHttp().getRequest();

            const token = this.extractTokenFromHeader(request);

            if (!token) {
                throw new UnauthorizedException();
            }

            try {
                const payload = await this.jwtService.verifyAsync(token, {
                    secret: jwtConstants.secret,
                });
                request['user'] = payload;
            } catch {
                throw new UnauthorizedException();
            }
        } else {
            // Handle GraphQL requests
            const req = gqlContext.getContext().req;


            const token = this.extractTokenFromHeader(req);

            if (!token) {
                throw new UnauthorizedException();
            }

            try {
                const payload = await this.jwtService.verifyAsync(token, {
                    secret: jwtConstants.secret,
                });
                req['user'] = payload;
            } catch {
                throw new UnauthorizedException();
            }
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
