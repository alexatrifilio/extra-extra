import { useState } from "react";
import { projectsApi } from "../../api/projects";
import { ProjectPayload } from "../../types";

const useProject = () => {

    const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [extraAmount, setExtraAmount] = useState(0);
    const [stage, setStage] = useState('');

    const loadName = (n: string) => {
        setName(n)
    }

    const loadDirector = (d: string) => {
        setDirector(d)
    }

    const loadAmount = (a: number) => {
        setExtraAmount(a)
    }

    const loadStage = (s: string) => {
        setStage(s)
    }

    const submitProject = (e: {preventDefault: () => void}) => {
        e.preventDefault();
        const newProject: ProjectPayload = { name, director, extraAmount, stage };

        projectsApi.post(newProject)
    }

    return { loadName,
            loadDirector,
            loadAmount,
            loadStage,
            submitProject
            }
}


export { useProject }