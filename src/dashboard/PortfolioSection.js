import { useState } from "react";
import Balance from "../components/Balance";
import PortfolioGraph from "../components/PortfolioGraph";
import TotalReturnsGraph from "../components/TotalReturnsGraph";
import AssetAllocation from "./AssetAllocation";

function PortfolioSection({
  isSidebarOpen,
  dbPortfolio,
  totPortfolio,
  setTotPortfolio,
  trades,
  setTrades,
}) {
  const [totto, setTotto] = useState([10000]);
  return (
    <div>
      <TotalReturnsGraph
        dbPortfolio={dbPortfolio}
        totPortfolio={totPortfolio}
        setTotPortfolio={setTotPortfolio}
        totto={totto}
      />
      <div className="md:flex md:items-center md:justify-center">
        <PortfolioGraph
          dbPortfolio={dbPortfolio}
          setTotto={setTotto}
          totto={totto}
        />
        <div className="w-3/5 bg-gray-100 p-5 rounded-md m-5">
          <Balance dbPortfolio={dbPortfolio} />
        </div>
      </div>
      <div className="">
        <h2>Asset Allocation</h2>
        <div className="p-3">
          <AssetAllocation />
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
