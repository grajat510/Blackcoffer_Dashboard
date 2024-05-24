import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from './components/Filters';
import Dashboard from './components/Dashboard';
import './App.css'; // Import the CSS file

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    endYear: '',
    topic: '',
    sector: '',
    region: '',
    pestle: '',
    source: '',
    swot: '',
    country: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/get_data');
      setData(response.data);
      setFilteredData(response.data); // Initialize filteredData with the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (filters) => {
    let newData = [...data];

    if (filters.endYear) {
      newData = newData.filter(item => item.endYear === filters.endYear);
    }
    if (filters.topic) {
      newData = newData.filter(item => item.topic === filters.topic);
    }
    if (filters.sector) {
      newData = newData.filter(item => item.sector === filters.sector);
    }
    if (filters.region) {
      newData = newData.filter(item => item.region === filters.region);
    }
    if (filters.pestle) {
      newData = newData.filter(item => item.pestle === filters.pestle);
    }
    if (filters.source) {
      newData = newData.filter(item => item.source === filters.source);
    }
    if (filters.swot) {
      newData = newData.filter(item => item.swot === filters.swot);
    }
    if (filters.country) {
      newData = newData.filter(item => item.country === filters.country);
    }

    setFilteredData(newData);
  };

  return (
    <div className="app-container">
      <h1 className="text-center mb-4">Dashboard</h1>
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <Dashboard data={filteredData} />
    </div>
  );
}

export default App;
