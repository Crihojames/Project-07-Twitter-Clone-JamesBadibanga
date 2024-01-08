import { NavLink } from "react-router-dom"

function Navigation({src, url, texte, className}) {
  return (
      <NavLink to={url} className={className}>
        <img src={src} />
        <p>{texte}</p>
      </NavLink>
  )
}

export default Navigation