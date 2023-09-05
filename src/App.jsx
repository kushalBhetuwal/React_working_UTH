import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to ="/"><h1>Adopt me!</h1></Link>
      </header>
        <Routes>
        <Route path ="/details/:id" element ={<Details/>}/>
        <Route path = "/" element = {<SearchParams/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(<App/>);

export default App;
