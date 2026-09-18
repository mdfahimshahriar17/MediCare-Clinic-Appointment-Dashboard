import doctors from "../data/doctors";
import DoctorCard from "./DoctorCard";


export default function DoctorList() {
    return (
        <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-800">Our Doctors</h2>

            <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {doctors.map((doctor) => (
                    <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                    />
                ))}
            </div>
        </section>

    );
}