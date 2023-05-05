import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
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
          <nav className={s.hamburger} onClick={toggleMenu}>
            {isOpen ? (
              <MenuOpenIcon fontSize="large" className={s.icon} />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </nav>
          <section className={`${s.menu} ${isOpen ? s.show : ""}`}>
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
          </section>
        </header>
        <div className={s.slide}></div>
      </main>
    </>
  );
};

export default Home;
