import { NextFunction, Request, Response } from 'express';
import { User } from "../entity/User"
import { AppDataSource } from '../data-source';
import { randomUUID } from 'crypto';
import TaskService from '../service/TaskService';


class TaskController {
    static create = async (request: Request, response: Response, next: NextFunction) => {
        const { description, projectId } = request.body
        try {
            const saved = TaskService.create(description, projectId)
            response.status(201).send(saved)
        } catch (error) {
            response.status(500).send({ error: error.message });
        }
    }

    static updateState = async (request: Request, response: Response, next: NextFunction) => {
        const { taskId } = request.params
        const { status } = request.body
        try {
            await TaskService.updateState(taskId, Boolean(status))
            response.status(204).send()
        } catch (error) {
            response.status(500).send({ error: error.message });
        }
    }
}

export default TaskController