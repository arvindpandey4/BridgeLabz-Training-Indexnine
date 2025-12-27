# Review Task - Log Validation

## Overview
This project implements a log validation system that checks the validity of log entries based on specific rules.

## Problem Statement
Write a function `validate_logs(logs)` where `logs` is a list of strings representing log entries.

### Rules
1. Each log line must follow the format: `"LEVEL: message"`
2. Valid log levels are: `INFO`, `WARNING`, `ERROR`
3. No two `ERROR` logs should occur consecutively
4. Return `True` if all logs are valid, otherwise return `False`

## Files

### `task.py`
Contains the main `validate_logs()` function that validates log entries according to the rules.

**Function Signature:**
```python
def validate_logs(logs: list) -> bool
```

**Parameters:**
- `logs` (list): A list of log strings in the format "LEVEL: message"

**Returns:**
- `bool`: `True` if all logs are valid, `False` otherwise

### `logs.py`
Contains comprehensive test cases to verify the `validate_logs()` function works correctly.

## Test Cases

The test suite includes 6 different scenarios:

1. **Normal logs** - Mix of INFO, WARNING, and ERROR logs
2. **Two ERRORs in a row** - Should fail validation
3. **ERRORs with other logs between them** - Should pass validation
4. **Invalid log level** - Contains DEBUG (invalid level)
5. **All INFO logs** - Should pass validation
6. **Three ERRORs in a row** - Should fail validation

## Usage

Run the test suite:
```bash
python logs.py
```

## Example

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

## Implementation Details

The function validates logs by:
1. Splitting each log entry by `:` to extract the level
2. Checking if the level is in the valid levels list
3. Tracking the previous log level to detect consecutive ERRORs
4. Returning `False` immediately if any validation rule is violated

## Requirements
- Python 3.x

## Author
Arvind Pandey
