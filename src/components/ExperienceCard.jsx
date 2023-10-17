function ExperienceCard(props){
    console.log(props)
    return (
        <div className="card-container">
        <article className="card">
          <div className="card__inner">
            <div className="card__body card__body--front">
                <h1>{props.jobTitle}</h1>
                <h4>{props.company}</h4>
                <h4>{props.location}</h4>
                <h4>{props.dates}</h4>
            </div>
    
            <div className="card__body card__body--back">
                <div className="card__title">
                  <ul className="experienceDetails">
                    {props.description.map((sentence) => <li>- {sentence}</li>)}
                  </ul>
                </div>
            </div>
        </div>
    </article>
   </div>
      )
}

export default ExperienceCard