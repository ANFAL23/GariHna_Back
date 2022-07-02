import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';


@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}


  @Post()
  create(@Body() createReservationDto: CreateReservationDto):Promise<CreateReservationDto> {
    return this.reservationsService.create(createReservationDto);
  }
 
  @Get()
  findbyid(@Body('id_user') id_user:string) {
    return this.reservationsService.findbyid(id_user);
  }
  
  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }
  @Post('user')
  async find_by_user(@Body('id_user') id_user:number) {
   
    const reservation = await this.reservationsService.findbyuser({id_user})

     return reservation
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationsService.remove(+id);
  }
}
