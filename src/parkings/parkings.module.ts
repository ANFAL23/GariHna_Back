import { Module } from '@nestjs/common';
import { ParkingsService } from './parkings.service';
import { ParkingsController } from './parkings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorairesService } from 'src/horaires/horaires.service';

import { Parking } from './entities/parking.entity';
import { Horaire } from 'src/horaires/entities/horaire.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Parking]),TypeOrmModule.forFeature([Horaire])], 
  controllers: [ParkingsController],
  providers: [ParkingsService,HorairesService]
})
export class ParkingsModule {}
