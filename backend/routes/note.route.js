const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');

router.post("/create", noteController.createNote);
router.get("/get-note-by-date", noteController.getNotesByDate );

module.exports = router;