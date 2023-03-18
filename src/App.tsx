import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import NotFound from "./pages/404";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="*" element ={<NotFound/>}/>
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
export default WrappedApp;
