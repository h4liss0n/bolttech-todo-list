import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, ManyToOne, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import { Project } from "./Project";


@Entity()
export class Task {

    @PrimaryColumn({ name: "id_tak", type: "uuid" })
    id: string

    @Column({ name: "description_task" })
    description: string

    @Column({ name: "done_task" })
    done: boolean

    @ManyToOne(() => Project, (project) => project.id,
        {
            nullable: false,
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        })
    @JoinColumn({ name: "project_id_task" })
    project: Project

}
