export function validateAppointment({
  patientName,
  phone,
  doctorId,
  date,
  time,
  note,
}) {
  const errors = {};

  if (!patientName.trim() || patientName.trim().length < 3) {
    errors.patientName =
      "Patient name must be at least 3 characters.";
  }

  if (!/^01\d{9}$/.test(phone)) {
    errors.phone =
      "Enter a valid 11-digit phone number.";
  }

  if (!doctorId) {
    errors.doctorId = "Please select a doctor.";
  }

  if (!date) {
    errors.date = "Appointment date cannot be in the past.";
  } else {
    const today = new Date().toISOString().split("T")[0];

    if (date < today) {
      errors.date =
        "Appointment date cannot be in the past.";
    }
  }

  if (!time) {
    errors.time = "Please select a time.";
  }

  if (note.length > 200) {
    errors.note =
      "Note cannot exceed 200 characters.";
  }

  return errors;
}