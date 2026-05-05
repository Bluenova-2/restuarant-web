import React from "react";




export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>FoodieHub</h3>
          <p>Bold flavors. Premium experience.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <p>Home</p><p>About</p><p>Contact</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>support@foodiehub.com</p>
          <p>+234 000 0000</p>
        </div>
      </div>
      <p className="copyright">© 2026 FoodieHub</p>
    </footer>
  );
}