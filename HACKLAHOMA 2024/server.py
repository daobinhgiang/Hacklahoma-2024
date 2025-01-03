# server.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import import_openai

app = Flask(__name__)
CORS(app)

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    user_input = request.json.get('user_input', '')
    response = import_openai.generate_response(user_input)
    return jsonify({'message': response})

@app.route('/')  # Add a route for serving the HTML page
def index():
    return app.send_static_file('chatbox.html')  # Assuming chatbox.html is in your static folder

if __name__ == '__main__':
    app.run(debug=True)
