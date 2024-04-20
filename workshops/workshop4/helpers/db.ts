import mongoose from "mongoose";


// import { config } from "dotenv";
// config();

export default function connect_to_db() {
  if (process.env.DB_PATH) {
    mongoose
      .connect(process.env.DB_PATH)
      .then(() => console.log("Connected to database successfully"))
      .catch(console.log);
  } else {
    console.log("Missing database url");
  }
}
