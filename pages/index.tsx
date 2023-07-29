import Image from "next/image";
import masthead from "@/public/masthead.jpeg";
import aboutMe from "@/public/about-me.png";
import categoryOne from "@/public/category-1.png";
import categoryTwo from "@/public/category-2.png";
import categoryThree from "@/public/category-3.png";
import categoryFour from "@/public/category-4.png";
import categoryFive from "@/public/category-5.png";
import backgroundGroup from "@/public/background-groups.jpg";
import { Fade } from "react-awesome-reveal";
import Form from "@/components/form";

const Home = () => {
  return (
    <>
      <main
        id={"home"}
        className="flex min-h-screen h-full w-full min-w-screen flex-col md:mb-0 mb-[-6rem]"
      >
        <div className="relative max-h-screen max-w-screen">
          <Fade triggerOnce delay={400} duration={1000}>
            <Image
              className="h-full w-full absolute z-0 object-cover md:object-fill"
              src={masthead}
              alt="masthead"
            />
          </Fade>

          <div className="relative h-screen flex items-center container mx-auto">
            <div className="flex flex-col md:w-1/2 gap-4 text-center md:text-left">
              <Fade triggerOnce cascade duration={1000}>
                <h1 className="h-fit">
                  ¿Buscas un cambio positivo en tu vida?
                </h1>
                <p>
                  Te invito a explorar cómo la psicología online puede ayudarte.
                  Contáctame para agendar una consulta o recibir más
                  información. El equilibrio emocional es posible, y estoy aquí
                  para acompañarte en tu viaje de autodescubrimiento y
                  crecimiento. Tu bienestar es mi prioridad, no estás solo/a en
                  esto.
                </p>
                <a href="#contact">
                  <button className="w-fit container">Contactar</button>
                </a>
              </Fade>
            </div>
          </div>
        </div>
      </main>

      <div
        id="aboutMe"
        className="block md:flex gap-10 my-20 items-center w-full"
      >
        <Fade
          triggerOnce
          className="w-full md:w-2/4 h-full"
          delay={600}
          duration={400}
        >
          <Image
            className="w-full h-full"
            src={aboutMe}
            alt="flor-sian-image"
          />
        </Fade>

        <div className="w-full md:w-3/4 container mx-auto text-center md:text-left">
          <Fade triggerOnce cascade delay={200} duration={1000}>
            <h2>Acerca de mi</h2>
            <p>
              Soy Florencia Sian, licenciada en psicología. Mi enfoque se centra
              en ayudar a niños, adolescentes y adultos a superar dificultades y
              alcanzar una vida plena. Utilizo técnicas respaldadas por la
              ciencia y brindo un enfoque empático y personalizado en un espacio
              seguro y confidencial. Mi objetivo es que te sientas escuchado/a y
              comprendido/a, mientras trabajamos juntos para aliviar tu malestar
              y desarrollar estrategias prácticas que te permitan superar
              obstáculos.
            </p>
          </Fade>
        </div>
      </div>
      <div className="w-full text-center">
        <Fade triggerOnce delay={400} duration={1000}>
          <Image
            className="w-full absolute z-0 object-container md:object-fill"
            src={backgroundGroup}
            alt="background-group"
          />
        </Fade>
        <div
          id="services"
          className="relative flex items-center container mx-auto"
        >
          <ul className="flex flex-wrap w-full justify-center text-center gap-10 md:gap-28">
            <Fade triggerOnce cascade duration={500}>
              <li className="md:w-3/12">
                <Image
                  className="m-auto mb-4"
                  width={200}
                  height={200}
                  src={categoryFive}
                  alt="category-5"
                />
                <h3>Afrontamos el Duelo Juntos</h3>
                <h4>
                  <strong>Encontrando Esperanza</strong>
                </h4>
                <p>
                  Juntos/as enfrentaremos el dolor y buscaremos la esperanza en
                  medio de la pérdida. Con comprensión y empatía, te acompañaré
                  hacia la sanación emocional.
                </p>
              </li>
              <li className="md:w-3/12">
                <Image
                  className="m-auto mb-4"
                  width={200}
                  height={200}
                  src={categoryThree}
                  alt="category-3"
                />

                <h3>Manejo del Estrés y la Ansiedad</h3>
                <h4>
                  <strong>Supera tus Desafíos Internos</strong>
                </h4>
                <p>
                  Recibe apoyo y guía especializada en el manejo del estrés y la
                  ansiedad, con el objetivo de proporcionarte un camino hacia el
                  bienestar.
                </p>
              </li>
              <li className="md:w-3/12">
                <Image
                  className="m-auto mb-4"
                  width={200}
                  height={200}
                  src={categoryOne}
                  alt="category-1"
                />

                <h3>Supera la Depresión</h3>
                <h4>
                  <strong>Sanando Juntos</strong>
                </h4>
                <p>
                  Exploraremos los desafíos que enfrentas, brindándote un
                  espacio seguro para expresar tus pensamientos y emociones. Con
                  comprensión y empatía, te acompañaremos en tu camino hacia la
                  recuperación.
                </p>
              </li>

              <li className="md:w-4/12">
                <Image
                  className="m-auto mb-4"
                  width={200}
                  height={200}
                  src={categoryFour}
                  alt="category-4"
                />
                <h3>Autoestima y Confianza</h3>
                <h4>
                  <strong>Descubre tu Poder Interior</strong>
                </h4>
                <p>
                  Juntos/as trabajaremos para identificar y desafiar creencias
                  limitantes, construyendo una base sólida de autoestima y amor
                  propio.
                </p>
              </li>

              <li className="md:w-4/12">
                <Image
                  className="m-auto mb-4"
                  width={200}
                  height={200}
                  src={categoryTwo}
                  alt="category-2"
                />

                <h3>Autodescubrimiento</h3>
                <h4>
                  <strong>Explora tu Interior</strong>
                </h4>
                <p>
                  Mediante sesiones individuales, trabajaremos en conjunto para
                  identificar tus fortalezas, desafíos y metas personales.
                </p>
              </li>
            </Fade>
          </ul>
        </div>
      </div>
      <div className="w-full mt-16 p-6 flex custom-shadow">
        <Form />
      </div>
    </>
  );
};

export default Home;
