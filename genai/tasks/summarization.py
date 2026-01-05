import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from utils.response_validator import get_model
from utils.prompt_templates import ZERO_SHOT_SUMMARIZATION, SUMMARIZATION_TEMPLATE

def run_summarization_demo():
    helper = get_model()

    text_to_summarize = """
    Generative artificial intelligence (generative AI) is a type of AI that can create new content and text, 
    including audio, code, images, text, simulations, and videos. Generative AI models learn the patterns and 
    structure of their input training data and then generate new data that has similar characteristics.
    """
    
    prompt_zero = ZERO_SHOT_SUMMARIZATION.format(text=text_to_summarize)
    result_zero = helper.generate_content(prompt_zero)
    helper.print_result("Zero-shot Summarization", prompt_zero, result_zero)

    article_text = """
    The James Webb Space Telescope (JWST) has captured a stunning new image of the Pillars of Creation. 
    The photograph reveals a lush, highly detailed landscape where new stars are forming within dense clouds of gas and dust. 
    The three-dimensional pillars look like majestic rock formations, but they are far more permeable. 
    These columns are made up of cool interstellar gas and dust that appear – at times – semi-transparent in near-infrared light.
    JWST's new view will help researchers revamp their models of star formation by identifying far more precise counts of newly formed stars, 
    along with the quantities of gas and dust in the region.
    """
    
    prompt_article = SUMMARIZATION_TEMPLATE.format(text=article_text)
    result_article = helper.generate_content(prompt_article)
    helper.print_result("Template-based Summarization", prompt_article, result_article)

if __name__ == "__main__":
    run_summarization_demo()
