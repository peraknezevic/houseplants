import { BsFacebook, BsInstagram } from "react-icons/bs"
import "./App.css"

const Home = () => {
  return (
    <div className="Home">
      <div className="logo">
        <a href="https://houseplants.xyz/">Houseplants</a>
      </div>
      <h1>We'll be back soon</h1>
      <p>We're doing some major upgrades</p>
      <p>Follow us on social networks:</p>
      <p className="socialLinks">
        <a href="https://www.facebook.com/houseplants.xyz">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/houseplants.xyz">
          <BsInstagram />
        </a>
      </p>
    </div>
  )
}

export default Home
