import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";
import iconhtml from "../assets/html.png";
import iconcss from "../assets/css.png";
import iconjs from "../assets/js.png";
import iconnode from "../assets/node.png";
import iconreact from "../assets/react.png";
import iconredux from "../assets/redux.png";
import iconpostgreSQL from "../assets/postgreSQL.png";
import iconsequelize from "../assets/sequelize.png";
import icongithub from "../assets/github.png";
import iconscrum from "../assets/scrum.png";
import iconfigma from "../assets/figma.png";
import icontrello from "../assets/trello.png";
import s from "./Tecnologias.module.css";

const Tecnologias = () => {
  const { darkMode } = useContext(DarkModeContext);

  const icons = [
    {
      image: iconhtml,
      alt: "icohtml",
      text: "HTML",
      link: "https://developer.mozilla.org/es/docs/Web/HTML",
      target: "_blank",
    },
    {
      image: iconcss,
      alt: "icocss",
      text: "CSS",
      link: "https://www.w3schools.com/css/",
      target: "_blank",
    },
    {
      image: iconjs,
      alt: "icojs",
      text: "JavaScript",
      link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      target: "_blank",
    },
    {
      image: iconnode,
      alt: "iconode",
      text: "Node JS",
      link: "https://nodejs.org/es",
      target: "_blank",
    },
    {
      image: iconreact,
      alt: "icoreact",
      text: "React",
      link: "https://es.react.dev/",
      target: "_blank",
    },
    {
      image: iconredux,
      alt: "icoredux",
      text: "Redux",
      link: "https://es.redux.js.org/",
      target: "_blank",
    },
    {
      image: iconpostgreSQL,
      alt: "icopostgreSQL",
      text: "PostgreSQL",
      link: "https://www.postgresql.org/",
      target: "_blank",
    },
    {
      image: iconsequelize,
      alt: "icosequelize",
      text: "Sequelize",
      link: "https://sequelize.org/",
      target: "_blank",
    },
    {
      image: icongithub,
      alt: "icogithub",
      text: "GitHub",
      link: "https://github.com/",
      target: "_blank",
    },
    {
      image: iconscrum,
      alt: "icoscrum",
      text: "SCRUM",
      link: "https://www.scrum.org/resources/blog/que-es-scrum",
      target: "_blank",
    },
    {
      image: iconfigma,
      alt: "icofigma",
      text: "Figma",
      link: "https://www.figma.com/",
      target: "_blank",
    },
    {
      image: icontrello,
      alt: "icotrello",
      text: "Trello",
      link: "https://trello.com/",
      target: "_blank",
    },
  ];

  return (
    <main>
      <div className={`${s.container} ${darkMode ? s.dark_mode : ""}`}>
        <section>
          <div className={s.technologies__container}>
            <header>
              <div className={s.technologies__title__container}>
                <p className={s.technologies__title}>Tecnologias</p>
              </div>
            </header>
            <figure>
              <div className={s.technologies__icons__container}>
                {icons.map((icon, index) => (
                  <div className={s.technologies__icon__container} key={index}>
                    <a href={icon.link} target={icon.target}>
                      <img
                        className={s.technologies__icon}
                        src={icon.image}
                        alt={icon.alt}
                      />
                    </a>
                    <p className={s.technologies__text}>{icon.text}</p>
                  </div>
                ))}
              </div>
            </figure>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Tecnologias;
