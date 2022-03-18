import PortfolioGraph from "../components/PortfolioGraph";
import PortfolioItem from "../components/PortfolioItem";
import TotalReturnsGraph from "../components/TotalReturnsGraph";

function PortfolioSection({ portfolio }) {
  return (
    <div className="md:ml-64 ">
      <div className="">
        <PortfolioGraph portfolio={portfolio} />
        
      </div>
      
      <TotalReturnsGraph portfolio={portfolio} />
    </div>
  );
}

export default PortfolioSection;
