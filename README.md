# BridgeLabz Training - IndexNine

This repository contains various AI/ML and programming practice projects completed as part of BridgeLabz training.

## 📁 Project Structure

```
BridgeLabz_Training_Indexnine/
│
├── review_task/              # Log validation system
├── svm_classifier.ipynb      # Dog/Cat image classification with SVM
├── imdb_sentiment_analysis.ipynb # IMDB Movie Review Sentiment Analysis (LSTM + LLM)
└── genai/                    # GenAI prompt engineering with Gemini
```

---

## 🔍 1. Review Task - Log Validation

### Overview
A log validation system that checks the validity of log entries based on specific rules.

### Problem Statement
Write a function `validate_logs(logs)` where `logs` is a list of strings representing log entries.

### Rules
1. Each log line must follow the format: `"LEVEL: message"`
2. Valid log levels are: `INFO`, `WARNING`, `ERROR`
3. No two `ERROR` logs should occur consecutively
4. Return `True` if all logs are valid, otherwise return `False`

### Files
- **`task.py`**: Main validation function
- **`logs.py`**: Comprehensive test cases

### Usage
```bash
cd review_task
python logs.py
```

### Example
```python
from task import validate_logs

# Valid logs
logs = [
    "INFO: Server started",
    "WARNING: Low memory",
    "ERROR: Connection failed"
]
print(validate_logs(logs))  # Output: True

# Invalid logs (consecutive ERRORs)
logs = [
    "INFO: Server started",
    "ERROR: Connection failed",
    "ERROR: Timeout"
]
print(validate_logs(logs))  # Output: False
```

---

## 🐕🐈 2. SVM Classifier - Dog/Cat Image Classification

### Overview
A machine learning project that uses **ResNet50** for feature extraction and **Support Vector Machine (SVM)** for classifying dog and cat images.

### Key Features
- **Feature Extraction**: Uses pre-trained ResNet50 (ImageNet weights)
- **Classifier**: Support Vector Machine with RBF kernel
- **Dataset**: Dog and Cat images from Kaggle
- **Performance**: High accuracy classification with proper data preprocessing

### Technologies Used
- TensorFlow/Keras
- scikit-learn
- ResNet50 (Transfer Learning)
- SVM Classifier

### Usage
```bash
# Open Jupyter Notebook
jupyter notebook svm_classifier.ipynb
```

### Implementation Highlights
1. **Data Loading**: Loads images from `PetImages/Cat` and `PetImages/Dog` directories
2. **Preprocessing**: Resizes images, normalizes pixel values
3. **Feature Extraction**: Uses ResNet50 to extract deep features
4. **Training**: Trains SVM classifier on extracted features
5. **Evaluation**: Tests model accuracy on validation set

---

## 🎬 3. IMDB Analysis - Sentiment Analysis Pipeline

### Overview
A comprehensive sentiment analysis project comparing a classical Deep Learning approach (**LSTM**) against a modern Large Language Model (**Groq Llama-3 70B**) approach. The project implements a Teacher-Student architecture where the LLM acts as a teacher to validate/label data or serve as a performance benchmark.

### Key Features
- **Dual Model Architecture**:
  - **Student Model**: Custom Bidirectional LSTM with Embedding layer
  - **Teacher Model**: Llama-3.3-70b-versatile via Groq API
- **Advanced Preprocessing**: Sequence padding, tokenization, and vocabulary management
- **Performance Comparison**: direct comparison between lightweight LSTM and heavy LLM
- **Visualization**: Detailed plots for Accuracy, Loss, and Model Comparison

### Technologies Used
- **TensorFlow/Keras**: For building the LSTM model
- **Groq API**: For accessing Llama-3.3-70b LLM
- **NumPy/Pandas**: Data manipulation
- **Matplotlib**: Performance visualization

### Implementation Highlights
1. **Data Pipeline**: 
   - Loads IMDB dataset with 8000 word vocabulary
   - Splits data: 22,500 train, 2,500 validation, 25,000 test
2. **LSTM Model**:
   - Embedding Layer (100 dim)
   - SpatialDropout1D (0.35)
   - Bidirectional LSTM (96 units)
   - GlobalMaxPooling
3. **LLM Integration**:
   - Uses zero-shot prompting to classify sentiment
   - Serves as a "Teacher" baseline (Accuracy ~86%)
4. **Resutls**: 
   - Student (LSTM) achieves comparable accuracy (~86.7%) to the Teacher (LLM) but with significantly lower latency and cost.

### Usage
```bash
# Install dependencies
pip install tensorflow groq python-dotenv

# Run Notebook
jupyter notebook imdb_sentiment_analysis.ipynb
```

---

## 🤖 4. GenAI - Prompt Engineering with Gemini

### Overview
A comprehensive hands-on project exploring Generative AI using **Google's Gemini LLM**. Covers prompting strategies, text generation tasks, and understanding model limitations (hallucinations).

### Key Concepts
1. **Prompting Techniques**:
   - Zero-shot prompting
   - One-shot prompting
   - Few-shot prompting
   - Instruction-tuned prompting

2. **Text Generation Tasks**:
   - **Summarization**: Condensing information
   - **Inference**: Sentiment analysis, relationship extraction
   - **Transformation**: Format conversion (Text → JSON), style changes
   - **Expansion**: Creative writing, reasoning from small ideas

3. **Hallucination Testing**:
   - Factual errors (inventing facts)
   - Logical errors (failing logic puzzles)
   - Confident wrong answers (sycophancy)

### Project Structure
```
genai/
│
├── prompts/              # Prompting technique documentation
│   ├── zero_shot.md
│   ├── one_shot.md
│   ├── few_shot.md
│   └── instruction_tuned.md
│
├── tasks/                # Runnable scripts for GenAI tasks
│   ├── summarization.py
│   ├── inference.py
│   ├── transformation.py
│   └── expansion.py
│
├── hallucination_tests/  # Model failure demonstrations
│   ├── factual_errors.py
│   ├── logical_errors.py
│   └── confident_wrong.py
│
├── utils/                # Helper code and templates
│   ├── prompt_templates.py
│   └── response_validator.py
│
└── main.py               # Main CLI runner
```

### Prerequisites
1. Python 3.9+
2. Google Gemini API Key from [Google AI Studio](https://aistudio.google.com/)
3. Install dependencies:
   ```bash
   pip install google-generativeai python-dotenv
   ```

### Setup
1. Navigate to the genai directory:
   ```bash
   cd genai
   ```

2. Create `.env` file with your API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

### Usage
```bash
cd genai
python main.py
```

Follow the interactive menu to explore different GenAI concepts.

### Practice Workflow
1. **Phase 1 - UI Testing**: Test prompts in [Google AI Studio](https://aistudio.google.com/)
2. **Phase 2 - Code Implementation**: Run Python scripts to understand programmatic implementation

---

## 🛠️ Technologies Used

- **Python 3.x**
- **TensorFlow/Keras** (Deep Learning)
- **scikit-learn** (Machine Learning)
- **Groq API** (Llama 3)
- **Google Generative AI** (Gemini LLM)
- **Jupyter Notebook** (Interactive development)

---

## 📚 Learning Outcomes

- ✅ Log validation and error handling
- ✅ Transfer learning with ResNet50
- ✅ SVM classification for image data
- ✅ Teacher-Student Distillation (LLM to LSTM)
- ✅ Sentiment Analysis with RNN/LSTM
- ✅ Prompt engineering techniques
- ✅ Understanding LLM capabilities and limitations
- ✅ Practical GenAI application development

---

## 👤 Author
**Arvind Pandey**

---

## 📅 Last Updated
January 10, 2026
