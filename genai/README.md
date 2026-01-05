
# GenAI Hands-on Practice Project (Gemini)

This project is a comprehensive hands-on guide to Generative AI using Google's Gemini LLM. It covers core concepts like prompting strategies, text generation tasks, and understanding model limitations (hallucinations).

## Prerequisities

1.  **Python 3.9+**
2.  **API Key**: You need a Google Gemini API Key from [Google AI Studio](https://aistudio.google.com/).
3.  **Install Dependencies**:
    ```sh
    pip install google-generativeai python-dotenv
    ```
4.  **Setup Environment Variables**:
    - Copy `.env.example` to `.env`:
      ```sh
      cp .env.example .env
      ```
    - Open `.env` and replace `your_api_key_here` with your actual Gemini API key:
      ```
      GEMINI_API_KEY=your_actual_api_key_here
      ```

## Project Structure

```
genai/
│
├── prompts/              # Documentation on prompting techniques
│   ├── zero_shot.md
│   ├── one_shot.md
│   ├── few_shot.md
│   └── instruction_tuned.md
│
├── tasks/                # Runnable scripts for specific GenAI tasks
│   ├── summarization.py
│   ├── inference.py
│   ├── transformation.py
│   └── expansion.py
│
├── hallucination_tests/  # Scripts to demonstrate model failures
│   ├── factual_errors.py
│   ├── logical_errors.py
│   └── confident_wrong.py
│
├── utils/                # Helper code and prompt templates
│   ├── prompt_templates.py
│   └── response_validator.py
│
└── main.py               # Main CLI runner
```

## How to Practice

### Phase 1: AI Studio (UI)
Before running the code, it is recommended to test the concepts efficiently in a UI environment like **Google AI Studio** (https://aistudio.google.com/).

1.  **Copy Prompts**: Open `utils/prompt_templates.py` and copy the prompt text.
2.  **Paste in AI Studio**: Paste the prompt into the chat interface.
3.  **Experiment**: 
    *   Try changing the "Zero-shot" prompts to "Few-shot" by verifying if adding examples improves the result manually.
    *   Adjust the `Temperature` slider to see how creativity changes (0.0 = deterministic, 1.0 = creative/random).

### Phase 2: Python Execution
Once you understand the logic, run the scripts to see how to implement this programmatically.

1.  **Run the Main Menu**:
    ```sh
    python main.py
    ```
2.  Follow the on-screen menu to execute different modules.
3.  **Analyze the Code**:
    *   Look at `utils/prompt_templates.py` to see how dynamic text is injected into prompts (`{text}`).
    *   Look at `tasks/` to see how the `generate_content` function is called.

## Key Concepts Covered

1.  **Summarization**: Condensing information (Zero-shot vs Template).
2.  **Inference**: Deduced meaning, sentiment, and relationships from text.
3.  **Transformation**: converting formats (Text -> JSON) and styles (Informal -> Formal).
4.  **Expansion**: Growing small ideas into larger content (Creative writing, Reasoning).
5.  **Hallucinations**: 
    *   *Factual*: Inventing facts.
    *   *Logical*: Failing simple logic puzzles despite instructions.
    *   *Sycophancy*: Agreeing with incorrect user premises.
