import { useEffect, useState } from "react";
import { getProducts } from "../services/productApi";
import ProductList from "../components/ProductList";
import Filters from "../components/Filters";

function Home() {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setLoading(true);
      setError("");

      const data = await getProducts();

      setProducts(data);
    } catch (error) {
      setError("Unable to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleAddToCart(product) {
    console.log("Added to cart:", product.title);
  }

  // =========================
  // CATEGORIES
  // =========================

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  // =========================
  // SEARCH + CATEGORY
  // =========================

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  // =========================
  // SORT
  // =========================

  if (sort === "price-low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "price-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  if (sort === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating
    );
  }

  if (sort === "name") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.title.localeCompare(b.title)
    );
  }

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="page-message">
        <h2>Loading products...</h2>
      </div>
    );
  }

  // =========================
  // ERROR
  // =========================

  if (error) {
    return (
      <div className="page-message">
        <h2>{error}</h2>

        <button onClick={loadProducts}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <main className="home">

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-small">
            WELCOME TO SHOPVERSE
          </p>

          <h1>
            Discover Amazing Products
          </h1>

          <p className="hero-description">
            Shop the latest products at the best prices.
          </p>

        </div>

      </section>


      {/* =========================
          FILTER SECTION
      ========================= */}

      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={categories}
      />


      {/* =========================
          PRODUCT COUNT
      ========================= */}

      <div className="results-info">

        <span>
          Showing {filteredProducts.length} products
        </span>

        {(search ||
          category !== "all" ||
          sort !== "default") && (

          <button
            onClick={() => {
              setSearch("");
              setCategory("all");
              setSort("default");
            }}
          >
            Clear Filters
          </button>

        )}

      </div>


      {/* =========================
          PRODUCTS
      ========================= */}

      <ProductList
        products={filteredProducts}
        onAddToCart={handleAddToCart}
      />

    </main>
  );
}

export default Home;