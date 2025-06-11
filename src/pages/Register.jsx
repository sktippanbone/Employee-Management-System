import Navbar from "../components/navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* Fullscreen background with centered registration form */}
        <div className="flex h-screen w-screen items-center justify-center bg-light-gray-100">
          <div className="border-2 border-black p-20 rounded-xl bg-gray-800 shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-white">
              Register
            </h2>
            <form className="flex flex-col items-center pt-5">
              <input
                required
                className="text-black border-2 border-blue-900 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
                type="text"
                placeholder="Enter Your name"
              />

              <input
                required
                className="text-black border-2 border-blue-900 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
                type="text"
                placeholder="Enter Your Username"
              />

              <input
                required
                className="text-black border-2 border-blue-900 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
                type="number"
                placeholder="Enter Your Employee ID"
              />

              <input
                required
                className="text-black border-2 border-blue-900 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
                type="text"
                placeholder="Enter Your Department"
              />

              <input
                required
                className="text-black border-2 border-blue-900 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
                type="text"
                placeholder="Enter Your Email"
              />

              <input
                required
                className="text-black border-2 border-blue-900 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
                type="email"
                placeholder="Enter Your Email"
              />

              <input
                required
                className="text-black border-2 border-blue-900 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400"
                type="password"
                placeholder="Enter Password"
              />
              <button className="text-white bg-blue-500 text-xl py-3 px-5 rounded-full mt-5">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
