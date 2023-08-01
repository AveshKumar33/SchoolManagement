import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/guards/auth.guard';
@Module({
    imports:[TypeOrmModule.forFeature([User])],
    exports: [UserService],
    providers: [UserResolver, UserService, {
        provide: APP_GUARD,
        useClass: AuthGuard,
    },]

})
export class UserModule {}
