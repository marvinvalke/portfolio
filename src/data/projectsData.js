import project1 from "../assets/img/project-1.png";
import project2 from "../assets/img/project-2.png";
import project3 from "../assets/img/project-3.png";
import project4 from "../assets/img/project-4.png";
import project5 from "../assets/img/project-5.png";

export const projectsData = [
  {
    id: 1,
    title: "Chasing Manish",
    date: "Octobre 2021",
    languages: ["HTML", "CSS", "JavaScript"],
    infos:
      "Web game made only with HTML CSS and JavaScript using canvas and DOM manipulation. The game is really hard on purpose, please don't hate me.",
    img: project1,
    link: "https://marvinvalke.github.io/chasing-manish/",
  },
  {
    id: 2,
    title: "WoD[i] WoD-Picker",
    date: "November 2021",
    languages: ["Handlebars", "MongoDB", "Express", "Node"],
    infos:
      "Web application for crossfit. CRUD operations and authentification using Node Express and MongoDB. API calls with Axios and front-end development made with Handlebars.",
    img: project2,
    link: "https://wodi-wodpicker.herokuapp.com/",
  },
  {
    id: 3,
    title: "Hal_O World",
    date: "December 2021",
    languages: ["MongoDB", "Express", "React", "Node"],
    infos:
      "Full stack application made with React. This application uses the Nasa API with Axios. You can even see the APOD of your birthday.",
    img: project3,
    link: "https://hal-o-world.herokuapp.com/",
  },
  {
    id: 4,
    title: "Smoovies",
    date: "January 2022",
    languages: ["React", "Axios", "Sass"],
    infos:
      "Moovies and TV shows database using IMDb's API. Search, random and ranking and displays features. So just Smoovies and chill.",
    img: project4,
    link: "https://smoovies.netlify.app",
  },
  {
    id: 5,
    title: "Coup 2 Pression",
    date: "January 2022",
    languages: ["Vue", "Axios", "Sass"],
    infos:
      "E-commerce application for beers lovers. Cart transition animated with Sass and front-end made with VueJS",
    img: project5,
    link: "https://coup2pression.netlify.app/",
  },
];
