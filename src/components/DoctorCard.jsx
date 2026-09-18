export default function DoctorCard({ doctor, isSelected, onSelect }) {
  return (
    <div
      className={`rounded-[10px] border p-3 transition ${
        isSelected
          ? "border-[#0F766E] bg-[#CCFBF1]"
          : "border-[#E2E8F0] bg-white hover:border-[#0F766E] hover:shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#CCFBF1] text-sm font-semibold text-[#0F766E]">
            {doctor.name
              .replace("Dr. ", "")
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)}
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-[#0F172A]">
              {doctor.name}
            </h3>

            <p className="text-xs text-[#64748B]">
              {doctor.department} · {doctor.qualification}
            </p>

            <p className="mt-2 text-sm font-semibold text-[#0F172A]">
              Fee ৳ {doctor.fee.toLocaleString()}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onSelect(doctor)}
          disabled={!doctor.available}
          className={`shrink-0 rounded-[8px] border px-3 py-2 text-xs font-semibold ${
            isSelected
              ? "border-[#0F766E] bg-[#0F766E] text-white"
              : doctor.available
                ? "border-[#E2E8F0] bg-white text-[#64748B] hover:border-[#0F766E]"
                : "cursor-not-allowed border-[#E2E8F0] bg-white text-gray-300 opacity-50"
          }`}
        >
          {isSelected ? "Selected" : "Select"}
        </button>
      </div>

      {!doctor.available && (
        <span className="mt-2 ml-13 inline-block rounded-full bg-[#FEE2E2] px-3 py-1 text-xs font-semibold text-[#B91C1C]">
          Not available
        </span>
      )}
    </div>
  );
}