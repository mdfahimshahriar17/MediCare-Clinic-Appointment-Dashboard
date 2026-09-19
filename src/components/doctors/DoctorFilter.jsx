export default function DoctorFilter({
  searchTerm,
  onSearchChange,
  departments,
  selectedDepartment,
  onDepartmentChange,
}) {
  return (
    <>
      {/* Search */}
      <div className="mt-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search doctor by name..."
          className="h-10 w-full rounded-lg border border-[#E2E8F0] px-3 text-sm text-[#0F172A] outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
        />
      </div>

      {/* Department Filters */}
      <div className="mt-3 flex flex-wrap gap-2">
        {departments.map((department) => {
          const isActive = selectedDepartment === department;

          return (
            <button
              key={department}
              onClick={() => onDepartmentChange(department)}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                isActive
                  ? "bg-[#0F766E] text-white"
                  : "border border-[#E2E8F0] bg-white text-[#64748B]"
              }`}
            >
              {department}
            </button>
          );
        })}
      </div>
    </>
  );
}