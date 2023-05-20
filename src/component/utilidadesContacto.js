import emailjs from "@emailjs/browser";

const emailjsFunction = (name, email, message, setFormContact) => {
  emailjs
    .send(
      "service_817u2ok",
      "contact_form",
      { name, email, message },
      "l4p47UmRCNzGrTGMi"
    )
    .then(
      (result) => {
        console.log(result.text);
        setFormContact({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  alert("Mensaje enviado con exito");
};

export const inputValidator = (form) => {
  const errors = {};

  let nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!form.name.trim()) {
    errors.name = "Ingresa un nombre";
  } else if (!nameRegex.test(form.name.trim())) {
    errors.name = "El campo nombre solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "Ingresa un correo";
  } else if (!emailRegex.test(form.email.trim())) {
    errors.email = "El correo electrónico ingresado no es válido";
  }

  if (!form.message.trim()) {
    errors.message = "Ingresa un mensaje";
  }

  return errors;
};

export const handleOnchange = (
  e,
  setFormContact,
  formContact,
  setError,
  validator
) => {
  setFormContact({
    ...formContact,
    [e.target.name]: e.target.value,
  });
  setError(validator(formContact));
};

export const validatorSubmit = (form, name, email, message, setFormContact) => {
  const errors = {};

  if (!form.name) {
    errors.name = "Debes ingresar un Nombre";
  } else if (form.name.length < 4) {
    errors.name = "Debes ingresar minimo 4 caracteres en el campo Nombre";
  } else if (form.name.length > 40) {
    errors.name = "Debes ingresar menos de 40 caracteres en el campo Nombre";
  }

  if (!form.email) {
    errors.email = "Debes ingresar un Correo Electronico";
  }

  if (!form.message) {
    errors.message = "Debes ingresar un Mensaje";
  } else if (form.message.length < 50) {
    errors.message = "Debes ingresar minimo 50 caracteres en el campo Mensaje";
  } else if (form.message.length > 999) {
    errors.message =
      "Debes ingresar maximo 1000 caracteres en el campo Mensaje";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  } else {
    emailjsFunction(name, email, message, setFormContact);
  }

  return errors;
};

export const handleSubmit = (
  e,
  setError,
  validator,
  form,
  name,
  email,
  message,
  setFormContact
) => {
  e.preventDefault();
  setError(validator(form, name, email, message, setFormContact));
};
