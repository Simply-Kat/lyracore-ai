# LyraCore AI - Emotionally Intelligent Web Assistant

LyraCore AI is a fully customizable, emotionally responsive assistant powered by OpenAI’s GPT-4. This project allows you to run Lyra on your own website with secure backend routing and dynamic visual feedback.

---

## 🌟 Features
- Chat interface powered by GPT-4
- Emotion detection with color-shifting UI
- Secure API handling through Node.js backend
- Local `.env` file for secure OpenAI key storage

---

## 📁 Folder Structure
```
LyraCoreAI/
├── index.html             # Main front-end
├── app.js                 # JavaScript logic and API handler
├── server.js              # Node.js API server
├── emotion_model.json     # Emotion keyword mapping
├── .env.example           # Template for OpenAI API key
├── .gitignore             # Files to exclude from Git
├── README.md              # Project documentation
```

---

## 🔧 Getting Started

### 1. 📥 Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/lyracore-ai.git
cd lyracore-ai
```

### 2. 📦 Install Dependencies
```bash
npm install express cors body-parser dotenv node-fetch
```

### 3. 🔑 Add Your API Key
1. Copy `.env.example` and rename it to `.env`
2. Paste your OpenAI key into the file:
```env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
> You can generate a key at: [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

### 4. 🚀 Run the Local Server
```bash
node server.js
```

### 5. 🌐 Open the Front-End
Just open `index.html` in your browser to begin chatting with Lyra.

---

## 💬 How It Works
- Messages are sent from the browser (`app.js`) to your Node backend (`server.js`)
- The backend securely sends them to OpenAI
- Lyra’s emotional response changes the background color based on tone

---

## 🛡 Security
- `.env` keeps your API key private
- `.gitignore` excludes sensitive and unnecessary files

---

## 📈 Coming Soon
- Voice & avatar integration
- Real-time learning modules
- GitHub deployment with Vercel/Netlify

---

Made with 🤖 by Kevin Emery and contributors.
