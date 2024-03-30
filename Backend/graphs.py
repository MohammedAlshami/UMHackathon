import json

# Load JSON data from file
with open(r"C:\Users\USER\Downloads\Dataset.json", 'r') as file:
    transactions = json.load(file)

# Initialize dictionaries to store monthly spending
monthly_spending = {}

# Process each transaction
for transaction in transactions:
    date = transaction["DATE"]
    deposit_amt_str = transaction[" DEPOSIT AMT "].strip().replace(',', '')  # Remove commas
    if deposit_amt_str:  # Check if deposit amount is not empty
        deposit_amt = float(deposit_amt_str)  # Convert to float
    else:
        deposit_amt = 0.0  # Assign 0 if deposit amount is empty
    month, year = date.split('-')[1], date.split('-')[2]  # Extract month and year
    month_year = f"{month}-{year}"

    # Update monthly spending
    if month_year in monthly_spending:
        monthly_spending[month_year] += deposit_amt
    else:
        monthly_spending[month_year] = deposit_amt

# Extract months and corresponding spent amounts
months = list(monthly_spending.keys())
spent_amounts = list(monthly_spending.values())

# Output the lists
print("Months:", months)
print("Spent Amounts:", spent_amounts)