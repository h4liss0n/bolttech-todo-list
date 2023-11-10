import { NextFunction, Request, Response } from 'express';
import { Project } from '../entity/Project';
import { AppDataSource } from '../data-source';
import { User } from '../entity/User';
import { randomUUID } from 'crypto';
import { Task } from '../entity/Task';



class TaskService {
    static create = async (description: string, projectId: string) => {
        const project = await AppDataSource
            .getRepository(Project)
            .findOneBy({ id: projectId })


        const subject = new Task();
        subject.id = randomUUID()
        subject.description = description
        subject.project = project
        subject.done = false

        const subjectSaved = await AppDataSource
            .getRepository(Task)
            .save(subject);

        return subjectSaved
    };


    static updateState = async (taskId: string, status: boolean) => {
        const result = await AppDataSource
            .createQueryBuilder()
            .update(Task)
            .set({ done: status })
            .where({ id: taskId })
            .execute()
        return result
    };

}

export default TaskService 