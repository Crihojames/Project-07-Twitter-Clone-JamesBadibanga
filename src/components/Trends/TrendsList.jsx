import More2 from "../../images/More-2.svg"
import trendsData from "../../Data/TrendsListData"

function TrendsList() {
  return (
    <>
      {
        trendsData.map(trends =>(
          <div className="trends-list" key={trends.key}>
            <div className="trends-list-title">
              <span className="tweet-title-details">{trends.title}</span>
              <img src={More2} alt="" />
            </div>
            <p>{trends.author}</p>
            <p className="tweet-title-details">{trends.number} <span className="tweet-title-details"> Tweets</span></p>
          </div>
        ))
      }
     <span className="trendslist-button">Show more</span>
    </>
  )
}

export default TrendsList