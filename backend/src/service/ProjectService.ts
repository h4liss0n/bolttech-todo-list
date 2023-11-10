import { NextFunction, Request, Response } from 'express';
import { Project } from '../entity/Project';
import { AppDataSource } from '../data-source';
import { User } from '../entity/User';
import { randomUUID } from 'crypto';



class ProjectService {
    static getAll = async (userId: string) => {
        const projects = await AppDataSource
            .getRepository(Project)
            .find({
                where: {
                    users: {
                        id: userId
                    }
                },
                relations: {
                    users: true,
                    tasks: true
                },
                select: {
                    users: { id: true, name: true },
                    tasks: { id: true, description: true, done: true },

                }

            })

        return projects;
    };

    static getById = async (userId: string, projectId: string) => {
        const projects = await AppDataSource
            .getRepository(Project)
            .findOne({
                where: {
                    id: projectId,
                    users: {
                        id: userId
                    }
                },
                relations: {
                    users: true,
                    tasks: true

                },
                select: {
                    users: { id: true, name: true },
                    tasks: { id: true, description: true, done: true },

                }
            })

        return projects;
    };


    static create = async (userId: string, name: string) => {
        const user = await AppDataSource
            .getRepository(User)
            .findOneBy({ id: userId })


        const project = new Project();
        project.id = randomUUID()
        project.name = name
        project.users = [user]

        const projectSaved = await AppDataSource
            .getRepository(Project)
            .save(project);

        return projectSaved
    };
}

export default ProjectService