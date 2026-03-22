'use client';

import { ReactNode } from "react";

interface ForegroundProps {
   children : ReactNode;
}

export default function Foreground ( {children = ""} : ForegroundProps) {
   return (
      <>
         <div className="bg-gray-100 p-4 rounded-lg">
            {children}
         </div>
      </>
   );
}