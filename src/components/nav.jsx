import { Suspense } from "react";
import { useNavigation, Link, Outlet } from "react-router-dom";

const Nav = () => {
  const { state } = useNavigation();

  return (
    <>
      <div>
        <Link to={"/"}>Main</Link>
        <Link to={"/books"}>Books</Link>
        <Link to={"/club"}>Club</Link>
        {state === "loading" && <p>Loading...</p>}
      </div>
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </>
  );
};

export default Nav;
