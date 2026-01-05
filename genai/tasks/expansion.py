import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from utils.response_validator import get_model
from utils.prompt_templates import EXPANSION_TEMPLATE, COT_MATH_SOLVER

def run_expansion_demo():
    helper = get_model()

    idea = "A robot discovers an old violin in the ruins of a city."
    prompt_expansion = EXPANSION_TEMPLATE.format(text=idea)
    
    result_expansion = helper.generate_content(prompt_expansion, max_output_tokens=300)
    helper.print_result("Creative Expansion", prompt_expansion, result_expansion)

    puzzle_question = "If 5 machines take 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?"
    prompt_cot = COT_MATH_SOLVER.format(puzzle=puzzle_question)
    
    result_cot = helper.generate_content(prompt_cot)
    helper.print_result("Chain of Thought", prompt_cot, result_cot)

if __name__ == "__main__":
    run_expansion_demo()
