export default function Stats({ doctors, appointments }) {
  const totalDoctors = doctors.length;

  const totalAppointments = appointments.length;

  const pendingAppointments = appointments.filter(
    (appointment) => appointment.status === "Pending"
  ).length;

  const completedAppointments = appointments.filter(
    (appointment) => appointment.status === "Completed"
  ).length;

  const stats = [
    {
      label: "Total Doctors",
      value: totalDoctors,
    },
    {
      label: "Today's Appointments",
      value: totalAppointments,
    },
    {
      label: "Pending",
      value: pendingAppointments,
    },
    {
      label: "Completed",
      value: completedAppointments,
    },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[12px] border border-[#E2E8F0] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.06)]"
        >
          <p className="text-sm text-[#64748B]">{stat.label}</p>

          <h3 className="mt-2 text-3xl font-bold text-[#0F172A]">
            {stat.value}
          </h3>
        </div>
      ))}
    </section>
  );
}