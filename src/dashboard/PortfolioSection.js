import PortfolioGraph from "../components/PortfolioGraph";
import TotalReturnsGraph from "../components/TotalReturnsGraph";

function PortfolioSection({ portfolio }) {
  return (
    <div className="md:ml-64 ">
      <PortfolioGraph portfolio={portfolio} />
      <TotalReturnsGraph portfolio={portfolio} />
    </div>
  );
}

export default PortfolioSection;
