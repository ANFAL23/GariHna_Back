import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors,
   UploadedFiles, UploadedFile, Res } from '@nestjs/common';
import { ParkingsService } from './parkings.service';
import { CreateParkingDto } from './dto/create-parking.dto';
import { UpdateParkingDto } from './dto/update-parking.dto';
import { ResponseParkingDto } from './dto/response-parking.dto';
import { Express } from 'express'
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { Double } from 'typeorm';
import {HorairesService } from '../horaires/horaires.service'
import { HorairesController} from '../horaires/horaires.controller'
var getDistanceBetweenPoints = require('get-distance-between-points');   
@Controller('parkings')
export class ParkingsController {
  constructor(private readonly parkingsService: ParkingsService,
    private readonly  HoraireService: HorairesService) {}
 
    private readonly horairescontroller: HorairesController = new HorairesController(this.HoraireService)
  @Post()
  create(@Body() createParkingDto: CreateParkingDto) {
    return this.parkingsService.create(createParkingDto);
  }
  
  @Get()
  findAll() {
    return this.parkingsService.findAll();
  
  }
 
        
@Post("search")
  async Distance(@Body('latitude') latitude:string  ,@Body('longitude') longitude:string,
  @Body('distance_max') distanc:Double,  @Body('prix_max') tarif:Double) 
  
  { 
    const parkings = this.parkingsService.findAll();
    //if(!latitude)
    
    console.log(longitude)
    var parking_response= [];
     
       
      (await parkings).forEach(async parking=> {
      
       
        var park : ResponseParkingDto = new ResponseParkingDto()
        var filtre = 0
        park.id_park=parking.id_park
        park.nom=parking.nom
        park.photo=parking.photo
        park.commun=parking.commun
        park.tarif=parking.tarif
        park.latitude=parking.latitude
        park.latitude=parking.longitude
        park.etat= "open"
        park.Taux= 30*parking.id_park/15
      
       
        
      
       
       
        var distanceInMeters = getDistanceBetweenPoints.getDistanceBetweenPoints(
          latitude, longitude, // Lat, Long of point A
          parking.latitude, parking.longitude // Lat, Long of point B
           );
           park.distance= distanceInMeters*0.001
              
              park.distance= Math.floor(park.distance)
              park.duree= Math.floor(park.duree)
               // 100 km /h  => 60min 
                park.duree=park.distance*60/100  
                if(distanc!=0)
                {
                  if(park.distance>distanc)
                  {
                    filtre =1
                  }
                }   
                if(tarif!=0)
                {
                  if(parseFloat(park.tarif)>tarif)
                  {
                    filtre =1
                  }
                }    
                if(filtre==0)
                {
                  parking_response.push(park) 
                }
        
     
        
      });
         
         parking_response.sort(sortFunction)
         function sortFunction(a,b)
         {
              return (a.distance-b.distance)
         }
         //return parkings
       return parking_response
  

  }
 
  
  
  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  uploadFile(@UploadedFile() park1: Express.Multer.File) {
  
}
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parkingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParkingDto: UpdateParkingDto) {
    return this.parkingsService.update(+id, updateParkingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parkingsService.remove(+id);
  }
  
}
