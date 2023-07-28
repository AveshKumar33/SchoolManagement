import { MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';


export const mongodbConfig=(configService: ConfigService): MongooseModuleOptions =>({
    uri:configService.get<string>('MONGO_URI'), // MongoDB connection URI for the mongoDB atlas database
    //   connectionName: 'db3', // Unique connection name
});

