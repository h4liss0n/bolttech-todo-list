import { NextFunction, Request, Response } from 'express';
import { Project } from '../entity/Project';
import { AppDataSource } from '../data-source';


class ProjectController {
    static getAll = async (request: Request, response: Response, next: NextFunction) => {
        const projectRepository = AppDataSource.getRepository(Project)
        const project = await projectRepository.find()
        response.send(project)
    }

    static create = async (request: Request, response: Response, next: NextFunction) => {
        const { name } = request.body

        try {
            const project = new Project();
            project.name = name
            const projectRepository = AppDataSource.getRepository(Project)
            const saved = await projectRepository.save(project);
            response.status(201).send(saved)
        } catch (error) {
            response.status(500).send({ error: error.message });
        }
    }
}

export default ProjectController