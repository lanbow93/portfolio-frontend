import projects from "./json/projects.json"
import about from "./json/about.json"

export default function Home(props){
    return(
        <>
            <h1>Home Test</h1>

            <section className="about">
                <h2>{about.name}</h2>
                <h3>{about.email}</h3>
                <p>{about.bio}</p>
            </section>

            <section className="skills">
                <h3>Skills</h3>
            </section>

            <section className="project">
                {projects.map((project) => (
                    <div className="project-list">
                        <h1>{project.name}</h1>
                        <span></span>
                        {/* <img src={project.image} alt={project.name}/> */}
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
            </section>  
        </>
    )
}