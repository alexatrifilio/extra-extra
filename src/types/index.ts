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
    extras: number,
    complete: boolean
}

export type ProjectPayload = Omit <Project, 'id'>