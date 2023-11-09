import { Project, ProjectBase, ProjectCard } from "../model/ProjectModel";

export class ProjectServiceApi {


    static async getAll(): Promise<Project[]> {
        const token = localStorage.getItem("token");


        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        };

        const res = await fetch("http://localhost:8080/api/v1/project", requestOptions);
        const result = (await res.json()) as Project[];
        return result;
    }


    static async getById(projectId: string): Promise<ProjectCard> {
        const token = localStorage.getItem("token");


        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        };

        const res = await fetch(`http://localhost:8080/api/v1/project/${projectId}`, requestOptions);
        const result = (await res.json()) as ProjectCard;
        return result;
    }

    static async createProject(projectBase: ProjectBase): Promise<Project> {

        const token = localStorage.getItem("token");

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(projectBase),
        };
        const res = await fetch(
            "http://localhost:8080/api/v1/project",
            requestOptions,
        );
        const json = (await res.json()) as Project;
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
}





