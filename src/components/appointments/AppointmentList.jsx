import { useState } from "react";
import { doctors } from "../../data/doctors";
import Card from "../ui/Card";
import AppointmentRow from "./AppointmentRow";
import FilterableList from "../ui/FilterableList";
import EmptyState from "../ui/EmptyState";

export default function AppointmentList({
  appointments,
  onStatusChange,
  onDelete,
}) {
  const [statusFilter, setStatusFilter] = useState("All");

  const statuses = ["All", "Pending", "Confirmed", "Completed", "Cancelled"];

  const filteredAppointments =
    statusFilter === "All"
      ? appointments
      : appointments.filter(
          (appointment) => appointment.status === statusFilter,
        );

  const getStatusCount = (status) => {
    if (status === "All") {
      return appointments.length;
    }

    return appointments.filter((appointment) => appointment.status === status)
      .length;
  };

  return (
    <Card>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-[#0F172A]">Appointments</h2>

        <span className="rounded-full bg-[#CCFBF1] px-2 py-1 text-xs font-semibold text-[#0F766E]">
          {appointments.length}
        </span>
      </div>

      {/* Status Filters */}
      <div className="mt-3 flex flex-wrap gap-2">
        {statuses.map((status) => {
          const isActive = statusFilter === status;

          return (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                isActive
                  ? "bg-[#0F766E] text-white"
                  : "border border-[#E2E8F0] bg-white text-[#64748B]"
              }`}
            >
              {status} ({getStatusCount(status)})
            </button>
          );
        })}
      </div>

      {/* Column Header */}
      <div className="mt-4 grid grid-cols-[1.3fr_1.3fr_1fr] gap-4 border-b border-[#E2E8F0] pb-2 text-[11px] font-semibold uppercase tracking-[0.04em] text-[#64748B]">
        <span>Patient</span>
        <span>Doctor</span>
        <span>Date & Time</span>
      </div>

      {/* Appointment Rows */}
      <div>
        {filteredAppointments.length > 0 ? (
          <FilterableList
            items={filteredAppointments}
            renderItem={(appointment) => {
              const doctor = doctors.find(
                (doctor) => doctor.id === appointment.doctorId,
              );

              return (
                <AppointmentRow
                  key={appointment.id}
                  appointment={appointment}
                  doctor={doctor}
                  onStatusChange={onStatusChange}
                  onDelete={onDelete}
                />
              );
            }}
          />
        ) : (
          <EmptyState message="No appointments yet. Book the first one from the form." />
        )}
      </div>
    </Card>
  );
}
