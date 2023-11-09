import { NextFunction, Request, Response } from 'express';
import { User } from "../entity/User"
import { AppDataSource } from '../data-source';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../const';


class LoginController {
    static login = async (request: Request, response: Response, next: NextFunction) => {
        const { user, password } = request.body

        try {

            const repository = AppDataSource.getRepository(User)
            const userLogged = await repository.findOneBy({
                "user": user,
                "password": password
            })

            if (!userLogged) {
                response.status(401).send({ error: 'Authentication failed' });
                return;
            }


            const token = jwt.sign({ userId: userLogged.id, username: userLogged.user }, JWT_SECRET);

            response.send({ token });



        } catch (error) {
            response.status(500).send({ error: error.message });
        }
    }
}

export default LoginController