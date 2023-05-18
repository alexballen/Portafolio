import emailjs from "@emailjs/browser";

export const ValidatorFunction = (form) => {
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

const validatorSubmit = () => {};

export const handleSubmit = (
  e,
  formContact,
  setFormContact,
  name,
  email,
  message
) => {
  e.preventDefault();

  if (!formContact.name) {
    alert("Debes ingresar un Nombre");
  } else if (formContact.name.length < 4) {
    alert("Debes ingresar minimo 4 caracteres en el campo Nombre");
  } else if (formContact.name.length > 40) {
    alert("Debes ingresar menos de 40 caracteres en el campo Nombre");
  } else if (!formContact.email) {
    alert("Debes ingresar un Email");
  } else if (!formContact.message) {
    alert("Debes ingresar un Mensaje");
  } else if (formContact.message.length < 50) {
    alert("Debes ingresar minimo 50 caracteres en el campo Mensaje");
  } else if (formContact.message.length > 999) {
    alert("Debes ingresar maximo 1000 caracteres en el campo Mensaje");
  } else {
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
  }
};

export const handleOnchange = (
  e,
  formContact,
  setFormContact,
  setError,
  validator
) => {
  setFormContact({
    ...formContact,
    [e.target.name]: e.target.value,
  });
  setError(validator(formContact));
};
