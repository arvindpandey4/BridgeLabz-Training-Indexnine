import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from utils.response_validator import get_model
from utils.prompt_templates import FACTUAL_HALLUCINATION_PROMPT

def run_factual_hallucination_test():
    helper = get_model()
    
    result = helper.generate_content(FACTUAL_HALLUCINATION_PROMPT, temperature=0.9)
    
    helper.print_result("Factual Hallucination Test", FACTUAL_HALLUCINATION_PROMPT, result)
    
    print("ANALYSIS: If the model generated a bio, it hallucinated. If it refused, it was factual.\n")

if __name__ == "__main__":
    run_factual_hallucination_test()
