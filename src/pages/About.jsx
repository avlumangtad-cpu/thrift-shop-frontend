const About = () => {
  return (
    <div className="header-custom py-4 mb-4">
      <h2 className="text-white text-center mb-3">About Thrift Express</h2>
      <div className="container pb-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="lead">
              <strong className="text-primary">Thrift Express</strong> is your destination for curated,
              preloved fashion at honest prices. We handpick quality secondhand pieces so you can
              <span className="fw-semibold"> look great, spend less, </span> and support sustainable style.
            </p>
            <p>
              Every item is inspected for quality and listed with care. Because our pieces are one-of-a-kind,
              collections change frequently—so check back often or follow us for the latest drops.
            </p>
            <div className="row g-3 mt-3">
              <div className="col-md-4">
                <div className="about-card h-100 p-3 border rounded-3">
                  <h6 className="text-primary fw-bold mb-2">Curated Finds</h6>
                  <p className="mb-0">Handpicked preloved items with clear condition notes.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-card h-100 p-3 border rounded-3">
                  <h6 className="text-success fw-bold mb-2">Sustainable Choice</h6>
                  <p className="mb-0">Extend the life of clothing and reduce fashion waste.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-card h-100 p-3 border rounded-3">
                  <h6 className="text-warning fw-bold mb-2">Budget-Friendly</h6>
                  <p className="mb-0">Quality styles without the premium price tag.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 d-flex flex-wrap gap-2">
              <a href="/products" className="btn btn-primary about-cta">Shop New Drops</a>
              <a href="/policies" className="btn btn-outline-dark about-link">Read Our Policies</a>
              <a href="/contact" className="btn btn-outline-secondary about-link">Contact Us</a>
            </div>
            <div className="mt-5 p-4 border rounded-3 about-panel">
              <h5 className="fw-bold mb-2">Our Mission</h5>
              <p className="mb-0">
                To make thrifting simple, reliable, and exciting—bringing you great pieces while
                promoting mindful consumption. Every purchase supports a circular fashion future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;