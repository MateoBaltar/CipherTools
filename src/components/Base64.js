import React, { useState } from "react";

const Base64 = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isEncoding, setIsEncoding] = useState(true);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleOptionChange = (event) => {
    setIsEncoding(event.target.value === "encode");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEncoding) {
      setOutput(btoa(input));
    } else {
      setOutput(atob(input));
    }
  };

  return (
    <div>
      <div className="container">
      <h1>Codificador/decodificador Base64</h1>
      <form onSubmit={handleSubmit}>
        <div className="encode-decode">
          <div>
            <input
              type="radio"
              id="encode"
              name="option"
              value="encode"
              checked={isEncoding}
              onChange={handleOptionChange}
            />
            <label htmlFor="encode">Codificar</label>
          </div>
          <div>
            <input
              type="radio"
              id="decode"
              name="option"
              value="decode"
              checked={!isEncoding}
              onChange={handleOptionChange}
            />
            <label htmlFor="decode">Decodificar</label>
          </div>
        </div>

        <div>
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder={
              isEncoding
                ? "Ingrese el código para codificar"
                : "Ingrese el texto codificado en base64 para decodificar"
            }
          />
        </div>
        <div id="submit">
          <button type="submit">
            {isEncoding ? "Codificar" : "Decodificar"}
          </button>
        </div>
      </form>
      <textarea readOnly value={output} />

      <br />
      <p>
        Base64 es un sistema de numeración posicional que usa 64 como base. Es
        la mayor potencia que puede ser representada usando únicamente los
        caracteres imprimibles de ASCII. Esto ha propiciado su uso para
        codificación de correos electrónicos, PGP y otras aplicaciones. Todas
        las variantes famosas que se conocen con el nombre de Base64 usan el
        rango de caracteres A-Z, a-z y 0-9 en este orden para los primeros 62
        dígitos, pero los símbolos escogidos para los últimos dos dígitos varían
        considerablemente de unas a otras. Otros métodos de codificación como
        UUEncode y las últimas versiones de binhex usan un conjunto diferente de
        64 caracteres para representar 6 dígitos binarios, pero estos nunca son
        llamados Base64.
      </p>
    </div>
    </div>
    
  );
};

export default Base64;
