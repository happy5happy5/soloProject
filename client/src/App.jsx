import React from "react";
import {
  Home,
  Chat,
  Login,
  NaviBar,
  Redux,
  Zustand,
  Kakaocom,
} from "./component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <NaviBar></NaviBar>
        <Routes>
          {/* you can use useNavigate react-router-dom@6 style inside of <Router> component */}
          <Route path="/" element={<Home />} />
          <Route path="/kakao" element={<Kakaocom />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/zustand" element={<Zustand />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
