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
              Ecommerce es una aplicación web
            </p>
            <p>Tecnologías utilizadas:</p>
            <p>Frontend: React, Redux, sweetalert2.</p>
            <p>Backend: </p>
            <p>Características destacadas de la aplicación:</p>
            <p>
              - Filtros de ordenamiento A-Z y Z-A, filtrado por importancia y
              búsqueda por título.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PFParagraph;
