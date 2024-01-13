import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";
import PopUpDescriptions from "./PopUpDescriptions";
import pi from "../assets/PI.png";
import pf from "../assets/PF.png";
import portafolio from "../assets/portafolio.png";
import github from "../assets/github.png";
import anotalo from "../assets/anotalo.png";
import upskillingJAVA from "../assets/upskillingJAVA.png";
import upskillingMicroservicios from "../assets/upskillingMicroservicios.png";
import AnotaloParagraph from "./AnotaloParagraph";
import PortafolioParagraph from "./PortafolioParagraph";
import PFParagraph from "./PFParagraph";
import PIParagraph from "./PIParagraph";
import UpskillingJAVAParagraph from "./UpskillingJAVAParagraph";
import UpskillingMicroserviciosParagraph from "./UpskillingMicroserviciosParagraph";
import s from "./Proyectos.module.css";

const Proyectos = () => {
  const { darkMode } = useContext(DarkModeContext);

  const images = [
    {
      image: upskillingMicroservicios,
      alt: "upskilling microservicios",
      text: "Upskilling Microservicios",
      link: "https://certificates.soyhenry.com/new-cert?id=56687bba8d5b75995d38cdb8c716a00bca7fa48ffa5bd57ce5744041dc7f5344",
      target: "_blank",
      linkgithub: "https://github.com/alexballen/microservices",
      paragraph: <UpskillingMicroserviciosParagraph />,
    },
    {
      image: upskillingJAVA,
      alt: "upskilling java",
      text: "Upskilling JAVA",
      link: "https://certificates.soyhenry.com/new-cert?id=e337dd6522ba4ed29b12cc45398a7bd86ca70091dd81ff237ad951eba2312314",
      target: "_blank",
      linkgithub: "https://github.com/alexballen/JAVA",
      paragraph: <UpskillingJAVAParagraph />,
    },
    {
      image: anotalo,
      alt: "anotalo",
      text: "Anotalo",
      link: "https://anotalo.netlify.app",
      target: "_blank",
      linkgithub: "https://github.com/alexballen/AnotaloServer",
      paragraph: <AnotaloParagraph />,
    },
    {
      image: portafolio,
      alt: "portafolio",
      text: "Portafolio",
      link: "https://portafolioalexballen.netlify.app",
      target: "_blank",
      linkgithub: "https://github.com/alexballen/Portafolio",
      paragraph: <PortafolioParagraph />,
    },
    {
      image: pf,
      alt: "proyecto final",
      text: "Proyecto Final",
      link: "https://hcouture-38643.web.app/",
      target: "_blank",
      linkgithub: "https://github.com/alexballen/pf-ecommerce-ft30b-frontend",
      paragraph: <PFParagraph />,
    },
    {
      image: pi,
      alt: "proyecto individual",
      text: "Proyecto Individual",
      link: "https://countriesabm.netlify.app/",
      target: "_blank",
      linkgithub: "https://github.com/alexballen/Countries-Client",
      paragraph: <PIParagraph />,
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
                        <PopUpDescriptions Paragraph={imag.paragraph} />
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
