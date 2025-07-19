// server.js
const express = require("express");
const next = require("next");
require("dotenv").config();

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Optional: Add custom route handling here
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`🚀 Server ready on http://localhost:${port}`);
  });
});
