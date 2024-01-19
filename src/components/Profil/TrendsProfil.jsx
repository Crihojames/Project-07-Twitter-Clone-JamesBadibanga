import TrendsList from "../Trends/TrendsList"
import TrendsFollo from "../Trends/TrendsFollo"
import SearchIcon from "/images/search.svg"
import Settings from "/images/Settings.svg" 

function TrendsProfil() {
  return (
    <div className='trends'>
        <div className='trends-input'>
            <img src={SearchIcon} alt="" className='trends-input-image' />
            <input placeholder='Serach Tweeter' type="text" />
        </div>
        <div className="trends-container-profil">
            <h2>Who to follo</h2>
            <TrendsFollo />
        </div>
        <div className="trends-container">
            <div className='trends-container-title'>
                <h2>Trends for you</h2>
                <img src={Settings} alt="" />
            </div>
            <TrendsList />
        </div>
    </div>
  )
}

export default TrendsProfil