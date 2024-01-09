import followData from "../../Data/FollowData"
import { useState } from "react";

function TrendsFollo() {

  const [isOn, setIsOn] = useState(true);

  const handleClick = () => {
    setIsOn(!isOn);
  };


    return (
        <>
          {
            followData.map(follow =>(
              <div className="follow-list" key={follow.key}>
                <div className="follow-title">
                    <img src={follow.avatar} alt="" />
                    <div className="follow-list-title">
                          <span>{follow.title}</span>
                          <p className="tweet-title-details">{follow.author}</p>
                    </div>
                    <button className="follow-button" onClick={()=>handleClick()}>{isOn ? 'Following' : 'Follow'}</button>
                </div>
              </div>
            ))
          }
         <span className="trendslist-button">Show more</span>
        </>
      )
}

export default TrendsFollo