import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    BeforeInsert,
    AfterInsert,
  } from 'typeorm';
  
  @Entity('reservation')
  export class reservation {
    @PrimaryGeneratedColumn() 
    id_res: number;
    
    @Column({
      type: 'varchar',
      nullable: false,
      
    })
    id_user: number;
    
    @Column({
      type: 'varchar',
      nullable: false,
    })
    id_park: number;
    
    
    
    @Column({
      type: 'varchar',
      nullable: false,
    })
    entree: string;
    
    @Column({
      type: 'varchar',
      nullable: false,
    })
    sortie: string;

  
    @Column({
        type: 'varchar',
        nullable: false,
        default : false,
      })
      valider: boolean ;
   
      @Column({
        type: 'varchar',
        nullable: false,
        default : false,
      })
      date: String ;
   

    
    
    
  }