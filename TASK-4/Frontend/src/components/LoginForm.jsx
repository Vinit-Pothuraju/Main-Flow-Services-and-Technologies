import { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("⚠️ Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/login", { email, password });
      if (res.data.status === "success") {
        setMessage("✅ Login successful!");
      } else {
        setMessage("❌ Invalid credentials");
      }
    } catch (error) {
      setMessage("❌ Login failed. Check credentials or server connection.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
      {message && (
        <p className="text-center mt-4 text-sm font-medium text-gray-700">{message}</p>
      )}
    </div>
  );
}

export default LoginForm;
