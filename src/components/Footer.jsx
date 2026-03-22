const Footer = () => {
  return (
    <footer className="footer-custom py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About ThriftEase</h5>
            <p className="small">
              ThriftEase transforms preloved streetwear into daily style statements. 
              Fast, fun, and eco-friendly fashion for every vibe.
            </p>
            <a href="/about" className="text-light text-decoration-none">Discover Our Story</a>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <div className="p-2 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(170, 120, 233, 0.5)' }}>
              <p className="mb-1 small">📧 hello@thriftease.com</p>
              <p className="mb-1 small">📞 +63 912 345 6789</p>
              <p className="mb-0 small">📍 Quezon City, PH</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <p className="small">Live your coolest fits — share with #ThriftEaseStyle</p>
            <div className="social-icons mb-3">
              <i className="fab fa-facebook me-2"></i>
              <i className="fab fa-instagram me-2"></i>
              <i className="fab fa-twitter me-2"></i>
              <i className="fab fa-tiktok"></i>
            </div>
            <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
            <p className="small">Subscribe and get 10% off your next purchase</p>
            <div className="d-flex gap-2">
              <input className="form-control form-control-sm" style={{ maxWidth: '200px' }} type="email" placeholder="you@example.com" />
              <button className="btn btn-sm btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <small>© 2026 ThriftEase — Style that lived before you.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;