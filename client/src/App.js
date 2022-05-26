import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";

import Header from "./components/header";
import Pocetna from "./pages/pocetna";
import Parfem from "./pages/parfemi";
import Puder from "./pages/puderi";
import Lak from "./pages/lakovi";
import Ruz from "./pages/ruzevi";
import Maskara from "./pages/maskare";

import AddParfem from "./components/addComponent/addParfem";
import AddPuder from "./components/addComponent/addPuder";
import AddLak from "./components/addComponent/addLak";
import AddRuz from "./components/addComponent/addRuz";
import AddMaskara from "./components/addComponent/addMaskara";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Pocetna />} />
        <Route path="/parfem" exact element={<Parfem />} />
        <Route path="/puder" exact element={<Puder />} />
        <Route path="/lak" exact element={<Lak />} />
        <Route path="/ruz" exact element={<Ruz />} />
        <Route path="/maskara" exact element={<Maskara />} />
        <Route path="/parfem/dodaj" element={<AddParfem />} />
        <Route path="/puder/dodaj" element={<AddPuder />} />
        <Route path="/lak/dodaj" element={<AddLak />} />
        <Route path="/ruz/dodaj" element={<AddRuz />} />
        <Route path="/maskara/dodaj" element={<AddMaskara />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
