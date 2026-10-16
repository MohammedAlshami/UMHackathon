import { getDatabase, ref, get } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  databaseURL:
    process.env.NEXT_PUBLIC_FIREBASE_DB_URL || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);

// Function to get all records from the database
interface GetAllRecordsFromTableProps {
  tableName: string;
}

export const getAllRecordsFromTable = async ({
  tableName,
}: GetAllRecordsFromTableProps) => {
  try {
    // Get a reference to the specified location in Realtime Database
    const tableRef = ref(db, tableName);

    // Fetch the data at the specified location
    const snapshot = await get(tableRef);

    if (snapshot.exists()) {
      // Convert the snapshot to JavaScript object
      const data = snapshot.val();
      return data;
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data from Realtime Database:", error);
    return null;
  }
};
