import React, { useState } from "react";
import { decodeCaesarCipher, caesarEncode } from "./../Scripts/CesarTool";
import axios from "axios";

const Cesar = () => {
  const [shift, setShift] = useState(0);
  const [bruteForce, setBruteForce] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isEncoding, setIsEncoding] = useState(true);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleOptionChange = (event) => {
    setIsEncoding(event.target.value === "encode");
  };

  const isRealWord = async (word) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    
    const response = await axios.get(
      `https://www.dictionaryapi.com/api/v3/references/spanish/json/${word}?key=${apiKey}`
    );

    const data = response.data;
    if (typeof data[0] === "object") {
      return true;
    } else {
      try {
        return new URL(word).hostname.length > 1;
      } catch (error) {
        return false;
      }
    }
  };

  function containsWhitespace(str) {
    return /\s/.test(str);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEncoding) {
      setOutput(caesarEncode(input, shift));
    } else {
      if (bruteForce) {
        let results = await decodeCaesarCipher(input, 0, true);
        const sortResults = [];
        for (let i = 0; i < results.length; i++) {
          if (containsWhitespace(results[i])) {
            console.log("contains white space");
            console.log(results);
            let words = results[i].split(" ");
            if (await isRealWord(words[0])) {
              sortResults.unshift(results[i]);
            } else {
              sortResults.push(results[i]);
            }
          } else if (await isRealWord(results[i])) {
            sortResults.unshift(results[i]);
          } else {
            sortResults.push(results[i]);
          }
        }
        setOutput(sortResults[0]);
      } else {
        const decodedText = decodeCaesarCipher(input, shift);
        setOutput(decodedText);
      }
    }
  };

  return (
    <div>
      <div className="container">
      <h1>Codificador/decodificador Cesar</h1>
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
        <div id="rotacion">
          <div class="form-group">
            <label for="shift">Rotación:</label>
            <input
              id="shift"
              type="number"
              value={shift}
              onChange={(e) => setShift(parseInt(e.target.value))}
            />
          </div>
        </div>
        {!isEncoding && (
          <div class="form-group">
            <label class="checkbox">
              <input
                type="checkbox"
                class="checkbox-input"
                checked={bruteForce}
                onChange={(e) => setBruteForce(e.target.checked)}
              />
              <span class="checkbox-label">Forzar resultado</span>
            </label>
          </div>
        )}
        <div id="submit">
          <button type="submit">
            {isEncoding ? "Codificar" : "Decodificar"}
          </button>
        </div>
      </form>
      <textarea readOnly value={output} />
      <br/>
      <p>
        En criptografía, el cifrado César, también conocido como cifrado por
        desplazamiento, código de César o desplazamiento de César, es una de las
        técnicas de cifrado más simples y más usadas. Es un tipo de cifrado por
        sustitución en el que una letra en el texto original es reemplazada por
        otra letra que se encuentra un número fijo de posiciones más adelante en
        el alfabeto. Por ejemplo, con un desplazamiento de 3, la A sería
        sustituida por la D (situada 3 lugares a la derecha de la A), la B sería
        reemplazada por la E, etc. Este método debe su nombre a Julio César, que
        lo usaba para comunicarse con sus generales.
      </p>
    </div>
    </div>
    
  );
};
export default Cesar;
