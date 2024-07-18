import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../firebase';

const Profile = ({ setAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Sign up successful. You can now log in.');
        setIsSignUp(false);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        sessionStorage.setItem('isAuthenticated', 'true');
        setAuthenticated(true);
        navigate('/products');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      sessionStorage.setItem('isAuthenticated', 'true');
      setAuthenticated(true);
      navigate('/products');
    } catch (error) {
      console.error('Google sign-in error', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{isSignUp ? 'Sign Up for an account' : 'Login to your account'}</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white p-3 rounded hover:bg-red-600 transition-colors mt-4"
        >
          {isSignUp ? 'Sign Up with Google' : 'Login with Google'}
        </button>
        <div className="text-center mt-4">
          {isSignUp ? (
            <p>
              Already have an account?{' '}
              <button onClick={() => setIsSignUp(false)} className="text-blue-500 hover:underline">
                Sign in
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <button onClick={() => setIsSignUp(true)} className="text-blue-500 hover:underline">
                Sign up
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
