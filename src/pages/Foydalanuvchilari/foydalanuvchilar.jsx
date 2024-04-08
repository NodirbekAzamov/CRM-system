import React from 'react'
import Button from "../../components/button/Button"
import { FiPlus } from "react-icons/fi";

const Users = () => {

  return (
    <div>
      <div>
        <h1>Foydalanuvchilar</h1>
        <Button text="Qo'shish" icon={<FiPlus size={20}/>}/>
      </div>
    </div>
  )
}
export default Users