import { Project, ProjectBase } from "../model/ProjectModel";
import { TaskModel, TaskModelPost } from "../model/TaskModel";

export class TaskService {

    static async create(task: TaskModelPost): Promise<TaskModel> {

        const token = localStorage.getItem("token");

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(task),
        };
        const res = await fetch(
            "http://localhost:8080/api/v1/task",
            requestOptions,
        );
        const json = (await res.json()) as TaskModel;
        return json;
    }

    static async delete(id: number) {

        const token = localStorage.getItem("token");

        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        };
        return await fetch(
            `http://localhost:8080/api/v1/project/${id}`,
            requestOptions,
        );
    }



    static async updateStatus(taskId: string, status: boolean) {

        const token = localStorage.getItem("token");
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ status }),
        };
        return await fetch(
            `http://localhost:8080/api/v1/task/${taskId}/status`,
            requestOptions,
        );
    }
}





