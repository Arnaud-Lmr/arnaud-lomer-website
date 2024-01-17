/* eslint-disable react/prop-types */
function Footer() {
  //Return the current year. Used for the copyright mention
  const year = new Date().getFullYear();

  //Display the Footer on the screen
  return (
    <div className="footer">
      <div className="extLinks">
        <a
          href="https://www.linkedin.com/in/arnaud-lomer-13419412a/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <h5>
            <img
              src="./linkedin.png"
              alt="linkedin"
              className="footerImg"
            ></img>{" "}
            LinkedIn
          </h5>
        </a>
        <a
          href="https://github.com/Arnaud-Lmr?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <h5>
            <img src="./github.png" alt="github" className="footerImg"></img>
            {"  "}
            Github
          </h5>
        </a>
      </div>
      <h5>&copy; {year} Arnaud Lomer</h5>
    </div>
  );
}

export default Footer;
