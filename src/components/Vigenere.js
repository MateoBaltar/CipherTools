import React, { useState } from "react";
const Vigenere = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isEncoding, setIsEncoding] = useState(true);
  const [key, setKey] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };

  const handleOptionChange = (event) => {
    setIsEncoding(event.target.value === "encode");
  };

  const handleSubmit = async (event) => {
    console.log("Input:", input, "Key:", key);
    event.preventDefault();
    let keyIndex = 0;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let output = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (alphabet.includes(char.toUpperCase())) {
        const keyChar = key[keyIndex % key.length].toUpperCase();
        const keyOffset = alphabet.indexOf(keyChar);
        const charOffset = alphabet.indexOf(char.toUpperCase());
        let newOffset;
        if (isEncoding) {
          newOffset = (charOffset + keyOffset) % 26;
        } else {
          newOffset = (charOffset - keyOffset + 26) % 26;
        }
        let newChar = alphabet[newOffset];
        if (char === char.toLowerCase()) {
          newChar = newChar.toLowerCase();
        }
        output += newChar;
        keyIndex++;
      } else {
        output += char;
      }
    }

    setOutput(output);
  };

  return (
    <div>
      <div className="container">
        <h1>Codificador/decodificador Vigenère</h1>
        <form onSubmit={handleSubmit}>
          <div className="encode-decode">
            <div id="Codificar">
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
            <div id="Decodificar">
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
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder={
              isEncoding
                ? "Ingrese el código para codificar"
                : "Ingrese el texto codificado en Vigenère para decodificar"
            }
          />
          <div id="keyInput">
            <div class="form-group">
              <label for="key">Llave:</label>
              <input
                id="key"
                type="text"
                value={key}
                onChange={handleKeyChange}
              />
            </div>
          </div>

          <div id="submit">
            <button type="submit">
              {isEncoding ? "Codificar" : "Decodificar"}
            </button>
          </div>
        </form>
        <textarea readOnly value={output} />
        <br/>
        <p>
          El cifrado de Vigenère es un
          cifrado basado en diferentes series de caracteres o letras del cifrado
          César formando estos caracteres una tabla, llamada tabla de Vigenère,
          que se usa como clave. El cifrado de Vigenère es un cifrado por
          sustitución simple polialfabético.
        </p>
      </div>
    </div>
  );
};

export default Vigenere;
