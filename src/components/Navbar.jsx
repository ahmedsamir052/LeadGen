import { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Client from "../pages/Client";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import styles from "./Navbar.module.css";

import imglogo from "../assets/imgs/logo-white.png"
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <div className={styles.img}>
              <img src={imglogo} alt="" />
            </div>
          </div>

          <div className={`${styles.links} ${showMenu ? styles.visible : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#client" onClick={closeMenu}>Client</a>
            <a href="#blog" onClick={closeMenu}>Blog</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>

          <div className={styles.menu}>
            <button onClick={toggleMenu}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.sesc}>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="client">
          <Client />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
