import { imageProvider } from "../utils/imageProvider";

function ProjectCard(props) {

    return (
      <div className="card-container">
      <article className="card">
        <div className="card__inner">
          <div className="card__body card__body--front">
              <h3>{props.name}</h3>
              <img src={imageProvider(props.image)} alt={props.name}/>
          </div>
  
          <div className="card__body card__body--back">
              <div className="card__title">
                <ul className="projectDetails">
                  {props.projectDetails.map((sentence) => <li>- {sentence}</li>)}
                </ul>
                  <p className="langUsed"><strong>Languages used:</strong> {props.languagesUsed}</p>
                  <div className="project-buttons">
                      <a href={props.frontend} target="_blank" rel="noopener noreferrer">
                          <button>Frontend</button>
                      </a>
                      {props.backend ? <a href={props.backend} target="_blank" rel="noopener noreferrer"><button>Backend</button></a> : ""}
                      <a href={props.live} target="_blank" rel="noopener noreferrer">
                          <button>Live Site</button>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </article>
 </div>
    )
}

export default ProjectCard;