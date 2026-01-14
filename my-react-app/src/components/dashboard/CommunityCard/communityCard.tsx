import Button from "../../universalComponents/button/button";
import { IMAGES } from "../../data";
import "./communityCard.scss";

const CommunityCard = () => {
    return (
        <div className="communityCard">
            <div className="communityTop">
                <div className="communityHeading">
                    <img src={IMAGES.community} alt="" />
                    Community
                </div>
                <div className="communityText">
                    Join discussion, ask questions, share <br/> progress with other
                    learners
                </div>
            </div>
            <div className="communityProfilesContainer">
                <div className="communityProfiles">
                    <img src={IMAGES.union} alt="" className="starIcon" />
                    <img src={IMAGES.profilePhoto1} alt="" />
                    <img src={IMAGES.profilePhoto2} alt="" />
                    <img src={IMAGES.profilePhoto3} alt="" />
                    <img src={IMAGES.profilePhoto4} alt="" />
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
