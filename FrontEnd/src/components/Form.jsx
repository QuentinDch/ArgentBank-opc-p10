import { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/auth.actions";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const postForm = useRef();
  const errorRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    const postData = {
      email: postForm.current[0].value,
      password: postForm.current[1].value,
      remember: postForm.current[2].checked,
    };

    try {
      const res = await dispatch(loginUser(postData));

      if (res.status === 200) {
        navigate("/user");
      }
    } catch {
      if (errorRef.current) {
        errorRef.current.textContent = "Invalid email or password.";
      }
    }
  };

  return (
    <form ref={postForm} onSubmit={handleForm}>
      <div
        ref={errorRef}
        className="form-error"
        role="alert"
        aria-live="assertive"
      ></div>
      <div className="input-wrapper">
        <label htmlFor="email">Username</label>
        <input id="email" name="email" type="text" required />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
      </div>
      <div className="input-remember">
        <input id="remember-me" name="remember" type="checkbox" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  );
};

export default Form;
