const { Note } = require("../models/note.model");

const createNote = async (req, res) => {
  try {
    const { title, content, date } = req.body;
    const note = new Note({
      title,
      content,
      date,
      status: "active",
    });
    await note.save();
    res.status(201).send(note);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getNotesByDate = async (req, res) => {
  try {
    const { date } = req.params; // Ngày ở định dạng yyyy-mm-dd
    const notes = await Note.find({ date });
    res.status(200).send(notes);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
module.exports = { createNote, getNotesByDate };
