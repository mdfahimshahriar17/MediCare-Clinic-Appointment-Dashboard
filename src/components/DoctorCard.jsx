export default function DoctorCard({ doctor }) {
    return(
        <div className="rounded-xl bg-white p-5 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">
                {doctor.name}
            </h3>

            <p className="mt-1 text-blue-600">
                {doctor.specialty}
            </p>

            <p className="mt-2 text-sm text-gray-500">
                {doctor.experience} years experience
            </p>

            <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">
                Book Appointment
            </button>
        </div>
    );
}