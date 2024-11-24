const express = require("express");
const app = express();
const PORT = 80;

app.get("/", (req, res) => {
  res.send("Jebin,Boby,Ansil,Aswin Cyclops");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
