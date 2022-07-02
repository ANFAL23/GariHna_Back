import { Double } from "typeorm"

export class CreateParkingDto {
    id_park? :number
    photo? : string 
    nom? : string 
    commun? : string   
    tarif? : string 
    longitude? : Double
    latitude? : Double 
    Nbr_Places? : number
}
