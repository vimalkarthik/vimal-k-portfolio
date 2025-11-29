import { useState } from "react";
import repost from "../assets/images/reposted.svg"
import schlLogo from "../assets/images/starlions-logo.png"
import clgLogo from "../assets/images/sjcetlogo.png"
import certified from "../assets/images/certificate.webp"
import verified from "../assets/images/blue-tick.svg"


import "../assets/css/style.css";

function MainContent() {
  const tabs = ["Education", "Experience", "Skills", "Projects"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <main className="mainWrapper">
      {/* Tabs */}
      <div className="tabs">
        <div className="tabBtns">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? "tab Active" : "tab"}
          >
            {tab}
          </button>
        ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="tabContent">
        {activeTab === "Education" && (
            <div className="educationWrapper">
                <span className="repostInline"><img src={repost} alt="Reposted" /> You reposted</span>
                <div className="postList">
                    <div className="postDp">
                        <img src={schlLogo} alt="" />
                    </div>
                    <div className="postContent">
                        <div className="postInner">
                            <h2>star lions matriculation higher secondary school - Ayyampet <span><img src={verified} alt="Verified" /></span></h2>
                            <div className="certifyImg">
                                <img src={certified} alt="Certification" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        {activeTab === "Experience" && (<h2>Experience Content </h2>)}
        {activeTab === "Skills" && (<h2>Skills Content</h2>)}
        {activeTab === "Projects" && (<h2>Projects Content</h2>)}
      </div>
    </main>
  );
}

export default MainContent;
