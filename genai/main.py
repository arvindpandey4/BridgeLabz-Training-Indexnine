
import sys
import os
from utils.response_validator import get_model, set_temperature

from tasks.summarization import run_summarization_demo
from tasks.inference import run_inference_demo
from tasks.transformation import run_transformation_demo
from tasks.expansion import run_expansion_demo

from hallucination_tests.factual_errors import run_factual_hallucination_test
from hallucination_tests.logical_errors import run_logical_error_test
from hallucination_tests.confident_wrong import run_confident_wrong_test

def get_temperature_input():
    while True:
        try:
            temp_input = input("Enter temperature (0.0-2.0) or press Enter for optimal [0.7]: ").strip()
            
            if temp_input == "":
                return 0.7
            
            temperature = float(temp_input)
            
            if 0.0 <= temperature <= 2.0:
                return temperature
            else:
                print("Temperature must be between 0.0 and 2.0. Try again.")
        except ValueError:
            print("Invalid input. Please enter a number.")

def main():
    try:
        import google.generativeai
    except ImportError:
        print("ERROR: 'google-generativeai' library not found.")
        print("Please run: pip install google-generativeai")
        return

    try:
        helper = get_model()
        print(f"Model: {helper.model_name}\n")
    except ValueError as e:
        print(f"Configuration Error: {e}")
        return
    except Exception as e:
        print(f"Connection warning: {e}")

    temperature = get_temperature_input()
    set_temperature(temperature)
    print(f"\n Temperature set to: {temperature}")

    while True:
        print("\nAvailable Modules:")
        print("1. Summarization")
        print("2. Inference")
        print("3. Transformation")
        print("4. Expansion")
        print("5. Factual Hallucination Test")
        print("6. Logical Errors Test")
        print("7. Confident Wrongness Test")
        print("t. Change Temperature")
        print("q. Quit")
        
        choice = input("\nSelect (1-7, t, q): ").strip().lower()
        
        if choice == '1':
            run_summarization_demo()
        elif choice == '2':
            run_inference_demo()
        elif choice == '3':
            run_transformation_demo()
        elif choice == '4':
            run_expansion_demo()
        elif choice == '5':
            run_factual_hallucination_test()
        elif choice == '6':
            run_logical_error_test()
        elif choice == '7':
            run_confident_wrong_test()
        elif choice == 't':
            temperature = get_temperature_input()
            set_temperature(temperature)
            print(f"\n Temperature updated to: {temperature}")
        elif choice == 'q':
            break
        else:
            print("Invalid choice.")
        
        input("\nPress Enter to continue...")

if __name__ == "__main__":
    main()
