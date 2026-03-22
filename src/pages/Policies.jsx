const Policies = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Store Policies & Terms</h2>
      <p>
        Welcome to <strong className="text-primary">Thrift Express</strong>. By shopping with us,
        you agree to the policies below. These guidelines ensure a smooth, fair,
        and sustainable shopping experience for every customer.
      </p>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong className="text-dark">Preloved Condition:</strong> All thrift items are preloved and
          may show minor signs of wear.
        </li>
        <li className="list-group-item">
          <strong className="text-danger">Final Sale:</strong> All sales are final unless the item is proven defective
          upon arrival.
        </li>
        <li className="list-group-item">
          <strong className="text-primary">Shipping (PH):</strong> Orders typically arrive within
          <span className="fw-semibold"> 3–5 business days</span>.
        </li>
        <li className="list-group-item">
          <strong className="text-primary">International Shipping:</strong> May take
          <span className="fw-semibold"> 10–20 business days</span> depending on destination.
        </li>
        <li className="list-group-item">
          <strong className="text-warning">Unique Items:</strong> All products are one-of-a-kind and may sell out
          without prior notice.
        </li>
        <li className="list-group-item">
          <strong className="text-success">Payment Methods:</strong> We accept
          GCash, PayPal, and major credit/debit cards.
        </li>
        <li className="list-group-item">
          <strong className="text-danger">Defective Item Claims:</strong> Must be reported within
          <span className="fw-semibold"> 48 hours</span> of delivery.
        </li>
        <li className="list-group-item">
          <strong className="text-dark">Product Images:</strong> Photos are taken in natural lighting;
          colors may vary slightly depending on screen display.
        </li>
        <li className="list-group-item">
          <strong className="text-primary">Privacy:</strong> Customer information is kept confidential and
          will not be shared without consent.
        </li>
        <li className="list-group-item">
          <strong className="text-danger">Fraud Prevention:</strong> Fraudulent transactions or abusive behavior may
          result in order cancellation or account suspension.
        </li>
      </ul>
      <p className="mt-4">
        Thank you for supporting <strong className="text-primary">Thrift Express</strong>. Your purchase promotes
        sustainable fashion and gives preloved clothing a second life.
      </p>
    </div>
  );
};

export default Policies;