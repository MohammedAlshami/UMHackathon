import json

def process_data_and_return(column_name, json_file, start_date=None, end_date=None):
    # Function to load JSON file and extract category data
    def load_json_and_process(file_path, column_name, start_date=None, end_date=None):
        # Function to load JSON file
        def load_json_file(file_path):
            with open(file_path, 'r') as file:
                data = json.load(file)
            return data

        # Function to extract categories and their corresponding amounts
        def extract_category_data(json_data, column_name, start_date=None, end_date=None):
            category_totals = {}
            for item in json_data:
                if column_name in item and item[column_name].strip() != "":
                    date = item.get("DATE", "")  # Assuming there's a "DATE" key in the JSON data
                    if start_date and end_date:
                        if start_date <= date <= end_date:
                            category = item[column_name].strip()
                            deposit_amt = item.get(" WITHDRAWAL AMT ", "").strip()
                            if deposit_amt:  # Check if deposit amount is not empty
                                amount = float(deposit_amt.replace(",", "").strip())
                                category_totals[category] = category_totals.get(category, 0) + amount
                    else:
                        category = item[column_name].strip()
                        deposit_amt = item.get(" WITHDRAWAL AMT ", "").strip()
                        if deposit_amt:  # Check if deposit amount is not empty
                            amount = float(deposit_amt.replace(",", "").strip())
                            category_totals[category] = category_totals.get(category, 0) + amount
            return category_totals

        # Load JSON file
        json_data = load_json_file(file_path)

        # Convert start_date and end_date to datetime objects if provided
        if start_date:
            start_date = start_date
        if end_date:
            end_date = end_date

        # Extract category data within the given date range
        category_totals = extract_category_data(json_data, column_name, start_date, end_date)

        return category_totals

    # Process data and return labels and values
    category_totals = load_json_and_process(json_file, column_name, start_date, end_date)
    labels = list(category_totals.keys())
    values = list(category_totals.values())

    return [labels, values]

# Example usage:
labels_values_list = process_data_and_return('CATEGORY', r"C:\Users\USER\Downloads\Dataset.json", start_date=None, end_date=None)
print(labels_values_list)
