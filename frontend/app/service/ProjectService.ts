import { Project, ProjectBase } from "../model/ProjectModel";

export class ProjectServiceApi {
    static async getAll(): Promise<Project[]> {
        const res = await fetch("http://localhost:8080/api/v1/project");
        const metrics = (await res.json()) as Project[];
        return metrics;
    }

    static async createProject(projectBase: ProjectBase): Promise<Project> {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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
}





