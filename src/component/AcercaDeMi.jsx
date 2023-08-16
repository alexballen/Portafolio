import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";
import fotoPerfil from "../assets/perfil.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import github1 from "../assets/github1.png";
import gmail from "../assets/gmail.png";
import whatsapp from "../assets/whatsapp.png";
import cv from "../assets/Alexander Ballen - Full Stack Developer.pdf";
import cvdownload from "../assets/cvdownload.jpg";
import s from "./AcercaDeMi.module.css";

const AcercaDeMi = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <main>
      <div className={`${s.container} ${darkMode ? s.dark_mode : ""}`}>
        <div className={s.title_image_background}></div>
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
                  <a href={cv} target="_blank" rel="noreferrer">
                    <img
                      className={s.network_icon}
                      src={cvdownload}
                      alt="icono cvdownload"
                    />
                  </a>
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
                      src={darkMode ? github : github1}
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
              Mi viaje profesional ha sido un camino apasionante que me ha
              llevado desde un inicio en Soporte Técnico hasta mi título como
              Desarrollador graduado del Bootcamp Henry. Con una base sólida en
              Tecnología en Administración de Redes de Computadores, he forjado
              un camino en el mundo del desarrollo de software, impulsado por
              una curiosidad insaciable y un enfoque autodidacta. Mi capacidad
              de adaptación, habilidades en colaboración y trabajo en equipo,
              junto con mi constante deseo de aprender, me han permitido crecer
              y evolucionar en esta emocionante industria. Estoy emocionado por
              seguir contribuyendo, innovando y creando soluciones
              significativas mientras avanzo en mi carrera en el desarrollo.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AcercaDeMi;
