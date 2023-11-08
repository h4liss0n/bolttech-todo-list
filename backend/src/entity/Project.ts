import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Project {
    @PrimaryGeneratedColumn({ name: "id_pro" })
    id: number

    @Column({ name: "name_pro" })
    name: string

}
