import React from "react";
import { Cards } from "./Cards";

const Main = () => {
  return (
    <main>
      <section class="about">
        <div class="body_content">
          <h2>Sobre esta página:</h2>
          <p>
            Esta página fue creada con el propósito de proporcionar herramientas
            para resolver distintos tipos de algoritmos criptográficos. Debajo
            está la lista de herramientas, o use la barra de navegación.
          </p>
        </div>
      </section>
      <div className="cards">
        <Cards />
      </div>
    </main>
  );
};

export default Main;
