import Sidebar from "../Sidebar/Sidebar"
import ExploreHeader from "./ExploreHeader"
import TrendsExplore from "./TrendsExplore"

Sidebar


function explore() {
  return (
    <>
        <Sidebar />
        <ExploreHeader />
        <TrendsExplore />
    </>
  )
}

export default explore