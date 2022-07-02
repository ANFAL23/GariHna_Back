import { Injectable, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { CreateParkingDto } from './dto/create-parking.dto';
import { UpdateParkingDto } from './dto/update-parking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 

import { Parking } from './entities/parking.entity';
import {ParkingsModule} from './parkings.module'
import { FileFieldsInterceptor } from '@nestjs/platform-express';
@Injectable()
export class ParkingsService {
  constructor(
    @InjectRepository(Parking)
    private usersRepository: Repository<Parking>,
  ) {}



  
  async create(createParkingDto: CreateParkingDto) :Promise<CreateParkingDto>{
    
   

     return this.usersRepository.save(createParkingDto);
  
  }
  

    //return this.ParkingsModule
    findAll(): Promise<Parking[]> {
      return this.usersRepository.find();
    }
  

  async   findOne(id: number) {
    return this.usersRepository.findOne(id);
  }

  update(id: number, updateParkingDto: UpdateParkingDto) {
   // return `This action updates a #${id} parking`;
    return this.usersRepository.update(id,updateParkingDto)
   
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
