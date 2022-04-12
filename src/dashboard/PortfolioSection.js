import Balance from "../components/Balance";
import PortfolioGraph from "../components/PortfolioGraph";
import TotalReturnsGraph from "../components/TotalReturnsGraph";

function PortfolioSection({ portfolio, isSidebarOpen }) {
  return (
    <div className={`transition-all duration-500 flex-grow ${
      isSidebarOpen ? "ml-64" : "ml-0"
    }`}>
      <div className="flex justify-between items-center">
        <PortfolioGraph portfolio={portfolio} />
        <div className="w-3/5 bg-gray-100 p-5 rounded-md m-5">
          <Balance portfolio={portfolio} />
        </div>
      </div>

      <TotalReturnsGraph portfolio={portfolio} />
    </div>
  );
}

export default PortfolioSection;
