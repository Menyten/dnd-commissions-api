require("dotenv").config();
const connectToDb = require("./db/connectToDb");
const startServer = require("./server");

connectToDb().once("open", () => {
  console.log("Connected to DB");
  startServer();
});
