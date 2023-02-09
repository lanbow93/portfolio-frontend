import { Link } from "react-router-dom";
import ProfilePicture from "./img/Profile-picture.png"

export default function Header(props){

    return(
        <header>
             <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F64.media.tumblr.com%2Fa39911173ad8fd36f451961c23f504b9%2Ftumblr_of1p3313Al1rldv4go1_1280.gif&f=1&nofb=1&ipt=0bee84832b687b114a5f8b5ee78be70e11c5e37c102491eca4779bafc28e9239&ipo=images" alt="profile" className="header-img"/>

            <div className="profile-image-circle">
                <img src={ProfilePicture} alt="profile" className="profile-img"/>
            </div>
            <nav className="nav">
                <section className="animate__animated animate__fadeInDown">    
                    <p className="myname">Brandon Haupt</p>
                    <p className="whoIAm">Designer | Developer</p>
                </section>
                {/* <Link to="/">
                     <div>HOME</div>
                </Link> */}

                {/* <Link to="/about">
                    <div>ABOUT</div>
                </Link>

                <Link to="/projects">
                    <div>PROJECTS</div>
                </Link> */}
            </nav>
        </header>
    )

}

