import Sidebar from "../Sidebar/Sidebar"
import NotificationHeader from "./NotificationHeader"
import TrendsNotification from "./TrendsNotification"


function notification() {
  return (
    <>
        <Sidebar />
        <NotificationHeader />
        <TrendsNotification />
    </>
  )
}

export default notification