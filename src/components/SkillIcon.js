

function SkillIcon(props) {
    console.log(props.tag)
    switch(props.tag){
        case "AJAX":
            return <img className="skillIconAjax" src="https://static.wixstatic.com/media/8ee8bf_c6bdde2c6ee84d5ca88b2eb6282bbba3~mv2.png" />
        case "Bootstrap":
            return <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" />
        case "CSS":
            return <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
        case "EJS":
            return <img className="skillIconAjax" src="https://static.wixstatic.com/media/8ee8bf_f727f0135173425c84e89d77d638c940~mv2.png" />
        case "ExpressJS":
            return <img className="skillIconAjax" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
        case "Git":
            return <img className="skillIconAjax" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
        case "HTML":
            return <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
        case "JavaScript":
            return <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        case "jQuery":
            return <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" />
        case "MongoDB":
            return <img className="skillIconMongo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
        case "Mongoose":
            return <img className="skillIconMongoose" src="https://static.wixstatic.com/media/8ee8bf_1ef5a049e94e4202b9f4a161fb2427f3~mv2.png" />
        case "ReactJS": 
            return <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        case "Scrum":
            return <img className="skillIconScrum" src="https://static.wixstatic.com/media/8ee8bf_837eba9587cc49d1a3c5619880e457f9~mv2.jpg" />
        case "Trello":
            return <img className="skillIconAjax" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg" />
        default:
            return <img className="skillIcon" src="https://w7.pngwing.com/pngs/721/358/png-transparent-black-and-blue-laptop-computer-illustration-computer-programming-programmer-icon-design-software-developer-icon-coder-blue-web-design-text.png" />
    }
}

export default SkillIcon;