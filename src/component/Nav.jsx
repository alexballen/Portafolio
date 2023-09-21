import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DarkMode from "./DarkMode";
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
                    <MenuIcon />
                  )}
                </div>
              </figure>
              <div
                className={`${s.items__menu__container} ${
                  isOpen ? s.show : ""
                }`}
              >
                <div className={s.menu__item}>
                  <Link to="/" className={s.menu__link}>
                    Acerca de mí
                  </Link>
                </div>
                <div onClick={() => closeMenu()} className={s.menu__item}>
                  <Link to="/tecnologias" className={s.menu__link}>
                    Tecnologias
                  </Link>
                </div>
                <div onClick={() => closeMenu()} className={s.menu__item}>
                  <Link to="/proyectos" className={s.menu__link}>
                    Proyectos
                  </Link>
                </div>
                <div className={s.menu__item}>
                  <Link to="/contacto" className={s.menu__link}>
                    Contacto
                  </Link>
                </div>
              </div>
              <div>
                <DarkMode />
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
