import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./LoginForm.scss";
import {
  createToast,
  emptyFieldError,
  isEmail,
  isPhone,
} from "../../helpers/Helpers";
import { useState } from "react";

const LoginForm = () => {
  const [input, setInput] = useState({
    email_or_phone: "",
    password: "",
  });

  const handelInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // usr login
  const handelLogin = (e) => {
    e.preventDefault();
    if (!input.email_or_phone && !input.password) {
      createToast("All fields are required");
    } else if (!input.email_or_phone) {
      createToast("Email is required");
    } else if (!input.password) {
      createToast("Password is required");
    } else {
      if (isPhone(input.email_or_phone) || isEmail(input.email_or_phone)) {
        createToast("Login Successful", "success");
        setInput({
          email_or_phone: "",
          password: "",
        });
      } else {
        createToast("Yout need to enter a valid email or phone number");
      }
    }
  };

  return (
    <>
      <div className="login-form-wraper">
        <form action="#" className="login-form" onSubmit={handelLogin}>
          <Link to="/">
            <div className="login-page-logo"></div>
          </Link>
          <input
            type="text"
            name="email_or_phone"
            value={input.email_or_phone}
            placeholder="Phone number, username, or email"
            onBlur={emptyFieldError}
            onChange={handelInputChange}
          />
          <input
            type="text"
            name="password"
            value={input.password}
            placeholder="Password"
            onBlur={emptyFieldError}
            onChange={handelInputChange}
          />
          <input type="submit" value="Log in" />

          <div className="divider">
            <span></span>
            OR
            <span></span>
          </div>
          <div className="login-wiht-facebook">
            <Link to="#">
              <span>
                <AiFillFacebook />
              </span>{" "}
              Login with Facebook
            </Link>
          </div>
          <div className="forgot-password">
            <Link>Forgot password?</Link>
          </div>
        </form>
        <div className="login-form-footer">
          <p>
            Dont have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>

        <div className="get-app-section">
          <p>Get the app.</p>
          <div className="app-group">
            <Link>
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                alt=""
              />
            </Link>
            <Link>
              <img
                src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
