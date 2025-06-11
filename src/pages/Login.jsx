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
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url("src/assets/loginback.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="border-2 border-black p-20 rounded-xl bg-gray-800 bg-opacity-90 shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-white">
          Log In
        </h2>
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center pt-5"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-black border-2 border-blue-900 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-black border-2 border-blue-900 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter Password"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
          <button className="text-white bg-blue-500 text-xl py-3 px-5 rounded-full mt-5">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
