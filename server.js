const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); // Allows your frontend to talk to this server
app.use(express.json());

// 1. Connect to your LitQuestDemo cluster
mongoose.connect(process.env.MONGO_URI);

// 2. Simple Schema (no complex rules, just take the data)
const Scene = mongoose.model('Scene', new mongoose.Schema({}, { strict: false }));

// 3. THE ONLY ROUTE YOU NEED
// This lets you fetch ANY scene by its ID: /api/scenes/sidewalk-01
app.get('/api/scenes/:id', async (req, res) => {
  const scene = await Scene.findOne({ scene_id: req.params.id });
  res.send(scene);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Backend Live on Port ${PORT}`));
