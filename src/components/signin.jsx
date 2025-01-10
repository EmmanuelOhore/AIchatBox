import logo from "../assets/logo.png";
import InputWithIcon from "./inputfeild";
import "../styles/signin.css";
import { useState } from "react";
import PropTypes from "prop-types";


const SigninPage = ({onlogin}) => {
  const [details,setdetails]= useState({email:"",password:""})
const hardcodedemail="user123"
const hardcodedpassword="pass123"


const handlesubmit=(e)=>{
e.preventDefault()
if(details.email===hardcodedemail && details.password=== hardcodedpassword ){
  onlogin(true)
}else{alert("wrong details inputted")}
}

const handdleInputChnage=(e)=>{
setdetails(prev=>({...prev, [e.target.name]:e.target.value}))
}

const {email, password}=details
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
            <form onSubmit={handlesubmit} className="sign_form">
              <div className="inputfeild_container">
                <InputWithIcon
                  type="text"
                  oninput={handdleInputChnage}
                  value={email}
                  name="email"
                  icon="fa-solid fa-envelope"
                  placeholder="Email"
                />

                <InputWithIcon
                  type="password"
                  oninput={handdleInputChnage}
                  value={password}
                  name="password"
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

SigninPage.propTypes={
  onlogin: PropTypes.func
}
export default SigninPage;
