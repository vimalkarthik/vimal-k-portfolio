import coverPic from "../assets/images/cover-picture.jpg"
import dp from "../assets/images/vimal_k.png"
import verified from "../assets/images/blue-tick.svg"
import work from "../assets/images/professional.svg"
import birthday from "../assets/images/birthday.svg"
import location from "../assets/images/location.svg"
import "../assets/css/style.css";


function Header() {
  return (
    <header>
      <div className="headerWrapper">
        <div className="headerNav">
          <div className="coverPic">
            <img src={coverPic} alt="Cover" />
          </div>
          <div className="displayWrapper">
            <div className="displayPic">
              <img src={dp} alt="display Picture" />
            </div>
            <div className="headerBtn">
              <button className="btn">Follow</button>
            </div>
          </div>
        </div>
        <div className="profileInfo">
            <h1>Vimal K <span><img src={verified} alt="Vertified"/></span></h1>
            <small>@Vimal_K</small>
            <p>I turn ideas into interactive art.</p>
            <div className="profileBio">
                <ul>
                    <li><img src={work} alt="Work" />Frontend Developer</li>
                    <li><img src={birthday} alt="Birthday" />July 7, 1998</li>
                    <li><img src={location} alt="Location" />Chennai</li>
                </ul>
            </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
