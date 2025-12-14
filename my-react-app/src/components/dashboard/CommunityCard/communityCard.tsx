import community from "../../../images/svg/Community.svg";
import union from "../../../images/svg/communityUnion.svg";
import profilePhoto1 from "../../../images/community card/1.svg";
import profilePhoto2 from "../../../images/community card/2.svg";
import profilePhoto3 from "../../../images/community card/3.svg";
import profilePhoto4 from "../../../images/community card/4.svg";
import Button from "../../universalComponents/button/button";
import "./communityCard.scss";

const CommunityCard = () => {
    return (
        <div className="communityCard">
            <div className="communityTop">
                <div className="communityHeading">
                    <img src={community} alt="" />
                    Community
                </div>
                <div className="communityText">
                    Join discussion, ask questions, share <br/> progress with other
                    learners
                </div>
            </div>
            <div className="communityProfilesContainer">
                <div className="communityProfiles">
                    <img src={union} alt="" className="starIcon" />
                    <img src={profilePhoto1} alt="" />
                    <img src={profilePhoto2} alt="" />
                    <img src={profilePhoto3} alt="" />
                    <img src={profilePhoto4} alt="" />
                </div>
            </div>
            <Button
                type="Neutral"
                style="Secondary"
                size="medium"
                onClick={() => console.log("Go!")}
            >
                Explore
            </Button>
        </div>
    );
};

export default CommunityCard;
