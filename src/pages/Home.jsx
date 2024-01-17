/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

function Home() {
  //Ajouter page erreur si lien n'existe pas
  return (
    <div className="pageStructure">
      <PageNav />
      <section className="homeProfile">
        <img src="/arnaud.jpg" alt="home" className="profilePicture" />
        <div>
          <h3>Front-end developer</h3>
          <h1 className="name">Arnaud Lomer</h1>
          <h4>
            Curieux, motivé, agile et avide d&apos;apprendre, je vous partage
            sur ce site internet un échantillon des compétences Front-end que
            j&apos;ai pu développer dernièrement
          </h4>
          <div className="linkContainer">
            <NavLink to="/portfolio">
              <button
                className="interfaceButton"
                style={{ borderColor: "#007ced" }}
              >
                Portfolio
              </button>
            </NavLink>

            <a
              href="https://github.com/Arnaud-Lmr?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                className="interfaceButton"
                style={{ borderColor: "aliceblue" }}
              >
                GitHub
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/arnaud-lomer-13419412a/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                className="interfaceButton"
                style={{ borderColor: "aliceblue" }}
              >
                LinkedIn
              </button>
            </a>
            <NavLink to="/contact">
              <button
                className="interfaceButton"
                style={{ borderColor: "aliceblue" }}
              >
                Contact
              </button>
            </NavLink>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
