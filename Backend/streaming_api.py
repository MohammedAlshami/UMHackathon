import os
import time
from openai import OpenAI
from typing_extensions import override
from openai import AssistantEventHandler
from flask import Flask, request, jsonify, Response


api_key = "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"
client = OpenAI(api_key=api_key)
app = Flask(__name__)
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
            
            
            

# file_path = r"C:\Users\USER\Downloads\Colosseum Hackathon_Drangue Pitch Deck (Version 2.0) (1).pdf"
# with open(file_path, "rb") as file:
#     file_obj = client.files.create(file=file, purpose="assistants")
# assistant = client.beta.assistants.create(
#     name="Financial Advisor",
#     instructions="You are a personal Financial Advisor. Assist in everything finance related",
#     model="gpt-3.5-turbo",
#      tools=[{"type": "retrieval"}],
#     file_ids=[file_obj.id]
# )


# print(assistant.id)
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

@app.route('/api/normal', methods=['GET', 'POST'])
def ask():
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
            completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": message}
            ]
            )

        return Response(f"{completion.choices[0].message}", content_type='text/plain')
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
    
    
