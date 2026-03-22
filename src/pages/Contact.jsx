const Contact = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="text-center lead mb-4">
        Have a question or product request? Send us a message and our support team will get back to you within 1 business day.
      </p>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control form-input" placeholder="Your name" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control form-input" placeholder="Your email" />
              </div>
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">Message</label>
              <textarea className="form-control form-input" rows="5" placeholder="Tell us what you need..."></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-contact">
                <i className="fas fa-paper-plane me-2"></i> Send Message
              </button>
            </div>
          </form>
          <div className="mt-4 row text-center text-white">
            <div className="col-md-4 mb-2">
              <h6>📍 Location</h6>
              <small>Quezon City, PH</small>
            </div>
            <div className="col-md-4 mb-2">
              <h6>✉️ Email</h6>
              <small>hello@thriftease.com</small>
            </div>
            <div className="col-md-4 mb-2">
              <h6>📞 Phone</h6>
              <small>+63 912 345 6789</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;