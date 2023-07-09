import Image from "next/image";
import Logo from "@/public/logo-large.jpeg";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    });

    setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });
  }, []);

  return (
    <header className="absolute w-full z-10">
      <nav
        className={`${
          isScrolled || isMobile ? "bg-white" : ""
        } duration-500 fixed w-full drop-shadow`}
      >
        <div className="flex container mx-auto items-center justify-center md:justify-between">
          <a href="#home">
            <Image className="mt-2" height={80} alt={"logo"} src={Logo} />
          </a>
          <ul className="hidden md:flex items-center h-fit gap-4">
            <li className="h-fit">
              <a href="#aboutMe">Acerca de mi</a>
            </li>
            <li className="h-fit">
              <a href="#services">Mis servicios</a>
            </li>
            <li className="h-fit">
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
