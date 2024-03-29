/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function ProgressLine({
  label,
  backgroundColor = "grey",
  percentage = "0%",
  color = "grey",
}) {
  // Starting values needed for the animation
  // Mapped by "visualParts" so it can work with multiple values dynamically
  // It's an array of percentage widths
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    // You need to wrap it to trigger the animation
    requestAnimationFrame(() => {
      // Set a new array of percentage widths based on the props
      setWidth(percentage);
    });
  }, [percentage]);

  return (
    <div>
      <div className="skillsContainer">
        <h3>{label}</h3>
        <h5>{percentage}</h5>
      </div>

      <div
        className="progressVisualFull"
        // to change the background color dynamically
        style={{
          backgroundColor,
        }}
      >
        <div
          style={{
            width: width,
            backgroundColor: color,
          }}
          className="progressVisualPart"
        ></div>
      </div>
    </div>
  );
}

export default ProgressLine;
