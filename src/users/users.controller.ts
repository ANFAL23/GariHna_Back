import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Observable } from 'rxjs';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

@Post()
  create(@Body() createUserDto: CreateUserDto):Promise<CreateUserDto>{
  
    
    return this.usersService.create(createUserDto);
  }
  @Post('loggin')
  async login(@Body('email') email:string  ,@Body('mdp') mdp:string  ) 
  {
    const user = await this.usersService.findOne({email})
   if(!user)
   {
     throw new BadRequestException("invalide credintials!")
   }
   if(!await bcrypt.compare(mdp,user.mdp))
   {
     throw new BadRequestException("invalide credintials!")
   }
   return user;
  }
  @Post('GoogleLoggin')
  async GoogleLogin(@Body('email') email:string  ) 
  {
    const user = await this.usersService.findOne({email})
   if(!user)
   {
     throw new BadRequestException("invalide credintials: user not foud !")
   }
   
   return user;
  }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
   
  //@Get(':id')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
  
  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
