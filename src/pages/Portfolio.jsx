/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

function Portfolio() {
  return (
    <div className="pageStructure">
      <PageNav />
      <div className="titleSecondaryPage">
        <h1>Portfolio</h1>
      </div>
      <div className="containerMainContentPage">
        <ul>
          <h2>Galerie</h2>
        </ul>
      </div>
      <div className="containerPortfolio">
        <div>
          <h3>Stocks game</h3>
          <a
            href="https://stocks-game.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img src="./stocks-app.jpg" alt="stocks app" />
          </a>
        </div>

        <div>
          <h3>Nippon tea</h3>
          <a
            href="https://nippon-tea.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img src="./nippon-tea.jpg" alt="nippon tea" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Portfolio;
