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
        <div>
          <button type="submit">{isEncoding ? "Codificar" : "Decodificar"}</button>
        </div>
      </form>
      <div>
        <textarea readOnly value={output} />
      </div>
    </div>
  );
};

export default Base64;
