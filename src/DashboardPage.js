import SearchBar from "./dashboard/SearchBar";
import Sidebar from "./dashboard/Sidebar";
import { auth, useAuth, signOut } from "../src/firebase";
import { useState } from "react";
import SideBarBtn from "./SideBarBtn";
import PortfolioGraph from "./components/PortfolioGraph";
import Datagraph from "./components/Datagraph";

function DashboardPage({ portfolio, trades, setTrades, series, seriesBar }) {
  const handleLogout = () => {
    return signOut(auth);
  };
  const currentUser = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen">
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      {/*<SearchBar />*/}
      <div className="flex items-center justify-between">
        <div className="">
          <SideBarBtn
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
        </div>
        <div className="flex flex-col justify-end items-center">
          <h1>current user:{currentUser?.email}</h1>
          <button
            onClick={handleLogout}
            className="bg-shade-lightblue font-semibold text-gray-100 p-2 shadow-lg rounded-md"
          >
            LogOut
          </button>
        </div>
      </div>
      <div className="">
        <PortfolioGraph
          portfolio={portfolio}
          trades={trades}
          setTrades={setTrades}
        />
      </div>
      <div className="">
        <Datagraph series={series} seriesBar={seriesBar} />
      </div>
    </div>
  );
}

export default DashboardPage;
