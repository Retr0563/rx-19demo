import { useState } from "react";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const Apps = () => {
  const [aTab, setATab] = useState("home");

  const renderContent = () => {
    switch (aTab) {
      case "home":
        return <Home />;

      case "posts":
        return <Posts />;

      case "about":
        return <About />;

      case "contact":
        return <Contact />;

      default:
        <Home />;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button className="border-4 p-3" onClick={() => setATab("home")}>
          Home
        </button>
        <button className="border-4 p-3" onClick={() => setATab("posts")}>
          Posts
        </button>
        <button className="border-4 p-3" onClick={() => setATab("contact")}>
          Contact Us
        </button>
        <button className="border-4 p-3" onClick={() => setATab("about")}>
          About Us
        </button>
      </div>

      <div className="content"> {renderContent()} </div>
    </div>
  );
};
export default Apps;
