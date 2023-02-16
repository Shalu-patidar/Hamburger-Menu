// Write your code here

import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="HomeContainer">
    <Header />
    <div className="HomeImageContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        className="MobileHomeImage"
        alt="home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="DesktopHomeImage"
        alt="home"
      />
    </div>
  </div>
)

export default Home
