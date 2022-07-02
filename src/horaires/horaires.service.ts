import { Injectable } from '@nestjs/common';
import { CreateHoraireDto } from './dto/create-horaire.dto';
import { UpdateHoraireDto } from './dto/update-horaire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Horaire } from './entities/horaire.entity';
import { Repository } from 'typeorm'; 

@Injectable()
export class HorairesService {
 
  constructor(
    @InjectRepository(Horaire)
    private usersRepository: Repository<Horaire>,
  ) {}


  create(createHoraireDto: CreateHoraireDto) {
    return this.create(createHoraireDto);
  }

  
  findAll(){
    return this.usersRepository.find();
  }
  async findByPark(condition: any): Promise<Horaire[]> {
    return this.usersRepository.find(condition);
  }

   


  findOne(id: number) {
    return `This action returns a #${id} horaire`;
  }

  update(id: number, updateHoraireDto: UpdateHoraireDto) {
    return `This action updates a #${id} horaire`;
  }

  remove(id: number) {
    return `This action removes a #${id} horaire`;
  }
}
