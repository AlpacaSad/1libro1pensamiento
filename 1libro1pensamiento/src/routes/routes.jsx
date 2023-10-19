import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MadameBobary_001 from "../pages/001-MadameBobary";
import Landing from "../pages/landing";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" exact element = { <Landing/> } />
        <Route path = "/001" exact element = { <MadameBobary_001/> } />
        <Route path = "*" element={<div className="main-header">Hola, no encontramos la página que estas buscando :c</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;