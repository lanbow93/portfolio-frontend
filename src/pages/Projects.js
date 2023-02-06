import { useLoaderData } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
function Projects(props) {
    const projects = useLoaderData()
    return <div className="projects">
        <h1>My Projects</h1>
        {projects.map(project => <ProjectCard data={project} key={project._id}/>)}
    </div>
};
export default Projects;