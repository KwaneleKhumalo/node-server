import http from "http";
import fetch from "node-fetch";
import { getData, tableData } from "./data.js";
import fs from "fs";

const server = http.createServer(async (req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Node JS</h1>");

    fs.readFile("./dummy.jpg", (e, data) => {
      if (e) {
        console.log(e);
      } else {
        res.writeHead(200, { "Content-Type": "img/jpeg" });
        res.write(data);
        res.end(data);
      }
    });

    // res.write(data)
    res.end();

    // res.write("<h1>Welcome!</h1>" + image);
  } else if (url === "/list") {
    const listURL = "https://swapi.dev/api/people";
    fetch(listURL)
      .then((response) => response.json())
      .then((data) => {
        getData(data.results);
        res.write(tableData);
        res.end();
      });
  } else {
    res.write(
      "<h1 style=text-align:center; padding:20px;>This Page Does not exist!</h1>"
    );
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
