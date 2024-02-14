/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import ListElement from "../components/ListElement";
import ProgressLine from "../components/ProgressLine";

const skills = [
  {
    id: 1,
    logo: "./react.png",
    title: "React",
    description:
      "Développeur React pour la conception de Single Page Applications via la syntaxe JSX. Utilisation des hooks useState, useEffect, useRef, useReducer et de hooks personnalisés, de bibliothèques natives (React-router-dom, React-dom), data fetching via API.",
  },
  {
    id: 2,
    logo: "./html-css-js.png",
    title: "HTML,CSS, JavaScript",
    description:
      "Compétences en HTML, CSS et javaScript via la connaissance de la structure HTML, des balises HTML, des classes CSS, des animations CSS, styles CSS, grid, flexbox... Utilisation de 'vanilla Javascript' quand React ne permet pas réaliser certaines fonctionnalités car par exemple pour les tests unitaires Jest.",
  },
  {
    id: 3,
    logo: "./backend.jpg",
    title: "Back-end et BDD",
    description: "Compétences en MongoDB, Express, NodeJS, Java, Git, GitHub",
  },
  {
    id: 4,
    logo: "./ux-design.png",
    title: "UI/UX Design",
    description: "Utilisateur éclairé de Figma.",
  },
];

const skillsCompletion = [
  { name: "React", percentage: "90%", color: "#61DBFB" },
  { name: "HTML", percentage: "95%", color: "#F06529" },
  { name: "CSS", percentage: "90%", color: "#264de4" },
  { name: "Git/GitHub", percentage: "90%", color: "lightgrey" },
  { name: "JavaScript", percentage: "80%", color: "#F0DB4F" },
  { name: "MongoDB, Express, NodeJS", percentage: "65%", color: "green" },
  { name: "Java", percentage: "60%", color: "red" },
];

function Skills() {
  return (
    <div className="pageStructure">
      <PageNav />
      <div className="titleSecondaryPage">
        <h1>Skills</h1>
        <a
          href="cv-lomer-arnaud.pdf"
          download="CV Arnaud Lomer"
          style={{ textDecoration: "none" }}
        >
          <button
            className="interfaceButton"
            style={{ borderColor: "#007ced" }}
          >
            Télécharger CV
          </button>
        </a>
      </div>
      <div className="containerMainContentPage">
        <ul>
          <h2>Skills details</h2>
          {skills.map((input) => (
            <ListElement input={input} key={input.id} />
          ))}
        </ul>

        <ul>
          <h2>Skills summary</h2>
          {skillsCompletion.map((skill) => (
            <ProgressLine
              key={skill.name}
              label={skill.name}
              percentage={skill.percentage}
              color={skill.color}
            />
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default Skills;
