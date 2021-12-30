import React from "react";

export const Cliente = ({ cliente }) => {
  const { nombre, empresa, email, telefono, notas, id } = cliente;
  return (
    <tr className="border-b-2 hover:bg-gray-50">
      <td className="p-3"> {nombre}</td>
      <td className="p-3">
        <p>
          <span className="text-gray-500 uppercase font-bold">Email:</span>
          {email}
        </p>
        <p>
          <span className="text-gray-500 uppercase font-bold">Tel:</span>
          {telefono}
        </p>
      </td>
      <td className="p-3"> {empresa}</td>
      <td className="p-3">

      <button
          type="button"
          className="bg-green-600 hover:bg-green-700 block text-white w-full p-2 uppercase text-xs"
        >
          Ver
        </button>
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 block text-white w-full p-2 uppercase text-xs mt-2"
        >
          Editar
        </button>
        <button type="button"
        className="bg-red-600 hover:bg-red-700 block text-white w-full p-2 uppercase text-xs mt-2"
        >Eliminar</button>
      </td>
    </tr>
  );
};
