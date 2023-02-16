// Write your code here
import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div className="NotFoundContainer">
    <Header />
    <div className="NotFoundContentContainer">
      <div className="NotFoundResponsiveContainer">
        <img
          className="Image"
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
        />
        <h1 className="Heading">Lost Your Way?</h1>
        <p className="Description">
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </div>
  </div>
)

export default NotFound
