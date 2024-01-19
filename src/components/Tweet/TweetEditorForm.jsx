import TweetEditorButtons from "./TweetEditorButtons"
import { useContext, useState } from "react"
import { TweetContext } from "../../TweetContext"
import UserContext from "../../UserContext"


const TweetEditorForm = () => {

  const { tweetData, setTweetData } = useContext(TweetContext);
  const [tweetText, setTweetText] = useState('');
  const heure = new Date()
  const userCurrent = useContext(UserContext)
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (tweetText.trim() === '') return
      setTweetData([...tweetData, { id: tweetData.length + 1,avatarTweet:`${userCurrent.profil}`,auteur:`${userCurrent.name}`,certificat: true,detailsTitleTweet:`${userCurrent.subname}`, time:`${heure.getMinutes()} sec`,  textTweet: tweetText, imageTweet:"", message:0, share:0, like:0, upload:0 }]); // Ajouter un nouvel objet au tableau de données existant
      setTweetText(''); // Réinitialiser la valeur de l'entrée
    
  };


  const handleInputChange = (event) => {
    setTweetText(event.target.value);
  };

  return (
    <div className="tweet-editor-form">
      <form onSubmit={handleFormSubmit}>
        <textarea
          type="text" 
          placeholder="What's happening ?" 
          className="tweet-editor-input"
          value={tweetText}
          onChange={handleInputChange}
        />
        <TweetEditorButtons />
      </form>
    </div>
  )
}

export default TweetEditorForm