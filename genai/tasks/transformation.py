import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from utils.response_validator import get_model
from utils.prompt_templates import ONE_SHOT_TRANSFORMATION, FEW_SHOT_ENTITY_EXTRACTION

def run_transformation_demo():
    helper = get_model()

    input_text = "Yo, can u fix this bug? It's crashing my app heavily."
    prompt_transform = ONE_SHOT_TRANSFORMATION.format(text=input_text)
    
    result_transform = helper.generate_content(prompt_transform)
    helper.print_result("Text Transformation", prompt_transform, result_transform)

    unstructured_text = "I just ordered a PlayStation 5 which was listed for $499 online."
    prompt_extract = FEW_SHOT_ENTITY_EXTRACTION.format(text=unstructured_text)
    
    result_extract = helper.generate_content(prompt_extract)
    helper.print_result("Entity Extraction", prompt_extract, result_extract)

if __name__ == "__main__":
    run_transformation_demo()
