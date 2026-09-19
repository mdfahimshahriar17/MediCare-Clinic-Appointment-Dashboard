export default function DoctorCard({ doctor, selectedDoctorId, onSelect }) {
  const isSelected = selectedDoctorId === doctor.id;

  return (
    <div
      className={`rounded-lg border p-3 ${
        isSelected
          ? "border-[#0F766E] border-l-4 bg-[#CCFBF1]"
          : "border-[#E2E8F0] bg-white hover:border-[#0F766E] hover:shadow-md"
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#CCFBF1] text-xs font-semibold text-[#0F766E]">
          {doctor.name
            .split(" ")
            .map((word) => word[0])
            .slice(-2)
            .join("")}
        </div>

        {/* Doctor Information */}
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-[#0F172A]">
            {doctor.name}
          </h3>

          <p className="mt-0.5 text-xs text-[#64748B]">
            {doctor.department} · {doctor.specialization}
          </p>

          <p className="mt-3 text-xs font-semibold text-[#0F172A]">
            Fee ৳ {doctor.visitingFee}
          </p>
        </div>

        {/* Select / Availability */}
        <div className="shrink-0">
          {!doctor.available ? (
            <button
              disabled
              className="rounded-lg bg-[#FEE2E2] px-2.5 py-1.5 text-xs font-semibold text-[#B91C1C]"
            >
              Not available
            </button>
          ) : (
            <button
              onClick={() => onSelect(doctor.id)}
              className={`rounded-lg border px-2.5 py-1.5 text-xs font-semibold ${
                isSelected
                  ? "border-[#0F766E] bg-[#0F766E] text-white"
                  : "border-[#E2E8F0] bg-white text-[#64748B]"
              }`}
            >
              {isSelected ? "Selected" : "Select"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
