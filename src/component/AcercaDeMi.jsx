import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";
import fotoPerfil from "../assets/perfil.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import whatsapp from "../assets/whatsapp.png";
import s from "./AcercaDeMi.module.css";

const AcercaDeMi = () => {
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);

  return (
    <main>
      <div className={`${s.container} ${darkMode ? s.dark_mode : ""}`}>
        <div className={s.background_title_image}></div>
        <section>
          <header>
            <div className={s.profile__title__container}>
              <figure>
                <img
                  className={s.title__image}
                  src={fotoPerfil}
                  alt="Profile image"
                />
              </figure>
              <div className={s.title_container}>
                <p className={s.image__title}>
                  Bienvenidos a mi Portafolio, soy Alexander Ballen
                  Desarrollador Web FrontEnd / BackEnd
                </p>
                <div className={s.icons_container}>
                  <a
                    href="https://www.linkedin.com/in/alexballen/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className={s.network_icon}
                      src={linkedin}
                      alt="icono linkedin"
                    />
                  </a>

                  <a
                    href="https://github.com/alexballen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className={s.network_icon}
                      src={github}
                      alt="icono github"
                    />
                  </a>

                  <a
                    href="https://mail.google.com/mail/?view=cm&to=alexballen53%40gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className={s.network_icon}
                      src={gmail}
                      alt="icono gmail"
                    />
                  </a>

                  <a
                    href="https://web.whatsapp.com/send?phone=+573218168368"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className={s.network_icon}
                      src={whatsapp}
                      alt="icono whatsapp"
                    />
                  </a>
                </div>
              </div>
            </div>
          </header>
        </section>
        <hr />
        <section>
          <div className={s.skills__container}>
            <header>
              <p className={s.skills__title}>Siempre</p>
            </header>
            <p className={s.skills__paragraph}>
              Me llamo la atención el desarrollo, laborando en el mundo IT como
              Analista de Soporte encontré gusto por la programación y bueno
              decidí apostar por este camino y aquí estoy ya graduado del
              Bootcamp Henry, con ganas de encontrar mi primer labor en este
              rubro, graduado también como Tecnólogo en Administración de Redes
              de Computadores, soy una persona con capacidad de Adaptabilidad,
              buenas Relaciones Interpersonales, Responsabilidad, con
              conocimientos en Tecnologías que me han permitido adquirir
              experiencia en el desarrollo y en este camino proporcionándome el
              mejorar mis habilidades de Autodidacta, Colaboración, Trabajo en
              equipo e Individual, creando en mi esa curiosidad por aprender en
              cada paso.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AcercaDeMi;
