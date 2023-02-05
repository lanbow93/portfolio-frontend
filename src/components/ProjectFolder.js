import { useState } from "react";

function ProjectFolder(props){

    const [display, setDisplay] = useState(<div className="description"><p>{props.description}</p></div>);

    const [status, setStatus] = useState();

    const updateSection = (event) => {
        const selection = event.target.value
        if(selection === "description") {
            setDisplay(<div className="description"><p>{props.description}</p></div>)
        } else if (selection === "summary") {
            setDisplay(<ul>{props.summary.map(element => <li>{element}</li>)}</ul>)
        } else {
            setDisplay(<div className="description"><p></p></div>)
        }
    }


    return <div className="projectFolder">
        <div className="tiles">
            <button onClick={updateSection} value="description" >Summary</button>
            <button onClick={updateSection} value="summary" >Description</button>
            <button onClick={updateSection} value="links" >Links</button>
        </div>
        <div className="component">
            <div className="projectArea">
                {display}
            </div>
        </div>
    </div>
}

export default ProjectFolder;