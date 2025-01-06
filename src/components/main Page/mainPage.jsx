import logo from "../../assets/logo.png";
import SideBar from "./sidebar";
import "../../styles/mainpage.css";
function MainPage() {
  return (
    <>
      <div className="mainpage_conatiner">
        {/* main cntainer header */}
        <header className="main_page_header">
          <img src={logo} alt="logo" />
          {/* dropdown container */}
          <div className="selection_dropdown_container">
            <h2>Department Marketing</h2>
            <div className="profile_image">
              <i className="fa-regular fa-circle-user"></i>
              <p>Nithin</p>
            </div>
          </div>
        </header>
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
                  <div className="response">
                    <h3>
                      Give me a list of top 5 digital marketing agencies near me
                      who offers services like social media marketing, content
                      marketing and influencer marketing
                    </h3>
                    <i className="fa-regular fa-circle-question"></i>
                  </div>
                </div>
              </section>
              <div className="input section">
                <i className="fa-regular fa-circle-question"></i>
                <input
                  type="text"
                  name="chat"
                  placeholder="Enter your Marketing Query Here"
                />
                <i className="fa-regular fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <p>
            Type your next question above or select one from the related
            questions section
          </p>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
