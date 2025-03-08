"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const router = useRouter();
  const router = useRouter();


  const handleLogin = (e) => {
    e.preventDefault();

    // Default credentials
    if (username === '23010231100' && password === 'dada') {
      setError('');
      alert('Login successful!');
      router.push('/dashboard'); // Replace with your dashboard route
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-20 blur-3xl animate-spin-slow -top-32 -left-32"></div>
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-pink-600 to-purple-500 rounded-full opacity-20 blur-3xl animate-spin-slow bottom-0 right-0"></div>
      </div>

      {/* Login Card */}
      <div className="relative bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Welcome to Web3
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-400"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-400"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && (
            <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Login
          </button>
        </form>

        {/* Web3 Connect Button */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 mb-3">Or connect with</p>
          <button
            className="flex items-center justify-center w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
              alt="MetaMask"
              className="w-6 h-6 mr-2"
            />
            <span className="text-white">MetaMask</span>
          </button>
        </div>
      </div>
    </div>
  );
}