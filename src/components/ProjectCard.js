import { useState } from "react";
import ProjectFolder from "./ProjectFolder";


function ProjectCard(props){
    console.log(props.data)
    const project = props.data
    const [display, setDisplay] = useState(project.description)
    // project.description
    // project.summary
    // project.links


    
    return <div className="projectCard" >
        <h1>{project.projectTitle}</h1>
        <div className="projectImage">
            <img src={project.projectImage} alt={`Screenshot of the application homepage for ${project.projectTitle}`} />
        </div>
        <div className="skillList">
            <p>{project.skillList.join(', ')}</p>
        </div>
        <ProjectFolder description={project.description} summary={project.summary} links={project.links} />
    </div>
}

export default ProjectCard;