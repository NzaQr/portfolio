import "./App.css";
import Card from "./components/Card";
import photo from "./assets/photo.jpg";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Card />
      <section className="about">
        <div className="about-container">
          <img
            className="photo"
            src={photo}
            alt="persona(Nazareno) con un rio de fondo"
          />
          <h1>Soy un desarrollador autodidacta de Buenos Aires 🇦🇷</h1>
        </div>
        <p>
          Después de crear varios proyectos personales estoy muy motivado en
          trabajar en equipo y <strong>seguir aprendiendo</strong> en el sector
          IT.
        </p>
      </section>
      <section className="projects">
        <h1>Proyectos</h1>
        <div className="projects-component">
          <Projects />
        </div>
        <p className="projects-invite">
          Te invito a ver más en mi{" "}
          <a href="https://github.com/NzaQr">GitHub</a>!
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
          En 2020 hice un bootcamp de JavaScript y un curso completo de Frontend
          en el que profundicé conceptos y aprendí React, ambos hechos en{" "}
          <a href="https://scrimba.com/">Scrimba</a>.
        </p>
        <p>Actualmente busco empleo como Frontend Developer.</p>
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
