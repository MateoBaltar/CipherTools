import React, { useState } from "react";

const Hexadecimal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isEncoding, setIsEncoding] = useState(true);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleOptionChange = (event) => {
    setIsEncoding(event.target.value === "encode");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let output = "";

    if (isEncoding) {
      for (let i = 0; i < input.length; i++) {
        let hex = input.charCodeAt(i).toString(16);
        output += ("00" + hex).slice(-2);
        console.log(output);
      }
    } else {
      for (let i = 0; i < input.length; i += 2) {
        let hexChars = input.substr(i, 2);
        let charCode = parseInt(hexChars, 16);
        output += String.fromCharCode(charCode);
      }
    }

    setOutput(output);
  };

  return (
    <div>
      <div className="container">
        <h1>Codificador/decodificador Hexadecimal</h1>
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

        <p>
          El sistema hexadecimal (abreviado hex.) es el sistema de numeración
          posicional que tiene como base el 16. Su uso actual está muy vinculado
          a la informática y ciencias de la computación donde las operaciones de
          la CPU suelen usar el byte u octeto como unidad básica de memoria,
          debido a que un byte representa 2^8 valores posibles.
        </p>
      </div>
    </div>
  );
};

export default Hexadecimal;
