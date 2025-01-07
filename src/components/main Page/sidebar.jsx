import "../../styles/sidebar.css";
const SideBar = () => {
  return (
    <>
      {" "}
      <aside className="side_content">
        <section className="newchat_section">
          <div className="btn_conatiner">
            <button className="btn btn_newchat">
              <i className="fa-solid fa-plus"></i> New Chat
            </button>
            <button className="btn btn_history">
              <i className="fa-solid fa-clock-rotate-left"></i> History
            </button>
          </div>
          {/* chat list container section */}
          <div className="chat_list_container">
            {/* chat list content  */}
            <div className="chat_list_content">
              <div className="chat">
                <i className="fa-regular fa-message"></i>
                <h2>New Chat</h2>
              </div>
              <div className="chat_icons">
                <i className="fa-solid fa-pen"></i>
                <i className="fa-regular fa-trash-can"></i>
              </div>
            </div>

            <div className="chat_list_content">
              <div className="chat">
                <i className="fa-regular fa-message"></i>
                <h2>What is Marketing</h2>
              </div>
              <div className="chat_icons">
                <i className="fa-solid fa-pen"></i>
                <i className="fa-regular fa-trash-can"></i>
              </div>
            </div>
            <div className="chat_list_content">
              <div className="chat">
                <i className="fa-regular fa-message"></i>
                <h2>developement of marketing</h2>
              </div>
              <div className="chat_icons">
                <i className="fa-solid fa-pen"></i>
                <i className="fa-regular fa-trash-can"></i>
              </div>
            </div>
          </div>
{/* settling option section */}
          <div className="setting_option_container">
            <div className="option">
              <i className="fa-solid fa-user-plus"></i>
              <h2>Upgrade to Plus</h2>
            </div>
            <div className="option">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              <h2>Updates & FAQ</h2>
            </div>
            <div className="option">
              <i className="fa-regular fa-file"></i>
              <h2>Terms and Conditions</h2>
            </div>
            <div className="option">
              <i className="fa-solid fa-shield-halved"></i>
              <h2>Privacy Policy Page</h2>
            </div>
          </div>
        </section>
      </aside>
    </>
  );
};

export default SideBar;
