import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./pages/LandingPage";
import Dashborad from "./pages/Home/Dashborad";
import EditResume from "./pages/ResumeUpdate/EditResume";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashborad" element={<Dashborad />} />
            <Route path="/resume/:resumeId" element={<EditResume />} />
          </Routes>
        </Router>
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </>
  );
};

export default App;
