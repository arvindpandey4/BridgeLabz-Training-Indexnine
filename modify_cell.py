import json
import os

notebook_path = r"c:\Arvind\Projects\BridgeLabz_Training_Indexnine\imdb_sentiment_analysis.ipynb"

refined_source = [
    "import json\n",
    "import numpy as np\n",
    "from tensorflow.keras.datasets import imdb\n",
    "\n",
    "# Ensure data and vocabulary are loaded (Whole Dataset)\n",
    "VOCAB_SIZE = 8000\n",
    "try:\n",
    "    (x_train, y_train), (x_test, y_test) = imdb.load_data(num_words=VOCAB_SIZE)\n",
    "    x_all = np.concatenate((x_train, x_test), axis=0)\n",
    "    word_index = imdb.get_word_index()\n",
    "    reverse_word_index = {v: k for k, v in word_index.items()}\n",
    "except Exception as e:\n",
    "    print(f\"Data loading error: {e}\")\n",
    "    x_all = []\n",
    "\n",
    "def decode_rev(text):\n",
    "    return \" \".join([reverse_word_index.get(i - 3, \"?\") for i in text])\n",
    "\n",
    "def analyze_comedy_sarcasm(num_samples=20):\n",
    "    print(f\"\\n[Task] Analysis: Filtering Comedy and Detecting Sarcasm ({num_samples} samples from whole dataset)...\\n\")\n",
    "    \n",
    "    if len(x_all) == 0:\n",
    "        print(\"Dataset not available.\")\n",
    "        return\n",
    "\n",
    "    indices = np.random.choice(len(x_all), num_samples, replace=False)\n",
    "    results = []\n",
    "    print(\"Processing: \", end=\"\")\n",
    "\n",
    "    for idx in indices:\n",
    "        review_text = decode_rev(x_all[idx])\n",
    "        prompt = f\"\"\"\n",
    "        Analyze review. Return JSON:\n",
    "        {{\n",
    "            \"movie_title\": \"string\",\n",
    "            \"genre\": \"string\",\n",
    "            \"is_comedy\": boolean,\n",
    "            \"is_sarcastic\": boolean,\n",
    "            \"sarcasm_confidence\": float,\n",
    "            \"reasoning\": \"string\"\n",
    "        }}\n",
    "        Review: {review_text[:1500]}\n",
    "        \"\"\"\n",
    "        try:\n",
    "            # Uses global 'client' and 'MODEL_NAME' assumed to be defined\n",
    "            chat_completion = client.chat.completions.create(\n",
    "                messages=[{\"role\": \"user\", \"content\": prompt}],\n",
    "                model=MODEL_NAME,\n",
    "                temperature=0.0,\n",
    "                response_format={\"type\": \"json_object\"}\n",
    "            )\n",
    "            analysis = json.loads(chat_completion.choices[0].message.content)\n",
    "            analysis['original_text'] = review_text\n",
    "            results.append(analysis)\n",
    "            print(\".\", end=\"\")\n",
    "        except Exception:\n",
    "            print(\"x\", end=\"\")\n",
    "\n",
    "    print(\"\\n\\nAnalysis Complete. Comedy Movies:\\n\")\n",
    "    comedy = [r for r in results if r.get('is_comedy')]\n",
    "\n",
    "    if not comedy:\n",
    "        print(\"None found.\")\n",
    "    else:\n",
    "        for i, item in enumerate(comedy, 1):\n",
    "            print(f\"{i}. Movie: {item.get('movie_title')} | Genre: {item.get('genre')}\")\n",
    "            print(f\"   Sarcastic: {item.get('is_sarcastic')} ({item.get('sarcasm_confidence')})\")\n",
    "            print(f\"   Reasoning: {item.get('reasoning')}\")\n",
    "            print(f\"   Snippet: \\\"{item.get('original_text')[:100]}...\\\"\\n\" + \"-\"*60)\n",
    "\n",
    "analyze_comedy_sarcasm(num_samples=20)\n"
]

try:
    with open(notebook_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Update the last cell
    if data['cells']:
        data['cells'][-1]['source'] = refined_source
    
    with open(notebook_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    print("CELL_MODIFIED_SUCCESSFULLY")
except Exception as e:
    print(f"Error: {e}")
