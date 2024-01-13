import s from "./UpskillingMicroserviciosParagraph.module.css";

const UpskillingMicroserviciosParagraph = () => {
  return (
    <main>
      <div className={s.container}>
        <section>
          <div className={s.title_container}>
            <p>Web App Portafolio</p>
          </div>
        </section>
        <section>
          <div className={s.paragraph_container}>
            <p className={s.introductory_paragraph}>
              Portafolio es una aplicación web ...
            </p>
            <p>
              La aplicación cuenta con un diseño totalmente adaptable
              Responsive.
            </p>
            <p>Tecnologías utilizadas:</p>
            <p>
              Frontend: Vite, React, react-icons, react-tooltip,
              sweetalert2,react-hook-form.
            </p>
            <p>Características destacadas de la aplicación:</p>
            <p></p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UpskillingMicroserviciosParagraph;
