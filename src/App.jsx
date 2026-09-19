import { useState } from "react";
import Header from "./components/layout/Header";
import PageContainer from "./components/layout/PageContainer";
import StatGrid from "./components/stats/StatGrid";
import DoctorPanel from "./components/doctors/DoctorPanel";
import AppointmentForm from "./components/appointments/AppointmentForm";
import { appointments as initialAppointments } from "./data/appointments";
import AppointmentList from "./components/appointments/AppointmentList";
import { doctors } from "./data/doctors";
import Footer from "./components/layout/Footer";
import DoctorList from "./components/doctors/DoctorList";
import ErrorBoundary from "./components/error/ErrorBoundary";

export default function App() {
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [appointments, setAppointments] = useState(initialAppointments);
  const handleAddAppointment = (newAppointment) => {
    setAppointments((currentAppointments) => [
      newAppointment,
      ...currentAppointments,
    ]);
  };
  const handleResetDoctor = () => {
    setSelectedDoctorId(null);
  };

  const handleStatusChange = (appointmentId, newStatus) => {
    setAppointments((currentAppointments) =>
      currentAppointments.map((appointment) =>
        appointment.id === appointmentId
          ? { ...appointment, status: newStatus }
          : appointment,
      ),
    );
  };

  const handleDeleteAppointment = (appointmentId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this appointment?",
    );

    if (!shouldDelete) {
      return;
    }

    setAppointments((currentAppointments) =>
      currentAppointments.filter(
        (appointment) => appointment.id !== appointmentId,
      ),
    );
  };

  const totalDoctors = doctors.length;

  const totalAppointments = appointments.length;

  const pendingAppointments = appointments.filter(
    (appointment) => appointment.status === "Pending",
  ).length;

  const completedAppointments = appointments.filter(
    (appointment) => appointment.status === "Completed",
  ).length;

  return (
    <>
      <Header />

      <PageContainer>
        <div className="flex flex-col gap-6">
          <StatGrid
            totalDoctors={totalDoctors}
            totalAppointments={totalAppointments}
            pendingAppointments={pendingAppointments}
            completedAppointments={completedAppointments}
          />
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[2fr_3fr]">
            <DoctorPanel>
              {(filteredDoctors) => (
                <DoctorList
                  doctors={filteredDoctors}
                  selectedDoctorId={selectedDoctorId}
                  onSelect={setSelectedDoctorId}
                />
              )}
            </DoctorPanel>
            <ErrorBoundary>
              <div className="flex flex-col gap-6">
                <AppointmentForm
                  selectedDoctorId={selectedDoctorId}
                  onAddAppointment={handleAddAppointment}
                  onResetDoctor={handleResetDoctor}
                />

                <AppointmentList
                  appointments={appointments}
                  onStatusChange={handleStatusChange}
                  onDelete={handleDeleteAppointment}
                />
              </div>
            </ErrorBoundary>
          </div>
        </div>
      </PageContainer>
      <Footer />
    </>
  );
}
