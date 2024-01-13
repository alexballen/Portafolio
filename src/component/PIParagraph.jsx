import s from "./PIParagraph.module.css";

const PIParagraph = () => {
  return (
    <main>
      <div className={s.container}>
        <section>
          <div className={s.title_container}>
            <p>Countries App proyecto individual</p>
          </div>
        </section>
        <section>
          <div className={s.paragraph_container}>
            <p className={s.introductory_paragraph}>
              Diseño y desarrollo de una API Restful de países, que presenta
              diversas tarjetas informativas sobre cada país. Incluye la
              creación de actividades que abarcan aspectos como el nombre,
              dificultad, duración, y el tipo de clima o tiempo característico
              del país y el pais o paises que realizan dicha actividad.
            </p>
            <p>
              La aplicación está construida en el backend utilizando NodeJS,
              Express, y bases de datos PostgreSQL con Sequelize.
            </p>
            <p>
              En el frontend, la aplicación está desarrollada con React, Redux,
              y CSS, y cuenta con un diseño completamente adaptable y
              responsive.
            </p>
            <p>
              La interfaz ofrece diversas funcionalidades, como filtros de
              ordenamiento A-Z y Z-A, filtrado por población máxima o mínima,
              búsqueda por actividades específicas creadas en cada país,
              filtrado por continentes y búsqueda por título del país.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PIParagraph;
