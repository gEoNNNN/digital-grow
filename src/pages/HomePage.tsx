import BG from "../assets/0723.mp4"
import './HomePage.css'
import NavBar from "../components/NavBar"
import Filter from "../assets/homepagefilter.png"

const HomePage = () => {
  return (
    <div className="homepage">
      <video className="background-video" autoPlay muted loop>
        <source src={BG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <img src={Filter} alt="Filter overlay" className="video-filter" />
      
      <div className="homepage-content">
        <NavBar/>
      </div>
    </div>
  )
}

export default HomePage