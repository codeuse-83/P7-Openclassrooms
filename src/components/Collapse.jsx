import React, { useState } from "react";

const Collapse = (props) => {
  // Le paramètre de réduction n'est pas ouvert
  const [open, setOpen] = useState(false);

  
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse_container">
      {/* Au clic, basculer la réduction */}
      <div className="button_container" onClick={toggle}>
        <div className="collapse_button">
          {" "}
          <p>{props.label}</p>{" "}
        </div>
        {/* Changer le sens de la flèche quand le contenu est ouvert ou fermé  */}
        {open ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      {/* Si la réduction est ouverte, affichez ceci */}
      {open && <div className="collapse_content"> {props.content} </div>}
    </div>
  );
};

export default Collapse;
