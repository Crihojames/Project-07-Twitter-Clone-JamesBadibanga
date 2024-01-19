import Follow from "../../Data/initial-data.json"
import { useState } from "react";

function TrendsFollo() {

  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };


    return (
        <>
          {
            Follow.followData.map(follow =>(
              <div className="follow-list" key={follow.id}>
                <div className="follow-title">
                    <img src={follow.avatar} alt="" />
                    <div className="follow-list-title">
                        <div>
                          <span>{follow.title}</span>
                          <p className="tweet-title-details">{follow.author}</p>
                        </div>
                        <button className="follow-button" onClick={()=>handleClick()}>{isOn ? 'Following' : 'Follow'}</button>
                    </div>
                </div>
              </div>
            ))
          }
         <span className="trendslist-button">Show more</span>
        </>
      )
}

export default TrendsFollo