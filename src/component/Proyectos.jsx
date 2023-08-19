import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";
import PopUpDescriptions from "./PopUpDescriptions";
import pi from "../assets/PI.png";
import pf from "../assets/PF.png";
import portafolio from "../assets/portafolio.png";
import github from "../assets/github.png";
import anotalo from "../assets/anotalo.png";
import s from "./Proyectos.module.css";

const Proyectos = () => {
  const { darkMode } = useContext(DarkModeContext);

  const images = [
    {
      image: anotalo,
      alt: "anotalo",
      text: "Anotalo",
      link: "https://anotalo.netlify.app",
      target: "_blank",
      linkgithub: "https://github.com/alexballen/AnotaloServer",
    },
    {
      image: portafolio,
      alt: "portafolio",
      text: "Portafolio",
      link: "https://portafolioalexballen.netlify.app",
      target: "_blank",
      linkgithub: "https://github.com/alexballen/Portafolio",
    },
    {
      image: pf,
      alt: "proyecto final",
      text: "Proyecto Final",
      link: "https://hcouture-38643.web.app/",
      target: "_blank",
      linkgithub: "https://github.com/alexballen/pf-ecommerce-ft30b-frontend",
    },
    {
      image: pi,
      alt: "proyecto individual",
      text: "Proyecto Individual",
      link: "https://countriesapp-r8zi.onrender.com/",
      target: "_blank",
      linkgithub: "https://github.com/alexballen/Countries-Client",
    },
  ];
  return (
    <main>
      <div className={`${s.container} ${darkMode ? s.dark_mode : ""}`}>
        <section>
          <div className={s.proyect__container}>
            <header>
              <div className={s.proyect__title__container}>
                <p className={s.proyect__title}>Proyectos</p>
              </div>
            </header>
            <figure>
              <div className={s.proyect__images__container}>
                {images.map((imag, index) => (
                  <div className={s.proyect__image__container} key={index}>
                    <img
                      className={s.proyect__image}
                      src={imag.image}
                      alt={imag.alt}
                    />
                    <div className={s.proyect_text_container}>
                      <p className={s.proyect__image__text}>{imag.text}</p>
                      <a href={imag.linkgithub} target={imag.target}>
                        <div className={s.text_icon_container}>
                          <img
                            className={s.text_icon}
                            src={github}
                            alt="icon github"
                          />
                        </div>
                      </a>
                      <div>
                        <PopUpDescriptions />
                      </div>
                    </div>
                    <div className={s.image__overlay}>
                      <a
                        className={s.image__link}
                        href={imag.link}
                        target={imag.target}
                      >
                        Visitar
                      </a>
                    </div>
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

export default Proyectos;
