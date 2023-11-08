import { Project, ProjectBase } from "../model/ProjectModel";
import { UserBase } from "../model/UserModel";

export class UserServiceApi {

    static async create(user: UserBase): Promise<Project> {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        };
        const res = await fetch(
            "http://localhost:8080/api/v1/user",
            requestOptions,
        );
        const json = (await res.json()) as Project;
        return json;
    }
}





