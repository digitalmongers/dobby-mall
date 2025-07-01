const Student = require('../models/student');

exports.registerStudent = async (req, res) => {
  const {
    name,
    class: studentClass,
    phone,
    email,
    schoolname,
    parentName,
    parentPhone,
    address
  } = req.body;

  // Check all required fields
  if (!name || !studentClass || !phone || !email || !schoolname || !parentName || !parentPhone || !address) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const student = await Student.create({
      name,
      class: studentClass,
      phone,
      email,
      schoolname,
      parentName,
      parentPhone,
      address
    });

    res.status(201).json({ message: 'Student registered successfully'});
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
