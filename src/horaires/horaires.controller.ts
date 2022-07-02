import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HorairesService } from './horaires.service';
import { CreateHoraireDto } from './dto/create-horaire.dto';
import { UpdateHoraireDto } from './dto/update-horaire.dto';

@Controller('horaires')
export class HorairesController {
  constructor(private readonly horairesService: HorairesService) {}

  @Post()
  create(@Body() createHoraireDto: CreateHoraireDto) {
    return this.horairesService.create(createHoraireDto);
  }

  @Get()
  findAll() {
    console.log("hna")
    return this.horairesService.findAll();
  }

  
  async find_by_park( id_park:number) {
   
    const reservation = await this.horairesService.findByPark({id_park})

     return reservation
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.horairesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHoraireDto: UpdateHoraireDto) {
    return this.horairesService.update(+id, updateHoraireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.horairesService.remove(+id);
  }
}
