import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-right">
      <div className="w-full max-w-md bg-slate-200 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>
        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Create a password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login">
            <button className="text-blue-600 hover:underline">Login</button>
          </Link>
        </p>
      </div>
    </div>
  );
}
