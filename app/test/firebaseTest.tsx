'use client';
import React, { useEffect, useState } from 'react';
import { getAllRecordsFromTable } from '../components/FirebaseUtils/DataRetrieve'; // Assuming you have the Firebase utils file in a 'utils' folder

const TestPage: React.FC = () => {
  const [records, setRecords] = useState<any[]>([]); // Assuming the records have any type

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        // Replace 'your_table_name' with the actual name of your Firebase Realtime Database table
        const tableName = 'Datasets';
        const fetchedRecords = await getAllRecordsFromTable({ tableName });
        if (fetchedRecords) {
          setRecords(fetchedRecords);
        }
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div>
      <h1>Records from Firebase Realtime Database</h1>
      <ul>
        {records.map((record, index) => (
          <li key={index}>{JSON.stringify(record)}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
