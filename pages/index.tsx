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
                <h1 className="h-fit">No postergues tu salud mental</h1>
                <p>
                  En un mundo cada vez más acelerado y exigente, es fundamental
                  cuidar de nuestra salud mental para disfrutar de una vida
                  plena. Contar con el apoyo adecuado puede marcar la diferencia
                  en tu proceso de recuperación y crecimiento personal. Pedir
                  ayuda para superar tus dificultades es un acto de valentía y
                  autocuidado, espero tu mensaje!
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
            <h2>Flor Sian</h2>
            <p>
              Mi enfoque se centra en ayudar a niños, adolescentes y adultos a
              superar dificultades y alcanzar una vida plena. Utilizo técnicas
              respaldadas por la ciencia y brindo un enfoque empático y
              personalizado en un espacio seguro y confidencial. Mi objetivo es
              que te sientas escuchado/a y comprendido/a, trabajando juntos para
              aliviar el malestar, mejorar tu salud mental y desarrollar
              estrategias prácticas que te permitan superar los obstáculos y
              promover el bienestar.
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
                  src={categoryTwo}
                  alt="category-2"
                />

                <h3>Terapia de Aceptación y Compromiso (ACT)</h3>
                <p>
                  Imagina un barco en una tormenta, la ACT te enseña a aceptar
                  las olas y el viento en lugar de luchar contra ellos. Desde
                  este enfoque, te ayudaré a aceptar tus pensamientos y
                  emociones sin ser arrastrado por ellos y a realizar acciones
                  valiosas que reflejen tus valores más profundos y/o te
                  acerquen a tus objetivos personales. Juntos, identificaremos
                  lo que realmente importa en tu vida y tomarás decisiones que
                  te acerquen a una vida plena y significativa.
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

                <h3>Terapia Cognitiva Conductual (TCC)</h3>
                <p>
                  En la TCC, nos convertimos en detectives de la mente,
                  investigando los patrones de pensamiento que pueden estar
                  manteniendo el problema y analizando la relación entre esos
                  pensamientos, tus emociones y comportamientos. Pero la TCC no
                  solo se trata de explorar pensamientos! También implica
                  cuestionar activamente esos pensamientos, tomar medidas
                  concretas y enfrentar desafíos paso a paso para lograr cambios
                  positivos.
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

                <h3>Terapia Breve Estratégica</h3>
                <p>
                  Imagina cómo sería salir de aquí con las herramientas para
                  transformar tu vida. Desde este enfoque, no solo resolverás
                  tus problemas, sino que también descubrirás tu potencial para
                  el cambio y el crecimiento. Trabajaremos juntos de manera
                  estratégica y creativa, utilizando soluciones prácticas para
                  abordar tus desafíos y lograr tus metas en el menor tiempo
                  posible.
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
                <h3>Terapia Analítico Funcional (FAP)</h3>
                <p>
                  Imagina que somos detectives sociales, investigando cómo
                  interactúas con las personas que te rodean. Juntos,
                  exploraremos tus patrones de comportamiento y cómo influyen en
                  tus relaciones con los demás. Pero no se trata solo de
                  analizar, sino también de actuar! Tendrás la oportunidad de
                  poner en práctica nuevas habilidades en tu vida diaria y
                  recibir retroalimentación para tu crecimiento personal.
                </p>
              </li>

              <li className="md:w-4/12">
                <Image
                  className="m-auto mb-4"
                  width={200}
                  height={200}
                  src={categoryFive}
                  alt="category-5"
                />
                <h3>Entrenamiento en habilidades (DBT)</h3>
                <p>
                  El entrenamiento en habilidades es como un gimnasio emocional:
                  Aprenderás a manejar tus emociones intensas y desarrollar
                  estrategias saludables para afrontar crisis. Además,
                  entrenarás tus habilidades de comunicación, autocuidado y
                  atención plena. Te brindará las herramientas necesarias para
                  establecer límites saludables, tomar decisiones conscientes,
                  resolver conflictos y construir conexiones más significativas
                  con los demás.
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
