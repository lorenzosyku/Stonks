import Sidebar from "./dashboard/Sidebar";
import { useState } from "react";
import SideBarBtn from "./SideBarBtn";
import PortfolioGraph from "./components/PortfolioGraph";
import Datagraph from "./components/Datagraph";
import Search from "./components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./dashboard/Details";

function DashboardPage({
  portfolio,
  trades,
  setTrades,
  series,
  seriesBar,
  stonk,
  setStonk,
  setSeries,
  details,
  setDetails,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-300">
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="grid grid-cols-2">
        <div className="">
          <SideBarBtn
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
        </div>
        <Search stonk={stonk} setStonk={setStonk} setSeries={setSeries} setDetails={setDetails}/>
      </div>
      <div className="flex p-5 justify-between">
        <div className="ml-64 w-3/5 bg-gray-100 m-5 rounded-md">
          <Datagraph series={series} seriesBar={seriesBar} />
        </div>
        <div className="bg-gray-100 w-1/5 m-5 rounded-md">
          <Details 
            details={details}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
