import { FC, useState } from "react";
import { extrasApi } from "../../../../api/extras";
import { ExtraPayload } from "../../../../types";

const Form:FC = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [img, setImg] = useState('');
    const [project, setProject] = useState('');
    const [selected, setSelected] = useState(false);
    const [evaluating, setEvaluating] = useState(false);
    const [notSelected, setNotSelected] = useState(false);

    const handleSubmit = (e: {preventDefault: () => void}) => {
        e.preventDefault();

        const extra: ExtraPayload = {name, lastName, age, img, project, selected, evaluating, notSelected}

        extrasApi.post(extra)
    }

    return(
        <form action="submit" onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="name-extra"> Nombre </label>
                <input 
                    type="text" 
                    name="name" 
                    id="name-extra"
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="last-name-extra"> Apellido </label>
                <input 
                    type="text" 
                    name="last-name" 
                    id="last-name-extra"
                    onChange={e => setLastName(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="age-extra"> Edad </label>
                <input 
                    type="number" 
                    name="age" 
                    id="age-extra"
                    onChange={e => setAge(e.target.valueAsNumber)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="img-extra"> Cargar foto </label>
                <input 
                    type="url" 
                    name="img" 
                    id="img-extra"
                    onChange={e => setImg(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="project"> Proyecto </label>
                <input 
                    type="text" 
                    name="project" 
                    id="project"
                    onChange={e => setProject(e.target.value)}
                />
            </div>
            <div className="option-container">
                <div className="radio-group">
                    <label htmlFor="selected-extra"> Convocadx </label>
                    <input 
                        type="radio" 
                        name="selection" 
                        id="selected-extra"
                        onChange={e => setSelected(e.target.checked)}
                    />
                </div>
                <div className="radio-group">
                    <label htmlFor="evaluating-extra"> En evaluación </label>
                    <input 
                        type="radio" 
                        name="selection" 
                        id="evaluating-extra"
                        onChange={e => setEvaluating(e.target.checked)}
                    />
                </div>
                <div className="radio-group">
                    <label htmlFor="rejected-extra"> No Convocadx </label>
                    <input 
                        type="radio" 
                        name="selection" 
                        id="rejected-extra"
                        onChange={e => setNotSelected(e.target.checked)}
                    />
                </div>
            </div>
            <button type="submit"> Agregar </button>
        </form>
    )
}

export { Form as SaveExtraForm}