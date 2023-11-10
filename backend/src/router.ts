import { Router } from "express";

import UserController from "./controller/UserController";
import ProjectController from "./controller/ProjectController";
import LoginController from "./controller/LoginController";
import { AuthMiddleware } from "./middleware/AuthMiddleware";
import TaskController from "./controller/TaskController";

const routes = Router();

routes.post("/api/v1/user", UserController.create);
routes.get("/api/v1/project", AuthMiddleware, ProjectController.getAll);
routes.get("/api/v1/project/:projectId", AuthMiddleware, ProjectController.getById);
routes.post("/api/v1/project", AuthMiddleware, ProjectController.create);
routes.delete("/api/v1/project/:projectId", AuthMiddleware, ProjectController.delete);
routes.post("/api/v1/login", LoginController.login);


routes.post("/api/v1/task", AuthMiddleware, TaskController.create);
routes.post("/api/v1/task/:taskId/status", AuthMiddleware, TaskController.updateState);







export default routes;

