import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import s from "./Nav.module.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <div className={s.container}>
        <section>
          <nav>
            <div className={s.nav__container}>
              <header>
                <p className={s.nav__title}>Portafolio</p>
              </header>
              <figure>
                <div className={s.hamburguer__menu} onClick={toggleMenu}>
                  {isOpen ? (
                    <MenuOpenIcon
                      fontSize="large"
                      className={s.hamburguer__icon}
                    />
                  ) : (
                    <MenuIcon fontSize="large" />
                  )}
                </div>
              </figure>
              <div
                className={`${s.items__menu__container} ${
                  isOpen ? s.show : ""
                }`}
              >
                <div className={s.menu__item}>
                  <a className={s.menu__link} href="/">
                    Acerca de mí
                  </a>
                </div>
                <div onClick={() => closeMenu()} className={s.menu__item}>
                  <a className={s.menu__link} href="/tecnologias">
                    Tecnologias
                  </a>
                </div>
                <div onClick={() => closeMenu()} className={s.menu__item}>
                  <a className={s.menu__link} href="/proyectos">
                    Proyectos
                  </a>
                </div>
                <div className={s.menu__item}>
                  <a className={s.menu__link} href="/contacto">
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </section>
        <section>
          <div className={s.overlay}></div>
        </section>
      </div>
    </main>
  );
};

export default Nav;
