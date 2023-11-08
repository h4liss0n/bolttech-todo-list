import { Router } from "express";

import UserController from "./controller/UserController";
import ProjectController from "./controller/ProjectController";
import LoginController from "./controller/LoginController";

const routes = Router();

routes.post("/api/v1/user", UserController.create);
routes.get("/api/v1/project", ProjectController.getAll);
routes.post("/api/v1/project", ProjectController.create);
routes.post("/api/v1/login", LoginController.login);
routes.post("/api/v1/user", UserController.create);



export default routes;

