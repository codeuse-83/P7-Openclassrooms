import React, { useContext } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";
import Footer from "../components/Footer";

const Home = () => {
  // Context import (datas) 
  const data = useContext(AppContext);

  return (
    <div>
      <main className="main_content">
        <Header />
        <Banner location="-home" />
        <section>
          <div className="card_container">
            {/* Creation of a card + NavLink for each data index*/}
            {data.map((logement, index) => (
              <NavLink key={index} to={`/logement/${logement.id}`}>
                <Card key={index} logement={logement} />
              </NavLink>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
