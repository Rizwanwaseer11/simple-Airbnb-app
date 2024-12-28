//Core Modules
const path = require("path");

//external modules
const express = require("express");
const { route } = require("./routes/userRouter");

//local modules
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
