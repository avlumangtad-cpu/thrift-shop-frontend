import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sortBy, setSortBy] = useState("price-asc");
  const [categories, setCategories] = useState(["All"]);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          name: item.name,
          oldPrice: item.oldPrice,
          price: item.price,
          discount: item.discount,
          rating: item.rating,
          image: item.image,
          category: item.category || "Uncategorized"
        }));

        setProducts(formatted);
        const uniqueCategories = ["All", ...new Set(formatted.map((p) => p.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Fetch Error: ", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setVisibleCount(8);
  }, [searchTerm, categoryFilter, minPrice, maxPrice, sortBy]);

  const filteredSortedProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
      const matchesCategory = categoryFilter === "All" || product.category === categoryFilter;
      const matchesMin = product.price >= minPrice;
      const matchesMax = product.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesMin && matchesMax;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

    return sorted;
  }, [products, searchTerm, categoryFilter, minPrice, maxPrice, sortBy]);

  useEffect(() => {
    const onScroll = () => {
      if (loading || loadingMore) return;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 150) {
        if (visibleCount < filteredSortedProducts.length) {
          setLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(filteredSortedProducts.length, prev + 8));
            setLoadingMore(false);
          }, 350);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [loading, loadingMore, visibleCount, filteredSortedProducts.length]);

  if (loading) {
    return (
      <div className="container">
        <h3 className="text-center mb-3">Loading products...</h3>
        <div className="row">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card skeleton-card p-3" style={{ minHeight: "260px" }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const totalCount = products.length;
  const displayCount = filteredSortedProducts.length;
  const visibleProducts = filteredSortedProducts.slice(0, visibleCount);
  const bestDeal = products.reduce((prev, curr) => (curr.discount > prev.discount ? curr : prev), { discount: 0 });

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-3 mb-4">
          <div className="p-3 border rounded-3 bg-light" style={{ position: "sticky", top: "90px" }}>
            <h5>Categories</h5>
            <ul className="list-group">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={`list-group-item ${categoryFilter === cat ? "active" : ""}`}
                  onClick={() => setCategoryFilter(cat)}
                  style={{ cursor: "pointer" }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-lg-10 col-md-9">
          <h2 className="mb-3">All Products</h2>
          <p className="lead mb-1">{`Showing ${displayCount} / ${totalCount} products`}</p>
          {bestDeal.discount > 0 && <p className="text-warning">{`Hot deal: ${bestDeal.name} at ${bestDeal.discount}% off!`}</p>}

          <div className="row g-2 mb-3">
            <div className="col-md-3">
              <input type="search" className="form-control" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-between mb-1">
                <small>Price range: ₱{minPrice} - ₱{maxPrice}</small>
                <small>0 - 10000</small>
              </div>
              <div className="d-flex gap-2">
                <input
                  type="range"
                  className="form-range"
                  min={0}
                  max={10000}
                  value={minPrice}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    setMinPrice(value > maxPrice ? maxPrice : value);
                  }}
                />
                <input
                  type="range"
                  className="form-range"
                  min={0}
                  max={10000}
                  value={maxPrice}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    setMaxPrice(value < minPrice ? minPrice : value);
                  }}
                />
              </div>
            </div>
            <div className="col-md-3">
              <select className="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="name">Product Name</option>
                <option value="rating">Rating</option>
              </select>
            </div>
            <div className="col-md-2">
              <button className="btn btn-secondary w-100" onClick={() => {
                setSearchTerm("");
                setCategoryFilter("All");
                setMinPrice(0);
                setMaxPrice(100000);
                setSortBy("price-asc");
              }}>Reset</button>
            </div>
          </div>

          {displayCount === 0 ? (
            <div className="alert alert-warning">No products match your filter. Try another keyword or range.</div>
          ) : (
            <div className="row">
              {visibleProducts.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

          {loadingMore && <div className="text-center text-muted my-3">Loading more products...</div>}
          {visibleCount >= displayCount && displayCount > 0 && <div className="text-center text-success my-3">You've reached the end of the list.</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductList;