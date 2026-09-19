import DoctorCard from "./DoctorCard";
import EmptyState from "../ui/EmptyState";
import FilterableList from "../ui/FilterableList";

export default function DoctorList({ doctors, selectedDoctorId, onSelect }) {
  if (doctors.length === 0) {
    // [REQ-2] Ternary conditional rendering: show EmptyState when no doctors exist
    return (
      <div className="mt-4 max-h-[520px] overflow-y-auto">
        {doctors.length === 0 ? (
          <EmptyState message="No doctors found." />
        ) : (
          <FilterableList
            items={doctors}
            renderItem={(doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                selectedDoctorId={selectedDoctorId}
                onSelect={onSelect}
              />
            )}
          />
        )}
      </div>
    );
  }

  return (
    <div className="mt-4 max-h-[520px] overflow-y-auto">
      <FilterableList
        items={doctors}
        renderItem={(doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            selectedDoctorId={selectedDoctorId}
            onSelect={onSelect}
          />
        )}
      />
    </div>
  );
}
