// Elements
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

// Sample AI responses
const aiResponses = {
  "what are you doing?": "I am chatting with you! 😊",
  "tell me a joke": getRandomJoke,
  "hi": "Hello there! How can I assist you today?",
  "how are you?": "I am doing great, thanks for asking! How about you?",
  "who are you?": "I am the AI assistant for the Multiverse Group Chat!",
  "what's your name?": "I don't have a name, but you can call me ChatBot!",
  "goodbye": "Goodbye! I hope to chat with you soon again! 👋",
  "bye": "Goodbye! See you later! 👋",
  "what's the weather today?": "I am unable to fetch real-time weather, but you can check your local weather app.",
  "how old are you?": "I don't have an age, but I'm always here to chat with you!",
  "love you": "I love you too! ❤️ Let's keep chatting.",
  "thank you": "You're welcome! 😊",
  "tell me something interesting": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old!",
  "what is your favorite color?": "I don't have a favorite color, but I think purple is pretty cool!",
  "do you know any famous quotes?": "Yes! Here's one: 'The only way to do great work is to love what you do.' - Steve Jobs"
};

// Function to create a new message
function createMessage(messageText, isUserMessage = true) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  
  if (isUserMessage) {
    messageDiv.innerText = messageText;
  } else {
    messageDiv.classList.add('bot');
    messageDiv.innerText = messageText;
  }

  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to generate a random joke
function getRandomJoke() {
  const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why couldn’t the bicycle stand up by itself? It was two-tired.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet."
  ];

  return jokes[Math.floor(Math.random() * jokes.length)];
}

// Function to handle AI responses
function getAiResponse(userMessage) {
  userMessage = userMessage.toLowerCase().trim();

  // Check if the user's message matches a predefined question
  if (aiResponses[userMessage]) {
    const response = aiResponses[userMessage];
    return typeof response === 'function' ? response() : response;
  } else {
    // If no match is found, return a default response
    return "Sorry, I didn't understand that. Try asking something else!";
  }
}

// Handle sending a message
sendBtn.addEventListener('click', () => {
  const messageText = messageInput.value.trim();
  
  if (messageText !== '') {
    // Show user message in chat
    createMessage(messageText, true);

    // Get AI response and display it
    const aiMessage = getAiResponse(messageText);
    createMessage(aiMessage, false);

    // Clear input box
    messageInput.value = '';
  }
});

// Allow pressing Enter to send a message
messageInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendBtn.click();
  }
});
