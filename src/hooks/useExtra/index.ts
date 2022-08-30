import { useState } from "react";
import { extrasApi } from "../../api/extras";
import { ExtraPayload } from "../../types";

const useExtra = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [img, setImg] = useState('');
    const [project, setProject] = useState('');
    const [selected, setSelected] = useState(false);
    const [evaluating, setEvaluating] = useState(false);
    const [notSelected, setNotSelected] = useState(false);

    const loadName = (name: string) => {
        setName(name)
    }

    const loadLastName = (lastName: string) => {
        setLastName(lastName)
    }
    const loadAge = (age: number) => {
        setAge(age)
    }

    const loadImg = (img: string) => {
        setImg(img)
    }

    const loadProject = (project: string) => {
        setProject(project)
    }

    const loadSelected = (sel: boolean) => {
        setSelected(sel)
    }

    const loadEvaluating = (ev: boolean) => {
        setEvaluating(ev)
    }

    const loadNotSelected = (not: boolean) => {
        setNotSelected(not)
    }

    const submitExtra = (e: {preventDefault: () => void}) => {
        e.preventDefault();

        const extra: ExtraPayload = {name, lastName, age, img, project, selected, evaluating, notSelected}

        extrasApi.post(extra)
    }


    return { submitExtra, 
                loadName, 
                loadLastName, 
                loadAge, 
                loadImg, 
                loadProject, 
                loadSelected, 
                loadEvaluating, 
                loadNotSelected 
            }
}

export { useExtra }