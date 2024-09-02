var express = require("express");
var cors = require("cors");
var app = express();
const reader = require("xlsx");

const file = reader.readFile("./file_example_XLS_50.xls");
app.use(cors());

app.get("/sheets", (req, res, next) => {
  res.send(data);
});

let data = [];
const sheets = file.SheetNames;
for (let i = 0; i < sheets.length; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  temp.forEach((res) => {
    data.push(res);
  });
}

// console.log(data);

app.listen(3000, () => {
  console.log("  listening on port 3000");
});
