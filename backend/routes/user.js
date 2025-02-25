const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/profile", async (req, res) => {
  try {
    const accessToken = req.cookies.access_token;
    if (!accessToken) return res.status(401).json({ error: "Unauthorized" });

    const userResponse = await axios.get(`https://graph.instagram.com/me?fields=id,username,account_type,profile_picture_url&access_token=${accessToken}`);
    res.json(userResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user data" });
  }
});

module.exports = router;
