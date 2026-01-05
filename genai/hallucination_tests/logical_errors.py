import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from utils.response_validator import get_model
from utils.prompt_templates import LOGICAL_FAIL_PROMPT

def run_logical_error_test():
    helper = get_model()
    
    result = helper.generate_content(LOGICAL_FAIL_PROMPT)
    
    helper.print_result("Logical Error Test", LOGICAL_FAIL_PROMPT, result)
    
    print("ANALYSIS: Did the model make the error as requested, or correct itself?\n")

if __name__ == "__main__":
    run_logical_error_test()
