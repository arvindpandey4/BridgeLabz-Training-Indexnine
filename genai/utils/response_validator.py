import os
import google.generativeai as genai
from typing import Optional
from dotenv import load_dotenv

load_dotenv()

GLOBAL_TEMPERATURE = 0.7

def set_temperature(temp: float):
    """Set global temperature for all API calls."""
    global GLOBAL_TEMPERATURE
    GLOBAL_TEMPERATURE = temp

class GenAIHelper:
    def __init__(self, api_key: str, model_name: str = "gemini-2.5-flash-lite"):
        self.api_key = api_key
        self.model_name = model_name
        self.model = None
        self._configure()

    def _configure(self):
        if not self.api_key:
            raise ValueError("API Key is required.")
        
        genai.configure(api_key=self.api_key)
        self.model = genai.GenerativeModel(self.model_name)

    def generate_content(self, prompt: str, temperature: float = None, max_output_tokens: int = 500) -> Optional[str]:
        if temperature is None:
            temperature = GLOBAL_TEMPERATURE
            
        try:
            generation_config = genai.types.GenerationConfig(
                temperature=temperature,
                max_output_tokens=max_output_tokens
            )
            
            response = self.model.generate_content(
                prompt,
                generation_config=generation_config
            )
            
            if response.text:
                return response.text
            else:
                return "No text generated (Safety filters might have triggered)."
                
        except Exception as e:
            return f"Error communicating with Gemini API: {str(e)}"

    @staticmethod
    def print_result(title: str, prompt: str, result: str):
        print("-" * 60)
        print(f"TASK: {title}")
        print("-" * 60)
        print(f"PROMPT:\n{prompt.strip()}")
        print("-" * 60)
        print(f"RESPONSE:\n{result.strip()}")
        print("-" * 60)
        print("\n")

def get_model(api_key=None):
    if api_key is None:
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            raise ValueError("GEMINI_API_KEY not found in environment variables. Please set it in .env file.")
    return GenAIHelper(api_key=api_key)
