import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages/AuthForm";
import Layout from "./pages/Layout";
import { Todos } from "./pages/Todos";

const App = () => {
  return (
    <main className="poppins-regular">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/home" element={<Todos />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
