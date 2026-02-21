import pandas as pd
from sqlalchemy import create_engine
import os

# Connect to SQLite DB
engine = create_engine("sqlite:///./datasentinel.db")
csv_folder = "./olist_data"

print("Starting data load... Please wait.")

for file in os.listdir(csv_folder):
    if file.endswith(".csv"):
        # Clean file name to make a short table name
        table_name = file.replace("olist_", "").replace("_dataset", "").replace(".csv", "")
        print(f"Loading table: {table_name}...")
        
        # Read and load into database
        df = pd.read_csv(os.path.join(csv_folder, file), low_memory=False)
        df.to_sql(table_name, engine, if_exists='replace', index=False)

print("🎉 Success: Saara data database mein load ho gaya!")