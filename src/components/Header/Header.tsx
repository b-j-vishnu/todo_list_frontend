import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation().pathname;
  return (
    <section className="bg-blue-700 py-5 z-10 text-white grid grid-cols-2 fixed w-full top-0 left-0">
      <div className="px-5">Todos</div>
      <div className="flex  justify-evenly items-center">
        <Link to="/home">
          Home
          <span
            className={`transform h-[2px] block w-full bg-black  scale-0 transition-all  duration-200  ${
              location === "/home" && "scale-100  "
            } `}
          ></span>
        </Link>
        <Link to="/about">
          About
          <span
            className={`transform h-[2px] block w-full bg-black  scale-0 transition-all  duration-200  ${
              location === "/about" && "scale-100  "
            } `}
          ></span>
        </Link>
        <Link to="/logout">
          Logout
          <span
            className={`transform h-[2px] block w-full bg-black  scale-0 transition-all  duration-200  ${
              location === "/logout" && "scale-100  "
            } `}
          ></span>
        </Link>
      </div>
    </section>
  );
};

export default Header;
