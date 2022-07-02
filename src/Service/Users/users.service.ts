import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../Controller/User/create-user.dto';
import { UpdateUserDto } from '../../Controller/User/dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 
import { user } from '../../Model/User/entities/user.entity';
import { Observable,from, map } from 'rxjs';
import * as bcrypt from 'bcrypt';
import { HttpService} from '@nestjs/axios'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(user)
    private readonly usersRepository: Repository<user>, 
    ) 
    { 
    
<<<<<<< HEAD:src/users/users.service.ts
    }
  
=======
    private httpService: HttpService
   
    ) { 
    }  
>>>>>>> 0dae29543727144a434c3e51450d4786ec0e2f39:src/Service/Users/users.service.ts
  
  async create(createUserDto: CreateUserDto) :Promise<CreateUserDto>{
    const salt = await bcrypt.genSalt(); 
    const pass = await bcrypt.hash(createUserDto.mdp,10);
       const util = new user ()
       util.nom=createUserDto.nom
       util.prenom= createUserDto.prenom
       util.email= createUserDto.email
       util.num_tel= createUserDto.num_tel
       util.mdp= pass
       console.log(this.httpService.get('http://localhost:3002/users').pipe(
        map(response => response.data)))
     return this.usersRepository.save(util);
  }

 
  findAll(): Promise<user[]> {
    return this.usersRepository.find();
  }
<<<<<<< HEAD:src/users/users.service.ts
=======

>>>>>>> 0dae29543727144a434c3e51450d4786ec0e2f39:src/Service/Users/users.service.ts
  async findOne(condition: any) :Promise<user>{
      return this.usersRepository.findOne(condition);
     
  
  }

  
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id,updateUserDto);
  }

  remove(id: number) {
  
    return this.usersRepository.delete(id);
  }
}
