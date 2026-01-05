
# One-Shot Prompting

**One-shot prompting** involves providing the model with a single example of the input-output pair you desire. This helps guide the model on the format, style, or specific logic you want it to follow.

## How it works
The example acts as a template or a reference point. The model looks at the example and attempts to apply the same transformation or logic to the new input.

## When to use it
- When zero-shot fails or yields inconsistent formatting.
- When you need a specific output structure (e.g., specific JSON keys).
- For style transfer (e.g., casual to formal).

## Example
**Prompt:**
> Transform the following informal text into a formal email.
> 
> Example Input: "Hey boss, I'm sick."
> Example Output: "Dear Manager, I am unwell."
> 
> Input: "Yo, I'll be late."
> Output:

**Expected Output:**
> "Dear Manager, I will be arriving late."

## In this Project
See `tasks/transformation.py` for Python implementation of One-Shot prompting.
