import { useEffect, useState } from "react";

const Sidebar = () => {
  const [categories, setCategories] = useState([
    "Electronics",
    "Clothing",
    "Home",
    "Books",
  ]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${API_URL}/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          console.log("fetched categories:", data);
          setCategories(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-3 border rounded-3 bg-light">
      <h5>Categories</h5>
      {loading ? (
        <p>Loading...</p>
      ) : categories.filter((cat) => typeof cat === "string" && cat.trim() !== "").length > 0 ? (
        <ul className="list-group">
          {categories
            .filter((cat) => typeof cat === "string" && cat.trim() !== "")
            .map((category, index) => (
              <li key={index} className="list-group-item">
                <a href="#" className="text-decoration-none">{category}</a>
              </li>
            ))}
        </ul>
      ) : (
        <p>No categories</p>
      )}
    </div>
  );
};

export default Sidebar;