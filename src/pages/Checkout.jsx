import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    payment: 'cod'
  });
  const [submitted, setSubmitted] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address || !form.phone) {
      alert("Please complete all fields");
      return;
    }

    setFinalTotal(total);
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mt-5 text-center">
        <h2>Order Confirmed!</h2>
        <p>Thank you, {form.name}. Your order has been placed.</p>
        <p>Total Amount: ₱{finalTotal.toFixed(2)}</p>
        <div className="mt-4 gap-2 d-flex justify-content-center">
          <Link to="/" className="btn btn-primary">Home</Link>
          <Link to="/products" className="btn btn-outline-primary">Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <h4 className="mb-4">Customer Information</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Name</label>
              <input type="text" name="name" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input type="email" name="email" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label>Address</label>
              <textarea name="address" className="form-control" onChange={handleChange}></textarea>
            </div>
            <div className="mb-3">
              <label>Phone</label>
              <input type="text" name="phone" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label>Payment Method</label>
              <select name="payment" className="form-control" onChange={handleChange}>
                <option value="cod">Cash on Delivery</option>
                <option value="gcash">GCash</option>
                <option value="card">Credit Card</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Place Order</button>
          </form>
        </div>
        <div className="col-md-6">
          <h4 className="mb-4">Order Summary</h4>
          {cart.map(item => (
            <div key={item.id} className="d-flex justify-content-between mb-2">
              <span>{item.name} × {item.qty}</span>
              <span>₱{(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <hr />
          <p>Subtotal: ₱{subtotal.toFixed(2)}</p>
          <p>Tax (12%): ₱{tax.toFixed(2)}</p>
          <h5>Total: ₱{total.toFixed(2)}</h5>
        </div>
      </div>
    </div>
  );
};

export default Checkout;