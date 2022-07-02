import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { UsersService } from '../../Service/Users/users.service';
import { UsersController } from './../../Controller/User/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { user } from './entities/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([user]),
   
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}