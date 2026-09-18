import { useState } from "react";

import Header from "./components/Header";
import Stats from "./components/Stats";
import DoctorPanel from "./components/DoctorPanel";
import BookingForm from "./components/BookingForm";
import Appointments from "./components/Appointments";

import doctors from "./data/doctors";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  function handleSelectDoctor(doctor) {
    setSelectedDoctor(doctor);
  }

  function handleBookAppointment(appointment) {
    setAppointments((currentAppointments) => [
      ...currentAppointments,
      appointment,
    ]);

    setSelectedDoctor(null);

    setSuccessMessage(
      `Appointment booked successfully for ${appointment.patientName}.`,
    );

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }

  function handleStatusChange(id, status) {
    setAppointments((currentAppointments) =>
      currentAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, status } : appointment,
      ),
    );
  }

  function handleDeleteAppointment(id) {
    setAppointments((currentAppointments) =>
      currentAppointments.filter((appointment) => appointment.id !== id),
    );
  }

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      <Header />

      <main className="mx-auto max-w-[1200px] px-6 py-6">
        <Stats doctors={doctors} appointments={appointments} />

        {successMessage && (
          <div className="mt-4 rounded-[8px] border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-3 text-sm font-medium text-[#047857]">
            ✓ {successMessage}
          </div>
        )}

        <ErrorBoundary>
          <div className="mt-6 grid gap-6 lg:grid-cols-[40%_60%]">
            <DoctorPanel
              selectedDoctor={selectedDoctor}
              onSelectDoctor={handleSelectDoctor}
            />

            <BookingForm
              selectedDoctor={selectedDoctor}
              onBookAppointment={handleBookAppointment}
            />
          </div>
        </ErrorBoundary>

        <div className="mt-6">
          <ErrorBoundary>
            <Appointments
              appointments={appointments}
              onStatusChange={handleStatusChange}
              onDelete={handleDeleteAppointment}
            />
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
}

export default App;
