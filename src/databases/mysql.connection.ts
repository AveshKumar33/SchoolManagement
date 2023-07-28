import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Information } from 'src/informations/entity/info.entity';
export const mySqlOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  name: 'db2',
  type: 'mysql',
  host: configService.get<string>('MSDB_HOST'),
  port: +configService.get<number>('MSDB_PORT'),
  username: configService.get<string>('MSDB_USERNAME'),
  password: configService.get<string>('MSDB_PASSWORD'),
  database: configService.get<string>('MSDB_NAME'),
  entities: [Information],
  // synchronize: true,
  autoLoadEntities: true,
});
