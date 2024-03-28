import os
import time
from openai import OpenAI
from typing_extensions import override
from openai import AssistantEventHandler

api_key = "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"
client = OpenAI(api_key=api_key)

class EventHandler(AssistantEventHandler):    
  @override
  def on_text_created(self, text) -> None:
    print(f"\nassistant > ", end="", flush=True)
      
  @override
  def on_text_delta(self, delta, snapshot):
    print(delta.value, end="", flush=True)
      
  def on_tool_call_created(self, tool_call):
    print(f"\nassistant > {tool_call.type}\n", flush=True)
  
  def on_tool_call_delta(self, delta, snapshot):
    if delta.type == 'retrieval':
      if delta.code_interpreter.input:
        print(delta.retrieval.input, end="", flush=True)
      if delta.code_interpreter.outputs:
        print(f"\n\noutput >", flush=True)
        for output in delta.code_interpreter.outputs:
          if output.type == "logs":
            print(f"\n{output.logs}", flush=True)
            
# # Upload a file with an "assistants" purpose
# file_path = r"C:\Users\USER\Downloads\Colosseum Hackathon_Drangue Pitch Deck (Version 2.0) (1).pdf"
# with open(file_path, "rb") as file:
#     file_obj = client.files.create(file=file, purpose="assistants")

# # Add the file to the assistant
# assistant = client.beta.assistants.create(
#     instructions="You are a customer support chatbot. Use your knowledge base to best respond to customer queries.",
#     model="gpt-4-turbo-preview",
#     tools=[{"type": "retrieval"}],
#     file_ids=[file_obj.id]
# )


# print(assistant)


# my_assistants = client.beta.assistants.list(
#     order="desc",
#     limit="20",
# )
# print(my_assistants.data)

# empty_thread = client.beta.threads.create()

# thread_message = client.beta.threads.messages.create(
#   empty_thread.id,
#   role="user",
#   content="can you summarize the pdf with id file-gFoEGsXeN1QPH57tjwO7Au9s ",
# )

# message = client.beta.threads.messages.retrieve(
#   message_id=thread_message.id,
#   thread_id=empty_thread.id,
# )

# print(message["content"][0])


# # # Create a thread with the file
# # thread = client.beta.threads.create(
# #     messages=[{
# #         "role": "user",
# #         "content": "Create 3 data visualizations based on the trends in this file.",
# #         "file_ids": [file_obj.id]
# #     }]
# # )
# run = client.beta.threads.runs.create(
#     thread_id=thread.id,
#     assistant_id=assistant.id
# )
# print(run)


# messages = client.beta.threads.messages.list(thread_id=thread.id)
# # message_content = messages.data[0].text
# print(messages)
# # # Retrieve the response message
# # message = client.beta.threads.messages.retrieve(thread_id=thread.id)
# # message_content = message.content[0].text
# # print(message_content)
# Step 1: Create an Assistant

file_path = r"C:\Users\USER\Downloads\Colosseum Hackathon_Drangue Pitch Deck (Version 2.0) (1).pdf"
with open(file_path, "rb") as file:
    file_obj = client.files.create(file=file, purpose="assistants")
assistant = client.beta.assistants.create(
    name="Math Tutor",
    instructions="You are a personal summarize tutor. Summarize pdfs",
    model="gpt-3.5-turbo",
     tools=[{"type": "retrieval"}],
    file_ids=[file_obj.id]
)

# Step 2: Create a Thread
thread = client.beta.threads.create()

# Step 3: Add a Message to the Thread
message = client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content=f"please summarize file {file_obj.id} for me in 100 words and tell me what drangue is about"
)

# Step 4: Create a Run


with client.beta.threads.runs.create_and_stream(
  thread_id=thread.id,
  assistant_id=assistant.id,
  instructions="Please address the user as Jane Doe. The user has a premium account.",
  event_handler=EventHandler(),
) as stream:
  stream.until_done()
# run = client.beta.threads.runs.create(
#     thread_id=thread.id,
#     assistant_id=assistant.id,
#     instructions="Please address the user as Jane Doe. The user has a premium account.",
#     stream=True  # Enable streaming

# )
# while True:
#     response = client.beta.threads.runs.events.list(thread_id=thread.id, run_id=run.id)
#     for event in response:
#         if event.type == "assistant_response":
#             print("Assistant:", event.data.text)
#         elif event.type == "completion":
#             print("Completion:", event.data.text)
#         elif event.type == "assistant_status":
#             print("Assistant Status:", event.data.status)
#         elif event.type == "run_status":
#             print("Run Status:", event.data.status)
        
#         # Check if the run has completed
#         if event.type == "run_status" and event.data.status == "completed":
#             exit()

#     # Add some delay to avoid hitting API rate limits
#     time.sleep(1)

# # Monitor Run status
# while run.status in ['queued', 'in_progress', 'cancelling']:
#     time.sleep(1)  # Wait for 1 second
#     run = client.beta.threads.runs.retrieve(thread_id=thread.id, run_id=run.id)

# # Once the Run completes, list the Messages added to the Thread by the Assistant
# if run.status == 'completed':
#     messages = client.beta.threads.messages.list(thread_id=thread.id)
#     for msg in messages:
#         print(msg.content)
# else:
#     print(run.status)