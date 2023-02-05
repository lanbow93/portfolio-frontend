function ProjectCard(props){
    console.log(props.data)
    const project = props.data
    return <div className="projectCard" >
        <h1>{project.projectTitle}</h1>
        <div className="projectImage">
            <img src={project.projectImage} alt={`Screenshot of the application homepage for ${project.projectTitle}`} />
        </div>
        <div className="skillList">
            <p>{project.skillList.join(', ')}</p>
        </div>
        <div className="projectFolder">
            <div className="tiles">
                <button>Description</button>
                <button>Summary</button>
                <button>Links</button>
            </div>
            <div className="component">
                <h1>Will Be component</h1>
            </div>
        </div>
    </div>
}

export default ProjectCard;