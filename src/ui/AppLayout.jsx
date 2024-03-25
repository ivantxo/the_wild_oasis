import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
