import { Link } from "react-router-dom";

const Form = () => {
  return (
    <form action="">
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" required />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
      </div>
      <div className="input-remember">
        <input id="remember-me" name="remember" type="checkbox" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Link to="/user" className="sign-in-button">
        Sign In
      </Link>
      {/* <button type="submit" className="sign-in-button">
        Sign In
      </button> */}
    </form>
  );
};

export default Form;
