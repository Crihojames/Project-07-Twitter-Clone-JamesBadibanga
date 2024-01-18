import { useState } from "react"
import shareIcon from "../../../images/Share.svg"

export default function ShareButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleShare = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="tweet-action-button-react" title="Share">
      <button onClick={handleShare}>
        <img src={shareIcon} alt="Partager" />
      </button>
      {isOpen && (
        <div className="tweet-share-option">
          <button onClick={() => alert("Partager via un message direct")}>
            Partager via un message direct
          </button>
          <button onClick={() => alert("Copier le lien du tweet")}>
            Copier le lien du tweet
          </button>
        </div>
      )}
    </div>
  )
}


// import React from "react"
// import { useState } from "react"

// const group1 =
//   "M13.6083 4.725L9.44167 0.558335C9.1975 0.314168 8.80167 0.314168 8.55833 0.558335L4.39167 4.725C4.14667 4.96917 4.14667 5.365 4.39167 5.60834C4.63667 5.85167 5.03083 5.85333 5.275 5.60834L8.375 2.50833V11C8.375 11.345 8.655 11.625 9 11.625C9.345 11.625 9.625 11.345 9.625 11V2.50833L12.725 5.60834C12.8467 5.73083 13.0067 5.79167 13.1667 5.79167C13.3267 5.79167 13.4867 5.73167 13.6083 5.60834C13.8525 5.36417 13.8525 4.96917 13.6083 4.725Z"
// const group2 =
//   "M15.4233 16.7867H2.57667C1.52334 16.7867 0.666672 15.93 0.666672 14.8767V10.1667C0.666672 9.82167 0.946672 9.54167 1.29167 9.54167C1.63667 9.54167 1.91667 9.82167 1.91667 10.1667V14.8767C1.91667 15.2408 2.2125 15.5367 2.57667 15.5367H15.4233C15.7875 15.5367 16.0833 15.2408 16.0833 14.8767V10.1667C16.0833 9.82167 16.3633 9.54167 16.7083 9.54167C17.0533 9.54167 17.3333 9.82167 17.3333 10.1667V14.8767C17.3333 15.93 16.4767 16.7867 15.4233 16.7867Z"

// export default function IconUpload({ className, counts }) {
//   const [isHovered, setIsHovered] = useState(false)

//   const handleMouseEnter = () => {
//     setIsHovered(true)
//   }
//   const divStyles = {
//     color: isHovered ? "cyan" : " ",
//     padding: "10px",
//   }

//   return (
//     <div
//       className={className}
//       onClick={() => handleMouseEnter()}
//       style={divStyles}
//       title="upload"
//     >
//       <span className="tweet-action-button-over">
//         <span className="tweet-action-button-over-2">
//           <svg
//             width="18"
//             height="17"
//             viewBox="0 0 18 18"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d={group1}
//               fill={`${isHovered ? "cyan" : "#6E767D"}`}
//             />
//             <path
//               d={group2}
//               fill={`${isHovered ? "cyan" : "#6E767D"}`}
//             />
//           </svg>
//         </span>
//       </span>
//       <span
//         className="tweet-title-details details-count-Icon-upload"
//         style={divStyles}
//       >
//         {counts}
//       </span>
//     </div>
//   )
// }

// import { useState } from "react"

// export default function IconUpload() {
//   const [file, setFile] = useState(null)

//   const handleUpload = (event) => {
//     setFile(URL.createObjectURL(event.target.files[0]))
//   }

//   return (
//     <div>
//       <input type="file" onChange={handleUpload} />
//       {file && <img src={file} alt="preview" />}
//     </div>
//   )
// }
