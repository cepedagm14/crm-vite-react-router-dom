import { useNavigate } from "react-router-dom";

export const Cliente = ({ cliente }) => {
  const navigate = useNavigate();
  const { nombre, empresa, email, telefono, notas, id } = cliente;
  return (
    <tr className="border-b-2 hover:bg-gray-50">
      <td className="p-3 text-center"> {nombre}</td>
      <td className="p-3 text-center">
        <p>
          <span className="text-gray-500 font-bold">Email: </span>
          {email}
        </p>
        <p>
          <span className="text-gray-500 font-bold">Tel: </span>
          {telefono}
        </p>
      </td>
      <td className="p-3 text-center"> {empresa}</td>
      <td className="p-3">
        <button
          onClick={() => navigate(`/clientes/${id}`)}
          type="button"
          className="bg-green-400 hover:bg-green-500 block text-white w-full p-2 text-xs rounded-xl"
        >
          Ver
        </button>
        <button
          type="button"
          className="bg-blue-400 hover:bg-blue-500 block text-white w-full p-2 text-xs mt-2 rounded-xl"
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-400 hover:bg-red-500 block text-white w-full p-2 text-xs mt-2 rounded-xl"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
