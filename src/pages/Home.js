import projects from "./json/projects.json"
import about from "./json/about.json"
// import Footer from '../components/Footer'

export default function Home(props){
    return(
        <main className="container">
            <section className="about animate__animated animate__fadeIn">
                {/* <h2>{about.name}</h2>
                <h3>{about.email}</h3> */}
                <p>{about.bio}</p>
            </section>

            <section className="skills">
                {/* <h3>Skills</h3> */}
                <span className="UI-section">
                    <h3>UX/UI DESIGN</h3>
                    <p>APP DESIGN</p>
                    <p>FIGMA</p>
                    <p>WIREFRAME</p>
                    <p>GOOGLE FONTS</p>
                    <p>LOW/HIGH FIDELITY MOCKUPS</p>
                </span>
                <span className="Frontend-section">
                    <h3>FRONTEND</h3>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>SASS</p>
                    <p>JS</p>
                    <p>REACT</p>
                    <p>NODEJS</p>
                </span>
                <span className="other-section">
                    <h3>OTHER</h3>
                    <p>D&D</p>
                    <p>EVERQUEST</p>
                    <p>MINECRAFT</p>
                    <p>BLACKSMITHING</p>
                </span>
            </section>

            <section className="project">
                {projects.map((project) => (
                    <div className="project-list" id={project.projectid}>
                        <h3>{project.name}</h3>
                        {/* <span></span> */}
                        <img src={project.image} alt={project.name}/>
                        <div className="project-buttons">
                        <a href={project.git}>
                            <button>GitHub</button>
                        </a>
                        <a href={project.live}>
                            <button>Live Site</button>
                        </a>
                        </div>
                    </div>
                ))}
            </section>  
        </main>

    )
}