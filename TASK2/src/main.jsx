 const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const fileUpload = require("express-fileupload");
const xlsx = require("xlsx");

// ✅ Express App Setup
const app = express();
app.use(express.json());
app.use(fileUpload());

// ✅ MySQL Connection (Sequelize)
const sequelize = new Sequelize("excel_db", "root", "12345", {
  host: "localhost",
  dialect: "mysql",
});

// ✅ User Model
const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false, // ✅ isse `createdAt` aur `updatedAt` nahi add hoga
  }
);

// ✅ Upload & Process Excel File
app.post("/upload", async (req, res) => {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const file = req.files.file;
  const workbook = xlsx.read(file.data, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

  console.log("📌 Sheet Data:", sheetData);

  // ✅ Save Data to MySQL
  try {
    await User.bulkCreate(sheetData);
    res.json({ message: "Data inserted successfully!" });
  } catch (error) {
    console.error("❌ Error inserting data:", error);
    res.status(500).json({ error: "Failed to insert data" });
  }
});

// ✅ Fetch Data API
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// ✅ Sync Database & Start Server
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("✅ Database Synced");
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch((err) => console.error("❌ Database Sync Error:", err));
