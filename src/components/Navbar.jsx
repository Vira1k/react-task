import { Link } from "react-router-dom";

function Navbar({ cartCount = 0 }) {
  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo">
        <div className="logo-icon">
          🛍
        </div>

        <span>
          Shop<span>Verse</span>
        </span>
      </Link>

      {/* Navigation */}
      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/categories">
          Categories
        </Link>

        <Link to="/deals">
          Deals
        </Link>

        <Link to="/about">
          About
        </Link>

      </div>

      {/* Search */}
      <div className="navbar-search">
        <span>⌕</span>

        <input
          type="text"
          placeholder="Search products..."
        />
      </div>

      {/* Actions */}
      <div className="nav-actions">

        <button className="icon-button">
          ♡
        </button>

        <Link
          to="/cart"
          className="cart-button"
        >
          🛒

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </Link>

        <button className="icon-button">
          ♙
        </button>

      </div>

    </nav>
  );
}

export default Navbar;