const express = require("express");
const axios = require("axios");
const { INSTAGRAM_CLIENT_ID, INSTAGRAM_CLIENT_SECRET, REDIRECT_URI } = require("../config");

const router = express.Router();

// Step 1: Redirect to Instagram OAuth
router.get("/login", (req, res) => {
  const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;
  res.redirect(authUrl);
});

// Step 2: Handle Instagram OAuth Callback
router.get("/callback", async (req, res) => {
  try {
    const { code } = req.query;
    const tokenResponse = await axios.post("https://api.instagram.com/oauth/access_token", {
      client_id: INSTAGRAM_CLIENT_ID,
      client_secret: INSTAGRAM_CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: REDIRECT_URI,
      code
    });

    const accessToken = tokenResponse.data.access_token;
    res.cookie("access_token", accessToken, { httpOnly: true });
    res.redirect("http://localhost:3000/profile");
  } catch (error) {
    res.status(500).json({ error: "OAuth Failed", details: error.message });
  }
});

module.exports = router;
