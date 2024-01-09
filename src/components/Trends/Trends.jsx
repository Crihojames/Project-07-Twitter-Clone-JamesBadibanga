import React from 'react'
import TrendsList from './TrendsList'
import SearchIcon  from '../../images/search.svg'
import Settings from '../../images/Settings.svg'
import TrendsFollo from './TrendsFollo'

export default function Trends() {
  return (
    <div className='trends'>
        <div className='trends-input'>
            <img src={SearchIcon} alt="" className='trends-input-image' />
            <input placeholder='Serach Tweeter' type="text" />
        </div>
        <div className="trends-container">
            <div className='trends-container-title'>
                <h2>Trends for you</h2>
               <button><img src={Settings} alt="" /></button>
            </div>
            <TrendsList />
        </div>
        <div className="trends-container-follo">
            <h2>Who to follo</h2>
            <TrendsFollo />
        </div>
        <div className='trendsCopieRigth'>
            <span className="tweet-title-details">Terms of Service Privacy Policy cookie Policy Imprint Ads info More ... &copy; 2021 Twitter, Inc.</span>
        </div>
    </div>
  )
}
