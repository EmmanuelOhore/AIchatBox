import logo from "../assets/logo.png";
import InputWithIcon from "./inputfeild";
import "../styles/signin.css";
const SigninPage = () => {
  return (
    <>
      <div className="sign_page_conainter">
        <header className="sign_page_header">
          <div className="logo_container">
            <img src={logo} alt="logo" />
          </div>
        </header>
        <div className="sign_page_content">
          <h1>Welcome Back</h1>
          <h2>Sign in to continue to Aiworksquad</h2>
          <section className="sign_form_container">
            <form className="sign_form">
              <div className="inputfeild_container">
                <InputWithIcon
                  type="email"
                  icon="fa-solid fa-envelope"
                  placeholder="Email"
                />

                <InputWithIcon
                  type="password"
                  icon="fa-solid fa-lock"
                  placeholder="Password"
                />
              </div>

              <div className="forgo_password_container">
                <div className="remember_me">
                  <input type="checkbox" id="remember_me" />
                  <label htmlFor="remember_me">Remember me</label>
                </div>
                <p>Forgot Password?</p>
              </div>
              <button className="btn btn_login" type="submit">
                Login
              </button>
            </form>
          </section>
        </div>
        <footer>
          <p>2023 AiworkSqaud</p>
        </footer>
      </div>
    </>
  );
};

export default SigninPage;
