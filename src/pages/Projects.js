import { useLoaderData } from "react-router-dom";

function Projects(props) {
    const projects = useLoaderData()
    console.log(projects)
    return <div className="projects">
        <h1>Project Page Connected</h1>
    </div>
};

export default Projects;