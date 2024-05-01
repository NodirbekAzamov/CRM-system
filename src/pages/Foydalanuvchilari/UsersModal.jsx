import React from "react";
import { IoMdClose } from "react-icons/io";
import ProfilePic from "../../assets/addPic.png";
import Button from "../../components/button/Button"
// import Slider from '@mui/material/Slider';
import User from "../../assets/user.jpg"
import Frame from "../../assets/frame.jpg"
const UsersModal = ({ open, toggle }) => {
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } w-[100vw] h-[100vh] bg-[#FFFFFFB2] fixed top-0 left-0`}
    >
      <div className="w-[430px] h-[100vh] bg-white absolute shadow-md right-[15px] p-[20px] flex flex-col items-center gap-[20px]">
        <div className="w-[100%] flex justify-between">
          <h1 className="text-[18px] font-[600]">Foydalanuvchi qo'shish</h1>
          <IoMdClose
            onClick={toggle}
            size={24}
            className="text_darkGray cursor-pointer"
          />
        </div>
        <div className="bg_gray w-[100px] h-[100px] rounded-full relative flex items-center justify-center">
          <input
            type="file"
            className="absolute w-[100%] h-[100%] cursor-crosshair opacity-0"
          />
          <img src={ProfilePic} alt="profilePic" />
        </div>
        <input
          type="text"
          placeholder="Familiya"
          className="w-full px-[12px] py-[10px] text-[14px] border rounded-[12px] outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Ism"
          className="w-full px-[12px] py-[10px] text-[14px] border rounded-[12px] outline-none focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="Telefon raqami"
          className="w-full px-[12px] py-[10px] text-[14px] border rounded-[12px] outline-none focus:border-blue-500"
        />
        <select className="w-full px-[12px] py-[10px] text-[14px] border rounded-[12px] outline-none focus:border-blue-500">
          <option value="">Rolni tanlang</option>
        </select>
        <input
          type="email"
          placeholder="Login (Email)"
          className="w-full px-[12px] py-[10px] text-[14px] border rounded-[12px] outline-none focus:border-blue-500"
        />
        <div>
        <input
          type="password"
          placeholder="Parol"
          className="w-full px-[12px] py-[10px] text-[14px] border rounded-[12px] outline-none focus:border-blue-500"
        />
        <label htmlFor="" className="text_darkGray text-[12px] font-[400]">Parol minimum 8 belgidan iborat bo'lishi kerak</label>
        </div>
        <div className="flex gap-[8px]">
          <button>
            <Button text="Saqlash"/>
          </button>
          <button className="py-[12px] px-[32px] border-[#818C9980] border rounded-[12px] text-[14px] font-[600]">Bekor qilish</button>
        </div>
      </div>
      <div className="w-[450px] p-[20px] bg-white rounded-[8px] min-h-[200px] absolute shadow-md top-0 right-[460px]">
      <div className="w-[100%] flex justify-between">
          <h1 className="text-[18px] font-[600]">Rasm o'zgartirish</h1>
          <IoMdClose
            onClick={toggle}
            size={24}
            className="text_darkGray cursor-pointer"
          />
        </div>
        <div className="w-[400px] h-[400px] rounded-[8px] overflow-hidden relative">
          {/* <div className="w-[100%] h-[100%] bg-[#53525289] absolute z-20"></div> */}
          <img src={Frame} alt="" className="absolute z-10 top-0 w-[100%] h-[100%]"/>
          <img src={User} alt="" className="absolute z-10 top-0  w-[400px] h-[400px]"/>
          {/* <div className="w-[350px] h-[350px] left-[25px] top-[25px] rounded-full absolute z-30 bg-transparent overflow-hidden"> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default UsersModal;
