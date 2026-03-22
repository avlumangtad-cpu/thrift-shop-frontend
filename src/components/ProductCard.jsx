import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useContext(CartContext);
  const isFavorite = wishlist.some((item) => item.id === product.id);

  return (
    <div className="card h-100 shadow-sm product-card-animated">
      <div className="product-img-wrapper position-relative">
        {product.discount && (
          <div className="sale-badge">-{product.discount}%</div>
        )}
        <button
          className={`btn btn-sm wishlist-btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
          onClick={() => toggleWishlist(product)}
          title={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <i className={isFavorite ? 'fas fa-heart' : 'far fa-heart'}></i>
        </button>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            className="card-img-top product-img"
            alt={product.name}
          />
        </Link>
      </div>
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.name}</h6>
        <div className="mb-2 text-warning">
          {[...Array(5)].map((star, index) => (
            <i
              key={index}
              className={`fa-star ${index < product.rating ? 'fas' : 'far'} fa`}
            ></i>
          ))}
        </div>
        <div className="mb-2">
          <span className="text-muted text-decoration-line-through me-2">
            ₱{product.oldPrice}
          </span>
          <span className="fw-bold text-danger">₱{product.price}</span>
        </div>
        <button
          className="btn btn-add-cart mt-auto"
          onClick={() => addToCart(product)}
        >
          <i className="fas fa-shopping-cart me-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;