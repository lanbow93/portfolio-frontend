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
                    <a href={props.links?.frontend} className={(props.links.frontend)? "" : "houdini"} target="_blank" rel="noopener noreferrer" ><button>Frontend</button></a>
                    <a href={props.links?.backend} className={(props.links.backend)? "" : "houdini"} target="_blank" rel="noopener noreferrer"><button>Backend</button></a>
                    <a href={props.links?.live} target="_blank" rel="noopener noreferrer"><button>Live Site</button></a>
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