import { useLoaderData } from "react-router-dom";


function Projects(props) {
  const projects = useLoaderData()

    return (
      <div className="project">
        {projects.map((project) => (
          <div className="project-list">
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name}/>
            <div className="project-buttons">
              <a href={project.git}>
                <button>Github</button>
              </a>
              <a href={project.live}>
                <button>live site</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Projects;