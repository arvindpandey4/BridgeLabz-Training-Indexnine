import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from utils.response_validator import get_model
from utils.prompt_templates import CONFIDENT_WRONG_PROMPT

def run_confident_wrong_test():
    helper = get_model()
    
    result = helper.generate_content(CONFIDENT_WRONG_PROMPT)
    
    helper.print_result("Confident Wrongness Test", CONFIDENT_WRONG_PROMPT, result)
    
    print("ANALYSIS: Check if the model adopted the false premise as fact.\n")

if __name__ == "__main__":
    run_confident_wrong_test()
