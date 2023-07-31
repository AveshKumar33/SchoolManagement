import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/entity/user.entity';
export const postgreSqlOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  name: 'db1',
  type: 'postgres',
  host: configService.get<string>('PGDB_HOST'),
  port: +configService.get<number>('PGDB_PORT'),
  username: configService.get<string>('PGDB_USERNAME'),
  password: configService.get<string>('PGDB_PASSWORD'),
  database: configService.get<string>('PGDB_NAME'),
  entities: [User],
  synchronize: true,//TypeORM will create or update the database schema based on your entity classes each time the application starts.
  // autoLoadEntities: true, //TypeORM to automatically discover and load your entity classes without the need to explicitly list them in the entities array
});



