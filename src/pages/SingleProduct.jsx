import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, markRecentlyViewed, recentlyViewed, toggleWishlist, wishlist } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => String(item.id) === String(id));
        if (found) {
          setProduct(found);
          markRecentlyViewed(found);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id, markRecentlyViewed]);

  if (loading) {
    return <h3 className="text-center">Loading product...</h3>;
  }

  if (!product) {
    return (
      <div className="container text-center my-5">
        <h3>Product not found</h3>
        <button className="btn btn-secondary mt-3" onClick={() => navigate("/products")}>
          Back to Products
        </button>
      </div>
    );
  }

  const isFavorite = wishlist.some((item) => item.id === product.id);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid rounded border" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">Category: {product.category || "Uncategorized"}</p>
          <p>
            <span className="text-muted text-decoration-line-through me-2">₱{product.oldPrice}</span>
            <span className="fw-bold text-danger">₱{product.price}</span>
          </p>
          <p className="lead">{product.description || "Premium secondhand streetwear with lasting style."}</p>
          <div className="mb-3">
            {[...Array(5)].map((_, i) => (
              <i
                className={`fa-star ${i < product.rating ? 'fas' : 'far'} fa text-warning me-1`}
                key={i}
              ></i>
            ))}
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-add-cart" onClick={() => addToCart(product)}>
              <i className="fas fa-shopping-cart me-2"></i>Add to Cart
            </button>
            <button className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => toggleWishlist(product)}>
              <i className={isFavorite ? 'fas fa-heart' : 'far fa-heart'}></i>
              <span className="ms-2">{isFavorite ? 'In Wishlist' : 'Add to Wishlist'}</span>
            </button>
          </div>
        </div>
      </div>

      {recentlyViewed.length > 0 && (
        <div className="my-5">
          <h4>Recently Viewed</h4>
          <div className="row">
            {recentlyViewed.map((item) => (
              <div key={item.id} className="col-4 col-lg-2 mb-3">
                <div className="card p-2 small-card">
                  <img src={item.image} className="img-fluid" alt={item.name} />
                  <small className="d-block mt-2">{item.name}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;