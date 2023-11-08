import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn({ name: "id_usu" })
    id: number

    @Column({ name: "name_usu" })
    name: string

    @Column({ name: "user_usu" })
    user: string

    @Column({ name: "password_usu" })
    password: string
}
