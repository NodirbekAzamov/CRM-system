import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import Button from "../../components/button/Button"
import { BsSearch } from "react-icons/bs";
import StudentModal from './Modal/StudentModal';


export default function Studentlar() {
    const [modal, setModal] = useState(false);

    const chandleBtn = () => {
        setModal(true)
    }

    const toggle = () => {
        setModal(false)
    }

    return (
        <div className=' w-full'>
            <StudentModal open={modal} toggle={toggle}/>
            <div className=' d-flex items-center justify-between px-[30px] py-[20px]'>
                <h6 className='text-[20px] font-[600]'>Studentlar</h6>
                <div onClick={chandleBtn}>
                    <Button text="Qo'shish" icon={<FiPlus size={20} />} />
                </div>
            </div>
            <div className='border d-flex items-center gap-[10px] bg_gray mx-[30px] rounded-[20px] px-[20px] py-[5px]'>
                <BsSearch />
                <input type="text" placeholder='Studentlar bo’yicha izlash' className=' outline-none bg-transparent' />
            </div>
        </div>
    )
}
