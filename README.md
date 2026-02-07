# Welcome to the LitQuest SparkHacks2026 Backend!

## Description

> In an era where social media scrolling often replaces reading, LitQuest changes classic literature 
> by transforming timeless stories into gamified visual novels. Designed to make reading accessible to everyone, 
> our platform features adaptive vocabulary levels that adjust to the user's reading proficiency. By breaking 
> down novels into digestible segments and incorporating comprehension checkpoints, LitQuest engages with a wider 
> audience and ensures that classic ideas are available to all readers of any background.

## What This Backend Does

- Connects to a MongoDB database
- Stores scene data as JSON documents
- Serves scenes to the frontend through a single API endpoint
- Supports branching dialogue using choice_point and next_index

## Required Scene JSON Files

The frontend expects the following scene IDs:

- 01-sidewalk-complete
- 03-firehouse-complete
- 04-OldWomanHouse-complete

Each scene JSON must include:

- scene_id
- title
- location
- next_scene_id
- content (array)
- choices (array, if applicable)

## Getting Started

### Install Dependencies

npm install

### Create Environment File

Create a .env file in the backend root directory:

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING  
PORT=5000

### Run the Backend

node server.js

You should see:

Backend Live on Port 5000

## Import Scene JSON into MongoDB

### Using MongoDB Compass (Recommended)

1. Open MongoDB Compass
2. Connect to your cluster
3. Select your database (example: LitQuestDemo)
4. Select or create a collection named scenes
5. Click Import Data
6. Import each scene JSON file

### Using mongoimport (CLI)

mongoimport \
  --uri "YOUR_MONGO_URI" \
  --collection scenes \
  --file 01-sidewalk-complete.json

Repeat for each scene file.

## API Endpoint

### Fetch a Scene by ID

GET /api/scenes/:id

Example:

GET /api/scenes/01-sidewalk-complete

Returns the full scene JSON used by the game engine.

## Backend File Overview

### server.js

- Sets up Express
- Connects to MongoDB using Mongoose
- Defines a flexible Scene schema (strict: false)
- Exposes one route:

GET /api/scenes/:id

### .env

- Stores MongoDB connection string
- Defines backend port
