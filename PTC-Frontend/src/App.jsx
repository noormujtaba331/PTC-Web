/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./Customer/Dashboard";
import ProfilePage from "./Customer/Profile";
import MyAdsPage from "./Customer/AdsPage";
import NotFound from "./pages/NotFound";
import PlansPage from './Customer/Plans'
import EarningsPage from './Customer/Earnings'
import WithdrawalsPage from './Customer/Withdrawals'
import SupportPage from './Customer/Support'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-ads" element={<MyAdsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/earnings" element={<EarningsPage />} />
          <Route path="/withdrawals" element={<WithdrawalsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
