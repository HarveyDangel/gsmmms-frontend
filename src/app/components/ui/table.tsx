'use client';

import { ReactNode } from "react";

interface TableProps {
   children?: ReactNode;
   className?: string;
}

export default function Table({ children, className = ''}: TableProps) {
   return (
      <>
         <table className={` bg-gray-100 ${className}`}> 
            <thead className= {`[&_tr]:border [&_tr]:border-gray-800 [&_tr]:p-2`}>
               <tr>
                  <th>{children}</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>{children}</td>
               </tr>
            </tbody>
         </table>
      </>
   );
}