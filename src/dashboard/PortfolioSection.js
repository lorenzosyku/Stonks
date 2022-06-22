import { useState } from "react";
import Balance from "../components/Balance";
import PortfolioGraph from "../components/PortfolioGraph";
import TotalReturnsGraph from "../components/TotalReturnsGraph";

function PortfolioSection({ dbPortfolio, totPortfolio, setTotPortfolio }) {
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
        {/* <PortfolioGraph
          dbPortfolio={dbPortfolio}
          setTotto={setTotto}
          totto={totto}
        /> */}
        <div className="w-full bg-gray-100 p-5 rounded-md m-5">
          <Balance dbPortfolio={dbPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
