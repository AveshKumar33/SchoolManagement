import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';;
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { TeacherModule } from './teachers/teachers.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { mongodbConfig } from './databases/mongodb.connection';
import { postgreSqlOrmConfig } from './databases/postgresql.connection';
// import { mySqlOrmConfig } from './databases/mysql.connection';
// import { InfoModule } from './informations/info.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Point to the schema.gql file
      playground: true,
      debug: true,
      installSubscriptionHandlers: true,
      path: '/graphql',
      driver: ApolloDriver,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),

    ConfigModule.forRoot({ envFilePath: ['database.credentials.env', 'development.credentials.env'], isGlobal: true, ignoreEnvFile: false, }), // Load and use @nestjs/config

    /* postgesql connection */
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => postgreSqlOrmConfig(configService), // Use the ConfigService in the factory function
      inject: [ConfigService], // Inject ConfigService into the factory function
    }),

    /* mongoDB connection */
    // TypeOrmModule.forRootAsync({
    //   useFactory: (configService: ConfigService) => mySqlOrmConfig(configService), // Use the ConfigService in the factory function
    //   inject: [ConfigService], // Inject ConfigService into the factory function
    // }),

    /* mysql connection */
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => mongodbConfig(configService), // Use the ConfigService in the factory function
      inject: [ConfigService], // Inject ConfigService into the factory function
    }),


    // InfoModule,
    UserModule,
    TeacherModule,
    AuthModule,

  ],
  controllers: [],
  providers: [],
})

export class AppModule { }

