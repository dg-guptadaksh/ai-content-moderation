# AI-Powered Content Moderation Tool

A lightweight, AI-driven content moderation tool built to detect and flag harmful comments such as hate speech, cyberbullying, and offensive language. Designed to help maintain healthier online spaces by leveraging Natural Language Processing (NLP) and toxicity detection APIs.

## Key Features

- AI-based toxicity detection using pre-trained NLP models  
- Automatic flagging of harmful content (e.g., hate speech, bullying)  
- Dashboard to view and manage flagged comments  
- Stores flagged content for review and analysis

## ⚙️ Installation

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/dg-guptadaksh/ai-content-moderation.git
   cd ai-content-moderation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file and add your keys for the AI API (e.g., Google Cloud Natural Language API or Perspective API).

4. **Run the project**
   ```bash
   npm start
   ```

The server will start on `http://localhost:3000` (or your configured port), and flagged comment data will be available via the dashboard.


## Future Advancements

Further advancements may include the addition of a **direct plugin with social media accounts** for seamless, real-time comment moderation.
