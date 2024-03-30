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

def generate_pie(column_name, json_file, start_date=None, end_date=None):
    # Function to load JSON file and extract category data
    def load_json_and_process(file_path, column_name, start_date=None, end_date=None):
        # Function to load JSON file
        def load_json_file(file_path):
            with open(file_path, 'r') as file:
                data = json.load(file)
            return data

        # Function to extract categories and their corresponding amounts
        def extract_category_data(json_data, column_name, start_date=None, end_date=None):
            category_totals = {}
            for item in json_data:
                if column_name in item and item[column_name].strip() != "":
                    date = item.get("DATE", "")  # Assuming there's a "DATE" key in the JSON data
                    if start_date and end_date:
                        if start_date <= date <= end_date:
                            category = item[column_name].strip()
                            deposit_amt = item.get(" WITHDRAWAL AMT ", "").strip()
                            if deposit_amt:  # Check if deposit amount is not empty
                                amount = float(deposit_amt.replace(",", "").strip())
                                category_totals[category] = category_totals.get(category, 0) + amount
                    else:
                        category = item[column_name].strip()
                        deposit_amt = item.get(" WITHDRAWAL AMT ", "").strip()
                        if deposit_amt:  # Check if deposit amount is not empty
                            amount = float(deposit_amt.replace(",", "").strip())
                            category_totals[category] = category_totals.get(category, 0) + amount
            return category_totals

        # Load JSON file
        json_data = load_json_file(file_path)

        # Convert start_date and end_date to datetime objects if provided
        if start_date:
            start_date = start_date
        if end_date:
            end_date = end_date

        # Extract category data within the given date range
        category_totals = extract_category_data(json_data, column_name, start_date, end_date)

        return category_totals

    # Process data and return labels and values
    category_totals = load_json_and_process(json_file, column_name, start_date, end_date)
    labels = list(category_totals.keys())
    values = list(category_totals.values())

    return [labels, values]
def get_data_from_json(column_name, json_file, start_date=None, end_date=None):
    # Function to load JSON file
    def load_json_file(file_path):
        with open(file_path, 'r') as file:
            data = json.load(file)
        return data
    
    # Function to extract data for a specified column within a given date range
    def extract_data(json_data, column_name, start_date=None, end_date=None):
        x_values = []
        y_values = []
        for idx, item in enumerate(json_data, start=1):
            if column_name in item and item[column_name].strip() != "":
                date = item["DATE"]  # Assuming there's a "date" key in the JSON data
                # Convert date strings to datetime objects if provided
                if start_date and end_date:
                    if start_date <= date <= end_date:
                        x_values.append(idx)
                        value = float(item[column_name].replace(",", "").strip())
                        y_values.append(value)
                else:
                    x_values.append(idx)
                    value = float(item[column_name].replace(",", "").strip())
                    y_values.append(value)
        return x_values, y_values
    
    # Load JSON file
    json_data = load_json_file(json_file)
    
    # Convert start_date and end_date to datetime objects if provided
    if start_date:
        start_date = datetime.strptime(start_date, "%Y-%m-%d")
    if end_date:
        end_date = datetime.strptime(end_date, "%Y-%m-%d")
    
    # Extract data for specified column within the given date range
    x_values, y_values = extract_data(json_data, column_name, start_date, end_date)
    
    return x_values, y_values

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
    

def generate_message(message):
    thread_id = thread.id  # Replace with your thread ID
    assistant_id = "asst_jwyzSwGb5ENqfbCebNrup7nc"  # Replace with your assistant ID

    thread_message = client.beta.threads.messages.create(
    thread_id,
    role="user",
    content=message,
    )
    run = client.beta.threads.runs.create(
        thread_id=thread_id,
        assistant_id=assistant_id
    )

    while run.status in ['queued', 'in_progress', 'cancelling']:
        time.sleep(1)
        run = client.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run.id)

    if run.status == 'completed':
        messages = client.beta.threads.messages.list(thread_id=thread_id)
        generated_message = ""
        for msg in messages:
            generated_message += str(msg.content)
    else:
        print(run.status)


    return f"{list(messages)[0].content[0].text.value}"
  
