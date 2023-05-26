function Footer(props) {
    
    return <div className="footer">

                <div className="iconArea">
                <div className="contact">
                <h3>Contact Me!</h3>
                <p>LanceBowersJr1434@gmail.com</p>
                </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/lanbow/" target="_blank" rel="noreferrer">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg" alt="LinkedIn Icon that links to LinkedIn profile" />
                        </a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/lanbow93" target="_blank" rel="noreferrer">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="Github Icon that links to Github profile" width="90rem"/>
                        </a>
                    </div>
                </div>
    </div>
}

export default Footer