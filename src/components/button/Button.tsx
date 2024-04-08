import React from 'react'

const Button = ({icon, text}) => {
  return (
    <button className='bg_green text-white flex items-center gap-[8px] px-[20px] py-[12px] rounded-[12px] text-[14px]'>
      {icon}{text}
    </button>
  )
}

export default Button
