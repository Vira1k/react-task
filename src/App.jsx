import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar cartCount={3} />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/categories"
          element={<Categories />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/search"
          element={<SearchResults />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* Any invalid URL */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;