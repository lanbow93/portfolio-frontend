
import ProjectFolder from "./ProjectFolder";
import SkillIcon from "./SkillIcon";

function ProjectCard(props){
    const project = props.data
    return <div className="projectCard" >
        <h2>{project.projectTitle}</h2>
        <div className="projectImage">
            <img src={project.projectImage} alt={`Screenshot of the application homepage for ${project.projectTitle}`} />
        </div>
        <div className="skillList">
            {project.skillList.map(skill => <SkillIcon tag={skill} />)}
        </div>
        <ProjectFolder description={project.description} summary={project.summary} links={project.links} id={project._id}/>
    </div>
}

export default ProjectCard;