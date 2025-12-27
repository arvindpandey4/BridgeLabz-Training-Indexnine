# Problem

# Write a function validate_logs(logs) where logs is a list of strings.

# Rules
# 1. Each log line: "LEVEL: message"
# 2. Valid LEVELS: INFO, WARNING, ERROR
# 3. No two ERROR logs should occur consecutively
# 4. Return True if logs are valid else False.


def validate_logs(logs):
    valid_levels = ["INFO", "WARNING", "ERROR"]
    prev_level = None
    
    for log in logs:
        parts = log.split(":")
        if len(parts) < 2:
            return False
        
        level = parts[0]
        
        if level not in valid_levels:
            return False
        
        if level == "ERROR" and prev_level == "ERROR":
            return False
        
        prev_level = level
    
    return True
