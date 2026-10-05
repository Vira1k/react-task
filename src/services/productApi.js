const API_URL = "https://dummyjson.com";

// ==========================================
// GET 300+ PRODUCTS
// ==========================================

export async function getProducts() {
  const response = await fetch(
    `${API_URL}/products?limit=0`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  const products = data.products;

  // Create 300+ products from API data
  const expandedProducts = [];

  for (let i = 0; i < 400; i++) {
    const original = products[i % products.length];

    expandedProducts.push({
      ...original,

      // Give every generated item a unique React key/id
      id: i + 1,

      // Keep original title but identify generated variants
      title:
        i < products.length
          ? original.title
          : `${original.title} - Edition ${Math.floor(i / products.length) + 1}`,
    });
  }

  return expandedProducts;
}


// ==========================================
// GET CATEGORIES
// ==========================================

export async function getCategories() {
  const response = await fetch(
    `${API_URL}/products/categories`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return await response.json();
}


// ==========================================
// GET SINGLE PRODUCT
// ==========================================

export async function getProductById(id) {
  const response = await fetch(
    `${API_URL}/products/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return await response.json();
}