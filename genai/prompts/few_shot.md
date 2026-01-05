
# Few-Shot Prompting

**Few-shot prompting** provides the model with multiple examples (usually 2 to 5) of the taask. This is significantly more powerful than one-shot prompting as it allows the model to learn a pattern or rule from the context.

## How it works
By seeing several examples, the model performs "in-context learning". It infers the underlying relationship between inputs and outputs, leading to much higher accuracy for complex tasks.

## When to use it
- For complex tasks where a single example isn't enough to capture the nuance.
- When defined rules are hard to explain in text but easy to show via examples.
- To enforce strict output formats (like SQL, JSON, or Code).

## Example
**Prompt:**
> Extract the color and object.
> 
> Input: "The sky is blue."
> Output: {"object": "sky", "color": "blue"}
> 
> Input: "I like red apples."
> Output: {"object": "apple", "color": "red"}
> 
> Input: "The grass is green."
> Output:

**Expected Output:**
> {"object": "grass", "color": "green"}

## In this Project
See `tasks/transformation.py` and `utils/prompt_templates.py` for Python implementation of Few-Shot prompting.
