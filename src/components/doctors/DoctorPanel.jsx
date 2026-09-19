import { useState } from "react";
import { doctors } from "../../data/doctors";
import Card from "../ui/Card";
import DoctorFilter from "./DoctorFilter";

export default function DoctorPanel({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = [
    "All",
    ...new Set(doctors.map((doctor) => doctor.department)),
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesDepartment =
      selectedDepartment === "All" ||
      doctor.department === selectedDepartment;

    return matchesSearch && matchesDepartment;
  });

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-[#0F172A]">
          Our Doctors
        </h2>

        <span className="rounded-full bg-[#CCFBF1] px-2 py-1 text-xs font-semibold text-[#0F766E]">
          {filteredDoctors.length}
        </span>
      </div>

      <DoctorFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        departments={departments}
        selectedDepartment={selectedDepartment}
        onDepartmentChange={setSelectedDepartment}
      />

      <div className="my-4 border-t border-[#E2E8F0]" />

      {children(filteredDoctors)}
    </Card>
  );
}