const express = require("express");
const router = express.Router();
const Url = require("../model/url");
const { nanoid } = require("nanoid");

// Route to create a short URL
router.post("/shorten", async (req, res) => {
  const { originalUrl, expiresAt } = req.body;
  const shortUrl = nanoid(6);
});
