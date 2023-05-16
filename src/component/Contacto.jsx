import s from "./Contacto.module.css";

const Contacto = () => {
  return (
    <main>
      <div className={s.container}>
        <section>
          <div className={s.contact__cantainer}>
            <header>
              <div className={s.contact__title__container}>
                <p className={s.contact__title}>Contacto</p>
              </div>
            </header>
            <form>
              <div className={s.contact__form__container}>
                <div className={s.input__container}>
                  <label htmlFor="name">Nombre</label>
                  <input type="text" />
                </div>
                <div className={s.input__container}>
                  <label htmlFor="mail">Correo</label>
                  <input type="text" />
                </div>
                <div className={s.input__container}>
                  <label htmlFor="message">Mensaje</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className={s.input__container}>
                  <button className={s.button}>Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contacto;
