import { Link } from "react-router-dom";
import signupImg from "../assets/signup.svg";
import googleIcon from "../assets/google.png";
import "./style.css";

const Signup = () => {
  const handleGoogleSignup = () => {
    // Logic for signing up with Google
  };

  return (
    <div className="container">
      <div className="left">
        <h2>SIGN UP</h2>
        <form className="auth-form">
          <div className="input-container">
            <span className="icon">👤</span>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-container">
            <span className="icon">📧</span>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-container">
            <span className="icon">🔒</span>
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit" className="auth-button">
            SIGN UP
          </button>
        </form>
        <div className="redirect-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
        <button className="google-button" onClick={handleGoogleSignup}>
          <img src={googleIcon} alt="Google" className="google-icon" />
          Continue with Google
        </button>
      </div>
      <div className="right">
        <img src={signupImg} className="auth-img" alt="Signup" />
      </div>
    </div>
  );
};

export default Signup;
