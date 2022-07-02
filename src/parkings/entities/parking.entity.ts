import {Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    BeforeInsert,
    Double,
  } from 'typeorm';
  
  @Entity('Parking')
  
  export class Parking  {
    @PrimaryGeneratedColumn()
     id_park: number;
     @Column({
      type: 'varchar',
      nullable: true,
    })
   photo :string 
    @Column({
      type: 'varchar',
      nullable: true,
      unique: true,
    })
    nom: string;
    @Column({
      type: 'varchar',
      nullable: true,
    })
    commun: string;
    @Column({
      type: 'varchar',
      nullable: true,
    })
    tarif: string;
    @Column({
      type: 'varchar',
      nullable: true,
    })
    longitude :  Double;
    
    @Column({
      type: 'varchar',
      nullable: true,
    })
    latitude :  Double; 
    @Column({
      type: 'varchar',
      nullable: true,
    })
    Nbr_Places :  number; 
   
    
}





