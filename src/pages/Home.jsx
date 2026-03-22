import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from '../components/ProductCard';

// ✅ FIXED: Use public folder paths instead of imports
const banner1 = "/assets/banner1.jpg";
const banner2 = "/assets/banner2.jpg";
const banner3 = "/assets/banner3.jpg";
const banner4 = "/assets/banner4.jpg";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ FIXED: Use environment variable for API URL
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.slice(0, 4).map((item) => ({
          id: item.id,
          name: item.name,
          oldPrice: item.oldPrice,
          price: item.price,
          discount: item.discount,
          rating: item.rating,
          image: item.image
        }));
        setProducts(formatted);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Fetch Error: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3 className="text-center">Loading products...</h3>;
  }

  return (
    <div className="container">
      <div id="bannerCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="Banner 1" />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="Banner 2" />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="Banner 3" />
          </div>
          <div className="carousel-item">
            <img src={banner4} className="d-block w-100" alt="Banner 4" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Featured Products</h2>
        <Link to="/products" className="btn btn-outline-primary">
          View More Products
        </Link>
      </div>

      <div className="row">
        {products.map((product, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;