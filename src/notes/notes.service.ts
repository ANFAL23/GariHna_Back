import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { note } from './entities/note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 

@Injectable()


  
  
export class NotesService {
  constructor(
    @InjectRepository(note)
    private readonly notesRepository: Repository<note>,
    
       
   
    ) { 
    }
  create(createNoteDto: CreateNoteDto) {
    return this.notesRepository.save(createNoteDto);
  }
  findAll(): Promise<note[]> {
    return this.notesRepository.find();
  }

  async findOne(condition: any) :Promise<note>{
      return this.notesRepository.findOne(condition);
     
  
  }


  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
