import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { HttpService} from '@nestjs/axios'
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import {user} from '../Model/User/entities/user.entity'
import {AxiosResponse} from 'axios'

@Injectable()
export class TestsService {
  constructor(private httpService: HttpService) {}
  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }


  findAll(): Observable<AxiosResponse<user[]>> {
  //  findAll() {
   
    
   
   console.log(this.httpService.get('http://localhost:3002/users').pipe(
    map(response => response.data),
  ));
    return this.httpService.get('http://localhost:3002/users').pipe(
      map(response => response.data))
 
   
  }
  

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
