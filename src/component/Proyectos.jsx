import pi from "../assets/PI.png";
import pf from "../assets/PF.png";
import s from "./Proyectos.module.css";

const Proyectos = () => {
  const images = [
    { image: pi, alt: "proyecto individual", text: "Proyecto Individual" },
    { image: pf, alt: "proyecto final", text: "Proyecto Final" },
  ];
  return (
    <main>
      <div className={s.container}>
        <section>
          <div className={s.container__proyect}>
            <header>
              <div className={s.container__title}>
                <p className={s.title}>Proyectos</p>
              </div>
            </header>
            <figure>
              <div className={s.container__images}>
                {images.map((imag, index) => (
                  <div className={s.container__image} key={index}>
                    <img className={s.image} src={imag.image} alt={imag.alt} />
                    <p className={s.image__paragraph}>{imag.text}</p>
                    <div className={s.overlay}>
                      <a className={s.link} href="#">
                        Link Proyecto
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
