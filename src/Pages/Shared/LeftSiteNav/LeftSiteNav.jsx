import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSiteNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-6">
      <h2 className="text-2xl">All Categories</h2>
      {categories.map((categories) => (
        <Link
          className="block ml-4 text-xl font-semibold"
          to={`/categories/${categories.id}`}
          key={categories.id}
        >
          {categories.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSiteNav;
