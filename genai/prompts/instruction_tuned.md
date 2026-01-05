
# Instruction Tuned Prompting & Chain of Thought

**Instruction Tuning** refers to models that have been specifically trained to follow instructions. However, **Instruction Prompting** often involves giving explicit, step-by-step directions on *how* to solve a problem.

**Chain of Thought (CoT)** is a specific technique where you ask the model to explain its reasoning process before giving the final answer.

## How it works
Instead of just asking for an answer, you ask for the "step-by-step" logic. This reduces logical errors because the model "thinks aloud", allowing it to catch its own mistakes and break down complex problems.

## When to use it
- Math problems.
- Logic puzzles.
- Complex reasoning tasks (e.g., legal or medical analysis).
- When accuracy is critical.

## Example
**Prompt:**
> Solve the following logic puzzle step by step.
> 
> Puzzle: ...
> 
> Reasoning:
> 1. First, ...
> 2. Second, ...
> 
> Answer:

## In this Project
See `tasks/expansion.py` and `tasks/hallucination_tests/logical_errors.py` for Python implementation.
