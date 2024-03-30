import json

# Load JSON data from file
with open(r"C:\Users\USER\Downloads\Dataset.json", 'r') as file:
    transactions = json.load(file)
# Initialize dictionaries to store spending per category
category_spending = {}

# Process each transaction
for transaction in transactions:
    category = transaction["CATEGORY"]
    deposit_amt_str = transaction[" DEPOSIT AMT "].strip().replace(',', '')  # Remove commas
    if deposit_amt_str:  # Check if deposit amount is not empty
        deposit_amt = float(deposit_amt_str)  # Convert to float
    else:
        deposit_amt = 0.0  # Assign 0 if deposit amount is empty

    # Update spending per category
    if category in category_spending:
        category_spending[category] += deposit_amt
    else:
        category_spending[category] = deposit_amt

# Write categories and spending values to a file
with open('category_spending.txt', 'w') as outfile:
    for category, value in category_spending.items():
        outfile.write(f"{category}: {value}\n")

# Output categories and spending values
print("Categories:", list(category_spending.keys()))
print("Spending Values:", list(category_spending.values()))