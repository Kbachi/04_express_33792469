// Import express and create a router object
const express = require("express");
const router = express.Router();
const path = require("path"); // needed for the /file route

// Define routes
router.get("/", (req, res) => res.send("Hello World!"));
router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));
router.get("/contact", (req, res) => res.send("<h1>Contact: uhoss002@gold.ac.uk</h1>"));
router.get("/date", (req, res) => res.send(new Date().toString()));

router.get("/welcome/:name", (req, res) => {
  res.send(`<h1>Welcome, ${req.params.name}!</h1>`);
});

// 2️⃣ Chained handlers: /chain
function first(req, res, next) {
  req.start = Date.now();
  next();
}
function second(req, res) {
  res.send(`Chained! Took ${Date.now() - req.start}ms`);
}
router.get("/chain", first, second);

// 3️⃣ Sending a file: /file
router.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "a.html"));
});

// Export this router so index.js can use it
module.exports = router;
