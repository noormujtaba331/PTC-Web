/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./Customer/DashboardLayout"; // Yeh layout hoga jisme Navbar/Sidebar fix honge
import OverviewPage from "./Customer/Overview"; // Yeh andar ka overview page hoga
import PlansPage from "./Customer/PlanPage"
import VideoWorkPage from "./Customer/VideoWorkPage"
import EarningsPage from "./Customer/EarningsPage"
import WithdrawPage from "./Customer/WithdrawPage"
import ProfilePage from "./Customer/ProfilePage"




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<div>Error 404 Page not Found</div> }/>

        {/* Dashboard Layout with Nested Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          {/* Jab baaki pages banaoge toh woh yahan aayenge: */}
          <Route path="plans" element={<PlansPage />} />
          <Route path="video-work" element={<VideoWorkPage />} />
          <Route path="earnings" element={<EarningsPage />} />
          <Route path="withdraw" element={< WithdrawPage/>} />
          <Route path="profile" element={< ProfilePage/>} />
          {/* <Route path="profile" element={<ProfilePage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;