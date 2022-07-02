import { Module } from '@nestjs/common';
import { ProductsService } from '../../Service/Products/products.service';
import { ProductsController } from '../../Controller/Products/products.controller';
import { HttpModule } from '@nestjs/axios'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([Product]),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
})
export class ProductsModule {}
