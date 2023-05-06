import s from "./AcercaDeMi.module.css";
import fotoPerfil from "../assets/perfil.png";

const AcercaDeMi = () => {
  return (
    <>
      <main>
        <div className={s.container}>
          <header>
            <div className={s.header}>
              <figure>
                <div className={s.header__perfil}>
                  <img
                    className={s.perfil__foto}
                    src={fotoPerfil}
                    alt="Imagen de perfil"
                  />
                </div>
              </figure>
              <h1 className={s.header__title}>
                Bienvenidos a mi Portafolio, soy Alexander Ballen Desarrollador
                Web FrontEnd / BackEnd
              </h1>
            </div>
          </header>
          <section>
            <div className={s.container__habilidades}>
              <header>
                <div className={s.habilidades}>
                  <h1 className={s.habilidades__title}>Habilidades</h1>
                </div>
              </header>
              <p className={s.habilidades__paragraph}>
                Siempre me llamo la atención el desarrollo, laborando en el
                mundo IT como Analista de Soporte encontré gusto por la
                programación y bueno decidí apostar por este camino y aquí estoy
                ya graduado del Bootcamp Henry, con ganas de encontrar mi primer
                labor en este rubro, graduado también como Tecnólogo en
                Administración de Redes de Computadores, soy una persona con
                capacidad de Adaptabilidad, buenas Relaciones Interpersonales,
                Responsabilidad, con conocimientos en Tecnologías que me han
                permitido adquirir experiencia en el desarrollo y en este camino
                proporcionándome el mejorar mis habilidades de Autodidacta,
                Colaboración, Trabajo en equipo e Individual, creando en mi esa
                curiosidad por aprender en cada paso.
              </p>
              <div className={s.con}></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default AcercaDeMi;
