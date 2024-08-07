import { Link } from "react-router-dom";
import loginImg from "../assets/signup.svg";
import googleIcon from "../assets/google.png";
import "./style.css";

const Login = () => {
  const handleGoogleSignup = () => {
    // Logic for signing up with Google
  };

  return (
    <div className="container">
      <div className="left">
        <h2>USER LOGIN</h2>
        <form className="auth-form">
          <div className="input-container">
            <span className="icon">👤</span>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-container">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Password" />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember
            </label>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <button type="submit" className="auth-button">
            LOGIN
          </button>
        </form>
        <div className="redirect-link">
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </div>
        <button className="google-button" onClick={handleGoogleSignup}>
          <img src={googleIcon} alt="Google" className="google-icon" />
          Continue with Google
        </button>
      </div>
      <div className="right">
        <img src={loginImg} className="auth-img" alt="Signup" />
      </div>
    </div>
  );
};

export default Login;
