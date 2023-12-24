import React from "react";
import { useRoutes } from "react-router-dom";
import routs from "./routs";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/footer/Footer";

export default function App() {
  const rout = useRoutes(routs);

  return (
    <>
      <NavBar />
      {rout}
      <Footer />
    </>
  );
}
