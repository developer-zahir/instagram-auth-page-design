import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import "./SignUpForm.scss";
import Divider from "../Divider/Divider";
import {
  createToast,
  emptyFieldError,
  isEmail,
  isPhone,
} from "../../helpers/Helpers";
import { useState } from "react";

const SignUpForm = () => {
  const [input, setInput] = useState({
    phoneEmail: "",
    name: "",
    userName: "",
    password: "",
  });

  const inputStateChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handelRegister = (e) => {
    e.preventDefault();
    if (
      !input.phoneEmail ||
      !input.name ||
      !input.userName ||
      !input.password
    ) {
      createToast("All Fields Are Required");
    } else {
      if (isPhone(input.phoneEmail) || isEmail(input.phoneEmail)) {
        createToast("Regeister successful", "success");
        setInput({
          phoneEmail: "",
          name: "",
          userName: "",
          password: "",
        });
      } else {
        createToast("Yout need to enter a valid email or phone number");
      }
    }
  };

  return (
    <>
      <div className="signup-form-wraper">
        <form className="signup-form" onSubmit={handelRegister}>
          <Link to="/">
            <div className="signup-page-logo"></div>
          </Link>

          <h4>Sign up to see photos and videos from your friends.</h4>
          <div className="login-wiht-facebook">
            <Link to="#">
              <span>
                <AiFillFacebook />
              </span>
              Login with Facebook
            </Link>
          </div>
          <Divider />
          <input
            type="text"
            name="phoneEmail"
            value={input.phoneEmail}
            placeholder="Mobile Number or Email"
            onBlur={emptyFieldError}
            onChange={inputStateChange}
          />
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder="Full Name"
            onBlur={emptyFieldError}
            onChange={inputStateChange}
          />
          <input
            type="text"
            name="userName"
            value={input.userName}
            placeholder="Username"
            onBlur={emptyFieldError}
            onChange={inputStateChange}
          />
          <input
            type="text"
            name="password"
            value={input.password}
            placeholder="Password"
            onBlur={emptyFieldError}
            onChange={inputStateChange}
          />
          {/* <button type="submit">Sing up</button> */}
          <input type="submit" value="Sign up" />

          <p>
            People who use our service may have uploaded your contact
            information to Instagram. <Link to="#">Learn More</Link>
          </p>
          <p>
            By signing up, you agree to our<Link to="#"> Terms</Link>
            <Link to="#"> Privacy Policy</Link>, and{" "}
            <Link to="#">Cookies Policy</Link>{" "}
          </p>
        </form>
        <div className="signup-form-footer">
          <p>
            Have an account? <Link to="/login">Log in</Link>
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

export default SignUpForm;
