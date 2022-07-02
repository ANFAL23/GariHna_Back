import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    BeforeInsert,
    AfterInsert,
  } from 'typeorm';
  import * as bcrypt from 'bcrypt';
  @Entity('user')
  export class user {
    @PrimaryGeneratedColumn() 
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
    prenom: string;
    
    @Column({
      type: 'varchar',
      nullable: false,
    })
    mdp: string;
    
    @Column({
      type: 'varchar',
      nullable: false,
    })
    email: string;
    
    @Column({
      type: 'varchar',
      nullable: false,
    })
    num_tel: string;
   

    @AfterInsert()
     async hashPassword() {
       this.mdp = await bcrypt.hash(this.mdp, 10);
     }
    
    
  }