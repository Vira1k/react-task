import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  const originalPrice = Math.round(
    product.price /
      (1 - product.discountPercentage / 100)
  );

  return (
    <article className="product-card">

      {/* =========================================
          PRODUCT IMAGE
      ========================================= */}

      <div className="product-image">

        {/* DISCOUNT */}
        <span className="discount-badge">
          -{Math.round(product.discountPercentage)}%
        </span>

        {/* WISHLIST */}
        <button
          className="wishlist-button"
          type="button"
          aria-label={`Add ${product.title} to wishlist`}
        >
          ♡
        </button>

        {/* IMAGE */}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
          />
        </Link>

      </div>


      {/* =========================================
          PRODUCT INFORMATION
      ========================================= */}

      <div className="product-info">

        {/* CATEGORY */}

        <p className="product-category">
          {product.category}
        </p>


        {/* PRODUCT TITLE */}

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

          <span className="stars">
            ★
          </span>

          <strong>
            {product.rating.toFixed(1)}
          </strong>

          <span className="review-count">
            ({Math.floor(product.rating * 25) + 10})
          </span>

        </div>


        {/* BOUGHT / STOCK */}

        <p className="product-bought">

          {product.stock > 50
            ? "50+ bought in past month"
            : `${product.stock} available`}

        </p>


        {/* PRICE */}

        <div className="product-price">

          <strong>
            ₹{product.price}
          </strong>

          <span>
            M.R.P. ₹{originalPrice}
          </span>

          <small>
            ({Math.round(product.discountPercentage)}% off)
          </small>

        </div>


        {/* DELIVERY */}

        <p className="product-delivery">

          <strong>
            FREE delivery
          </strong>{" "}
          tomorrow

        </p>


        {/* STOCK */}

        <p
          className={
            product.stock > 0
              ? "stock available"
              : "stock unavailable"
          }
        >
          {product.stock > 0
            ? "✓ In Stock"
            : "Out of Stock"}
        </p>


        {/* ADD TO CART */}

        <button
          className="add-cart-btn"
          type="button"
          onClick={() => onAddToCart(product)}
          disabled={product.stock <= 0}
        >
          Add to Cart
        </button>

      </div>

    </article>
  );
}

export default ProductCard;