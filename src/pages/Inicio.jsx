import { useEffect, useState } from "react";
import { Cliente } from "../components/Cliente";

export const Inicio = () => {
  const [clientes, setClientes] = useState([]);

  const obtenerClientes = async () => {
    try {
      const url = "http://localhost:4000/clientes";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setClientes(resultado);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    obtenerClientes();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Seguro que quieres eliminar este registro?")) {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const request = await fetch(url, { method: "DELETE" });
        await request.json();
        await obtenerClientes();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Lista de Cliente</h1>
      <p className="mt-3">Administra tus clientes </p>

      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody className="">
          {clientes.map((cliente) => (
            <Cliente
              key={cliente.id}
              cliente={cliente}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
