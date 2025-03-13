import express from "express";
import { google } from "googleapis";
import cors from "cors";
// import creds from "./todolist-453515-cbbd2279141f.json" assert { type: "json" };

const app = express();
const PORT = 3001;

// enable CORS
app.use(cors());

// parse JSON requests
app.use(express.json());

// Google Sheets API setup
const auth = new google.auth.GoogleAuth({
  // credentials: creds,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Your spreadsheet ID

// Post endpoint to add task

// Get endpoint to fetch tasks from google sheets

// Delete endpoint to delete a task from google sheets

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
