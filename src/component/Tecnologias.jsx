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
  const icons = [
    { image: iconhtml, alt: "icohtml", text: "HTML" },
    { image: iconcss, alt: "icocss", text: "CSS" },
    { image: iconjs, alt: "icojs", text: "JavaScript" },
    { image: iconnode, alt: "iconode", text: "Node JS" },
    { image: iconreact, alt: "icoreact", text: "React" },
    { image: iconredux, alt: "icoredux", text: "Redux" },
    { image: iconpostgreSQL, alt: "icopostgreSQL", text: "PostgreSQL" },
    { image: iconsequelize, alt: "icosequelize", text: "Sequelize" },
    { image: icongithub, alt: "icogithub", text: "GitHub" },
    { image: iconscrum, alt: "icoscrum", text: "SCRUM" },
    { image: iconfigma, alt: "icofigma", text: "Figma" },
    { image: icontrello, alt: "icotrello", text: "Trello" },
  ];
  return (
    <main>
      <div className={s.container}>
        <section>
          <div className={s.technologies__container}>
            <header>
              <div className={s.technologies__title__container}>
                <p id="tecnologias" className={s.technologies__title}>
                  Tecnologias
                </p>
              </div>
            </header>
            <figure>
              <div className={s.technologies__icons__container}>
                {icons.map((icon, index) => (
                  <div className={s.technologies__icon__container} key={index}>
                    <img
                      className={s.technologies__icon}
                      src={icon.image}
                      alt={icon.alt}
                    />
                    <p>{icon.text}</p>
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
