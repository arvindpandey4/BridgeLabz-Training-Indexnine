
# Zero-Shot Prompting

**Zero-shot prompting** is a technique where you present a task to the Large Language Model (LLM) without providing any examples of how to do it. You simply describe the task in natural language.

## How it works
The model relies entirely on its pre-trained knowledge to understand the instruction and generate a response. 

## When to use it
- For common tasks (summarization, translation, general questions).
- When you want a quick, general answer.
- When you don't have labeled examples available.

## Example
**Prompt:**
> "Classify the sentiment of this text: 'The movie was amazing!'"

**Expected Output:**
> "Positive"

## In this Project
See `tasks/inference.py` and `tasks/summarization.py` for Python implementation of Zero-Shot prompting.
