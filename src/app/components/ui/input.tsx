import React from "react";

type inputProps = React.InputHTMLAttributes<HTMLInputElement> & {
   label?: string;
   error?: string;
};

const Input = React.forwardRef<HTMLInputElement, inputProps> (
   ({ label, error, className, ...props}, ref) => {

      return (
         <>
            <div className="flex flex-col gap-1">
               {label && (
                  <label htmlFor={label} className="text-sm font-medium text-gray-700 capitalize">{label}</label>
               )}
                  <input
                     ref = {ref}
                     className= {`border border-gray-400 rounded-md p-1 focus:ring-2 focus:outline-none focus:ring-green-500 ${className}`}
                     {...props}
                     />
            </div>
         </>
      );
   }
);

Input.displayName = "Input";
export default Input;