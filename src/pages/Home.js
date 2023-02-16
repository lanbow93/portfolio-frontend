import projects from "./json/projects.json"
import about from "./json/about.json"
// import Footer from '../components/Footer'
import figmaImg from '../components/img/Figma-img.png'
import WireframeImg from '../components/img/Wireframe-img.png'
import PhotoshopImg from '../components/img/Photoshop-img.png'
import AdobeCCImg from '../components/img/AdobeCC-img.png'
import HTMLImg from '../components/img/HTML-img.png'
import CSSImg from '../components/img/CSS-img.png'
import SASSImg from '../components/img/Sass-img.png'
import JSImg from '../components/img/JS-img.png'
import ReactImg from '../components/img/React-img.png'
import MaterialUI from '../components/img/MaterialUI-img.png'
import Everquest from '../components/img/Everquest-img.png'
import Minecraft from '../components/img/Minecraft-img.png'
import DnD from '../components/img/D&D-img.png'
import Blacksmithing from '../components/img/Blacksmithing-img.png'

export default function Home(props){
    return(
        <main className="container">
            <section className="about animate__animated animate__fadeIn">
                {/* <h2>{about.name}</h2>
                <h3>{about.email}</h3> */}
                <p>{about.bio}</p>
            </section>

            <section className="skills">
                <h2>Technical Skills</h2>
                <div className="skill-container">
                    <span className="UI-section">
                        <h3>UX/UI DESIGN</h3>
                        <div className='UI-list'>
                            {/* FIGMA */}
                            <div className='List-img'>
                                <img src={figmaImg} alt='Figma'></img>
                                <p>FIGMA</p>
                            </div>

                            {/* WIREFRAME */}
                            <div className='List-img'>
                                <img src={WireframeImg} alt='Wireframe'></img>
                                <p>WIREFRAME</p>
                            </div>

                            {/* PHOTOSHOP */}
                            <div className='List-img'>
                                <img src={PhotoshopImg} alt='Photoshop'></img>
                                <p>PHOTOSHOP</p>
                            </div>

                            {/* ADOBE CC */}
                            <div className='List-img'>
                                <img src={AdobeCCImg} alt='AdobeCC'></img>
                                <p>ADOBE CC</p>
                            </div>  
                        </div>
                    </span>

                    <span className="Frontend-section">
                        <h3>FRONTEND</h3>
                        <div className='Frontend-list'>
                            {/* HTML */}
                            <div className='List-img'>
                                <img src={HTMLImg} alt='HTML'></img>
                                <p>HTML</p>
                            </div>

                            {/* CSS */}
                            <div className='List-img'>
                                <img src={CSSImg} alt='CSS'></img>
                                <p>CSS</p>
                            </div>

                            {/* SASS */}
                            <div className='List-img'>
                                <img src={SASSImg} alt='SASS'></img>
                                <p>SASS</p> 
                            </div> 

                            {/* JS */}
                            <div className='List-img'>
                                <img src={JSImg} alt='JS'></img>
                                <p>JS</p>
                            </div>

                            {/* REACT */}
                            <div className='List-img'>
                                <img src={ReactImg} alt='REACT'></img>
                                <p>REACT</p>
                            </div>

                            {/* MATERIAL UI */}
                            <div className='List-img'>
                                <img src={MaterialUI} alt='MATERIAL UI'></img>
                                <p>MATERIAL UI</p>
                            </div>
                        </div>
                    </span>

                    <span className="other-section">
                        <h3>INTERESTS</h3>
                        <div className='Interests-list'>
                            {/* SASS */}
                            <div className='List-img'>
                                <img src={DnD} alt='D&D'></img> 
                                <p>D&D</p>
                            </div> 

                            {/* SASS */}
                            <div className='List-img'>
                                <img src={Everquest} alt='Everquest'></img> 
                                <p>EVERQUEST</p>
                            </div> 

                            {/* SASS */}
                            <div className='List-img'>
                                <img src={Minecraft} alt='Minecraft'></img> 
                                <p>MINECRAFT</p>
                            </div> 

                            {/* SASS */}
                            <div className='List-img'>
                                <img src={Blacksmithing} alt='Blacksmithing'></img> 
                                <p>BLACKSMITHING</p>
                            </div> 
                        </div>
                    </span>
                </div>
            </section>

            <section className="project">
                <h2>Projects</h2>
                <div className="project-container">
                    {projects.map((project) => (
                        <div className="project-list" id={project.projectid}>
                            <h3>{project.name}</h3>
                            {/* <span></span> */}
                            <img src={project.image} alt={project.name}/>
                            <p className="langUsed">{project.languagesUsed}</p>
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
                </div>
            </section>  
        </main>

    )
}