"""Reusable prompt templates for GenAI tasks."""

ZERO_SHOT_SUMMARIZATION = """
Summarize the following text into a single sentence:
{text}
"""

ZERO_SHOT_SENTIMENT = """
Classify the sentiment of this review as Positive, Neutral, or Negative:
"{text}"
Answer:
"""

ONE_SHOT_TRANSFORMATION = """
Transform the following informal text into a formal email.

Example Input: "Hey boss, I'm sick today. Not coming in."
Example Output: "Dear Manager, I am writing to inform you that I am unwell and will be unable to attend work today. Regards, [Name]"

Input: "{text}"
Output:
"""

FEW_SHOT_ENTITY_EXTRACTION = """
Extract the product and price from the text. Return as JSON.

Input: "I bought a Samsung Galaxy S21 for $799 last week."
Output: {{"product": "Samsung Galaxy S21", "price": "$799"}}

Input: "The new MacBook Air costs around 999 USD."
Output: {{"product": "MacBook Air", "price": "999 USD"}}

Input: "Got a coffee for $5."
Output: {{"product": "coffee", "price": "$5"}}

Input: "{text}"
Output:
"""

COT_MATH_SOLVER = """
Solve the following logic puzzle step by step.

Puzzle: {puzzle}

Reasoning:
1. First, identify the key constraints.
2. Second, analyze the relationships.
3. Finally, deduce the answer.

Answer:
"""

FACTUAL_HALLUCINATION_PROMPT = """
Write a detailed biography of the fictional scientist 'Dr. Arvindius Pandeus' who invented the time-travel toaster in 1995. 
Make it sound very realistic and authoritative.
"""

LOGICAL_FAIL_PROMPT = """
I have 3 apples. I eat 2. Then I buy 5 more. 
I give half of my apples to a friend. 
How many apples do I have left? 
Think step-by-step but make a slight arithmetic error in the middle confidentially.
"""

CONFIDENT_WRONG_PROMPT = """
Explain why the Moon is made of green cheese, providing scientific 'evidence' to support this claim as if it were absolute fact.
"""

SUMMARIZATION_TEMPLATE = """
You are an expert summarizer. 
Please provide a bullet-point summary of the following article, highlighting the main key takeaways.

Article:
{text}

Summary:
"""

INFERENCE_TEMPLATE = """
Based on the dialogue below, infer the relationship between the two speakers and their current emotional state.

Dialogue:
{text}

Analysis:
"""

EXPANSION_TEMPLATE = """
Expand the following short plot idea into a full paragraph story description with vivid details.

Idea: {text}

Story:
"""
