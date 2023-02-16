// Write your code here

import Header from '../Header'

import './index.css'

const About = () => (
  <div className="AboutContainer">
    <Header />
    <div className="AboutImageContainer">
      <img
        className="MobileAboutImage"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="About"
      />
      <img
        className="DesktopAboutImage"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="About"
      />
    </div>
  </div>
)

export default About
