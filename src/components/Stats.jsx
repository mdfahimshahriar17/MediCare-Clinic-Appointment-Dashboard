export default function Stats() {
  return (
    <section className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">Total Doctors</p>
        <h3 className="mt-2 text-3xl font-bold">12</h3>
      </div>

      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">Today's Appointments</p>
        <h3 className="mt-2 text-3xl font-bold">24</h3>
      </div>

      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">Pending</p>
        <h3 className="mt-2 text-3xl font-bold">8</h3>
      </div>

      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">Completed</p>
        <h3 className="mt-2 text-3xl font-bold">16</h3>
      </div>
    </section>
  );
}
