const express = require("express");
var cors = require("cors");
const path = require('path');
const queries = require("./queries");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.json({
    name: "John",
    age: 30,
    city: "New York",
  });
});

app.get("/users", queries.getUsers);
app.post("/users", queries.getUserByEmail);
app.get("/users-pagination", queries.getUsersPagination);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
