/* 

AJAX - <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />

Bootstrap <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />

CSS <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />

EJS 
ExpressJS <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />

Git
HTML
JavaScript
jQuery
ReactJS
Mongoose
MongoDB
Scrum
Trello
*/

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
                <div className="projectArea">
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    </div>
}

export default ProjectCard;