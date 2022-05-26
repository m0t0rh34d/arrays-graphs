import Header from "./pages/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ArrayGenerator from "./pages/ArrayGenerator.tsx";
import Home from "./pages/Home.tsx";
import "./styles/App.css"
import Graph from './pages/Graph';
import Graph2 from './pages/Graph2';



function App() {
  return (
<>
    <BrowserRouter>

    <div className="Wrapper">

      <Header className="App-header" />


      <Routes>
          <Route path="home" element={<Home />} />
          <Route path="arraygenerator" element={<ArrayGenerator />} />
          <Route path="graph" element={<Graph />} />
          <Route path="graph2" element={<Graph2 />} />
      </Routes>
      </div>



    </BrowserRouter>
  </>
  );
}

export default App;
