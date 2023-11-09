import "reflect-metadata"
import { DataSource } from "typeorm"
import { Project } from "./entity/Project"
import { User } from "./entity/User"
import { Task } from "./entity/Task"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test",
    database: "bolttech-todo-list",
    synchronize: true,
    logging: false,
    entities: [Project, User, Task],
    migrations: [],
    subscribers: [],
})
