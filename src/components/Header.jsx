export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">MediCare Clinic</h1>
          <p className="text-sm text-gray-500">Appointment Dashboard</p>
        </div>
        <div>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Admin
          </button>
        </div>
      </div>
    </header>
  );
}
