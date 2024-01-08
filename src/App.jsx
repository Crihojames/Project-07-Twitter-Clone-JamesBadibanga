import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profil from "./components/Profil/profil.jsx";
import Explore from "./components/Explore/explore.jsx";
import Notification from "./components/Notification/notification.jsx";
import Message from "./components/Message/message.jsx";
import List from "./components/List/list.jsx";
import Mores from "./components/More/mores.jsx";
import Booksmarks from "./components/Bookmarks/bookmarks.jsx";
import UserPage from "./pages/UserPage.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/message" element={<Message />} />
            <Route path="/bookmarks" element={<Booksmarks />} />
            <Route path="/list" element={<List />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/more" element={<Mores />} />
            <Route path="/profils/:id" element={<UserPage />} />
          </Routes>
      </BrowserRouter>
    </Layout>
  );
}
