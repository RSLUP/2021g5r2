require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const adminRouter = require("./api/admin/admin.router");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("server up and running on PORT: ", process.env.APP_PORT);
});
