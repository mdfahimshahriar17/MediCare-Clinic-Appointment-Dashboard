import { useState } from "react";
import doctors from "../data/doctors";
import DoctorList from "./DoctorList";

const departments = [
  "All",
  "Cardiology",
  "Neurology",
  "Medicine",
  "Orthopedics",
];

export default function DoctorPanel({ selectedDoctor, onSelectDoctor }) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || doctor.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <section className="rounded-[12px] border border-[#E2E8F0] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-[#0F172A]">
          Our Doctors
        </h2>

        <span className="rounded-full bg-[#CCFBF1] px-3 py-1 text-xs font-semibold text-[#0F766E]">
          {filteredDoctors.length}
        </span>
      </div>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="🔍  Search doctor by name..."
        className="mt-4 w-full rounded-[8px] border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0F172A] outline-none placeholder:text-[#94A3B8] focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E]"
      />

      <div className="mt-3 flex flex-wrap gap-2">
        {departments.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setDepartment(item)}
            className={`rounded-full px-4 py-2 text-xs font-medium ${
              department === item
                ? "bg-[#0F766E] text-white"
                : "border border-[#E2E8F0] bg-white text-[#64748B] hover:border-[#0F766E]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <DoctorList
        doctors={filteredDoctors}
        selectedDoctor={selectedDoctor}
        onSelectDoctor={onSelectDoctor}
      />

      <p className="mt-3 text-center text-xs text-[#64748B]">
        list scrolls — max-height 520px
      </p>
    </section>
  );
}