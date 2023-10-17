import ajax from "../img/Ajax_Icon.png"
import arduino from "../img/arduinoIcon.png"
import css from "../img/CSS-img.png"
import ejs from "../img/EJS_Icon.png"
import expressIcon from "../img/expressIcon.png"
import figma from "../img/Figma-img.png"
import git from "../img/Git-img.png"
import github from "../img/Github-img.png"
import homeAutomation from "../img/homeAutomationIcon.png"
import html from "../img/HTML-img.png"
import iot from "../img/iotIcon.png"
import js from "../img/JS-img.png"
import linuxIcon from "../img/linuxIcon.png"
import mongoIcon from "../img/mongoIcon.png"
import mongoose from "../img/mongoose_icon.png"
import nodeIcon from "../img/nodeIcon.png"
import quiz from "../img/Quiz_Wizard.png"
import raspberryPi from "../img/raspberryPiIcon.png"
import reactImg from "../img/reactIcon.png"
import rest from "../img/restAPIICon.png"
import robotics from "../img/roboticsIcon.png"
import rpg from "../img/rpgThumbnail.png"
import sassImg from "../img/Sass-img.png"
import tracker from "../img/My_Job_Tracker.png"
import typescriptIcon from "../img/typescriptIcon.png"
import wiki from "../img/Harry_Potter_Wiki.png"
import placeholder from "../img/placeholder.png"


export function imageProvider(name){
    switch(name){
        case "AJAX":
            return ajax;
        case "ARDUINO":
            return arduino;
        case "CSS":
            return css;
        case "EJS":
            return ejs;
        case "EXPRESS":
            return expressIcon;
        case "FIGMA":
            return figma;
        case "GIT":
            return git;
        case "GITHUB":
            return github;
        case "HOME AUTOMATION":
            return homeAutomation;
        case "HTML":
            return html;
        case "IoT":
            return iot;
        case "JAVASCRIPT":
            return js;
        case "LINUX":
            return linuxIcon;
        case "MONGO-DB":
            return mongoIcon;
        case "MONGOOSE":
            return mongoose;
        case "NODE-JS":
            return nodeIcon;
        case "QUIZ":
            return quiz;
        case "RASPBERRY PI":
            return raspberryPi;
        case "REACT":
            return reactImg;
        case "REST API":
            return rest;
        case "ROBOTICS":
            return robotics;
        case "RPG":
            return rpg
        case "SASS":
            return sassImg;
        case "TRACKER":
            return tracker;
        case "TYPESCRIPT":
            return typescriptIcon;
        case "WIKI":
            return wiki;
        default:
            return placeholder;
    }

}