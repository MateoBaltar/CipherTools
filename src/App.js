import Navbar from "../src/components/Navbar";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Cesar from "./components/Cesar";
import Base64 from "./components/Base64";
import Hexadecimal from "./components/Hexadecimal";

function App() {
  return (
    <div className="App">
    <header>
      <Navbar />
    </header>
      

      <Routes>
        <Route exact path={"/"} element={<Main />} />
        <Route path={"/Cesar"} element={<Cesar />} />
        <Route path={"/Base64"} element={<Base64 />} />
        <Route path={"/Hexadecimal"} element={<Hexadecimal />} />
      </Routes>
    </div>
  );
}

export default App;
