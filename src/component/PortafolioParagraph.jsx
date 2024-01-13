import s from "./PortafolioParagraph.module.css";

const PortafolioParagraph = () => {
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
              ¡Explora mi mundo creativo y profesional a través de mi portafolio
              en línea! Esta aplicación está diseñada para destacar mis
              habilidades, proyectos y logros de una manera interactiva y
              atractiva.
            </p>
            <p>
              Utilizando las últimas tecnologías web, he construido este
              portafolio para presentar mi trabajo de manera única y
              cautivadora.
            </p>
            <p>
              Mi portafolio cuenta con un diseño moderno y atractivo que muestra
              mi estilo personal y profesional.
            </p>
            <p>
              Tecnologías: - Vite, React, React-icons, @emailjs/browser para el
              envió de correo electrónico desde mi formulario de contacto. -
              Diseño Responsive. - Modo oscuro.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PortafolioParagraph;
