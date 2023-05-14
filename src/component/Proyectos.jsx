import pi from "../assets/PI.png";
import pf from "../assets/PF.png";
import s from "./Proyectos.module.css";

const Proyectos = () => {
  const images = [
    { image: pf, alt: "proyecto final", text: "Proyecto Final" },
    { image: pi, alt: "proyecto individual", text: "Proyecto Individual" },
  ];
  return (
    <main>
      <div className={s.container}>
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
                    <p className={s.proyect__image__text}>{imag.text}</p>
                    <div className={s.image__overlay}>
                      <a className={s.image__link} href="#">
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