test_graph = """
 <BarGraph
        data={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]}
        xAxisData={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
        height={290}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
      
"""
def gpt_graph(message):
        
   
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You're a graph assistant. You assist in defining what graphs should be used"},
            {"role": "user", "content": f"Based on the following prompt, figure out wether the user wants to plot a graph or not, look for keywords and define what graphs should be used from the list of options ['line', 'pie', 'bar'] (return output in json with tag graph_type, is_graph_required which can be True or False). here is the prompt, {message}"}
        ],
        response_format={"type": "json_object"}
    )
    response = completion.choices[0].message.content
        
    return json.loads(response)

def gpt_requires_dataset(message):
        
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You're a graph assistant. You assist in defining what graphs should be used"},
            {"role": "user", "content": f"Based on the following prompt, define whether they user requires access to dataset/database or not (return output in json with tag requires_dataset which should be either True or False). looks for keywords that refer to the past like ago or last. here is the prompt, {message}"}
        ],
        response_format={"type": "json_object"}
    )
    response = completion.choices[0].message.content
        
    return json.loads(response)


conversation_history = [] 
def gpt_response(conversation_history, role, message, prompt="return as a json object"):
    conversation_history = [] 
    message = request.args.get('message')
    conversation_history.append({"role": "system", "content": role })
    conversation_history.append({"role": "user", "content": f"{message} {prompt}"})
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=conversation_history,
        response_format=  { "type": "json_object" }
    )
    response = completion.choices[0].message.content
    print(json.loads(response))
 
    graph_type = gpt_graph(message)

    isHistory = gpt_requires_dataset(message)
    
    if isHistory.get("requires_dataset", None):
        print(f"""\n\n\n\n\n {isHistory.get("requires_dataset", None)} \n\n\n""")
        response = generate_message(f"based on file file-RmSde8yAJ8WDcuSLQtRHZFDL and keep your answer to one sentence long {message}")
            
    else:
        if graph_type.get("is_graph_required", None):
            data = [
                [35, 44, 24, 34],
                [51, 6, 49, 30],
                [15, 25, 30, 50],
                [129, 50, 15, 25
                ]]
            xAxisData= ['Q1', 'Q2', 'Q3', 'Q4']
            output = {}
            graph_type = gpt_graph(message)["graph_type"]
            if graph_type.lower() == "line":
                column_name = " DEPOSIT AMT "  # Specify the column name for deposit amounts
                json_file = r"C:\Users\USER\Downloads\Dataset.json"  # Replace "data.json" with your JSON file path
                # Get x and y values from JSON data
                x_values, y_values = get_data_from_json(column_name, json_file)
                print(x_values)

                return {"content": "None",  "graph" : [], "data": data, "xAxis": xAxisData, "scaleType": "band", "graph_type":graph_type , "X":x_values , "Y": y_values}
            elif graph_type == "pie":
                x_values, y_values = generate_pie('CATEGORY', r"C:\Users\USER\Downloads\Dataset.json", start_date=None, end_date=None)
                return {"content": "None",  "graph" : [], "data": data, "xAxis": xAxisData, "scaleType": "band", "graph_type":graph_type , "X":x_values , "Y": y_values}

            else:
                return {"content": "None",  "graph" : [], "data": data, "xAxis": xAxisData, "scaleType": "band", "graph_type": graph_type}

            return output
        else:
            response = json.loads(response).get("content", None)

            
    return response

# "You are a helpful assistant. return output in markdown"

@app.route('/chat', methods=['GET', 'POST'])
def ask():
    try:
        if request.method == 'POST':
            message = request.args.get('message')
            prompt = "check if the request needs access to database or knowledge base. return output as json in this format {content: content, requires_kb: true/false}"
            response = gpt_response(conversation_history, role="You are a helpful assistant. return output in json", message=message, prompt=prompt)
            conversation_history.append({"role": "assistant", "content": response}) 
        elif request.method == 'GET':
            message = request.args.get('message')
            prompt = """


If the user requests to generate a graph, add two flags:
The first flag, "isgraph," can be either true or false.
Another flag, "chart_type," specifies the type of graph requested. If the user doesn't provide a graph type, make an educated guess.
If the terms "graph" or "chart" are mentioned in the message, set "isgraph" to True.
The "chart_type" can be any of the following:
Line: for a line graph
Bar: for a bar graph
Pie: for a pie graph
Returning Essential Flags:

Always include the flags  "content," "isgraph," and "chart_type" in your response.
            """
            response = gpt_response(conversation_history, role="You are a helpful assistant. return output in json", message=message, prompt=prompt)
            conversation_history.append({"role": "assistant", "content": response})  

        return jsonify({"content": response}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)