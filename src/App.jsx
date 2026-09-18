import Header from "./components/Header";
import Stats from "./components/Stats";
import DoctorList from "./components/DoctorList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h2>
        
        <Stats/>
        
        <DoctorList />

      </main>
    </div>
  );
}

export default App;