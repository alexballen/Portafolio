import { useState } from "react";
import {
  handleSubmit,
  validatorSubmit,
  handleOnchange,
  inputValidator,
} from "./utilidadesContacto.js";
import s from "./Contacto.module.css";

const Contacto = () => {
  const [formContact, setFormContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({});

  const { name, email, message } = formContact;

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
            <form
              onSubmit={(e) =>
                handleSubmit(
                  e,
                  setError,
                  validatorSubmit,
                  formContact,
                  name,
                  email,
                  message,
                  setFormContact,
                  error
                )
              }
            >
              <div className={s.contact__form__container}>
                <div className={s.input__container}>
                  <label htmlFor="name">Nombre</label>
                  <input
                    value={name}
                    name="name"
                    type="text"
                    onChange={(e) =>
                      handleOnchange(
                        e,
                        setFormContact,
                        formContact,
                        setError,
                        inputValidator
                      )
                    }
                  />
                  {error.name ? (
                    <h4>
                      <small>{error.name}</small>
                    </h4>
                  ) : (
                    false
                  )}
                </div>
                <div className={s.input__container}>
                  <label htmlFor="mail">Correo</label>
                  <input
                    value={email}
                    name="email"
                    type="text"
                    onChange={(e) =>
                      handleOnchange(
                        e,
                        setFormContact,
                        formContact,
                        setError,
                        inputValidator
                      )
                    }
                  />
                  {error.email ? (
                    <h4>
                      <small>{error.email}</small>
                    </h4>
                  ) : (
                    false
                  )}
                </div>
                <div className={s.input__container}>
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    value={message}
                    name="message"
                    cols="30"
                    rows="10"
                    onChange={(e) =>
                      handleOnchange(
                        e,
                        setFormContact,
                        formContact,
                        setError,
                        inputValidator
                      )
                    }
                  ></textarea>
                  {error.message ? (
                    <h4>
                      <small>{error.message}</small>
                    </h4>
                  ) : (
                    false
                  )}
                </div>
                <div className={s.input__container}>
                  <button
                    className={s.button}
                    disabled={Object.keys(error).length < 1 ? false : true}
                  >
                    Enviar
                  </button>
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
