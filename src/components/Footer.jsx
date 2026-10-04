import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      {/* =================================================
          FOOTER MAIN
      ================================================= */}

      <div className="footer-main">

        {/* BRAND */}

        <div className="footer-brand">

          <h2>
            Shop<span>Verse</span>
          </h2>

          <p>
            Discover quality products at great prices.
            Shop smarter, faster and easier with
            ShopVerse.
          </p>

          <div className="footer-badges">

            <span>
              ✓ Secure Shopping
            </span>

            <span>
              ✓ Easy Returns
            </span>

            <span>
              ✓ Fast Delivery
            </span>

          </div>

        </div>


        {/* SHOP */}

        <div className="footer-column">

          <h3>
            Shop
          </h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/categories">
            Categories
          </Link>

          <Link to="/deals">
            Deals
          </Link>

          <Link to="/cart">
            Cart
          </Link>

        </div>


        {/* CUSTOMER CARE */}

        <div className="footer-column">

          <h3>
            Customer Care
          </h3>

          <a href="#">
            Help Center
          </a>

          <a href="#">
            Shipping & Delivery
          </a>

          <a href="#">
            Returns & Refunds
          </a>

          <a href="#">
            Contact Us
          </a>

        </div>


        {/* ABOUT */}

        <div className="footer-column">

          <h3>
            About
          </h3>

          <a href="#">
            About ShopVerse
          </a>

          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms & Conditions
          </a>

          <a href="#">
            FAQs
          </a>

        </div>

      </div>


      {/* =================================================
          NEWSLETTER
      ================================================= */}

      <div className="footer-newsletter">

        <div className="newsletter-content">

          <h3>
            Stay in the loop
          </h3>

          <p>
            Get updates about new products
            and special offers.
          </p>

        </div>


        <div className="newsletter-box">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>


      {/* =================================================
          FOOTER BOTTOM
      ================================================= */}

      <div className="footer-bottom">

        <span>
          © 2026 ShopVerse. All rights reserved.
        </span>

        <span>
          Made with ♥ for better shopping
        </span>

      </div>

    </footer>
  );
}

export default Footer;