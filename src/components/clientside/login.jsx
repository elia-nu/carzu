import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User login data:', formData);
    alert('Login successful! Welcome back to CarZu!');
    // Here you would typically send the data to your server for authentication
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSocialLogin = (platform) => {
    console.log(`Initiating ${platform} login`);
    alert(`${platform} login initiated. This feature is coming soon!`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <main className="flex-grow flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-xl animate-fadeIn">
          <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back to CarZu</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 font-semibold">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300">Log In</button>
          </form>
          <div className="mt-4 text-center">
            <a href="/forgot-password" className="text-sm text-red-500 hover:underline">Forgot password?</a>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">Or log in with</p>
            <div className="flex justify-center space-x-4">
              {['Facebook', 'Google', 'Apple'].map((platform) => (
                <button
                  key={platform}
                  className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition duration-300"
                  onClick={() => handleSocialLogin(platform)}
                >
                  <img
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${platform.toLowerCase()}.svg`}
                    alt={`Log in with ${platform}`}
                    className="w-6 h-6"
                  />
                </button>
              ))}
            </div>
          </div>
          <p className="mt-6 text-center text-sm">
            Don't have an account? <a href="/signup" className="text-red-500 font-semibold hover:underline">Sign up</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;