import React, { useState } from "react";
import { decodeCaesarCipher } from "./../Scripts/CesarTool";
import axios from "axios";

const Cesar = () => {
  const [ciphertext, setCiphertext] = useState("");
  const [shift, setShift] = useState(0);
  const [bruteForce, setBruteForce] = useState(false);
  const [plaintext, setPlaintext] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isRealWord = async (word) => {
    const apiKey = "94c347f8-19fe-4818-a189-8cfb2c6b348d";

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
    setSubmitting(true);
    event.preventDefault();
    if (bruteForce) {
      let results = await decodeCaesarCipher(ciphertext, 0, true);
      const sortResults = [];
      for (let i = 0; i < results.length; i++) {
        if (containsWhitespace(results[i])) {
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
      sortResults.splice(4, sortResults.length - 1);
      setSubmitting(false);
      setPlaintext(
        sortResults.map((result) => (
          <li key={result} style={{ listStyle: "none" }}>
            {result}
          </li>
        ))
      );
    } else {
      const decodedText = decodeCaesarCipher(ciphertext, shift);
      setSubmitting(false);
      setPlaintext(decodedText);
    }
  };

  return (
    <div class="form-container">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="ciphertext">Código cifrado:</label>
          <input
            id="ciphertext"
            type="text"
            value={ciphertext}
            onChange={(e) => setCiphertext(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="shift">Rotación:</label>
          <input
            id="shift"
            type="number"
            value={shift}
            onChange={(e) => setShift(parseInt(e.target.value))}
          />
        </div>
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
        <button class="submit-button" type="submit">
          Decifrar
        </button>
      </form>
      <div class="results-container">
        {submitting ? (
          <div class="loading">
            <img
              id="loading-image"
              src="https://i.imgur.com/L28drxo.gif"
              alt="Loading animation"
            />
            <p>Decifrando...</p>
          </div>
        ) : (
          <>
            <p class="result-label">Resultado:</p>
            <ol class="result-list">
              <li class="result-item">{plaintext}</li>
            </ol>
          </>
        )}
      </div>
    </div>
  );
};
export default Cesar;
