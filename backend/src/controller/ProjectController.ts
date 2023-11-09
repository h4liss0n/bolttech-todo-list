import { NextFunction, Request, Response } from 'express';
import { Project } from '../entity/Project';
import { AppDataSource } from '../data-source';
import ProjectService from '../service/ProjectService';
import { getUserId } from '../Utils';


class ProjectController {

    static getAll = async (request: Request, response: Response, next: NextFunction) => {
        const userId = getUserId(request)
        const project = await ProjectService.getAll(userId)
        response.send(project)
    }

    static create = async (request: Request, response: Response, next: NextFunction) => {
        const userId = getUserId(request)
        const { name } = request.body

        try {
            const saved = await ProjectService.create(userId, name)
            response.status(201).send(saved)
        } catch (error) {
            response.status(500).send({ error: error.message });
        }
    }

    static delete = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const { projectId } = request.params
            const projectRepository = AppDataSource.getRepository(Project)
            await projectRepository.delete(projectId)
            response.status(204).send()
        } catch (error) {
            response.status(500).send({ error: error.message });
        }
    }


    static getById = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const { projectId } = request.params
            const userId = getUserId(request)
            const project = await ProjectService.getById(userId, projectId)
            response.send(project)
        } catch (error) {
            response.status(500).send({ error: error.message });
        }
    }
}

export default ProjectController