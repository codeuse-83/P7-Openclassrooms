import React from "react";

const Banner = ({ location }) => {
  return (
    // Différencier les composants className 
    <div className={"banner_container" + location}>
      <p>
        Chez vous, <span>partout et ailleurs</span>
      </p>
    </div>
  );
};

export default Banner;
