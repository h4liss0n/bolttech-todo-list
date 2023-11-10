export interface Project extends ProjectBase {
    id: string;
}

export interface ProjectBase {
    name: string;
}

export interface ProjectCard {
    id: string;
    name: string;
    tasks: ProjectCardTask[];
    users: ProjectCardUser[];
}

export interface ProjectCardTask {
    id: string;
    description: string;
    done: boolean;
}

export interface ProjectCardUser {
    id: number;
    name: string;
}



