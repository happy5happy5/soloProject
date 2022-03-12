import React, { useState } from "react";
import { Home, Chat, Login, NaviBar } from "./component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <NaviBar></NaviBar>
        <Routes>
          {/* you can use useNavigate react-router-dom@6 style inside of <Router> component */}
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
