import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://ashishgk1999:kkJhXBCrtz4lKtmy@cluster0.zsrgvmp.mongodb.net/"
  )
  .then(() => {
    console.log("Db is connecting");
  })
  .catch((err) => {
    console.log(err);
  });
