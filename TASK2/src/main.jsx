import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)




const express = require("express");
const mysql = require("mysql");
const xlsx = require("xlsx");
const path = require("path");

const app = express();

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "excel_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Route: Read Excel File & Save Data
app.get("/upload", (req, res) => {
  const filePath = path.join(__dirname, "/Book1.xlsx"); // 👈 Ensure correct file path

  console.log("Reading File:", filePath);

  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0]; // First sheet
  const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

  if (sheetData.length === 0) {
    return res.send("No data found in Excel file.");
  }

  // Insert Data into MySQL
  sheetData.forEach((row) => {
    const { name, email, age } = row; // Ensure correct column names

    console.log("📌 Inserting Data:", name, email, age); // ✅ Yeh check karega ki sahi values ja rahi hain ya nahi

    const sql = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
    db.query(sql, [name, email, age], (err, result) => {
      if (err) {
        console.error("❌ SQL Error:", err);
      } else {
        console.log("✅ Data Inserted Successfully!", result);
      }
    });
  });

  res.send("Data inserted successfully!");
});

app.listen(5000, () => console.log("Server running on port 5000"));
