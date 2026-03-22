import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Header = ({ isDarkMode, toggleTheme }) => {
  const { cart } = useContext(CartContext);

  return (
    <header className="py-4 text-center header-custom position-relative">
      <div className="container">
        <h1 className="mb-1 brand-name">ThriftEase</h1>
        <p className="mb-2 brand-tag">The ultimate vintage streetwear marketplace</p>
        <p className="small text-light">
          Explore handpicked retro finds with the thrill of exclusive drops!
        </p>
      </div>
      <div className="d-lg-none position-absolute top-0 end-0 p-3">
        <div className="d-flex gap-2">
          <button className="btn btn-sm btn-outline-light" onClick={toggleTheme}>
            {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
          <Link className="btn btn-sm btn-outline-light position-relative" to="/cart">
            <i className="fa fa-shopping-cart"></i>
            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
              {cart.reduce((sum, item) => sum + item.qty, 0)}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;