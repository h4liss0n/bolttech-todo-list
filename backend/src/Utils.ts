import { Request } from "express";

export const getUserId = (request: Request) => {
    return String(request["userId"]);
}