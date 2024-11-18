import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TShirtFilterComponent = () => {
  const [tshirts, setTShirts] = useState([
    {
      id: 1,
      name: "Graphic Tee",
      price: 25,
      size: "M",
      color: "Red",
      category: "Casual",
      stock: 10,
    },
    {
      id: 2,
      name: "Plain White Tee",
      price: 15,
      size: "L",
      color: "White",
      category: "Basics",
      stock: 20,
    },
    {
      id: 3,
      name: "Vintage Print Tee",
      price: 30,
      size: "S",
      color: "Black",
      category: "Vintage",
      stock: 5,
    },
    {
      id: 4,
      name: "Summer Vibes Tee",
      price: 20,
      size: "M",
      color: "Blue",
      category: "Summer",
      stock: 8,
    },
    {
      id: 5,
      name: "Holiday Special Tee",
      price: 35,
      size: "L",
      color: "Green",
      category: "Holiday",
      stock: 12,
    },
    {
      id: 6,
      name: "Cool Graphic Tee",
      price: 25,
      size: "XL",
      color: "Gray",
      category: "Casual",
      stock: 6,
    },
    {
      id: 7,
      name: "Basic Black Tee",
      price: 18,
      size: "M",
      color: "Black",
      category: "Basics",
      stock: 15,
    },
    {
      id: 8,
      name: "Eco-Friendly Tee",
      price: 28,
      size: "S",
      color: "Beige",
      category: "Eco",
      stock: 4,
    },
  ]);

  const [filters, setFilters] = useState({
    priceRange: [0, 50],
    size: "All",
    color: "All",
    category: "All",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const filteredTShirts = tshirts.filter((tshirt) => {
    const { priceRange, size, color, category } = filters;
    return (
      tshirt.price >= priceRange[0] &&
      tshirt.price <= priceRange[1] &&
      (size === "All" || tshirt.size === size) &&
      (color === "All" || tshirt.color === color) &&
      (category === "All" || tshirt.category === category)
    );
  });

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-primary">Filter T-Shirts</h1>

      {/* Price Range Filter */}
      <div className="mb-4 p-4 border rounded bg-light border-primary">
        <h2 className="text-primary">Price Range</h2>
        <input
          type="text"
          className="form-control"
          placeholder="e.g., 0,50"
          onChange={(e) =>
            handleFilterChange(
              "priceRange",
              e.target.value.split(",").map(Number)
            )
          }
        />
      </div>

      {/* Size Filter */}
      <div className="mb-4 p-4 border rounded bg-light border-primary">
        <h2 className="text-primary">Size</h2>
        {["All", "S", "M", "L", "XL"].map((size) => (
          <div className="form-check" key={size}>
            <input
              type="radio"
              className="form-check-input"
              id={`size${size}`}
              value={size}
              checked={filters.size === size}
              onChange={(e) => handleFilterChange("size", e.target.value)}
            />
            <label className="form-check-label" htmlFor={`size${size}`}>
              {size}
            </label>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-4 p-4 border rounded bg-light border-primary">
        <h2 className="text-primary">Color</h2>
        {["All", "Red", "White", "Black", "Blue", "Green", "Gray", "Beige"].map(
          (color) => (
            <div className="form-check" key={color}>
              <input
                type="radio"
                className="form-check-input"
                id={`color${color}`}
                value={color}
                checked={filters.color === color}
                onChange={(e) => handleFilterChange("color", e.target.value)}
              />
              <label className="form-check-label" htmlFor={`color${color}`}>
                {color}
              </label>
            </div>
          )
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-4 p-4 border rounded bg-light border-primary">
        <h2 className="text-primary">Category</h2>
        {["All", "Casual", "Basics", "Vintage", "Summer", "Holiday", "Eco"].map(
          (category) => (
            <div className="form-check" key={category}>
              <input
                type="radio"
                className="form-check-input"
                id={`category${category}`}
                value={category}
                checked={filters.category === category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
              />
              <label
                className="form-check-label"
                htmlFor={`category${category}`}
              >
                {category}
              </label>
            </div>
          )
        )}
      </div>

      {/* Filtered T-Shirts */}
      <div className="mb-4">
        <h2 className="text-primary">Filtered T-Shirts</h2>
        <ul className="list-group">
          {filteredTShirts.length > 0 ? (
            filteredTShirts.map((tshirt) => (
              <li key={tshirt.id} className="list-group-item">
                <span className="font-weight-bold">{tshirt.name}</span> - $
                {tshirt.price} - Size: {tshirt.size} - Color: {tshirt.color} -
                Category: {tshirt.category} - Stock: {tshirt.stock}
              </li>
            ))
          ) : (
            <li className="list-group-item">
              No T-shirts match the current filters.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TShirtFilterComponent;
