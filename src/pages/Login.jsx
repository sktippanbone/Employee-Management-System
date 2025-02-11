import { useState } from "react";
import { login } from "../Auth";




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const response = await login(email, password);
    if (response.success) {
      setSuccess(response.message);
    } else {
      setError(response.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form onSubmit={submitHandler} className="flex flex-col items-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-black border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-black border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter Password"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
          <button className="text-white bg-emerald-600 text-xl py-3 px-5 rounded-full mt-5">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
