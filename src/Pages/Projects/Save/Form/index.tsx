import { useProject } from "../../../../hooks/useProject"



const Form = () => {

    const {loadName, loadDirector, loadAmount, loadStage, submitProject} = useProject()

    return(
        <form action="submit" onSubmit={submitProject}>
            <div className="input-group">
                <label htmlFor="name-project"> Proyecto </label>
                <input 
                    type="text" 
                    name="project" 
                    id="name-project"
                    onChange={e => loadName(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="director"> Dirigido por </label>
                <input 
                    type="text" 
                    name="director" 
                    id="director"
                    onChange={e => loadDirector(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="amount-extras"> Cantidad de extras </label>
                <input 
                    type="number" 
                    name="amount" 
                    id="amount-extras"
                    onChange={e => loadAmount(e.target.valueAsNumber)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="project-stage"> Etapa del proyecto</label>
                <select name="project-stage" id="project-stage" onChange={e => loadStage(e.target.value)}>
                    <option value="pre-production"> Pre-producción</option>
                    <option value="production"> En producción</option>
                    <option value="post-production"> Post-producción </option>
                </select>
            </div>
            <button type="submit"> Agregar </button>
        </form>
    )
}

export { Form as ProjectForm }