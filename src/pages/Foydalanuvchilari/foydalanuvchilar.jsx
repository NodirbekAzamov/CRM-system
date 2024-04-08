import React, { useState } from "react";
import Button from "../../components/button/Button";
import { FiPlus } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import Table from "../../components/Table/Table";
import UsersModal from "./UsersModal";

const Users = () => {
  const [openModal, setOpenModal] = useState(false)
  const toggle =()=> {
    setOpenModal(false)
  }
  return (
    <div className="w-[100%]">
      <UsersModal open={openModal} toggle={toggle}/>
      <div className="w-[100%] flex items-center justify-between p-[30px]">
        <h1 className="text-[20px] font-[600]">Foydalanuvchilar</h1>
        <div onClick={()=>setOpenModal(true)}>
        <Button text="Qo'shish" icon={<FiPlus size={20} />} />

        </div>
      </div>
      <div className="px-[30px]">
        <div className="w-[100%] flex items-center bg-[#F3F5F8] h-[40px] rounded-[50vw] p-[10px] gap-[10px] text-[#818C99CC]">
          <IoSearch className="ml-[5px]" />
          <input
            type="text"
            placeholder="Foydalanuvchilar bo'yicha izlash"
            className="bg-transparent w-[100%] outline-none"
          />
        </div>
      </div>
      <div className="mt-[20px]">
        <Table />
      </div>
    </div>
  );
};

export default Users;
