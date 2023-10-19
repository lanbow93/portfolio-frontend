import ejs from "../img/ejsIcon.png"
import homeAutomation from "../img/homeAutomationIcon.png"
import iot from "../img/iotIcon.png"
import mongoose from "../img/mongoose_icon.png"
import quiz from "../img/Quiz_Wizard.png"
import rest from "../img/restAPIIcon.png"
import robotics from "../img/roboticsIcon.png"
import rpg from "../img/rpgThumbnail.png"
import tracker from "../img/My_Job_Tracker.png"
import wiki from "../img/Harry_Potter_Wiki.png"


export function imageProvider(name){
    switch(name){
        case "ARDUINO":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg";
        case "BOOTSTRAP":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg";
        case "CSS":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
        case "EJS":
            return ejs;
        case "EXPRESS":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg";
        case "FIGMA":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg";
        case "GIT":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg";
        case "GITHUB":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
        case "HOME AUTOMATION":
            return homeAutomation;
        case "HTML":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
        case "IoT":
            return iot;
        case "JAVASCRIPT":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
        case "JQUERY":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg";
        case "LINUX":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg";
        case "MONGO-DB":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg";
        case "MONGOOSE":
            return mongoose;
        case "NODE-JS":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
        case "QUIZ":
            return quiz;
        case "RASPBERRY PI":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg";
        case "REACT":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
        case "REST API":
            return rest;
        case "ROBOTICS":
            return robotics;
        case "RPG":
            return rpg
        case "SASS":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg";
        case "TRACKER":
            return tracker;
        case "TYPESCRIPT":
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg";
        case "WIKI":
            return wiki;
        default:
            return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
    }

}