/* eslint-disable react/prop-types */
import { useState } from "react";

function ListElement({ input }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="listElemContainer" onClick={() => setIsOpen(!isOpen)}>
      <img
        src={input.logo}
        style={{ backgroundColor: "transparent" }}
        alt="job"
      />

      <h3 className="accordionButton">{input.title}</h3>
      {isOpen ? (
        <h1 className="accordionButton">&#9651;</h1>
      ) : (
        <h1 className="accordionButton"> &#9661;</h1>
      )}
      <div className="listElemDetail">
        {isOpen && <h4>{input.description}</h4>}
      </div>
    </div>
  );
}

export default ListElement;
