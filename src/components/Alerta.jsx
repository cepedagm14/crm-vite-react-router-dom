import React from "react";

export const Alerta = ({children}) => {
  return (
    <div className="bg-red-100 border border-red-400 text-center text-red-700 px-2 py-1 rounded relative" role="alert">
      {children}
    </div>
  );
};
