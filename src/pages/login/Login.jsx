import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h1 className="loginLogo">AnlSocial</h1>
          <span className="loginDesc">
            Connect with friends and the world around you on AnlSocial
          </span>
        </div>
      </div>
      <div className="loginRight">
        <div className="loginBox">
          <input placeholder="Email" className="loginInput" />
          <input placeholder="Password" className="loginInput" />
          <button className="loginButton">Log In</button>
          <span className="loginForgot">Forgot Password?</span>
          <button className="loginRegisterButton">Create a New Account</button>
        </div>
      </div>
    </div>
  );
}
