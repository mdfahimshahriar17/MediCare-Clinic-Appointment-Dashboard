export default function AppointmentRow({
  appointment,
  doctor,
  onStatusChange,
  onDelete,
}) {
  let statusClass = "";

  switch (appointment.status) {
    case "Pending":
      statusClass = "bg-[#FEF3C7] text-[#B45309]";
      break;

    case "Confirmed":
      statusClass = "bg-[#DBEAFE] text-[#1D4ED8]";
      break;

    case "Completed":
      statusClass = "bg-[#DCFCE7] text-[#15803D]";
      break;

    case "Cancelled":
      statusClass = "bg-[#FEE2E2] text-[#B91C1C]";
      break;

    default:
      statusClass = "bg-slate-100 text-slate-600";
  }

  return (
    <div className="grid grid-cols-[1.3fr_1.3fr_1fr_0.9fr_0.5fr] items-center gap-4 border-b border-[#E2E8F0] py-3 last:border-b-0">
      {/* Patient */}
      <div>
        <h3 className="text-sm font-semibold text-[#0F172A]">
          {appointment.patientName}
        </h3>

        <p className="mt-0.5 text-xs text-[#64748B]">{appointment.phone}</p>
      </div>

      {/* Doctor */}
      <div>
        <p className="text-sm text-[#0F172A]">{doctor?.name}</p>

        <p className="mt-0.5 text-xs text-[#64748B]">{doctor?.department}</p>
      </div>

      {/* Date & Time */}
      <div>
        <p className="text-sm text-[#0F172A]">{appointment.date}</p>

        <p className="mt-0.5 text-xs text-[#64748B]">{appointment.time}</p>
      </div>

      {/* Status */}
      <div>
        <span
          className={`inline-flex rounded-full px-2 py-1 text-[11px] font-semibold ${statusClass}`}
        >
          {appointment.status}
        </span>

        <select
          value={appointment.status}
          onChange={(event) =>
            onStatusChange(appointment.id, event.target.value)
          }
          className="mt-1 block rounded-lg border border-[#E2E8F0] bg-white px-2 py-1 text-xs text-[#64748B] outline-none focus:border-[#0F766E]"
        >
          <option value={appointment.status}>Change</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Action */}
      <div>
        <button
          onClick={() => onDelete(appointment.id)}
          className="text-xs font-semibold text-[#DC2626]"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
