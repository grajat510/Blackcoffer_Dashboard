import React from 'react';
import './Filters.css'; // Import the CSS file

const Filters = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="filters-container">
      <div className="filter">
        <label htmlFor="topic">Topic</label>
        <input
          type="text"
          name="topic"
          className="form-control"
          value={filters.topic}
          onChange={handleChange}
        />
      </div>
      <div className="filter">
        <label htmlFor="sector">Sector</label>
        <input
          type="text"
          name="sector"
          className="form-control"
          value={filters.sector}
          onChange={handleChange}
        />
      </div>
      <div className="filter">
        <label htmlFor="region">Region</label>
        <input
          type="text"
          name="region"
          className="form-control"
          value={filters.region}
          onChange={handleChange}
        />
      </div>
      <div className="filter">
        <label htmlFor="pestle">PESTLE</label>
        <input
          type="text"
          name="pestle"
          className="form-control"
          value={filters.pestle}
          onChange={handleChange}
        />
      </div>
      <div className="filter">
        <label htmlFor="source">Source</label>
        <input
          type="text"
          name="source"
          className="form-control"
          value={filters.source}
          onChange={handleChange}
        />
      </div>
      <div className="filter">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          className="form-control"
          value={filters.country}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Filters;
