import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Inicio } from "./pages/Inicio";
import { Nuevocliente } from "./pages/Nuevocliente";
import { EditarCliente } from "./pages/EditarCliente";


function App() {  
  return (
    <div className="min-h-screen bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/clientes" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="nuevo" element={<Nuevocliente />} />
            <Route path="editar/:id" element={<EditarCliente />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
