import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Users from "./pages/Foydalanuvchilari/foydalanuvchilar";
const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={""}/>
          <Route path="users" element={<Users/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
