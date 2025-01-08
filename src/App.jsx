import { useState } from "react";
import "./App.css";
import SigninPage from "./components/signin";
import MainPage from "./components/main Page/mainPage";


function App() {
  const [isLoggedin, setisLoggedin]= useState( false)
  return (
    <>
    {isLoggedin?  <MainPage/> :  <SigninPage onlogin={setisLoggedin} />}
    </>
  );
}

export default App;
