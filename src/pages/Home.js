import projects from "../utils/projects.json"
import about from "../utils/about.json"
import skills from "../utils/skills.json"
import experience from "../utils/experience.json"
import IconComponent from "../components/IconComponent"
import ProjectCard from "../components/ProjectCard"
import ExperienceCard from "../components/ExperienceCard"

export default function Home(props){
    return(
        <main className="container" >
            <section className="about animate__animated animate__fadeIn" >
                
                {about.bio2.map((sentence) => <p>{sentence}</p>)}
                <div id="skills"></div>
            </section>
        
            <section className="skills" >
                <h2>Technical Skills</h2>
                <div className="skill-container">
                    <span className="UI-section">
                        <h3>BACKEND</h3>
                        <div className='UI-list'>
                        {skills.backend.map((skill) => <IconComponent src={skill}/>)}
                        </div>
                    </span>

                    <span className="Frontend-section">
                        <h3>FRONTEND</h3>
                        <div className='Frontend-list'>
                        {skills.frontend.map((skill) => <IconComponent src={skill}/>)}
                          
                        </div>
                    </span>

                    <span className="other-section">
                        <h3>INTERESTS</h3>
                        <div className='Interests-list'>
                        {skills.interests.map((skill) => <IconComponent src={skill}/>)}
                        </div>
                    </span>
                    <div id="project"></div>
                </div>
            </section>

            <section className="project" >
                <h2>Projects</h2>
                <div className="project-container">
                    {projects.map((project) => <ProjectCard {...project} />)}
                    <div id="experience"></div>
                </div>
                
            </section>  
            <section className="experience" >
                <h2>Experience</h2>
                <div className="experience-container">
                    {experience.map((job) => <ExperienceCard {...job} />)}
                </div>
            </section>  
        </main>

    )
}





