import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const { cart, wishlist } = useContext(CartContext);

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark nav-custom-dark' : 'navbar-light nav-custom'}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">ThriftEase</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">Wishlist</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/policies">Policies</Link>
            </li>
            <li className="nav-item ms-2">
              <button className="btn btn-sm btn-outline-light" onClick={toggleTheme}>
                {isDarkMode ? <i className="fas fa-sun me-1"></i> : <i className="fas fa-moon me-1"></i>}
                {isDarkMode ? 'Light' : 'Dark'}
              </button>
            </li>
            <li className="nav-item position-relative ms-3">
              <Link className="nav-link" to="/cart">
                <i className="fa fa-shopping-cart"></i>
                <span className="badge bg-danger ms-1">
                  {cart.reduce((sum, item) => sum + item.qty, 0)}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;