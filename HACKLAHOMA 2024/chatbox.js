function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    if (message.trim() !== "") {
        var chatBox = document.getElementById("chat-box");
        var newMessage = document.createElement("p");
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        messageInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
