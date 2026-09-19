import StatCard from "./StatCard";

export default function StatGrid({
  totalDoctors,
  totalAppointments,
  pendingAppointments,
  completedAppointments,
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        label="Total Doctors"
        value={totalDoctors}
        icon="👨‍⚕️"
      />

      <StatCard
        label="Total Appointments"
        value={totalAppointments}
        icon="📋"
      />

      <StatCard
        label="Pending Appointments"
        value={pendingAppointments}
        icon="⏳"
      />

      <StatCard
        label="Completed Appointments"
        value={completedAppointments}
        icon="✓"
      />
    </div>
  );
}