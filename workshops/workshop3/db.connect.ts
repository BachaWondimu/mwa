import mongoose from "mongoose";

if (process.env.DB_URL) {
    mongoose
      .connect(process.env.DB_URL)
        .then(() => console.log("DB is conneced successfully"))
        .catch(()=>console.log("connection failed"));
}
else {
    console.log("No db url is found");
}
