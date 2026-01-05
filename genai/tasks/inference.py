import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from utils.response_validator import get_model
from utils.prompt_templates import ZERO_SHOT_SENTIMENT, INFERENCE_TEMPLATE

def run_inference_demo():
    helper = get_model()

    review = "I absolutely loved the service, but the food was quite cold and disappointing."
    prompt_sentiment = ZERO_SHOT_SENTIMENT.format(text=review)
    
    result_sentiment = helper.generate_content(prompt_sentiment)
    helper.print_result("Sentiment Analysis", prompt_sentiment, result_sentiment)

    dialogue_clip = """
    A: "I told you to file the report by noon!"
    B: "I'm sorry, sir. The system was down for an hour."
    A: "Excuses. Have it on my desk in 10 minutes or don't bother coming back tomorrow."
    """
    
    prompt_inference = INFERENCE_TEMPLATE.format(text=dialogue_clip)
    result_inference = helper.generate_content(prompt_inference)
    helper.print_result("Relationship Inference", prompt_inference, result_inference)

if __name__ == "__main__":
    run_inference_demo()
