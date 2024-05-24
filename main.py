from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['Blackcoffer_Dashboard']
collection = db['Repository']

@app.route('/store_data', methods=['POST'])
def store_data():
    try:
        data = request.get_json()
        collection.insert_many(data)
        return jsonify({"message": "Data stored successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/get_data', methods=['GET'])
def get_data():
    try:
        data = list(collection.find({}, {'_id': 0}))  # Fetch data from MongoDB and exclude the _id field
        return jsonify(data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
