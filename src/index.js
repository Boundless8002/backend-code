import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: "./env" });

// connected db return a promise
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () =>
      console.log(` Mongodb connected at port ${process.env.PORT}`)
    );
  })
  .catch((err) => {
    console.log("connection failed at mongodb ", err);
  });
