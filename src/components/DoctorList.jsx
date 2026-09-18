import DoctorCard from "./DoctorCard";

export default function DoctorList({
  doctors,
  selectedDoctor,
  onSelectDoctor,
}) {
  if (doctors.length === 0) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[10px] border border-[#E2E8F0] bg-white text-center">
        <div className="text-4xl">🔍</div>

        <h3 className="mt-3 text-sm font-semibold text-[#0F172A]">
          No doctor found
        </h3>

        <p className="mt-1 text-sm text-[#64748B]">
          Try a different search or department filter.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 max-h-[520px] space-y-3 overflow-y-auto pr-1">
      {doctors.map((doctor) => (
        <DoctorCard
          key={doctor.id}
          doctor={doctor}
          isSelected={selectedDoctor?.id === doctor.id}
          onSelect={onSelectDoctor}
        />
      ))}
    </div>
  );
}