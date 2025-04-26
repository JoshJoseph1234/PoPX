import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-full p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome Back</h1>
      <input type="email" placeholder="Email" className="w-full p-3 border rounded mb-3" />
      <input type="password" placeholder="Password" className="w-full p-3 border rounded mb-6" />
      <button className="w-full bg-blue-500 text-white py-3 rounded mb-4">
        Login
      </button>
      <p className="text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500 underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
