import { getDatabase, ref, get } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLv1DiRB6egmpaoIKfjODXZF5fYheQKIM",
  authDomain: "realtimedatabasetest-f226a.firebaseapp.com",
  databaseURL:
    "https://realtimedatabasetest-f226a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "realtimedatabasetest-f226a",
  storageBucket: "realtimedatabasetest-f226a.appspot.com",
  messagingSenderId: "348704796176",
  appId: "1:348704796176:web:38994c5ab4d54b752ce495",
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
