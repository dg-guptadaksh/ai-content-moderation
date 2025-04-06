require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const db = require("./firebaseConfig"); // 🔹 Import Firestore setup
const admin = require("firebase-admin"); // 🔹 Needed for timestamp

const app = express();
app.use(express.json());
app.use(cors());

// Replace this with your actual API key
const PERSPECTIVE_API_KEY = process.env.PERSPECTIVE_API_KEY;

app.post("/moderate-text", async (req, res) => {
    try {
      const { text } = req.body;
  
      // 🔹 Send text to Perspective API for toxicity analysis
      const response = await axios.post(
        `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${PERSPECTIVE_API_KEY}`,
        {
          comment: { text },
          languages: ["en"],
          requestedAttributes: { TOXICITY: {} }, // 🔹 Checking TOXICITY attribute
        }
      );
  
      // 🔹 Extract toxicity score
      const toxicityScore = response.data.attributeScores.TOXICITY.summaryScore.value;
  
      // ✅ If toxicity is greater than 0.7, store in Firestore
      if (toxicityScore > 0.7) {
        await db.collection("flagged_content").add({
          type: "text", // 🔹 Indicating that this is flagged text
          content: text, // 🔹 Store the actual text
          toxicity_score: toxicityScore, // 🔹 Store toxicity score
          timestamp: admin.firestore.FieldValue.serverTimestamp(), // 🔹 Store time when flagged
        });
        console.log("Flagged content stored in Firestore");
      }
  
      // 🔹 Send response with the score
      res.json({ score: toxicityScore, flagged: toxicityScore > 0.7 });
    } catch (error) {
      console.error("Error in text moderation:", error);
      res.status(500).json({ error: "Error analyzing text" });
    }
  });
  
// Start the server
const PORT = process.env.PORT || 5001; 
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
