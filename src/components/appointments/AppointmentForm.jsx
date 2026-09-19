import { useEffect, useRef, useState } from "react";
import { doctors } from "../../data/doctors";
import Card from "../ui/Card";
import { validateAppointment } from "../../utils/validators";

export default function AppointmentForm({
  selectedDoctorId,
  onAddAppointment,
  onResetDoctor,
}) {
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [doctorId, setDoctorId] = useState(selectedDoctorId || "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState({});
  const referenceIdRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState("");
  const isFormFilled = Boolean(
    patientName.trim() && phone && doctorId && date && time,
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateAppointment({
      patientName,
      phone,
      doctorId,
      date,
      time,
      note,
    });
    try {
      const referenceId = referenceIdRef.current.value;

      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        return;
      }

      const newAppointment = {
  id: Date.now().toString(),
  patientName: patientName.trim(),
  phone,
  doctorId,
  date,
  time,
  status: "Pending",
  note: note.trim(),
  referenceId,
};

      onAddAppointment(newAppointment);

      setPatientName("");
      setPhone("");
      setDoctorId("");
      setDate("");
      setTime("");
      setNote("");
      setErrors({});

      onResetDoctor();

      referenceIdRef.current.value = "";

      setSuccessMessage("Appointment booked successfully.");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch {
      setSuccessMessage("Something went wrong. Please try again.");
    }

  };

  useEffect(() => {
    setDoctorId(selectedDoctorId || "");
  }, [selectedDoctorId]);

  const handleReset = () => {
    setPatientName("");
    setPhone("");
    setDoctorId("");
    setDate("");
    setTime("");
    setNote("");
    setErrors({});
    setSuccessMessage("");

    onResetDoctor();

    referenceIdRef.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <h2 className="text-base font-semibold text-[#0F172A]">
          Book New Appointment
        </h2>

        {successMessage && (
          <p className="mt-3 rounded-lg bg-[#DCFCE7] px-3 py-2 text-sm font-medium text-[#15803D]">
            {successMessage}
          </p>
        )}

        {/* Patient Name */}
        <div className="mt-4">
          <label
            htmlFor="patientName"
            className="mb-1 block text-sm font-medium text-[#0F172A]"
          >
            Patient Name
          </label>

          <input
            id="patientName"
            type="text"
            value={patientName}
            onChange={(event) => setPatientName(event.target.value)}
            placeholder="Enter patient name"
            className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-sm outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
          />

          {errors.patientName && (
            <p className="mt-1 text-xs text-[#DC2626]">{errors.patientName}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mt-3">
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-medium text-[#0F172A]"
          >
            Phone
          </label>

          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="01XXXXXXXXX"
            className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-sm outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-[#DC2626]">{errors.phone}</p>
          )}
        </div>

        {/* Doctor */}
        <div className="mt-3">
          <label
            htmlFor="doctor"
            className="mb-1 block text-sm font-medium text-[#0F172A]"
          >
            Doctor
          </label>

          <select
            id="doctor"
            value={doctorId}
            onChange={(event) => setDoctorId(event.target.value)}
            className="h-10 w-full rounded-lg border border-[#E2E8F0] bg-white px-3 text-sm outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
          >
            <option value="">Select doctor</option>

            {doctors
              .filter((doctor) => doctor.available)
              .map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} — {doctor.department}
                </option>
              ))}
          </select>
          {errors.doctorId && (
            <p className="mt-1 text-xs text-[#DC2626]">{errors.doctorId}</p>
          )}
        </div>

        {/* Date & Time */}
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label
              htmlFor="date"
              className="mb-1 block text-sm font-medium text-[#0F172A]"
            >
              Date
            </label>

            <input
              id="date"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-sm outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
            />
            {errors.date && (
              <p className="mt-1 text-xs text-[#DC2626]">{errors.date}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="time"
              className="mb-1 block text-sm font-medium text-[#0F172A]"
            >
              Time
            </label>

            <input
              id="time"
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
              className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-sm outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
            />
            {errors.time && (
              <p className="mt-1 text-xs text-[#DC2626]">{errors.time}</p>
            )}
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="referenceId"
            className="mb-1 block text-sm font-medium text-[#0F172A]"
          >
            Reference ID
          </label>

          <input
            ref={referenceIdRef}
            id="referenceId"
            type="text"
            placeholder="Optional reference ID"
            className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-sm outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
          />
        </div>

        {/* Note */}
        <div className="mt-3">
          <label
            htmlFor="note"
            className="mb-1 block text-sm font-medium text-[#0F172A]"
          >
            Note
          </label>

          <textarea
            id="note"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Optional note"
            rows="3"
            className="w-full resize-none rounded-lg border border-[#E2E8F0] px-3 py-2 text-sm outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
          />
          {errors.note && (
            <p className="mt-1 text-xs text-[#DC2626]">{errors.note}</p>
          )}
        </div>

        {/* Submit And Reset */}
        <div className="mt-4 flex gap-2">
          <button
            type="submit"
            disabled={!isFormFilled}
            className="flex-1 rounded-lg bg-[#0F766E] px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Book Appointment
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="rounded-lg border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-semibold text-[#64748B]"
          >
            Reset
          </button>
        </div>
      </form>
    </Card>
  );
}
