import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";

const StudentModal = ({ open, toggle }) => {
  const [modal, setModal] = useState(false);
  const modalImg = () => {
    setModal(true);
  }
  return (
    <div className={`${open ? "block" : "hidden"} w-full h-full  bg-[#FFFFFFB2] fixed top-0 left-0`} >

      <div className=' w-[430px] h-[100%] bg-white absolute top-0 right-0'>
        <div className=' d-flex items-center justify-between p-[20px]'>
          <h5>Student qo'shish</h5>
          <IoMdClose size={30} onClick={toggle} className=' cursor-pointer' />
        </div>

        <div className=' d-flex items-center flex-col w-[100%] h-[100vh] '>
          <div onClick={modalImg} className='  bg-[#F1F3F4] w-[100px] h-[100px] rounded-[50%]'>

          </div>
          <div className=' d-flex flex-col gap-[20px] mt-[32px] w-[100%] px-[20px]'>
            <input type="text" placeholder='Familiya' className=' border w-[100%] rounded-[10px] py-[5px] px-[10px]' />
            <input type="text" placeholder='Ism' className=' border w-[100%] rounded-[10px] py-[5px] px-[10px]' />
            <input type="text" placeholder='Telifon Raqam' className=' border w-[100%] rounded-[10px] py-[5px] px-[10px]' />
            <input type="text" placeholder='Login (Email)' className=' border w-[100%] rounded-[10px] py-[5px] px-[10px]' />
            <div>
              <input type="text" placeholder='Parol' className=' border w-[100%] rounded-[10px] py-[5px] px-[10px]' />
              <p className='mt-[5px]'>Parol minimum 8 belgidan iborat bo’lishi kerak</p>
            </div>
            <div className=' d-flex items-center gap-[8px]'>
              <button className='border rounded-[12px] px-[32px] py-[10px] bg_green text-[#fff]'>Saqlash</button>
              <button className='border rounded-[12px] px-[32px] py-[10px] text-[#111111] font-[600]'>Bekor qilish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentModal