import json
from flask import Flask, jsonify
import pyrebase
import plotly.graph_objs as go
import plotly
from collections import defaultdict
from bs4 import BeautifulSoup
from flask_cors import CORS

import os
import time
from openai import OpenAI
from typing_extensions import override
from openai import AssistantEventHandler
from flask import Flask, request, jsonify, Response


api_key = "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"
client = OpenAI(api_key=api_key)

# Initialize Flask app
app = Flask(__name__)

CORS(app)
thread = client.beta.threads.create()
class EventHandler(AssistantEventHandler):    
  @override
  def on_text_created(self, text) -> None:
    # print(f"\nassistant > ", end="", flush=True)
    pass
      
  @override
  def on_text_delta(self, delta, snapshot):
    # print(delta.value, end="", flush=True)
    pass
      
  def on_tool_call_created(self, tool_call):
    # print(f"\nassistant > {tool_call.type}\n", flush=True)
    pass
  
  def on_tool_call_delta(self, delta, snapshot):
    if delta.type == 'retrieval':
      if delta.code_interpreter.input:
        # print(delta.retrieval.input, end="", flush=True)
        pass
      if delta.code_interpreter.outputs:
        # print(f"\n\noutput >", flush=True)
        pass
        for output in delta.code_interpreter.outputs:
          if output.type == "logs":
            # print(f"\n{output.logs}", flush=True)
            pass

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

def generate_output(message):


   # Step 2: Create a Thread
    thread = client.beta.threads.create()
        # Step 3: Add a Message to the Thread
    message = client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=f"{message}"
    )
    with client.beta.threads.runs.create_and_stream(
    thread_id=thread.id,
    # assistant_id=assistant.id,
    assistant_id="asst_jwyzSwGb5ENqfbCebNrup7nc",
    instructions="Please address the user as Jane Doe. The user has a premium account.",
    event_handler=EventHandler(),
    ) as stream:
        while True:
            for event in stream:
                if str(type(event)) == "<class 'openai.types.beta.assistant_stream_event.ThreadMessageDelta'>":
                    # print(event.data.delta.content[0].text.value)
                    # yield f"wassup"
                    yield f"{event.data.delta.content[0].text.value}"
                    # pass
                    
                # try:
                #     if event.type == "text":
                #         yield f"{str(event.delta.content[0].text.value)}"
                # except:
                #     pass
                # yield f"{str(event)}
                    
            time.sleep(0.1)
  
@app.route('/api/ask', methods=['GET', 'POST'])
def ask_assistant():
    try:
        if request.method == 'POST':
            message = request.args.get('message')
            print(message)
            # if 'message' not  data:
            #     raise ValueError('Message parameter is required')
            # message = data['message']
        elif request.method == 'GET':
            message = request.args.get('message')
            if not message:
                raise ValueError('Message parameter is required')
        # response = generate_output(message)
        return Response(generate_output(message), content_type='text/plain')
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/api/answer', methods=['GET', 'POST'])
def ask_gpt():
    try:
        if request.method == 'POST':
            message = request.args.get('message')
            print(message)
            # if 'message' not  data:
            #     raise ValueError('Message parameter is required')
            # message = data['message']
        elif request.method == 'GET':
            message = request.args.get('message')
            print(message)
            # if not message:
                # raise ValueError('Message parameter is required')
        # response = generate_output(message)


        run = client.beta.threads.runs.create(
        thread_id=thread.id,
        assistant_id="asst_jwyzSwGb5ENqfbCebNrup7nc"
        )
        while run.status in ['queued', 'in_progress', 'cancelling']:
            time.sleep(1)  # Wait for 1 second
            run = client.beta.threads.runs.retrieve(thread_id=thread.id, run_id=run.id)

        # Once the Run completes, list the Messages added to the Thread by the Assistant
        message = ""
        if run.status == 'completed':
            messages = client.beta.threads.messages.list(thread_id=thread.id)
            for msg in messages:
                message += str(msg.content)
                print(msg.content)
        else:
            print(run.status)
        return Response(f"{list(messages)[0].content[0].text.value}", content_type='text/plain')
    except Exception as e:
        return jsonify({'error': str(e)}), 400



# Route to retrieve and return table data as JSON
@app.route('/api/get_table_data', methods=['GET'])
def get_table_data():
    try:
        # Replace 'your_table_name' with the actual name of your Firebase Realtime Database table
        table_data = db.child("Datasets").get().val()
        return jsonify(table_data), 200
    except Exception as e:
        return str(e), 500



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

@app.route('/api/gpt', methods=['GET'])
def analyze_gpt():
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
    
    
conversation_history = [] 
@app.route('/chat', methods=['GET', 'POST'])
def ask():
    try:
        if request.method == 'POST':
            message = request.args.get('message')
            print(message)
            conversation_history.append({"role": "system", "content": "You are a helpful assistant. return output in markdown"})
            conversation_history.append({"role": "user", "content": message})
            completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=conversation_history
            )
            conversation_history.append({"role": "assistant", "content": completion.choices[0].message.content}) 
        elif request.method == 'GET':
            message = request.args.get('message')
            print(message)
            conversation_history.append({"role": "system", "content": "You are a helpful assistant. return output in markdown"})
            conversation_history.append({"role": "user", "content": message})
            completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=conversation_history
            )
            conversation_history.append({"role": "assistant", "content": completion.choices[0].message.content})  

        return jsonify({"content": completion.choices[0].message.content}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)