Returns the scene JSON stored in MongoDB.

---

## Scene JSON Format

Scenes are stored as **raw JSON documents** in MongoDB.

Each scene should include:
- `scene_id` (string) -- Identifier for the scene
- `title` (string) -- Name of the Scene (Is showcased on front end)
- `location` (string) -- Setting of current scene
- `next_scene_id` (string) -- ID of the next scene
- `content[]` (array) -- Dialogue/Narrative/Action content
- `choices[]` (array) -- Branching options presented to the user

Example scene files used in this project:
- `01-sidewalk-complete.json`
- `03-firehouse-complete.json`
- `04-OldWomanHouse-complete.json`

These JSON files should be **inserted directly into MongoDB** (one document per scene).

The frontend handles:
- dialogue progression
- branching via `next_index`
- difficulty levels (`beginner`, `intermediate`, `advanced`)

The backend does **not** process game logic. It primarily acts as a data provider.

