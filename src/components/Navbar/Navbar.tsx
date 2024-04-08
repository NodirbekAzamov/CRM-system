import React from 'react'
import Avatar from "../../assets/avatar.png"
const Navbar = () => {
  return (
    <nav className='bg_green px-[20px] py-[12px]'>
      <div className='w-[100%] flex justify-between'>
        <h5>Logo</h5>
        <div className='flex gap-[8px]'>
          <img src={Avatar} alt="ava" className='w-[32px] h-[32px]'/>
          <div className='flex flex-col gap-[2px]'>
            <h1 className='text-white text-[14px] font-[400] m-0'>Mardonov Abdulaziz</h1>
            <p className='text-[12px] text-[#FFFFFF99] font-[400] m-0'>Superadmin</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
