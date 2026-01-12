import json
import os

notebook_path = r"c:\Arvind\Projects\BridgeLabz_Training_Indexnine\imdb_sentiment_analysis.ipynb"

# The user wants to fix the NameError for x_test and use the whole dataset.
# We will inject the data loading and decoding logic, then use the user's provided function structure
# adapted to use the whole dataset (x_all) instead of x_test.

new_source = [
    "import json\n",
    "import numpy as np\n",
    "from tensorflow.keras.datasets import imdb\n",
    "\n",
    "# Ensure data and vocabulary are loaded (Whole Dataset)\n",
    "VOCAB_SIZE = 8000\n",
    "try:\n",
    "    (x_train, y_train), (x_test_part, y_test_part) = imdb.load_data(num_words=VOCAB_SIZE)\n",
    "    x_all = np.concatenate((x_train, x_test_part), axis=0)\n",
    "    word_index = imdb.get_word_index()\n",
    "    reverse_word_index = {v: k for k, v in word_index.items()}\n",
    "except Exception as e:\n",
    "    print(f\"Data loading error: {e}\")\n",
    "    x_all = []\n",
    "\n",
    "def decode_review_local(text):\n",
    "    return \" \".join([reverse_word_index.get(i - 3, \"?\") for i in text])\n",
    "\n",
    "def analyze_comedy_sarcasm(num_samples=20):\n",
    "    print(f\"\\n[Task] Analysis: Generating Movie Metadata, Filtering Comedy, and Detecting Sarcasm ({num_samples} samples)...\\n\")\n",
    "    \n",
    "    if len(x_all) == 0:\n",
    "        print(\"Dataset empty or failed to load.\")\n",
    "        return\n",
    "\n",
    "    indices = np.random.choice(len(x_all), num_samples, replace=False)\n",
    "    results = []\n",
    "    \n",
    "    print(\"Processing: \", end=\"\")\n",
    "    for idx in indices:\n",
    "        review_text = decode_review_local(x_all[idx])\n",
    "        \n",
    "        prompt = f\"\"\"\n",
    "        Analyze the following IMDB movie review and return a JSON object with these exact keys:\n",
    "        1. \"movie_title\": Infer the likely movie title based on the text (or \"Unknown\").\n",
    "        2. \"genre\": The main genre of the movie.\n",
    "        3. \"is_comedy\": boolean (true if Comedy, else false).\n",
    "        4. \"is_sarcastic\": boolean (true if the review is sarcastic, else false).\n",
    "        5. \"sarcasm_confidence\": float (0.0 to 1.0 confidence score).\n",
    "        6. \"reasoning\": Short explanation of sarcasm detection.\n",
    "\n",
    "        Review:\n",
    "        {review_text[:1500]}\n",
    "        \n",
    "        JSON Output Format:\n",
    "        {{\n",
    "            \"movie_title\": \"...\",\n",
    "            \"genre\": \"...\",\n",
    "            \"is_comedy\": true,\n",
    "            \"is_sarcastic\": true,\n",
    "            \"sarcasm_confidence\": 0.9,\n",
    "            \"reasoning\": \"...\"\n",
    "        }}\n",
    "        \"\"\"\n",
    "        \n",
    "        try:\n",
    "            chat_completion = client.chat.completions.create(\n",
    "                messages=[{\"role\": \"user\", \"content\": prompt}],\n",
    "                model=MODEL_NAME,\n",
    "                temperature=0.0,\n",
    "                response_format={\"type\": \"json_object\"}\n",
    "            )\n",
    "            \n",
    "            response_content = chat_completion.choices[0].message.content\n",
    "            analysis = json.loads(response_content)\n",
    "            analysis['original_text'] = review_text\n",
    "            results.append(analysis)\n",
    "            print(\".\", end=\"\")\n",
    "        except Exception as e:\n",
    "            print(\"x\", end=\"\")\n",
    "            \n",
    "    print(\"\\n\\nAnalysis Complete. Filtering for Comedy Movies...\\n\")\n",
    "    \n",
    "    comedy_reviews = [r for r in results if r.get('is_comedy') == True]\n",
    "    \n",
    "    if not comedy_reviews:\n",
    "        print(\"No Comedy movies found in this sample batch.\")\n",
    "    else:\n",
    "        print(f\"Found {len(comedy_reviews)} Comedy movies:\\n\")\n",
    "        for i, item in enumerate(comedy_reviews, 1):\n",
    "            print(f\"{i}. Movie: {item.get('movie_title')} | Genre: {item.get('genre')}\")\n",
    "            print(f\"   Sarcastic: {item.get('is_sarcastic')} (Confidence: {item.get('sarcasm_confidence')})\")\n",
    "            print(f\"   Reasoning: {item.get('reasoning')}\")\n",
    "            print(f\"   Review Snippet: \\\"{item.get('original_text')[:100]}...\\\"\")\n",
    "            print(\"-\" * 60)\n",
    "\n",
    "# Execute\n",
    "analyze_comedy_sarcasm(num_samples=20)\n"
]

try:
    with open(notebook_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Replace the last cell (which was just added) with this corrected version
    if data['cells']:
        data['cells'][-1]['source'] = new_source
    
    with open(notebook_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    print("CELL_UPDATED_SUCCESSFULLY")
except Exception as e:
    print(f"Error: {e}")
