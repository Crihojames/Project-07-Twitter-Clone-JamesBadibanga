import SearchIcon from "../../images/search.svg"

function TrendsExplore() {
  return (
    <div className='trends'>
        <div className='trends-input'>
            <img src={SearchIcon} alt="" className='trends-input-image' />
            <input placeholder='Serach Tweeter' type="text" />
        </div>
    </div>
  )
}

export default TrendsExplore