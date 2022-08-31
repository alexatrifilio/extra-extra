export type Extra = {
    id: string,
    name: string,
    lastName: string,
    age: number,
    img: string,
    project: string,
    selected: boolean,
    evaluating: boolean,
    notSelected: boolean,
}

export type ExtraPayload = Omit <Extra, 'id'>

export type Project = {
    id: string,
    name: string,
    director: string,
    extraAmount: number,
    stage: string
}

export type ProjectPayload = Omit <Project, 'id'>

export type User = {
    id: string,
    name: string;
    email: string;
}

export type UserPayload = Omit<User, "id"> & { pass: string };