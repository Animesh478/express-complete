const express = require("express");
const PORT = require("./env");
const path = require("node:path");

const app = express();

// app.use(express.static(`${__dirname}/public`));

const staticPath = path.join(__dirname, "public");
app.use(express.static(staticPath));
// Note: always use absolute path static() method but it can be done with relative path also

// Both the ways above use absolute path, but the second one is platform independent

app.use(express.urlencoded());
app.use(express.json());

app.get("/user", (req, res) => {
  const info = req.query;
  console.log(info);
  res.redirect("/");
});
app.post("/user", (req, res) => {
  const info = req.body;
  console.log(info);
  res.redirect("/");
});

app.use("/", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "view", "404.html"));
});

// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
