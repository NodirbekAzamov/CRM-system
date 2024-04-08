import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const Table = ({ item }) => {
  return (
    <table className="w-[100%]">
      <thead>
        <tr className="border-t border-b w-[100%] flex justify-between">
          <th className="p-[12px] text-[12px] font-[600] w-[10%]">№</th>
          <th className="p-[12px] text-[12px] font-[600] w-[30%] flex items-center gap-[5px]">
            Familiya, Ism <FaArrowDown size={12} />
          </th>
          <th className="p-[12px] text-[12px] font-[600] w-[20%]">Login</th>
          <th className="p-[12px] text-[12px] font-[600] w-[20%]">Rol</th>
          <th className="p-[12px] text-[12px] font-[600] w-[20%]">Status</th>
        </tr>
      </thead>
      {item ? (
        <tbody>

        </tbody>
      ) : (
        <tbody className="w-[100%] flex h-[50vh] flex-col justify-center items-center">
          <tr>
          <td className="text-[18px] font-[600] whitespace-nowrap">Ma'lumotlar yo'q</td>
          </tr>
          <tr>

          <td className="text-[16px] font-[400] text_darkGray whitespace-nowrap">
            Foydalanuvchi hali qo'shilmagan
          </td>
          </tr>
        </tbody>
      )}
    </table>
  );
};

export default Table;
