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
                <img src={ProfilePicture} alt="Me in a navy blue shirt and a silver tie" className="profile-img"/>
            </div>
            <nav className="nav">
                <section className="animate__animated animate__fadeInDown">    
                    <h1 className="myname">Brandon Haupt</h1>
                    <p className="whoIAm">Designer | Developer</p>
                </section>

                <Link className="toggleHidden" to="">
                     <div>HOME</div>
                </Link> 

                <Link  className="toggleHidden" to="#skills">
                    <div>ABOUT</div>
                </Link>

                <Link  className="toggleHidden" to="#project">
                    <div>PROJECTS</div>
                </Link>

                <Link  className="toggleHidden" to="#project">
                    <div>CONTACT</div>
                </Link>
            </nav>
        </header>
    )

}


// Waits for the document to load
window.addEventListener('load', () => {
    // then runs this function which looks at the document to find the .nav class
    const onScroll = () => {
        const nav = document.querySelector('.nav')
        // finds the position of the page
        const scrollPosition = window.pageYOffset
        //then if the scrollPosition is > 230(px?) then it toggles the class
        nav.classList.toggle("scroll-down", scrollPosition > 230)
        // console.log(scrollPosition)
    }
   
    document.addEventListener('scroll', onScroll)
})
