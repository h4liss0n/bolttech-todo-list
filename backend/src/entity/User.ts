import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, PrimaryColumn } from "typeorm"
import { Project } from "./Project"

@Entity()
export class User {

    @PrimaryColumn({ name: "id_usu", type: "uuid" })
    id: string

    @Column({ name: "name_usu" })
    name: string

    @Column({ name: "user_usu" })
    user: string

    @Column({ name: "password_usu" })
    password: string

}
