import { useLoaderData } from "react-router-dom"
function Homepage(props) {
    const data = useLoaderData()
    return <div className="homepage">
        <div className="name">
            <h1>Lance Bowers Jr</h1>
        </div>
        
        <div className="intro">
            <div className="headshot">
                <img src={data.headshot} alt="Headshot of developer cropped in a circle"/>
            </div>
            <div className="information">
                <div className="description">
                    <h3>Full-Stack Developer</h3>
                    <p>Building responsive, accessible web applications with Express, JavaScript/TypeScript, and React</p>
                </div>
                <div className="contact">
                    <h3>Contact Me</h3>
                    <p>{data.contact.email}</p>
                </div>
                <div className="iconArea">
                    <div className="linkedin">
                        <a href={data.contact.linkedin} target="_blank" rel="noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg" alt="LinkedIn Icon that links to LinkedIn profile" />
                        </a>
                    </div>
                    <div className="github">
                        <a href={data.contact.github} target="_blank" rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="Github Icon that links to Github profile" width="90rem"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="section bio">
            <h2>About</h2>
            <p>{data.bio[0].split(".")[0]}.</p>
            <br />
            <p>{data.bio[0].split(".")[1]}.</p>
            <br />
            <p>{data.bio[1].split(".")[0]}.</p>
        </div>

    </div>
} 
export default Homepage