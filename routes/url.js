const express = require("express");
const router = express.Router();
const Url = require("../model/url");
const { nanoid } = require("nanoid");

// Route to create a short URL
router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  const urlCode = nanoid(6);
  const shortUrl = `http://localhost:3000/${urlCode}`;

  try {
    let url = new Url({
      urlCode,
      longUrl,
      shortUrl,
    });
    await url.save();
    res.json(shortUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
