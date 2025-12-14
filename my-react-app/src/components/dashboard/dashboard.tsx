import Header from "../universalComponents/header/header";
import CommunityCard from "./CommunityCard/communityCard";
import ModalCard from "./ModalCard/modalCard";
import TradingOverview from "./tradingOverview/tradingOverview";

const Dashboard = () => {
    return (
        <div className="dashboard bigCard">
            <Header />
            <div style={{display: "flex", gap: "24px"}}>
                <ModalCard />
                <CommunityCard />
                <TradingOverview />
            </div>
        </div>
    );
};

export default Dashboard;
