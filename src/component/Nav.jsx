import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import s from "./Nav.module.css";
import AcercaDeMi from "./AcercaDeMi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <div className={s.container}>
        <section>
          <nav>
            <section>
              <div className={s.container__title}>
                <h1>Portafolio</h1>
                <div className={s.hamburger} onClick={toggleMenu}>
                  {isOpen ? (
                    <MenuOpenIcon fontSize="large" className={s.icon} />
                  ) : (
                    <MenuIcon fontSize="large" />
                  )}
                </div>
              </div>
            </section>
            <section>
              <div className={`${s.menu} ${isOpen ? s.show : ""}`}>
                <div id={s["acerca"]} className={s.menu__item}>
                  <a className={s.menu__link} href="/">
                    Acerca de mí
                  </a>
                </div>
                <div className={s.menu__item}>
                  <a className={s.menu__link} href="#tecnologias">
                    Tecnologias
                  </a>
                </div>
                <div className={s.menu__item}>
                  <a className={s.menu__link} href="#services">
                    Services
                  </a>
                </div>
                <div className={s.menu__item}>
                  <a className={s.menu__link} href="#contact">
                    Contact
                  </a>
                </div>
              </div>
            </section>
          </nav>
        </section>
        <section>
          <div className={isOpen ? s.desplazar : ""}>
            <AcercaDeMi />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Nav;
