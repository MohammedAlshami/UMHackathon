import json
from flask import Flask, jsonify
import pyrebase
import plotly.graph_objs as go
import plotly
from collections import defaultdict
from bs4 import BeautifulSoup
from flask_cors import CORS



# Initialize Flask app
app = Flask(__name__)

CORS(app)

# Firebase configuration
firebaseConfig = {
    "apiKey": "AIzaSyBLv1DiRB6egmpaoIKfjODXZF5fYheQKIM",
    "authDomain": "realtimedatabasetest-f226a.firebaseapp.com",
    "databaseURL": "https://realtimedatabasetest-f226a-default-rtdb.asia-southeast1.firebasedatabase.app",
    "projectId": "realtimedatabasetest-f226a",
    "storageBucket": "realtimedatabasetest-f226a.appspot.com",
    "messagingSenderId": "348704796176",
    "appId": "1:348704796176:web:38994c5ab4d54b752ce495"
}

# Initialize Pyrebase
firebase = pyrebase.initialize_app(firebaseConfig)

# Get Firebase database instance
db = firebase.database()

# Route to retrieve and return table data as JSON
@app.route('/api/get_table_data', methods=['GET'])
def get_table_data():
    try:
        # Replace 'your_table_name' with the actual name of your Firebase Realtime Database table
        table_data = db.child("Datasets").get().val()
        return jsonify(table_data), 200
    except Exception as e:
        return str(e), 500
import json
from flask import Flask, jsonify
import pyrebase
import plotly.graph_objs as go
import plotly
from collections import defaultdict
from bs4 import BeautifulSoup
from flask_cors import CORS



# Initialize Flask app
app = Flask(__name__)

CORS(app)

# Firebase configuration
firebaseConfig = {
    "apiKey": "AIzaSyBLv1DiRB6egmpaoIKfjODXZF5fYheQKIM",
    "authDomain": "realtimedatabasetest-f226a.firebaseapp.com",
    "databaseURL": "https://realtimedatabasetest-f226a-default-rtdb.asia-southeast1.firebasedatabase.app",
    "projectId": "realtimedatabasetest-f226a",
    "storageBucket": "realtimedatabasetest-f226a.appspot.com",
    "messagingSenderId": "348704796176",
    "appId": "1:348704796176:web:38994c5ab4d54b752ce495"
}

# Initialize Pyrebase
firebase = pyrebase.initialize_app(firebaseConfig)

# Get Firebase database instance
db = firebase.database()

# Route to retrieve and return table data as JSON
@app.route('/api/get_table_data', methods=['GET'])
def get_table_data():
    try:
        # Replace 'your_table_name' with the actual name of your Firebase Realtime Database table
        table_data = db.child("Datasets").get().val()
        return jsonify(table_data), 200
    except Exception as e:
        return str(e), 500

# Route to analyze amount deposited over time and return data for the plot
@app.route('/api/analyze_deposits', methods=['GET'])
def analyze_deposits():
    try:
        # Retrieve dataset from Firebase Realtime Database
        dataset = db.child("Datasets").get().val()
        
        # Aggregate deposit amounts by month
        deposit_by_month = defaultdict(float)
        for entry in dataset:
            deposit_amt = entry.get(' DEPOSIT AMT ', '').replace(',', '')  # Remove commas from deposit amount
            if deposit_amt:  # Check if deposit amount is not empty
                date = entry.get('DATE')
                month_year = date.split('-')[1]  # Extract month and year from date
                deposit_by_month[month_year] += float(deposit_amt)

        # Convert deposit data to JSON format
        deposit_data = json.dumps(deposit_by_month)

        return jsonify(deposit_data), 200
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)