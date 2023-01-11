import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../AppContext";
import Header from "../components/Header";
import TagName from "../components/TagName";
import Carousel from "../components/Carousel";
import starFull from "../assets/starFull.svg";
import starEmpty from "../assets/starEmpty.svg";
import Collapse from "../components/Collapse";
import Error404 from "./Error404";
import Footer from "../components/Footer";

const Logement = () => {
  // Importation de contexte (datas)
  const data = useContext(AppContext);
  // URL storage
  const urlId = useParams().id;
  // État de base de données spécifiques datas
  const [logementData, setLogementData] = useState({
    cover: "",
    description: "",
    equipments: [],
    host: { name: "", picture: "" },
    id: "",
    location: "",
    pictures: [],
    rating: "",
    tags: [],
    title: "",
  });

  // Stockage des données d'hébergement correspondantes
  useEffect(() => {
    const pushLogementData = async () => {
      // Recherche des données d'hébergement correspondantes
      let found = data.find((o) => o.id === urlId);
      // Poussez-les dans logementData
      setLogementData(found);
      // Aller en haut de la page lors du re-rendu
      window.scrollTo(0, 0);
    };
    pushLogementData();
  });

  // Gestion des erreurs si l'ID de l'hébergement n'est pas correct
  if (logementData === undefined) {
    return <Error404 />;
  }
  //Afficher un spinner de chargement si le stockage des données prend beaucoup de temps
  if (!logementData) {
    return (
      <div>
        <i className="fas fa-spinner fa-spin"></i>
      </div>
    );
  }

  // Séparation du nom et du prénom des données
  let name = logementData.host.name.split(" ");

  return (
    <div>
      <div className="main_content">
        <Header />
        {/* Si logementData est ok, affichez ceci */}
        {logementData && (
          <section>
            <>
              <Carousel data={logementData.pictures} />
              <div className="logement_block">
                <div className="logement_block_infos">
                  <div className="logement_block_infos_item title-location">
                    <h2>{logementData.title}</h2>
                    <p>{logementData.location}</p>
                  </div>
                  <div className="logement_block_infos_item tagName">
                    {/* Création d'un élément de balise pour chaque balise présente dans les données*/}
                    {logementData.tags.map((tag, index) => {
                      return <TagName tag={tag} key={index} />;
                    })}
                  </div>
                </div>
                <div className="logement_block_infos flexBlock">
                  <div className="logement_block_infos_item hostInfos">
                    <div className="hostInfos_name">
                      <p>{name[0]}</p>
                      <p>{name[1]}</p>
                    </div>
                    <div className="host_picture">
                      <img src={logementData.host.picture} alt="host-pic" />
                    </div>
                  </div>
                  <div className="logement_block_infos_item rating">
                    {/* Création d'un affichage différent des étoiles pour chaque évaluation d'hôte*/}
                    {logementData.rating == 1 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {logementData.rating == 2 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {logementData.rating == 3 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {logementData.rating == 4 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starEmpty} alt="rating-stars" />
                      </>
                    )}
                    {logementData.rating == 5 && (
                      <>
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                        <img src={starFull} alt="rating-stars" />
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* Différencier les composants className en fonction de l'emplacement de la page */}
              <div className="collapse_box-logement">
                <Collapse
                  label="Description"
                  content={logementData.description}
                />
                <Collapse
                  label="Équipements"
                  content={
                    <ul>
                      {/*Création d'un li pour chaque index de données dans l'équipement*/}
                      {logementData.equipments.map((equipement, index) => {
                        return <li key={index}>{equipement}</li>;
                      })}
                    </ul>
                  }
                />
              </div>
            </>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Logement;

  

  
    
  
