import Balance from "../components/Balance";
import PortfolioGraph from "../components/PortfolioGraph";
import TotalReturnsGraph from "../components/TotalReturnsGraph";

function PortfolioSection({ isSidebarOpen, dbPortfolio }) {
  return (
    <div
      className={`transition-all duration-500 flex-grow ${
        isSidebarOpen ? "ml-64" : "ml-0"
      }`}
    >
      <TotalReturnsGraph dbPortfolio={dbPortfolio} />
      <div className="md:flex md:items-center md:justify-center">
        <PortfolioGraph dbPortfolio={dbPortfolio} />
        <div className="w-3/5 bg-gray-100 p-5 rounded-md m-5">
          <Balance dbPortfolio={dbPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
