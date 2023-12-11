import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.scss";
const Login = () => {
  return (
    <>
      <section className="logint-section">
        <div className="container-custom row">
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default Login;
