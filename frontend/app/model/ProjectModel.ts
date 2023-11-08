export interface Project extends ProjectBase {
    id: number;
}

export interface ProjectBase {
    name: string;
}

export interface ProjectCard {
    id: number;
    name: string;
    tasks: ProjectCardTask[];
    users: ProjectCardUser[];
}

export interface ProjectCardTask {
    id: number;
    description: string;
    done: boolean;
}

export interface ProjectCardUser {
    id: number;
    name: string;
}



const projectCard1: ProjectCard = {
    id: 1,
    name: 'Project 1',
    tasks: [
        {
            id: 100,
            description: 'Task 1',
            done: false,
        },
        {
            id: 101,
            description: 'Task 2',
            done: true,
        },
    ],
    users: [
        {
            id: 1,
            name: 'User 1',
        },
        {
            id: 2,
            name: 'User 2',
        },
    ],
};

const projectCard2: ProjectCard = {
    id: 2,
    name: 'Project 2',
    tasks: [
        {
            id: 200,
            description: 'Task 3',
            done: false,
        },
        {
            id: 201,
            description: 'Task 4',
            done: true,
        },
    ],
    users: [
        {
            id: 3,
            name: 'User 3',
        },
        {
            id: 4,
            name: 'User 4',
        },
    ],
};

const projectCard3: ProjectCard = {
    id: 3,
    name: 'Project 3',
    tasks: [
        {
            id: 300,
            description: 'Task 5',
            done: false,
        },
        {
            id: 301,
            description: 'Task 6',
            done: true,
        },
    ],
    users: [
        {
            id: 5,
            name: 'User 5',
        },
        {
            id: 6,
            name: 'User 6',
        },
    ],
};

const projectCard4: ProjectCard = {
    id: 4,
    name: 'Project 4',
    tasks: [
        {
            id: 400,
            description: 'Task 7',
            done: false,
        },
        {
            id: 401,
            description: 'Task 8',
            done: true,
        },
    ],
    users: [
        {
            id: 7,
            name: 'User 7',
        },
        {
            id: 8,
            name: 'User 8',
        },
    ],
};

export const projectCards: ProjectCard[] = [projectCard1, projectCard2, projectCard3, projectCard4];