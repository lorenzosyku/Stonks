import Sidebar from "./dashboard/Sidebar";
import { useState } from "react";
import SideBarBtn from "./SideBarBtn";
import PortfolioGraph from "./components/PortfolioGraph";
import Datagraph from "./components/Datagraph";
import Search from "./components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function DashboardPage({
  portfolio,
  trades,
  setTrades,
  series,
  seriesBar,
  stonk,
  setStonk,
  setSeries,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen">
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="grid grid-cols-3">
        <div className="">
          <SideBarBtn
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
        </div>
        <div className="flex">
          <Search
            stonk={stonk}
            setStonk={setStonk}
            setSeries={setSeries}
          />
        </div>
        
      </div>
      
      <div className="ml-64">
        <Datagraph series={series} seriesBar={seriesBar} />
      </div>
    </div>
  );
}

export default DashboardPage;
