import express from "express";
const router = express.Router();
import Url from "../model/url.js";
import { nanoid } from "nanoid";

// Post router create a short URL
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

router.get("/:urlCode", async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.urlCode });
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json("No URL Found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
});
export default router;
