import "./App.css";
import { Button } from "@mui/material";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import routes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={<Layout component={route.element} />}
              />
            );
          })}
          {/* <Route path="/" element={<Layout component={<Home />} />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
