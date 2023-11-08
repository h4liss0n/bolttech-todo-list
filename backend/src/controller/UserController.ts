import { NextFunction, Request, Response } from 'express';
import { User } from "../entity/User"
import { AppDataSource } from '../data-source';


class UserController {


    static create = async (request: Request, response: Response, next: NextFunction) => {
        const { name, user, password } = request.body
        try {
            const subject = new User();
            subject.name = name
            subject.user = user
            subject.password = password
            const repository = AppDataSource.getRepository(User)
            const saved = await repository.save(subject);
            response.status(201).send(saved)
        } catch (error) {
            response.status(500).send({ error: error.message });
        }
    }
}

export default UserController