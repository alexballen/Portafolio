import s from "./PFParagraph.module.css";

const PFParagraph = () => {
  return (
    <main>
      <div className={s.container}>
        <section>
          <div className={s.title_container}>
            <p>Web App Anotalo</p>
          </div>
        </section>
        <section>
          <div className={s.paragraph_container}>
            <p className={s.introductory_paragraph}>
              Anótalo es una aplicación web diseñada para simplificar tu vida
              mediante la creación y gestión de notas. Esta intuitiva aplicación
              te permite crear y organizar tus notas de manera eficiente,
              asignándoles recordatorios personalizados y clasificándolas según
              su importancia, todo bajo tu criterio único. Además, cuenta con
              funciones de filtros combinados y búsqueda por título.
            </p>
            <p>
              La aplicación cuenta con un diseño totalmente adaptable
              Responsive.
            </p>
            <p>Tecnologías utilizadas:</p>
            <p>
              Frontend: Vite, React, Redux, dayjs, lodash, react-icons,
              react-tooltip, sweetalert2, date-fns, react-hook-form.
            </p>
            <p>Backend: JWT, bcryptjs, dayjs, ejs, nodemailer, express.</p>
            <p>Características destacadas de la aplicación:</p>
            <p>- Autenticación local y a través de Google.</p>
            <p>- Notificaciones para nuevos usuarios.</p>
            <p>- Validación de cuentas de nuevos usuarios.</p>
            <p>- Recuperación de contraseña.</p>
            <p>- Perfil de usuario.</p>
            <p>- Recordatorios para notas.</p>
            <p>
              - Notificaciones por correo electrónico para recordatorios
              configurados.
            </p>
            <p>
              - Filtros de ordenamiento A-Z y Z-A, filtrado por importancia y
              búsqueda por título.
            </p>
            <p>- Edición y eliminación de notas.</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PFParagraph;
