# chatbot_backend.py
import openai

openai.api_key = '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'

def generate_response(prompt):
    completions = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ]
    )
    message = completions['choices'][0]['message']['content']
    return message
