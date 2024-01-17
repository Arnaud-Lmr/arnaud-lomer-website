/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

const contactDetails = [
  {
    id: 1,
    logo: "./telephone.png",
    title: "Téléphone",
    description: "06 13 86 12 59",
  },
  {
    id: 2,
    logo: "./adresse.png",
    title: "Adresse",
    description: "17 Rue de Nantes 44880 SAUTRON",
  },
  {
    id: 3,
    logo: "./email.png",
    title: "Mail",
    description: "arnaud.lomer@outlook.com",
  },
];

function Contact() {
  return (
    <div className="pageStructure">
      <PageNav />
      <div className="titleSecondaryPage">
        <h1>Contact</h1>
      </div>
      <div className="containerMainContentPage">
        <ul>
          {contactDetails.map((input) => (
            <div className="listElemContainer" key={input.id}>
              <img
                src={input.logo}
                style={{ backgroundColor: "transparent" }}
                alt="job"
              />

              <div className="listContact">
                <h3>{input.title}</h3>
                <h4>{input.description}</h4>
              </div>
            </div>
          ))}
        </ul>
        <ul>
          <h2>Mes objectifs</h2>
          <h3 style={{ textAlign: "justify", marginRight: "2rem" }}>
            Je recherche activement une entreprise dynamique, sur
            l&apos;agglomération nantaise, proposant des projets variés au sein
            de laquelle je pourrais m&apos;épanouir et apporter mes compétences
            en développement Front-end React et en gestion de projet.
            <br /> <br />A moyen terme je compte développer mes compétences
            Back-end afin de devenir développeur Full-stack pour étendre mon
            champ de compétences au sein de l&apos;entreprise.
          </h3>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
