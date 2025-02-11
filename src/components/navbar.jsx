import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary h-20">
      <div className="container flex justify-between items-center h-full px-4 ml-40 text-2xl font-basis-regular w-1200px">
        {/* Navigation Links */}
        <ul className="flex gap-6 text-textPrimary">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/insights">Insights</Link>
          </li>
          <li>
            <Link to="/employee">Employee</Link>
          </li>
        </ul>

        {/* Authentication Links */}
        <div className="flex gap-2">
          <Link
            to="/login"
            className="bg-primary text-textPrimary px-3 py-1 rounded hover:bg-opacity-80 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-primary text-textPrimary px-3 py-1 rounded hover:bg-opacity-80 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
