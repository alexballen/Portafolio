import fotoPerfil from "../assets/perfil.png";
import icohtml from "../assets/html.png";
import icocss from "../assets/css.png";
import icojs from "../assets/js.png";
import iconode from "../assets/node.png";
import icoreact from "../assets/react.png";
import icoredux from "../assets/redux.png";
import icopostgreSQL from "../assets/postgreSQL.png";
import icosequelize from "../assets/sequelize.png";
import icogithub from "../assets/github.png";
import icoscrum from "../assets/scrum.png";
import icofigma from "../assets/figma.png";
import icotrello from "../assets/trello.png";
import s from "./AcercaDeMi.module.css";

const AcercaDeMi = () => {
  const iconos = [
    { imagen: icohtml, alt: "icohtml", texto: "HTML" },
    { imagen: icocss, alt: "icocss", texto: "CSS" },
    { imagen: icojs, alt: "icojs", texto: "JavaScript" },
    { imagen: iconode, alt: "iconode", texto: "Node JS" },
    { imagen: icoreact, alt: "icoreact", texto: "React" },
    { imagen: icoredux, alt: "icoredux", texto: "Redux" },
    { imagen: icopostgreSQL, alt: "icopostgreSQL", texto: "PostgreSQL" },
    { imagen: icosequelize, alt: "icosequelize", texto: "Sequelize" },
    { imagen: icogithub, alt: "icogithub", texto: "GitHub" },
    { imagen: icoscrum, alt: "icoscrum", texto: "SCRUM" },
    { imagen: icofigma, alt: "icofigma", texto: "Figma" },
    { imagen: icotrello, alt: "icotrello", texto: "Trello" },
  ];

  return (
    <>
      <main>
        <div className={s.container}>
          <header>
            <div className={s.header}>
              <figure>
                <div className={s.header__perfil}>
                  <img
                    id="imagenperfil"
                    className={s.perfil__foto}
                    src={fotoPerfil}
                    alt="Imagen de perfil"
                  />
                </div>
              </figure>
              <p className={s.header__title}>
                Bienvenidos a mi Portafolio, soy Alexander Ballen Desarrollador
                Web FrontEnd / BackEnd
              </p>
            </div>
          </header>
          <section>
            <div className={s.container__habilidades}>
              <header>
                <div className={s.habilidades}>
                  <p className={s.habilidades__title}>Siempre</p>
                </div>
              </header>
              <p className={s.habilidades__paragraph}>
                Me llamo la atención el desarrollo, laborando en el mundo IT
                como Analista de Soporte encontré gusto por la programación y
                bueno decidí apostar por este camino y aquí estoy ya graduado
                del Bootcamp Henry, con ganas de encontrar mi primer labor en
                este rubro, graduado también como Tecnólogo en Administración de
                Redes de Computadores, soy una persona con capacidad de
                Adaptabilidad, buenas Relaciones Interpersonales,
                Responsabilidad, con conocimientos en Tecnologías que me han
                permitido adquirir experiencia en el desarrollo y en este camino
                proporcionándome el mejorar mis habilidades de Autodidacta,
                Colaboración, Trabajo en equipo e Individual, creando en mi esa
                curiosidad por aprender en cada paso.
              </p>
            </div>
          </section>
          <section>
            <div className={s.container__habilidades}>
              <header>
                <div className={s.habilidades}>
                  <p id="tecnologias" className={s.habilidades__title}>
                    Tecnologias
                  </p>
                </div>
              </header>
              <div className={s.container__icon}>
                {iconos.map((icono, index) => (
                  <div className={s.icon} key={index}>
                    <img
                      className={s.icotecnologias}
                      src={icono.imagen}
                      alt={icono.alt}
                    />
                    <p>{icono.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default AcercaDeMi;
