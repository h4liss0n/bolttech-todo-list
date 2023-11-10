export interface TaskModel extends TaskModelBase {
    id: string,
}

export interface TaskModelBase {
    description: string,
    projectId: string
    done: boolean
}


export interface TaskModelPost {
    description: string,
    projectId: string
}