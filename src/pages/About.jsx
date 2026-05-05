import React, { useEffect } from "react";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";


export default function About() {
  useReveal();
  return (
    <>
      <div className="page">
        <div className="section">
          <div className="card reveal">Mission</div>
          <div className="card reveal">Vision</div>
          <div className="card reveal">Values</div>
        </div>
      </div>
      <Footer />
    </>
  );
}