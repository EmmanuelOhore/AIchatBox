import logo from "../../assets/logo2.png";
import SideBar from "./sidebar";
import "../../styles/mainpage.css";
import { useState } from "react";
function MainPage() {
  const [dropdown, setdropdown] = useState("marketing");
  const handlevalue = (e) => {
    console.log(e.target.value);
    setdropdown(e.target.value);
  };
  const handledynamic=()=>{
    if(dropdown=== "marketing"){
      return "Enter your marketing query here..."
    }else if(dropdown==="sales"){
      return "Enter your sales query here..."
    }
  }

  return (
    <>
      <div className="mainpage_conatiner">
        {/* main cntainer header */}
        <header className="main_page_header">
          <div className="logo_container">
            <img src={logo} alt="logo" />
          </div>
          {/* dropdown container */}
          <div className="selection_dropdown_container">
            <select value={dropdown} onChange={handlevalue}>
              <option value={"marketing"}>Department Marketing</option>
              <option value={"sales"}>Department Sales</option>
            </select>
            <div className="profile_image">
              <i className="fa-regular fa-circle-user"></i>
              <p>Nithin</p>
            </div>
          </div>
        </header>
        {/* main page container */}
        <main className="main_page_conatiner">
          {/* ai chat side bar content  */}
          <SideBar />
          {/* main ai chat content */}
          <div className="main_ai_content_container">
            <div className="main_ai_content">
              <header className="ai_chat_header">
                <h1>Introduce yourself to AIWorkSquad</h1>
                <div className="suheader">
                  <h2>Im Nithin. CEO of an IT startup company in India</h2>
                  <i className="fa-solid fa-pen"></i>
                </div>
              </header>
              <section className="chat_conversation">
                {/* your respose one */}
                <div className="convo_container yourreponse">
                  <div className="response">
                    <h3>What is marketing?</h3>
                    <i className="fa-regular fa-circle-question"></i>
                  </div>
                </div>
                {/* ai reply */}
                <div className="ai_reply_container">
                  <div className="ai_response">
                    <i className="fa-regular fa-message"></i>
                    <h3>
                      Marketing refers to the process of promoting and selling
                      products or services to customers. It invoives researching
                      customer needs and wants,developing products and services
                      that meet those needs,pricing products and sorvices
                      appropriately.creating markoting materials to promote
                      products and services,and distributing those materials
                      through various channels to reach potential customers.The
                      ultimate goal of marketing is to generate interest and
                      increase sales for a business or organization.{" "}
                    </h3>
                  </div>
                  <div className="ai_reply_icon">
                    <i className="fa-regular fa-copy"></i>
                    <i className="fa-solid fa-up-right-from-square"></i>
                    <i className="fa-solid fa-file-arrow-down"></i>
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                </div>
                {/* your respose 2 */}
                <div className="convo_container yourreponse">
                  <div className="response res-two">
                    <h3>
                      Give me a list of top 5 digital marketing agencies near me
                      who offers services like social media marketing, content
                      marketing and influencer marketing
                    </h3>
                    <i className="fa-regular fa-circle-question"></i>
                  </div>
                </div>
              </section>
              {/* input section */}
              <section className="input_section">
                <div className="input_box">
                  <i className="fa-regular fa-circle-question"></i>
                  <input
                    type="text"
                    name="chat"
                    placeholder={handledynamic()}
                  />
                  <i className="fa-regular fa-paper-plane"></i>
                </div>
              </section>
              <section className="footer-section">
                <small>
                  Type your next question above or select one from the related
                  questions section
                </small>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MainPage;
