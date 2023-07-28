
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoResolver } from './info.resolver';
import { InfoService } from './info.service';
import { Information } from './entity/info.entity';


@Module({
    imports:[TypeOrmModule.forFeature([Information])],
    // imports:[TypeOrmModule.forFeature([Information], 'db2')],
    exports:[],
    providers:[InfoResolver,InfoService]

})
export class InfoModule {}
