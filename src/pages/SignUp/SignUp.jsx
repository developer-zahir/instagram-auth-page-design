import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <>
      <section className="sign-up-section">
        <div className="container-custom row">
          <SignUpForm />
        </div>
      </section>
    </>
  );
};

export default SignUp;
