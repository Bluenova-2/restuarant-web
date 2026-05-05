import React, { useEffect } from "react";
import Footer from "../components/Footer";
import useReveal from "../hooks/useReveal";






export default function Home() {
  useReveal();
  return (
    <>
      <div className="page">
        {/* HERO */}
        <div className="hero home-bg">
          <div className="overlay reveal">
            <h1 className="fade-up">Crunch Into Flavor</h1>
            <p className="fade-up delay-1">Taste the vibe. Feel the crunch.</p>
            <button className="cta scale-in delay-2">Order Now</button>
          </div>
        </div>

        {/* FEATURE STRIP */}
        <div className="feature-strip">
          <div className="feature reveal">🔥 Fresh Daily</div>
          <div className="feature reveal delay-1">🚀 Fast Delivery</div>
          <div className="feature reveal delay-2">⭐ Top Rated</div>
        </div>

        {/* CARDS */}
        <div className="section">
          <div className="card reveal">
            <h3>Signature Meals</h3>
            <p>Curated dishes designed to excite your taste buds.</p>
          </div>
          <div className="card reveal delay-1">
            <h3>Luxury Dining</h3>
            <p>Experience restaurant quality anywhere.</p>
          </div>
          <div className="card reveal delay-2">
            <h3>Chef Specials</h3>
            <p>Exclusive recipes from elite chefs.</p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="cta-section reveal">
          <h2>Ready to eat?</h2>
          <button className="cta">Browse Menu</button>
        </div>
      </div>
      <Footer />
    </>
  );
}