import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {Navbar()}

      {/* Hero Section */}
      <header className="text-center py-20">
        <h2 className="text-4xl font-bold text-gray-800">
          Manage Employees Efficiently
        </h2>
        <p className="text-gray-600 mt-4">
          Track employee records, manage payroll, and organize teams with ease.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-primary">
            Employee Records
          </h3>
          <p className="text-gray-600 mt-2">
            Manage all employee details in one place.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-primary">
            Payroll Management
          </h3>
          <p className="text-gray-600 mt-2">
            Automate salary processing and track payments.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-primary">
            Attendance Tracking
          </h3>
          <p className="text-gray-600 mt-2">
            Monitor employee attendance and leaves.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
