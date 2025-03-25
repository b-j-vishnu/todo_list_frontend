import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";

const Layout = () => {
  const location = useLocation().pathname;

  const isAuth = /^(\/|\/signup)$/.test(location);
  return (
    <div className="poppins-regular">
      {!isAuth && <Header />}
      <Outlet />
    </div>
  );
};

export default Layout;
