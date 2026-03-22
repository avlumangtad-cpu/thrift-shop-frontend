import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(CartContext);

  return (
    <div className="container">
      <h2 className="mb-4">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="alert alert-info">No favorites yet. Add some from the products page!</div>
      ) : (
        <div className="row">
          {wishlist.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <ProductCard product={product} />
              <button
                className="btn btn-sm btn-outline-danger mt-2"
                onClick={() => removeFromWishlist(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;