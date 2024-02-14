/* eslint-disable react/prop-types */
import ListElement from "../components/ListElement";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

const experience = [
  {
    id: 0,
    logo: "freelance.png",
    title: "2023 - Freelance",
    description:
      "De septembre 2023 à décembre 2023, j'ai développé une interface pour gérer une base de données de produits alimentaires et une interface d'un outil d'aide à la prise de décision de produits bancaires en React/JavaScript/HTML/CSS",
  },
  {
    id: 1,
    logo: "./cda.png",
    title:
      "2022-2023 - Responsable Fonction Technique chez Chantiers de l'Atlantique",
    description:
      "D'avril 2022 à octobre 2023, je fus responsable d'équipements de 9 navires pour 5 clients au sein des Chantiers de l'Atlantique à Saint-Nazaire (44). J'ai été responsable de la rédaction de cahiers des charges, sourcing fournisseurs avec l'équipe Achats, suivi de 5 fournisseurs européens (passage de commande, suivi planning, suivi livraison, facturation), contrôle de la bonne exécution des activités de montage des équipements sur les navires par les sous-traitants, validation des essais fonctionnels des équipements en deux parties: chez le fournisseur puis après leur intégration à bord des navires.",
  },
  {
    id: 2,
    logo: "./safran.png",
    title: "2018-2022 Ingénieur Développement chez Safran",
    description:
      "De octobre 2018 à avril 2022, je fus détaché au sein de la co-entreprise Aero Gearbox International entre Safran et Rolls-Royce à Colombes (92). J'ai été en charge des activités d'ingénierie pour le développement et la certification de systèmes moteurs du Rolls-Royce Pearl 700: Conception de pièces pour répondre aux besoins clients, rédaction de rapports en anglais, pilotage de méthode de résolution de problèmes, reporting clients, résolution de non-conformités.",
  },
  {
    id: 3,
    logo: "./actronika.png",
    title: "2018 - Ingénieur Développement de produits chez Actronika",
    description:
      "De février 2018 à août 2018, j'ai été en charge de l'intégration et du paramétrage en Java d'actionneurs haptiques au sein d'Actronika à Paris (75). Start-up innovante du domaine de l'haptique fournissant à ses clients industriels des solutions permettant la communication homme-machine grâce au toucher (transmission vibratoire).",
  },
];

const formation = [
  {
    id: 1,
    logo: "./react.png",
    title: "2023 - React certification",
    description:
      "De septembre 2023 à décembre 2023, j'ai suivi une formation certifiante sur JavaScript et React afin d'approfondir mes compétences en développement Front-end. J'ai également pu apprendre les tests unitaires via Jest.",
  },
  {
    id: 2,
    logo: "./arts-et-metiers.png",
    title: "2018 - Diplôme d'ingénieur généraliste Arts et métiers (ENSAM)",
    description:
      "De septembre 2015 à juin 2018, j'ai été étudiant au sein de l'Ecole Nationale Supérieure des Arts et Métiers sur les campus de Châlons-en-Champagne (51) puis Paris (75). Lors de mon cursus, j'ai pu coder en Visual Basic .NET et me spécialiser en développement de Produit (Conception par cycle en V) lors de ma dernière année.",
  },
  {
    id: 3,
    logo: "./diplome.png",
    title: "2013-2015 - Classe Préparatoire aux grandes écoles",
    description:
      "Etudiant en classe préparatoire Technologie et Sciences industrielles à St-Ouen-l'Aumône (95), j'ai découvert le code avec le langage Python.",
  },
];

function About() {
  return (
    <div className="pageStructure">
      <PageNav />
      <div className="titleSecondaryPage">
        <h1>A propos</h1>
        <a
          href="./cv-lomer-arnaud.pdf"
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
          <h2>Expérience Professionnelle</h2>
          {experience.map((input) => (
            <ListElement input={input} key={input.id} />
          ))}
        </ul>
        <ul>
          <h2>Parcours académique</h2>
          {formation.map((input) => (
            <ListElement input={input} key={input.id} />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default About;
