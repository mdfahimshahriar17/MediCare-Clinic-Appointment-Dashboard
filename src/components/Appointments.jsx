import { useState } from "react";

const statusStyles = {
  Pending: "bg-[#FEF3C7] text-[#92400E]",
  Confirmed: "bg-[#DBEAFE] text-[#1D4ED8]",
  Completed: "bg-[#DCFCE7] text-[#166534]",
  Cancelled: "bg-[#FEE2E2] text-[#B91C1C]",
};

const filters = [
  "All",
  "Pending",
  "Confirmed",
  "Completed",
  "Cancelled",
];

export default function Appointments({
  appointments,
  onStatusChange,
  onDelete,
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredAppointments =
    activeFilter === "All"
      ? appointments
      : appointments.filter(
          (appointment) => appointment.status === activeFilter
        );

  return (
    <section className="rounded-[12px] border border-[#E2E8F0] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-[#0F172A]">
            Appointments
          </h2>

          <p className="mt-1 text-xs text-[#64748B]">
            Manage today's patient appointments
          </p>
        </div>

        <span className="rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-semibold text-[#475569]">
          {appointments.length}
        </span>
      </div>

      {/* Filters */}
      <div className="mt-5 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const count =
            filter === "All"
              ? appointments.length
              : appointments.filter(
                  (appointment) => appointment.status === filter
                ).length;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-xs font-medium ${
                activeFilter === filter
                  ? "bg-[#0F766E] text-white"
                  : "border border-[#E2E8F0] bg-white text-[#64748B] hover:border-[#0F766E]"
              }`}
            >
              {filter} ({count})
            </button>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredAppointments.length === 0 ? (
        <div className="flex min-h-[250px] flex-col items-center justify-center text-center">
          <div className="text-4xl">📅</div>

          <h3 className="mt-3 text-sm font-semibold text-[#0F172A]">
            {activeFilter === "All"
              ? "No appointments yet"
              : `No ${activeFilter.toLowerCase()} appointments`}
          </h3>

          <p className="mt-1 text-sm text-[#64748B]">
            {activeFilter === "All"
              ? "Book the first one from the form."
              : "Try another appointment status."}
          </p>
        </div>
      ) : (
        /* Table */
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead>
              <tr className="border-b border-[#E2E8F0] text-xs text-[#64748B]">
                <th className="px-3 py-3 font-medium">
                  Patient
                </th>

                <th className="px-3 py-3 font-medium">
                  Doctor
                </th>

                <th className="px-3 py-3 font-medium">
                  Date & Time
                </th>

                <th className="px-3 py-3 font-medium">
                  Status
                </th>

                <th className="px-3 py-3 font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredAppointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="border-b border-[#F1F5F9]"
                >
                  <td className="px-3 py-4">
                    <p className="font-medium text-[#0F172A]">
                      {appointment.patientName}
                    </p>

                    <p className="mt-1 text-xs text-[#64748B]">
                      {appointment.phone}
                    </p>
                  </td>

                  <td className="px-3 py-4">
                    <p className="font-medium text-[#0F172A]">
                      {appointment.doctor.name}
                    </p>

                    <p className="mt-1 text-xs text-[#64748B]">
                      {appointment.doctor.department}
                    </p>
                  </td>

                  <td className="px-3 py-4">
                    <p className="text-[#0F172A]">
                      {appointment.date}
                    </p>

                    <p className="mt-1 text-xs text-[#64748B]">
                      {appointment.time}
                    </p>
                  </td>

                  <td className="px-3 py-4">
                    <select
                      value={appointment.status}
                      onChange={(event) =>
                        onStatusChange(
                          appointment.id,
                          event.target.value
                        )
                      }
                      className={`rounded-full border-0 px-3 py-1 text-xs font-semibold outline-none ${
                        statusStyles[appointment.status]
                      }`}
                    >
                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Confirmed">
                        Confirmed
                      </option>

                      <option value="Completed">
                        Completed
                      </option>

                      <option value="Cancelled">
                        Cancelled
                      </option>
                    </select>
                  </td>

                  <td className="px-3 py-4">
                    <button
                      type="button"
                      onClick={() => onDelete(appointment.id)}
                      className="text-xs font-semibold text-[#DC2626] hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}