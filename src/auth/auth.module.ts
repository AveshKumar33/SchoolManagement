import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
@Module({
  imports:[UserModule,
  JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60m' },
  }),],
  providers: [AuthService, AuthResolver],
  exports: [AuthService,AuthModule],
})
export class AuthModule {}


// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthResolver } from './auth.resolver';
// import { UserModule } from 'src/users/users.module';
// import { JwtModule } from '@nestjs/jwt';
// import { jwtConstants } from './constants';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// @Module({
//   imports: [UserModule,
//     JwtModule.registerAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: (configService: ConfigService) => ({
//         secret: configService.get<any>('SECRET_KEY'),
//         signOptions: { expiresIn: configService.get<any>('EXPIRESIN') },
//         global: true,
//       })
//     })],
//   providers: [AuthService, AuthResolver],
//   exports: [AuthService, AuthModule],
// })
// export class AuthModule { }
