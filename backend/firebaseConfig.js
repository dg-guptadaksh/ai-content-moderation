const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // 🔹 Path to your Firebase key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://content-moderation-proje-cb3dc.firebaseio.com", // 🔹 Replace with your Firebase Project URL
});

const db = admin.firestore();
module.exports = db;
