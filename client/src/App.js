import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister/LoginRegister";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HomePageLogin from "./pages/HomePage/HomePageLogin";
import HomePage from "./pages/HomePage/HomePage";
import LivePage from "./pages/Live/HomePage";
import LatestPage from "./pages/Latest/HomePage";
import VideosPage from "./pages/Videos/HomePage";
import CategoriesPage from "./pages/Categories/HomePage";
import ChannelsPage from "./pages/Channels/HomePage";
import Upload from "./pages/Upload/Upload";
import ChangePassword from "./pages/changePassword/Upload";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/" element={<HomePageLogin />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/live" element={<LivePage />} />
        <Route path="/latest" element={<LatestPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/channel" element={<ChannelsPage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/changePassword" element={<ChangePassword />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
