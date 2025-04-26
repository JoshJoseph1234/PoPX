import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/home');
  }

  return (
    <div className="flex flex-col justify-center items-center h-full p-6">
      <h1 className="text-2xl font-bold mb-4">Create Account</h1>
      <input type="text" placeholder="Name" className="w-full p-3 border rounded mb-3" />
      <input type="email" placeholder="Email" className="w-full p-3 border rounded mb-3" />
      <input type="password" placeholder="Password" className="w-full p-3 border rounded mb-6" />
      <button onClick={handleSignup} className="w-full bg-blue-500 text-white py-3 rounded mb-4">
        Sign Up
      </button>
      <p className="text-sm">
        Already have an account?{' '}
        <Link to="/" className="text-blue-500 underline">
          Login
        </Link>
      </p>
    </div>
  );
}

export default Signup;
