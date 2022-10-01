import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>
    <NavBar />
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/actors" component={Actors} />
      <Route path="/directors" component={Directors} />
      <Route path="/movies" component={Movies} />
    </Routes>
  </div>;
}

export default App;