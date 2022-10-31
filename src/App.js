import React from "react";
import "./App.css";
import Profile from "./components/Profile.js";

function App() {
  return (
    <div>
      <Profile picture="./pic.jpg" name="Mercy Solomon" />

      <a id="twitter" href="https://www.twitter.com/etima_">
        Twitter Link
      </a>

      <a id="btn__zuri" href="https://training.zuri.team/">
        Zuri Team
      </a>

      <a id="books" href="https://books.zuri.team/">
        Zuri Books
      </a>

      <a id="books__python" href="https://boks.zuri.team/">
        Python Books
      </a>

      <a id="pitch" href="https://background.zuri.team/">
        Background Check For Coders
      </a>

      <a id="book__design" href="https://training.zuri.team/design-rules">
        Design Books
      </a>
    </div>
  );
}

export default App;
