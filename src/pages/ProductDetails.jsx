import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productApi";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProduct();
  }, [id]);

  async function loadProduct() {
    try {
      setLoading(true);
      setError("");

      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      setError("Unable to load product.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <main className="page-message">
        <h2>Loading product...</h2>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="page-message">
        <h2>{error || "Product not found"}</h2>
      </main>
    );
  }

  return (
    <main className="product-details">
      <div className="product-details-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="product-details-info">
        <p className="product-category">{product.category}</p>

        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <div className="product-rating">
          ⭐ {product.rating}
        </div>

        <h2>₹{product.price}</h2>

        <p>
          Discount: {Math.round(product.discountPercentage)}% OFF
        </p>

        <p>
          {product.stock > 0
            ? `In Stock (${product.stock})`
            : "Out of Stock"}
        </p>

        <button
          className="add-cart-btn"
          disabled={product.stock <= 0}
        >
          🛒 Add to Cart
        </button>
      </div>
    </main>
  );
}

export default ProductDetails;