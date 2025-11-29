import { useState } from "react";
import repost from "../assets/images/reposted.svg";
import schlLogo from "../assets/images/starlions-logo.png";
import clgLogo from "../assets/images/sjcetlogo.png";
import certified from "../assets/images/certificate.webp";
import swipewire from "../assets/images/swipewire_logo.svg";
import ideablitz from "../assets/images/ideablitz.jpeg"
import verified from "../assets/images/blue-tick.svg";

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
            <span className="repostInline">
              <img src={repost} alt="Reposted" /> You reposted
            </span>
            <div className="postList">
              <div className="postDp">
                <img src={clgLogo} alt="" />
              </div>
              <div className="postContent">
                <div className="postInner">
                  <h2>
                    St.joseph's college of engineering and Technology -
                    Thanjavur{" "}
                    <span className="idName">
                      <img src={verified} alt="Verified" /> @SJCETThanjavur .
                      Aug 2019
                    </span>
                  </h2>
                  <p>
                    This is to certify that Master <strong>Vimal K</strong>,
                    student of Class 10,﻿ has successfully passed the Secondary
                    School Leaving Certificate (SSLC) Examination﻿ conducted by
                    the Tamil Nadu Board with a percentage of{" "}
                    <strong>67%</strong>.
                  </p>
                  <div className="certifyImg">
                    <img src={certified} alt="Certification" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Education" && (
          <div className="educationWrapper">
            <span className="repostInline">
              <img src={repost} alt="Reposted" /> You reposted
            </span>
            <div className="postList">
              <div className="postDp">
                <img src={schlLogo} alt="" />
              </div>
              <div className="postContent">
                <div className="postInner">
                  <h2>
                    star lions matriculation higher secondary school - Ayyampet{" "}
                    <span className="idName">
                      <img src={verified} alt="Verified" /> @SLMHSS . May 2013
                    </span>
                  </h2>
                  <p>
                    This is to certify that Master <strong>Vimal K</strong>,
                    student of Class 10,﻿ has successfully passed the Secondary
                    School Leaving Certificate (SSLC) Examination﻿ conducted by
                    the Tamil Nadu Board with a percentage of{" "}
                    <strong>72.3%</strong>.
                  </p>
                  <div className="certifyImg">
                    <img src={certified} alt="Certification" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Education" && (
          <div className="educationWrapper">
            <span className="repostInline">
              <img src={repost} alt="Reposted" /> You reposted
            </span>
            <div className="postList">
              <div className="postDp">
                <img src={schlLogo} alt="" />
              </div>
              <div className="postContent">
                <div className="postInner">
                  <h2>
                    star lions matriculation higher secondary school - Ayyampet{" "}
                    <span className="idName">
                      <img src={verified} alt="Verified" /> @SLMHSS . May 2013
                    </span>
                  </h2>
                  <p>
                    This is to certify that Master <strong>Vimal K</strong>,
                    student of Class 10,﻿ has successfully passed the Secondary
                    School Leaving Certificate (SSLC) Examination﻿ conducted by
                    the Tamil Nadu Board with a percentage of{" "}
                    <strong>91%</strong>.
                  </p>
                  <div className="certifyImg">
                    <img src={certified} alt="Certification" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Experience" && (
          <div className="experienceWrapper">
            {/* <span className="repostInline">
              <img src={repost} alt="Reposted" /> You reposted
            </span> */}
            <div className="postList">
              <div className="postDp blackBg">
                <img src={swipewire} alt="" />
              </div>
              <div className="postContent">
                <div className="postInner">
                  <h2>
                    Swipewire Technologies - Chennai{" "}
                    <span className="idName">
                      <img src={verified} alt="Verified" /> @SwipewireTech . Dec 2022 - Present
                    </span>
                  </h2>
                  <p>
                    This is to certify that Master <strong>Vimal K</strong>,
                    student of Class 10,﻿ has successfully passed the Secondary
                    School Leaving Certificate (SSLC) Examination﻿ conducted by
                    the Tamil Nadu Board with a percentage of{" "}
                    <strong>91%</strong>.
                  </p>
                  {/* <div className="certifyImg">
                    <img src={certified} alt="Certification" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Experience" && (
          <div className="experienceWrapper">
            <span className="repostInline">
              <img src={repost} alt="Reposted" /> You reposted
            </span>
            <div className="postList">
              <div className="postDp blackBg">
                <img src={ideablitz} alt="" />
              </div>
              <div className="postContent">
                <div className="postInner">
                  <h2>
                    Ideablitz Technologies - Thanjavur{" "}
                    <span className="idName">
                      <img src={verified} alt="Verified" /> @IdeablitzTech . May 2021 - Nov 2022
                    </span>
                  </h2>
                  <p>
                    This is to certify that Master <strong>Vimal K</strong>,
                    student of Class 10,﻿ has successfully passed the Secondary
                    School Leaving Certificate (SSLC) Examination﻿ conducted by
                    the Tamil Nadu Board with a percentage of{" "}
                    <strong>91%</strong>.
                  </p>
                  {/* <div className="certifyImg">
                    <img src={certified} alt="Certification" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Skills" && <h2>Skills Content</h2>}
        {activeTab === "Projects" && <h2>Projects Content</h2>}
      </div>
    </main>
  );
}

export default MainContent;
