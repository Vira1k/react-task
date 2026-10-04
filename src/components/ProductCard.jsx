import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">

      {/* IMAGE SECTION */}
      <div className="product-image">

        <Link to={`/product/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
          />
        </Link>

        {/* DISCOUNT */}
        <span className="discount-badge">
          -{Math.round(product.discountPercentage)}%
        </span>

        {/* WISHLIST */}
        <button
          className="wishlist-button"
          type="button"
          aria-label="Add to wishlist"
        >
          ♡
        </button>

      </div>

      {/* PRODUCT INFORMATION */}
      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="product-title-link"
        >
          <h3 className="product-title">
            {product.title}
          </h3>
        </Link>

        {/* RATING */}
        <div className="product-rating">
          <span>★</span> {product.rating.toFixed(1)}
        </div>

        {/* PRICE */}
        <div className="product-price">

          <strong>
            ₹{product.price}
          </strong>

          <span>
            ₹
            {Math.round(
              product.price /
                (1 - product.discountPercentage / 100)
            )}
          </span>

        </div>

        {/* ADD TO CART */}
        <button
          className="add-cart-btn"
          onClick={() => onAddToCart(product)}
          disabled={product.stock <= 0}
        >
          {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>

      </div>

    </article>
  );
}

export default ProductCard;