import LoginForm from "../../components/LoginForm/LoginForm";
import "./Aouth.scss";

const Aouth = () => {
  return (
    <>
      <section className="aouth-section">
        <div className="container-custom">
          <div className="row">
            <div className="aouth-left">
              <img src="/instagram.png" alt="" />
            </div>
            <div className="aouth-right">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aouth;
