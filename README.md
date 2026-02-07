Welcome to the LitQuest SparkHacks2026 backend!
Description

In an era where social media scrolling often replaces reading, LitQuest changes classic literature
by transforming timeless stories into gamified visual novels. Designed to make reading accessible to everyone,
our platform features adaptive vocabulary levels that adjust to the user's reading proficiency. By breaking
down novels into digestible segments and incorporating comprehension checkpoints, LitQuest engages with a wider
audience and ensures that classic ideas are available to all readers of any background.

What this backend does

Connects to MongoDB

Serves scene JSON documents to the frontend

Main route used by the game engine:

GET /api/scenes/:id

Example: /api/scenes/01-sidewalk-complete

Required JSON files

These are the scene documents the frontend expects (same IDs used in CHAPTER_TO_SCENE_ID):

01-sidewalk-complete.json

03-firehouse-complete.json

04-OldWomanHouse-complete.json

Each JSON file should include at minimum:

scene_id

title

location

next_scene_id

content (array)

choices (array, if used)

Getting Started
1) Install dependencies
npm install

2) Create a .env file

In the backend root, create a file named .env:

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
PORT=5000

3) Run the backend
node server.js


You should see:

Backend Live on Port 5000

Importing your scene JSON into MongoDB
Option A: MongoDB Compass (easy)

Open MongoDB Compass

Connect to your cluster

Choose your database (ex: LitQuestDemo)

Choose your collection (ex: scenes)

Click Import Data

Import your JSON scene files (one at a time, or combined array)

Option B: mongoimport (CLI)

Example:

mongoimport \
  --uri "YOUR_MONGO_URI" \
  --collection scenes \
  --file 01-sidewalk-complete.json \
  --jsonArray


If your file is a single JSON object (not an array), remove --jsonArray.

API Endpoint
Fetch a scene
GET /api/scenes/:id


Example:

GET /api/scenes/01-sidewalk-complete


Returns a full scene document:

narration/dialogue/action entries in content[]

branching points via choice_point + choices[]

optional flags via set_flag and requires

File Outline

server.js

Express app

MongoDB connection (Mongoose)

Scene model (strict: false)

Route: GET /api/scenes/:id

.env

MONGO_URI

PORT (optional)

Notes

The frontend decides how to render each content item:

type: "dialogue" shows speaker box + text

type: "choice_point" triggers InteractiveChoice

type: "image" can be rendered if your frontend supports it

Your scene_id must match the frontend request exactly.
