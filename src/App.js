import "./App.css";
import { Button } from "@mui/material";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout component={<Home />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
