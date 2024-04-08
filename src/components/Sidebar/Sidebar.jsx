import React, { useEffect, useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import Home from "../../assets/home.png";
import QA from "../../assets/qa.png";
import Tasks from "../../assets/task.png";
import Students from "../../assets/student.png";
import Courses from "../../assets/courses.png";
import Users from "../../assets/users.png";
import { Link } from "react-router-dom";
import Leave from "../../assets/leave.png";
const Sidebar = () => {
  const [sideLink, setSideLink] = useState([
    { id: 1, text: "Bosh sahifa", icon: Home, path: "" },
    { id: 2, text: "Savol-javoblar", icon: QA, path: "" },
    { id: 3, text: "Topshiriqlarni baholash", icon: Tasks, path: "" },
    { id: 4, text: "Studentlar", icon: Students, path: "/studentlar" },
    { id: 5, text: "Kurslar", icon: Courses, path: "" },
    { id: 6, text: "Foydalanuvchilar", icon: Users, path: "" },
  ]);
  const [id, setId] = useState(1);
  useEffect(() => {
    let id = Number(sessionStorage.getItem("activeLink"));
    if (id) {
      setId(id);
    } else {
      setId(1);
    }
  }, []);
  const activeLink = (id) => {
    sessionStorage.setItem("activeLink", id);
    setId(id);
  };
  return (
    <aside className="bg_gray w-[256px] px-[8px] py-[20px] h-[100vh] flex flex-col justify-between">
      <div className="h-[100%] flex flex-col">
        <h1 className="ml-[12px] text-[12px] font-[500] text_darkGray">
          Boshqaruv paneli
        </h1>
        <ul className="w-[100%] flex flex-col items-start p-0 mt-[12px] gap-[2px]">
          {sideLink?.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => activeLink(item?.id)}
                className={`${id === item?.id ? "bg-[#D5DCDD]" : ""
                  } cursor-pointer flex gap-[8px] items-center px-[12px] py-[10px] w-[100%] hover:bg-[#D5DCDD] rounded-[8px]`}>
                <img
                  src={item?.icon}
                  alt={item?.text}
                  className="w-[16px] h-[16px] object-contain"/>
                <Link
                  to={item?.path}
                  className="text_darkGray text-[14px] font-[400] no-underline">
                  {item?.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="self-end cursor-pointer flex gap-[8px] items-center px-[12px] py-[10px] w-[100%] hover:bg-[#D5DCDD] rounded-[8px]">
        <img
          src={Leave}
          alt="leave"
          className="w-[16px] h-[16px] object-contain"/>
        <Link
          to=""
          className="text_darkGray text-[14px] font-[400] no-underline">
          Tizimdan chiqish
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
