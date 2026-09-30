// Attendance management endpoints
const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');

// Mark or Update batch attendance
router.post('/mark', async (req, res) => {
  const { records, date } = req.body; // records = [{ studentId, status }, ...]

  if (!records || !date) {
    return res.status(400).json({ message: 'Date and records are required' });
  }

  try {
    const operations = records.map(record => ({
      updateOne: {
        filter: { student: record.student, date: date },
        update: { status: record.status },
        upsert: true
      }
    }));

    await Attendance.bulkWrite(operations);
    res.json({ message: 'Attendance recorded successfully!' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get attendance history with filters (Date & Student)
router.get('/', async (req, res) => {
  const { date, studentId } = req.query;
  let query = {};

  if (date) query.date = date;
  if (studentId) query.student = studentId;

  try {
    const history = await Attendance.find(query)
      .populate('student')
      .sort({ date: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;