import { useState } from "react";
import Balance from "../components/Balance";
import PortfolioGraph from "../components/PortfolioGraph";
import TotalReturnsGraph from "../components/TotalReturnsGraph";

function PortfolioSection({ dbPortfolio, totPortfolio, setTotPortfolio }) {
  const [totto, setTotto] = useState(0);
  const cashBalance = dbPortfolio.cash;

  const karamba = [cashBalance];
  return (
    <div>
      <div className="flex justify-between p-5 ">
        <h2 className="font-semibold">CASH BALANCE</h2>
        <h3 className="font-bold italic">${cashBalance}</h3>
      </div>
      <TotalReturnsGraph
        dbPortfolio={dbPortfolio}
        totPortfolio={totPortfolio}
        setTotPortfolio={setTotPortfolio}
        totto={totto}
        karamba={karamba}
      />
      <div className="md:flex md:items-center md:justify-center">
        <PortfolioGraph
          karamba={karamba}
          dbPortfolio={dbPortfolio}
          setTotto={setTotto}
          totto={totto}
        />
        <div className="w-full p-5 rounded-md m-5">
          <Balance dbPortfolio={dbPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
