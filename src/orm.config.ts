import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";
export const  config : TypeOrmModuleOptions  ={
    type :'postgres',
    port : 5432,
    host : '127.0.0.1',
    database :'parkina',
    synchronize: true,
    username : 'postgres', 
    password : '32ANFEL1502',
   
    entities: [join(__dirname, '**', '*.entity.{ts,js}')]
}