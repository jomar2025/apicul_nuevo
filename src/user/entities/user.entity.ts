import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    Nombre: String;
    @Column()
    Apellido: String;
    @Column()
    direccion: String;
    @Column()
    Email: String;
    @Column()
    telefono: String;
   
    @Column({default: true})
    isActive: boolean;

}
