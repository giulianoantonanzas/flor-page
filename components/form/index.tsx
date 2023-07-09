import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Instagram from "../icon/instagram";
import WhatsApp from "../icon/whatsApp";
import Mail from "../icon/mail";

const Form = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.email || !form.fullName || !form.message || !form.phone) {
      return alert("Debes llenar todos los campos.");
    }

    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(form),
    })
      .then((result) => {
        if (result.status > 300) {
          alert(
            "Hubo un problema al enviar el email, puede probar por otro medio o intentelo mas tarde"
          );
        } else alert("Mensaje enviado!");
      })
      .catch((err) => {
        alert(
          "Hubo un problema al enviar el email, puede probar por otro medio o intentelo mas tarde"
        );
        console.error(err);
      });
  };
  return (
    <div id="contact" className="container mx-auto">
      <Fade triggerOnce cascade delay={200} duration={500}>
        <div className="mb-4">
          <h2 className="my-2 text-center md:text-left">Contactame</h2>
          <p>También puedes contactarme a través de los siguientes medios:</p>
          <div className="w-1/4 flex gap-2 mt-2">
            <a
              href="https://www.instagram.com/psi.florenciasian/"
              target="_blank"
            >
              <Instagram
                className="fill-gray-400 hover:fill-gray-500"
                width={25}
                height={25}
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5493704587201"
              target="_blank"
            >
              <WhatsApp
                className="fill-gray-400 hover:fill-gray-500"
                width={25}
                height={25}
              />
            </a>
            <a href="mailto:licflorenciasian@gmail.com" target="_blank">
              <Mail
                className="fill-gray-400 hover:fill-gray-500"
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="w-full">
              <label htmlFor="fullName">Nombre completo</label>
              <div className="mt-1.5">
                <input
                  onChange={handleChange}
                  className="w-full"
                  type="text"
                  name="fullName"
                  id="fullName"
                  autoComplete="fullName"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <div className="mt-1.5">
                <input
                  onChange={handleChange}
                  className="w-full"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="phone">Numero de telefono</label>
              <div className="mt-1.5">
                <input
                  onChange={handleChange}
                  className="w-full"
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="given-phone"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-2">
            <label htmlFor="message">Message</label>
            <div className="mt-1.5">
              <textarea
                onChange={handleChange}
                className="w-full"
                name="message"
                id="message"
                rows={6}
                defaultValue={""}
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="w-full md:w-auto" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </Fade>
    </div>
  );
};

export default Form;
