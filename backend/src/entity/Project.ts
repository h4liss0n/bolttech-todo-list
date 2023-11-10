import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm"
import { User } from "./User";
import { Task } from "./Task";


@Entity()
export class Project {

    @PrimaryColumn({ name: "id_pro", type: "uuid" })
    id: string

    @Column({ name: "name_pro" })
    name: string


    @ManyToMany(() => User)
    @JoinTable()
    users: User[]


    @OneToMany(() => Task, (task) => task.project)
    tasks: Task[]

}
