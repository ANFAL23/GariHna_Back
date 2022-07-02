import { Double } from "typeorm"
import {CreateHoraireDto} from '../../horaires/dto/create-horaire.dto'
import { Horaire } from "c:/Users/lenovo/services/src/horaires/entities/horaire.entity"

export class ResponseParkingDto {
  
  
    id_park? :number
    photo? : string 
      nom : string 
    commun? : string   
    tarif? : string 
    longitude? : Double
    latitude? : Double 
    etat?: string
    Taux? : number
    distance?:number
    duree? :  number
  
  
}