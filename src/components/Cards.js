import { Link } from "react-router-dom";
export const Cards = () => {
  return (
    <div class="album py-5 bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <Link to="/Cesar">
                <img
                  class="card-img-top"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Caesar_cipher_left_shift_of_3.svg"
                  alt="Card image cap"
                />
              </Link>

              <div class="card-body">
                <p class="card-text">Cifrado César</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <Link to="/Base64">
                <img
                  class="card-img-top"
                  src="https://www.redhat.com/sysadmin/sites/default/files/styles/embed_large/public/2022-08/30_printable_base64.png?itok=3CDo39M5"
                  alt="Card image cap"
                />
              </Link>
              <div class="card-body">
                <p class="card-text">Base64</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <Link to="/Hexadecimal">
                <img
                  class="card-img-top"
                  src="https://cursos.mcielectronics.cl/wp-content/uploads/2022/08/1-3.png"
                  alt="Card image cap"
                />
              </Link>
              <div class="card-body">
                <p class="card-text">Hexadecimal</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <Link to="/Vigenere">
                <img
                  class="card-img-top"
                  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Vigen%C3%A8re_square_shading.png"
                  alt="Card image cap"
                />
              </Link>
              <div class="card-body">
                <p class="card-text">Vigenere</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <Link to="/Morse">
                <img
                  class="card-img-top"
                  src="https://www.etsit.upm.es/fileadmin/documentos/biblioteca/biblioteca/galerias_fotograficas/Exposicion_Museo/codigo-morse_2.jpg"
                  alt="Card image cap"
                />
              </Link>
              <div class="card-body">
                <p class="card-text">Morse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
