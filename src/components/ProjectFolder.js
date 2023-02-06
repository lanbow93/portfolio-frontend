import { useState } from "react";

function ProjectFolder(props){
    const [display, setDisplay] = useState(<div className="description"><p>{props.description}</p></div>);
    const [selected, setSelected] = useState("description")
    const updateSection = (event) => {        
        const selection = event.target.value
        if(selection === "description") {
            setDisplay(<div className="description"><p>{props.description}</p></div>)
            setSelected("description")
        } else if (selection === "summary") {
            setDisplay(<ul>{props.summary.map(element => <li>{element}</li>)}</ul>)
            setSelected("summary")
        } else {
            setDisplay(<div className="links">
                    <p></p>
                    <a href={props.links?.frontend}><button>{(props.links?.frontend) ? "Frontend" : ""}</button></a>
                    <a href={props.links?.backend}><button>{(props.links?.frontend) ? "Backend" : ""}</button></a>
                    <a href={props.links?.live}><button>{(props.links?.live) ? "Live" : ""}</button></a>

                </div>)
            setSelected("links")
        }
    }


    return <div className="projectFolder">
        <div className="tiles">
            <button onClick={updateSection} className={(selected === "description")? "selected" : ""} value="description" >Summary</button>
            <button onClick={updateSection} className={(selected === "summary")? "selected" : ""} value="summary" >Description</button>
            <button onClick={updateSection} className={(selected === "links")? "selected" : ""} value="links" >Links</button>
        </div>
        <div className="component">
            <div className="projectArea">
                {display}
            </div>
        </div>
    </div>
}

export default ProjectFolder;