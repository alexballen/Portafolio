import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import s from "./Home.module.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <main className={s.container}>
        <header className={s.container__title}>
          <h1>Portafolio</h1>
          <div className={s.container}>
            <div className={s.hamburger} onClick={toggleMenu}>
              {/* <div className={s.hamburger__line}></div>
              <div className={s.hamburger__line}></div>
              <div className={s.hamburger__line}></div> */}
              <MenuIcon />
            </div>
            <div className={`${s.menu} ${isOpen ? s.show : ""}`}>
              <div className={s.menu__item}>
                <a className={s.menu__link} href="#home">
                  Home
                </a>
              </div>
              <div className={s.menu__item}>
                <a className={s.menu__link} href="#about">
                  About
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
          </div>
        </header>
        <section className={s.menu__lateral}>
          <div></div>
        </section>
        <section className={s.contenido}></section>
      </main>
    </>
  );
};

export default Home;
