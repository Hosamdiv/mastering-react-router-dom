import { Outlet } from "react-router-dom";
import LearnAside from "../../components/LearnAside";
import NavBar from "../../components/NavBar";

const LearnLayout = () => {
  return (
    <div className="learn-layout">
      <LearnAside />

      <div className="ml-72">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default LearnLayout;
