import React, { useEffect } from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Dashboard.css'; // Import the CSS file

const Dashboard = ({ data }) => {
  useEffect(() => {
    console.log(data); // Log the data to console whenever it changes
  }, [data]);

  return (
    <div className="dashboard">
      <div className="chart-row">
        <div className="chart-container">
          <h3>Intensity Bar Chart</h3>
          <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="topic" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="intensity" fill="#8884d8" />
          </BarChart>
        </div>

        <div className="chart-container">
          <h3>Likelihood Pie Chart</h3>
          <PieChart width={600} height={300}>
            <Pie
              data={data}
              dataKey="likelihood"
              nameKey="topic"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        </div>

        <div className="chart-container">
          <h3>Relevance Line Chart</h3>
          <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="topic" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="relevance" stroke="#ff7300" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
