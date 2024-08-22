import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Main from "./Main";

const Layout = () => {
  return (
    <div className="flex">
      <Aside />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};
export default Layout;
