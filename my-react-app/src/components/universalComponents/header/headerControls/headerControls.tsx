import { IMAGES, HEADER_CONTROLS_DATA } from "../../../data";

const HeaderControlsButtons = () => {
    let notificationCount = HEADER_CONTROLS_DATA.notificationCount;
    return(
        <div className="headerControlsButtons">
            <div className="headerButton">
                <img src={IMAGES.bell} alt="notification"/>
                <div className="notificationCount">{notificationCount}</div>
            </div>
            <div className="headerButton">
                <img src={IMAGES.info} alt="more information"/>
            </div>
        </div>
    )
}


const MiniProfile = () => {
    return(
        <div className="miniProfile">
            <img className="profilePhoto" src={IMAGES.profilePic} alt="profile photo"/>
            <div className="miniProfileInfo">
                <div className="profileName">
                    {HEADER_CONTROLS_DATA.profileName}
                </div>
                <div className="profileEmail">
                    {HEADER_CONTROLS_DATA.profileEmail}
                </div>
            </div>
            <div className="arrowDrop">
                <img src={IMAGES.arrow} alt="mini profile menu"/>
            </div>
        </div>
    )
}

const HeaderControls = () => {
    return(
        <div className="headerControls">
            <HeaderControlsButtons/>
            <MiniProfile/>
        </div>
    )
}

export default HeaderControls;