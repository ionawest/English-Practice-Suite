import os
import json

drills_dir = "reading_drills"
index_data = []

# Scan the folder for JSON files
for filename in os.listdir(drills_dir):
    if filename.endswith(".json") and filename != "index.json":
        filepath = os.path.join(drills_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
                index_data.append({
                    "file": f"reading_drills/{filename}",
                    "topic": data.get("topic", "Unknown Topic"),
                    "difficulty": data.get("difficulty", "Unknown")
                })
            except Exception as e:
                print(f"Error reading {filename}: {e}")

# Save the master list
with open(os.path.join(drills_dir, "index.json"), "w", encoding="utf-8") as f:
    json.dump(index_data, f, indent=4)

print(f"Successfully indexed {len(index_data)} drills!")