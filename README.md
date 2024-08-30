![Dashboard Screenshot_Intensity Bar Chart](<images/Dashboard Screenshot 01.jpg>)
![Dashboard Screenshot_Likelihood Pie & Relevance Line Chart](<images/Dashboard Screenshot 02.jpg>)
![Dashboard Screenshot_Intensity Chart for Gas in India](<images/Dashboard Screenshot 03.jpg>)
![Dashboard Screenshot_Likelihood Pie & Relevance Line Chart for Gas in India](<images/Dashboard Screenshot 04.jpg>)


**Blackcoffer Dashboard**
1. This project is a data visualization dashboard that displays various graphs and charts based on data fetched from a MongoDB database. The dashboard is built using React for the frontend and Flask for the backend.
2. Enter topic, sector, region, country etc. to view the required graphical insights in the Dashboard.

**Features**
Display charts and graphs based on filters (country, sector, topic, region, etc.)
Interactive data table for selecting and displaying data
Responsive design


## Prerequisites

- Node.js and npm installed
- Python 3.x installed
- MongoDB installed and running

## Setup Instructions

## Backend Setup

1. Create a virtual environment and activate it (optional but recommended):
   python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

2. Install the dependencies:
   pip install -r requirements.txt


3. Start the Flask server:
python main.py
This will start the Flask server on http://localhost:5000.

## To store and fetch data from MongoDB via Postman

## Backend API Endpoints
1. POST /store_data: Stores the data in the MongoDB collection.
2. GET /get_data: Fetches the data from the MongoDB collection.

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend

2. Install the dependencies:
   npm install

3. Start the development server:
   npm start

## Building for Production

1. Navigate to the frontend directory:
   cd frontend

2. Run the build command:
   npm run build
This will create a build directory with the production build of your React app.

3. Serve the production build locally to test it:
   npm install -g serve
   serve -s build


