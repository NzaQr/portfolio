import "./App.css";
import Card from "./components/Card";
import photo from "./assets/photo.jpg";
import Projects from "./components/Projects";
import Header from "./components/Header";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { useRef } from "react";

function App() {
  const aboutScroll = useRef();
  const projectsScroll = useRef();

  const handleClickAbout = () => {
    aboutScroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickProjects = () => {
    projectsScroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* CHANGE NAV MENU STYLE */}
      <Header
        handleClickAbout={handleClickAbout}
        handleClickProjects={handleClickProjects}
      />
      <Card />
      <section className="about">
        <div className="about-container">
          <img
            className="photo"
            src={photo}
            alt="persona(Nazareno) con un rio de fondo"
            ref={aboutScroll}
          />
          <h1>Soy un desarrollador autodidacta de Buenos Aires 🇦🇷</h1>
        </div>
        <p>
          Después de crear varios proyectos personales estoy muy motivado en
          trabajar en equipo y <strong>seguir aprendiendo</strong> en el sector
          IT.
        </p>
      </section>

      <section className="experience">
        <div className="timeline-container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <p>
          En 2018 egresé como técnico en informática y tuve la oportunidad de
          hacer una pasantía en AGIP, fue ahí donde entré al mundo del frontend
          y el diseño web. En esos cuatro meses aprendí muchísimo y me motivó a
          seguir aprendiendo.
        </p>
        <p>
          En 2020 hice un bootcamp de JavaScript y un curso completo en el que
          profundicé conceptos y aprendí React, ambos hechos en{" "}
          <a href="https://scrimba.com/">Scrimba</a>.
        </p>
        <p>Actualmente busco empleo como Frontend Developer.</p>
      </section>
      <section ref={projectsScroll} className="projects">
        <h1>Proyectos</h1>
        <div className="projects-component">
          <Projects />
        </div>
        <p className="projects-invite">
          Te invito a ver más en mi{" "}
          <a href="https://github.com/NzaQr">GitHub</a>!
        </p>
      </section>
      <section className="skills">
        <h1>Tecnologías</h1>
        <ul>
          <li>
            <AiOutlineHtml5 className="icon" />
            <p>HTML5</p>
          </li>
          <li>
            <DiCss3 className="icon" />
            <p>CSS3</p>
          </li>
          <li>
            <IoLogoJavascript className="icon" />
            <p>JavaScript</p>
          </li>
          <li>
            <DiReact className="icon" />
            <p>React</p>
          </li>
          <li>
            <IoLogoFirebase className="icon" />
            <p>Firebase</p>
          </li>
          <li>
            <FaGitAlt className="icon" />
            <p>Git</p>
          </li>
        </ul>
      </section>
      <section className="contact">
        <p>
          Si querés saber más sobre mí o tenés alguna propuesta mandame un mail
          a: naz.quiroga@gmail.com o hablemos por LinkedIn!
        </p>
      </section>
    </>
  );
}

export default App;
