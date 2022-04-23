const express = require('express');
const router = express.Router();
const messagesController = require("./../controllers/messages");

router.get("/", messagesController.getAll);
router.get("/:id", messagesController.getId);
router.post("/", messagesController.create);
router.put("/:id", messagesController.update);

module.exports = router;