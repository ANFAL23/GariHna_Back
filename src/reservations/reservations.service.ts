import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Repository } from 'typeorm';
import { reservation } from './entities/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(reservation)
    private readonly reservationRepository: Repository<reservation>,  
    ) {}
  async create(createReservationDto: CreateReservationDto) :Promise<CreateReservationDto>{
    
     return this.reservationRepository.save(createReservationDto);
  }

  async findbyuser(condition: any) :Promise<reservation[]>{
    return this.reservationRepository.find(condition);
   

}


  findAll() {
    return this.reservationRepository.find();
  }
  async findbyid(condition: any) :Promise<reservation[]>{
    return this.reservationRepository.find(condition);
  
}
 

  findOne(id: number) {
 
    return this.reservationRepository.findOne(id)
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
