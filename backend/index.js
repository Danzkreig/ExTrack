import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.get("/", (request, response) => {
  response.status(200);
  response.send("GET successful.");
});
app.listen(port, () => {
  console.log("Server started at http://localhost:" + port);
});
