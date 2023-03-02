import React from "react";
import "./styles.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="card">
        <div className="left-card">
          <div className="login-section">
            <span className="left-card-header">Login</span>
            <form className="login-form">
              <input type="text" placeholder="Username or mobile number" />
              <input type="text" placeholder="Password" />
              <span className="forgot-password-button">Forgot password?</span>
              <span className="login-button">Login</span>
            </form>
          </div>
          <div className="sign-up-section">
            <span className="sign-up-header">Dont have an account?</span>
            <span className="sign-up-button">Sign Up</span>
          </div>
        </div>
        <div className="right-card">
          <span className="right-card-header">
            Mastermind Better.
            <br /> Succeed Together.
          </span>
          <span className="right-card-text">
            Our mission to free those oppressed by ignorance with education and
            the jobless with career building and make them tomorrows leaders.
          </span>
        </div>
      </div>
      <img
        src="https://www.tabsera.com/media/app.4a50e359.jpg"
        alt="background"
      />
    </div>
  );
};

export default Login;
