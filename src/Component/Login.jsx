import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const navigate = useNavigate(); // Initialize navigate
    const { signInUser } = useContext(AuthContext); // Get signInUser from context

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email, password)
            .then(result => {
                event.target.reset(); // Use event instead of e
                navigate('/'); // Navigate to home
            })
            .catch(error => {
                console.log('ERROR', error.message);
            });
    };

    const handleGoogleSignIn = () => {
        // Add functionality for Google sign-in if implemented in context
        console.log('Google Sign-In button clicked!');
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="ml-4 mb-4">
                        New to this website? Please <Link to="/register">Register</Link>.
                    </p>
                    <p>
                        <button  className="btn btn-ghost">
                            Sign in with Google
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
