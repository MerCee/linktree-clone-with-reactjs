import React from "react";
import "./App.css";
import Profile from "./components/Profile.js";
import picture from "./pic.jpg";
import { SocialIcon } from "react-social-icons";

function App() {
  return (
    <section className="main">
      <div className="profile">
        <Profile
          picture={picture}
          name="Mercy Solomon"
          alt="A picture of Mercy Solomon in a yellow dress"
        />
      </div>

      <div className="socials">
        <SocialIcon url="https://www.twitter.com/etima_" target="_blank" />
        <SocialIcon url="https://www.slack.com/etima" target="_blank" />
      </div>

      <div className="links">
        <a
          id="btn__zuri"
          href="https://training.zuri.team/"
          target="_blank"
          rel="noreferrer"
        >
          Zuri Team
        </a>

        <a
          id="books"
          href="https://books.zuri.team/"
          target="_blank"
          rel="noreferrer"
        >
          Zuri Books
        </a>

        <a
          id="books__python"
          href="https://boks.zuri.team/python-for-beginners?ref_id=<etima_>"
          target="_blank"
          rel="noreferrer"
        >
          Python Books
        </a>

        <a
          id="pitch"
          href="https://background.zuri.team/"
          target="_blank"
          rel="noreferrer"
        >
          Background Check For Coders
        </a>

        <a
          id="book__design"
          href="https://training.zuri.team/design-rules"
          target="_blank"
          rel="noreferrer"
        >
          Design Books
        </a>
      </div>
    </section>
  );
}

export default App;
