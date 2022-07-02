import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    BeforeInsert,
    AfterInsert,
  } from 'typeorm';
  
  @Entity('note')
  export class note {
    @PrimaryGeneratedColumn() 
    id_note: number;
    
    @Column({
      type: 'varchar',
      nullable: false,
      
    })
    id_park: number;
    
    @Column({
      type: 'varchar',
      nullable: false,
    })
    id_user: number;
    
    @Column({
      type: 'varchar',
      nullable: false,
    })
    mark: number;
    
    @Column({
      type: 'varchar',
      nullable: false,
    })
    comnt: string;
    

    
  }export class Note {}
