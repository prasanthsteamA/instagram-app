const express = require("express");
const axios = require("axios");

const router = express.Router();

// Fetch messages
router.get("/conversations", async (req, res) => {
  try {
    const accessToken = req.cookies.access_token;
    if (!accessToken) return res.status(401).json({ error: "Unauthorized" });

    const messagesResponse = await axios.get(`https://graph.facebook.com/v12.0/me/conversations?access_token=${accessToken}`);
    res.json(messagesResponse.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// Reply to a message
router.post("/reply", async (req, res) => {
  try {
    const { conversationId, message } = req.body;
    const accessToken = req.cookies.access_token;

    if (!accessToken) return res.status(401).json({ error: "Unauthorized" });

    await axios.post(`https://graph.facebook.com/v12.0/${conversationId}/messages`, {
      message: { text: message },
      access_token: accessToken
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router;
