import { Login, LoginResult } from "../model/LoginModel";


export class LoginServiceApi {

    static async login(user: Login): Promise<LoginResult> {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        };
        const res = await fetch(
            "http://localhost:8080/api/v1/login",
            requestOptions,
        );
        const json = (await res.json()) as LoginResult
        return json;
    }
}





