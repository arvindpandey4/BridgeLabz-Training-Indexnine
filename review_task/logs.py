from task import validate_logs

print("Testing Log Validation")

print("\nTest 1: Normal logs")
logs1 = ["INFO: Server started", "WARNING: Low memory", "ERROR: Connection failed"]
print("Logs:")
for log in logs1:
    print(log)
result1 = validate_logs(logs1)
print("Result:", result1)
print("Expected: True")

print("\nTest 2: Two ERRORs in a row")
logs2 = ["INFO: Server started", "ERROR: Connection failed", "ERROR: Timeout"]
print("Logs:")
for log in logs2:
    print(log)
result2 = validate_logs(logs2)
print("Result:", result2)
print("Expected: False")

print("\nTest 3: ERRORs with other logs between them")
logs3 = ["ERROR: First error", "INFO: Recovered", "ERROR: Second error"]
print("Logs:")
for log in logs3:
    print(log)
result3 = validate_logs(logs3)
print("Result:", result3)
print("Expected: True")

print("\nTest 4: Invalid log level")
logs4 = ["INFO: Message", "DEBUG: Testing", "WARNING: Alert"]
print("Logs:")
for log in logs4:
    print(log)
result4 = validate_logs(logs4)
print("Result:", result4)
print("Expected: False")

print("\nTest 5: All INFO logs")
logs5 = ["INFO: Message 1", "INFO: Message 2", "INFO: Message 3"]
print("Logs:")
for log in logs5:
    print(log)
result5 = validate_logs(logs5)
print("Result:", result5)
print("Expected: True")

print("\nTest 6: Three ERRORs in a row")
logs6 = ["ERROR: Error 1", "ERROR: Error 2", "ERROR: Error 3"]
print("Logs:")
for log in logs6:
    print(log)
result6 = validate_logs(logs6)
print("Result:", result6)
print("Expected: False")

