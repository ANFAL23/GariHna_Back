import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    BeforeInsert,
    AfterInsert,
  } from 'typeorm';
  @Entity('product')
export class Product {
  @PrimaryGeneratedColumn() 
  id_product: number;
 
  
   
   
  @Column({
    type: 'varchar',
    nullable: false,
    
  })
  id_user: number;
 
 
  @Column({
    type: 'varchar',
    nullable: false,
  })
  nom: string;
  
  @Column({
    type: 'varchar',
    nullable: false,
  })
  categorie: string;

  @Column({
      type: 'varchar',
      nullable: false,
      default : false,
    })
    couleur: string ;

   
  
  @Column({
      type: 'varchar',
      nullable: false,
      default : false,
    })
    poix: string ;
 
    @Column({
      type: 'varchar',
      nullable: false,
      default : false,
    })
    prix: String ;
 
    @Column({
        type: 'varchar',
        nullable: false,
        default : false,
      })
     
      
      nombre_exemplaire? : number 
      @Column({
        type: 'varchar',
        nullable: false,
        default : false,
      })
    
      Description?: string 
    
    
  
}