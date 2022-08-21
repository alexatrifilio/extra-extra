import { mapToArray } from "../../helpers";
import { ProjectPayload } from "../../types";


const post = async (data: ProjectPayload) => {
    await fetch('https://extra-extra-c25b8-default-rtdb.firebaseio.com/projects.json', {
        method: 'POST',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })

}

const getAll = async () => {
    const get = await fetch('https://extra-extra-c25b8-default-rtdb.firebaseio.com/projects.json');
    const data = await get.json();
    return mapToArray(data)
}

const get = async (id: string) => {
    const get = await fetch(`https://extra-extra-c25b8-default-rtdb.firebaseio.com/projects/${id}.json`);
    const data= await get.json();
    return data
}

const del = async (id: string)=> {
await fetch(`https://extra-extra-c25b8-default-rtdb.firebaseio.com/projects/${id}.json`, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json", }, 
    })
}

const patch = async (id: string, data: ProjectPayload)=> {
await fetch(`https://extra-extra-c25b8-default-rtdb.firebaseio.com/projects/${id}.json`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json", }, 
        body: JSON.stringify(data)
    })
}

export const projectsApi = { post, get, getAll, del, patch }