
import ProjectFolder from "./ProjectFolder";


function ProjectCard(props){
    const project = props.data
    return <div className="projectCard" >
        <h1>{project.projectTitle}</h1>
        <div className="projectImage">
            <img src={project.projectImage} alt={`Screenshot of the application homepage for ${project.projectTitle}`} />
        </div>
        <div className="skillList">
            <p>{project.skillList.join(', ')}</p>
        </div>
        <ProjectFolder description={project.description} summary={project.summary} links={project.links} id={project._id}/>
    </div>
}

export default ProjectCard;