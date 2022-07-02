import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
// import { NotesModule } from './notes/notes.module';
// import { UsersModule } from './users/users.module';
import { ParkingsModule } from './parkings/parkings.module';
//import { HorairesModule } from './horaires/horaires.module';
//import { ConfigModule } from '@nestjs/config';
=======
>>>>>>> 0dae29543727144a434c3e51450d4786ec0e2f39
import { TypeOrmModule} from "@nestjs/typeorm";
import {config} from './orm.config' ;
import { UsersModule } from './Model/User/users.module';
import { TestsModule } from './tests/tests.module';
import { ProductsModule } from './Model/Products/products.module';

import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
           TypeOrmModule.forRoot(config),
<<<<<<< HEAD
            ParkingsModule,
            UsersModule,
            HorairesModule,
            ReservationsModule,
            
            NotesModule,
            
    
=======
              UsersModule,
              TestsModule,
              ProductsModule,
>>>>>>> 0dae29543727144a434c3e51450d4786ec0e2f39
            
  ],
  controllers: [AppController],
  providers: [AppService],
  

})
export class AppModule {}




