import { useRef, useState } from "react";

export default function BookingForm({ selectedDoctor, onBookAppointment }) {
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const fileInputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (!/^\d{11}$/.test(phone)) {
      setPhoneError("Enter a valid 11-digit phone number.");
      return;
    }

    setPhoneError("");

    const appointment = {
      id: Date.now(),
      patientName,
      phone,
      doctor: selectedDoctor,
      date,
      time,
      note,
      reportFile: fileInputRef.current.files[0] || null,
      status: "Pending",
    };

    onBookAppointment(appointment);

    setPatientName("");
    setPhone("");
    setDate("");
    setTime("");
    setNote("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handlePhoneChange(event) {
    const value = event.target.value;

    setPhone(value);

    if (value && !/^\d{11}$/.test(value)) {
      setPhoneError("Enter a valid 11-digit phone number.");
    } else {
      setPhoneError("");
    }
  }

  return (
    <section className="rounded-[12px] border border-[#E2E8F0] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
      <h2 className="text-base font-semibold text-[#0F172A]">
        Book New Appointment
      </h2>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        {/* Patient Name */}
        <div>
          <label className="text-xs font-medium text-[#64748B]">
            Patient Name <span className="text-[#DC2626]">*</span>
          </label>

          <input
            type="text"
            value={patientName}
            onChange={(event) => setPatientName(event.target.value)}
            required
            className="mt-1 w-full rounded-[8px] border border-[#E2E8F0] px-3 py-2.5 text-sm outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-xs font-medium text-[#64748B]">
            Phone Number <span className="text-[#DC2626]">*</span>
          </label>

          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="017XXXXXXXX"
            required
            className={`mt-1 w-full rounded-[8px] border px-3 py-2.5 text-sm outline-none ${
              phoneError
                ? "border-[#DC2626]"
                : "border-[#E2E8F0] focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E]"
            }`}
          />

          {phoneError && (
            <p className="mt-1 text-xs text-[#DC2626]">{phoneError}</p>
          )}
        </div>

        {/* Doctor */}
        <div>
          <label className="text-xs font-medium text-[#64748B]">
            Doctor <span className="text-[#DC2626]">*</span>
          </label>

          <div className="mt-1 rounded-[8px] border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0F172A]">
            {selectedDoctor
              ? `${selectedDoctor.name} — ${selectedDoctor.department}`
              : "Select a doctor from the list"}
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="text-xs font-medium text-[#64748B]">
              Date <span className="text-[#DC2626]">*</span>
            </label>

            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
              className="mt-1 w-full rounded-[8px] border border-[#E2E8F0] px-3 py-2.5 text-sm outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E]"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-[#64748B]">
              Time <span className="text-[#DC2626]">*</span>
            </label>

            <input
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
              required
              className="mt-1 w-full rounded-[8px] border border-[#E2E8F0] px-3 py-2.5 text-sm outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E]"
            />
          </div>
        </div>

        {/* Note */}
        <div>
          <label className="text-xs font-medium text-[#64748B]">
            Note (optional)
          </label>

          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            maxLength={200}
            placeholder="Write a short note... (max 200 characters)"
            rows={3}
            className="mt-1 w-full resize-none rounded-[8px] border border-[#E2E8F0] px-3 py-2.5 text-sm outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E]"
          />
        </div>

        {/* File */}
        <div>
          <label className="text-xs font-medium text-[#64748B]">
            Report file (optional) — uncontrolled, read with useRef
          </label>

          <input
            ref={fileInputRef}
            type="file"
            className="mt-1 w-full rounded-[8px] border border-dashed border-[#E2E8F0] bg-[#F8FAFC] px-3 py-2.5 text-sm text-[#64748B]"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-1">
          <button
            type="submit"
            disabled={!selectedDoctor}
            className="rounded-[8px] bg-[#0F766E] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#115E59] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Book Appointment
          </button>

          <button
            type="button"
            onClick={() => {
              setPatientName("");
              setPhone("");
              setDate("");
              setTime("");
              setNote("");
              setPhoneError("");

              if (fileInputRef.current) {
                fileInputRef.current.value = "";
              }
            }}
            className="rounded-[8px] border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm font-semibold text-[#64748B]"
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}