import React from "react";

const Banner = ({ location }) => {
  return (
    // Différencier les composants className 
    <div className={"banner_container" + location}>
      <p>
        Chez vous, partout et ailleurs
      </p>
    </div>
  );
};

export default Banner;
