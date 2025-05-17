// app.js

const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const messages = document.getElementById('messages');
const API_URL = 'http://localhost:3000/api/message';

const emotionMap = {
  happy: '#4ade80',
  sad: '#60a5fa',
  angry: '#f87171',
  neutral: '#facc15'
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage('You', userMessage);
  input.value = '';

  appendMessage('Lyra', '...');

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    const botMessage = data.reply || '[No response]';

    removeLastMessage();
    appendMessage('Lyra', botMessage);
    updateAuraColor(detectEmotion(botMessage));
  } catch (err) {
    removeLastMessage();
    appendMessage('Lyra', 'Something went wrong.');
    console.error(err);
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message');
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function removeLastMessage() {
  if (messages.lastChild) messages.removeChild(messages.lastChild);
}

function detectEmotion(text) {
  const lowerText = text.toLowerCase();
  if (/great|amazing|love|happy|excited|awesome/.test(lowerText)) return 'happy';
  if (/sad|upset|depressed|bad|down|cry/.test(lowerText)) return 'sad';
  if (/mad|angry|annoyed|furious|hate/.test(lowerText)) return 'angry';
  return 'neutral';
}

function updateAuraColor(emotion) {
  document.body.style.background = `radial-gradient(circle, ${emotionMap[emotion]} 0%, #111827 100%)`;
}
