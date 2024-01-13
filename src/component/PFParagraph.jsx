import s from "./PFParagraph.module.css";

const PFParagraph = () => {
  return (
    <main>
      <div className={s.container}>
        <section>
          <div className={s.title_container}>
            <p>Web Ecommerce H-couture</p>
          </div>
        </section>
        <section>
          <div className={s.paragraph_container}>
            <p className={s.introductory_paragraph}>
              Desarrollo de una página web de Comercio Electrónico especializada
              en productos de alta costura.
            </p>
            <p>
              La página web cuenta con autenticación de usuarios,
              funcionalidades de filtrado y búsqueda de productos, pasarela de
              pago, un completo dashboard, entre otras características.
            </p>
            <p>
              La aplicación fue desarrollada de forma colaborativa utilizando la
              metodología SCRUM, Git Flow y una implementación eficiente de
              tiempos, objetivos y comunicación para cumplir con los plazos
              estimados.
            </p>
            <p>
              Se emplearon diversas tecnologías que se integraron de manera
              armoniosa para lograr el resultado deseado.
            </p>
            <p>Tecnologías utilizadas:</p>
            <p>
              Frontend: React, auth0-react, Redux, sweetalert2, daisyui,
              Firebase, react-icons, react-simple-chatbot, uuid, entre otros.
            </p>
            <p>
              Backend: Node, auth0-js, Express, MercadoPago, Nodemailer, PG,
              Sequelize, Socket.io.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PFParagraph;
