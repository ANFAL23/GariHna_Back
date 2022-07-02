import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from '../../Controller/Products/dto/create-product.dto';
import { UpdateProductDto } from '../../Controller/Products/dto/update-product.dto';
import {Product} from '../../Model/Products/entities/product.entity';
import { HttpService} from '@nestjs/axios'
import { map,Observable } from 'rxjs';
import {AxiosResponse} from 'axios'
import { Repository } from 'typeorm'; 
@Injectable()

export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly ProductRepository: Repository<Product>,
    
    private httpService: HttpService
   
    ) { 
    }
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }
 // findAll(): Observable<AxiosResponse<user[]>> {
    async findByCategorie(condition: any) : Promise<Observable<AxiosResponse<Product[], any>>>{
     // return this.usersRepository.find(condition);
     return this.httpService.get('https://8e81-129-45-29-150.eu.ngrok.io/products').pipe(
        map(response => response.data))
    }
  
  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
