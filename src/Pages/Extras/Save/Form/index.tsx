import { FC} from "react";
import { useExtra } from "../../../../hooks/useExtra";


const Form:FC = () => {


    const { loadName,loadLastName, loadAge, loadImg, loadProject, loadNotSelected, loadEvaluating, loadSelected, submitExtra } = useExtra()

    return(
        <form action="submit" onSubmit={submitExtra}>
            <div className="input-group">
                <label htmlFor="name-extra"> Nombre </label>
                <input 
                    type="text" 
                    name="name" 
                    id="name-extra"
                    onChange={e => loadName(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="last-name-extra"> Apellido </label>
                <input 
                    type="text" 
                    name="last-name" 
                    id="last-name-extra"
                    onChange={e => loadLastName(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="age-extra"> Edad </label>
                <input 
                    type="number" 
                    name="age" 
                    id="age-extra"
                    onChange={e => loadAge(e.target.valueAsNumber)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="img-extra"> Cargar foto </label>
                <input 
                    type="url" 
                    name="img" 
                    id="img-extra"
                    onChange={e => loadImg(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="project"> Proyecto </label>
                <input 
                    type="text" 
                    name="project" 
                    id="project"
                    onChange={e => loadProject(e.target.value)}
                />
            </div>
            <div className="option-container">
                <div className="radio-group">
                    <label htmlFor="selected-extra"> Convocadx </label>
                    <input 
                        type="radio" 
                        name="selection" 
                        id="selected-extra"
                        onChange={e => loadSelected(e.target.checked)}
                    />
                </div>
                <div className="radio-group">
                    <label htmlFor="evaluating-extra"> En evaluación </label>
                    <input 
                        type="radio" 
                        name="selection" 
                        id="evaluating-extra"
                        onChange={e => loadEvaluating(e.target.checked)}
                    />
                </div>
                <div className="radio-group">
                    <label htmlFor="rejected-extra"> No Convocadx </label>
                    <input 
                        type="radio" 
                        name="selection" 
                        id="rejected-extra"
                        onChange={e => loadNotSelected(e.target.checked)}
                    />
                </div>
            </div>
            <button type="submit"> Agregar </button>
        </form>
    )
}

export { Form as SaveExtraForm}