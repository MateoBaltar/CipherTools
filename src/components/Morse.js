import React, { useState } from "react";

const Morse = () => {
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
    const morseCode = {
      A: ".-",
      B: "-...",
      C: "-.-.",
      D: "-..",
      E: ".",
      F: "..-.",
      G: "--.",
      H: "....",
      I: "..",
      J: ".---",
      K: "-.-",
      L: ".-..",
      M: "--",
      N: "-.",
      O: "---",
      P: ".--.",
      Q: "--.-",
      R: ".-.",
      S: "...",
      T: "-",
      U: "..-",
      V: "...-",
      W: ".--",
      X: "-..-",
      Y: "-.--",
      Z: "--..",
      0: "-----",
      1: ".----",
      2: "..---",
      3: "...--",
      4: "....-",
      5: ".....",
      6: "-....",
      7: "--...",
      8: "---..",
      9: "----.",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      "'": ".----.",
      "!": "-.-.--",
      "/": "-..-.",
      "(": "-.--.",
      ")": "-.--.-",
      "&": ".-...",
      ":": "---...",
      ";": "-.-.-.",
      "=": "-...-",
      "+": ".-.-.",
      "-": "-....-",
      _: "..--.-",
      '"': ".-..-.",
      $: "...-..-",
      "@": ".--.-.",
    };

    let output = "";
    const trimInput = input.trim();

    if (isEncoding) {
      // Encode plaintext to Morse code
      for (let i = 0; i < trimInput.length; i++) {
        const char = trimInput.charAt(i).toUpperCase();
        if (morseCode[char]) {
          output += morseCode[char] + " ";
        } else if (char === " ") {
          output += " / ";
        }
      }
    } else {
      // Decode Morse code to plaintext
      const morseCodeReverse = Object.fromEntries(
        Object.entries(morseCode).map(([key, value]) => [value, key])
      );
      const words = trimInput.split(" / ");
      for (let i = 0; i < words.length; i++) {
        const letters = words[i].trim().split(" ");
        for (let j = 0; j < letters.length; j++) {
          const char = morseCodeReverse[letters[j]];
          if (char) {
            output += char;
          }
        }
        if (i !== words.length - 1) {
          output += " ";
        }
      }
    }
    output = output.charAt(0) + output.substring(1).toLocaleLowerCase();
    setOutput(output);
  };

  return (
    <div>
      <div className="container">
        <h1>Codificador/decodificador Morse</h1>
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
                : "Ingrese el texto codificado en cesar para decodificar"
            }
          />
          <div id="submit">
            <button type="submit">
              {isEncoding ? "Codificar" : "Decodificar"}
            </button>
          </div>
        </form>
        <textarea readOnly value={output} />
        <br />
        <p>
          El código morse, también conocido como alfabeto morse o clave morse es
          un sistema de representación de letras y números mediante señales
          emitidas de forma intermitente.
        </p>
      </div>
    </div>
  );
};
export default Morse;
