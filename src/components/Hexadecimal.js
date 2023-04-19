import React from 'react'

const Hexadecimal = () => {
  return (
    
    <div class="container-hexadecimal">
      <h1>Hexadecimal Encoder/Decoder</h1>
      <form>
        <div class="form-group">
          <label for="hexInput">Input</label>
          <input type="text" id="hexInput" name="hexInput" placeholder="Enter hexadecimal"/>
        </div>
        <div class="form-group">
          <label for="encodeDecode">Encode/Decode</label>
          <select id="encodeDecode" name="encodeDecode">
            <option value="decode">Decode</option>
            <option value="encode">Encode</option>
          </select>
        </div>
        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div class="result">
        <label for="hexOutput">Output</label>
        <span id="hexOutput"></span>
      </div>
    </div>
  )
}

export default Hexadecimal