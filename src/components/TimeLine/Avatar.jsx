import Navigation from "../Sidebar/Navigation"

export default function Avatar({src, url}) {
  return (
    <div className="avatar">   
      <Navigation src={src} url={url} className="avatar2" />
    </div>
  )
}

