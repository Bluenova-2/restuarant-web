import React, { useEffect } from "react";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";



export default function Contact() {
  useReveal();
  return (
    <>
      <div className="page center">
        <form className="form glass reveal">
          <h2>Contact Us</h2>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
