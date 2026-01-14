// Community Card Images
import community from "../images/svg/Community.svg";
import union from "../images/svg/communityUnion.svg";
import profilePhoto1 from "../images/community card/1.svg";
import profilePhoto2 from "../images/community card/2.svg";
import profilePhoto3 from "../images/community card/3.svg";
import profilePhoto4 from "../images/community card/4.svg";

// Modal Card Images
import leaf from "../images/svg/leaf.svg";
import progress from "../images/svg/progress.svg";
import videoBlank from "../images/videoBlank.png";
import progressBarEmpty from "../images/svg/progressBarBlank.svg";
import targetColorful from "../images/svg/targetColorful.png";
import buttonIcon from "../images/svg/play.svg";

// Trading Overview Images
import arrowOut from "../images/svg/ArrowOut.svg";
import tradeUp from "../images/svg/tradeUp.svg";
import infoGray from "../images/svg/infoGray.svg";
import carpetLeft from "../images/svg/Carpet_left.svg";
import carpetRight from "../images/svg/Carpet_right.svg";
import dots from "../images/svg/dots.svg";
import stockIcon from "../images/stock/blank.svg";
import Plus from "../images/svg/button_plus.svg";

// Links Images
import charts from "../images/svg/charts.svg";
import graduate from "../images/svg/graduate.svg";
import home from "../images/svg/home.svg";
import settings from "../images/svg/settings.svg";
import target from "../images/svg/target.svg";

// Header Controls Images
import bell from "../images/svg/bell.svg";
import info from "../images/svg/Info.svg";
import profilePic from "../images/profilePhoto.jpg";
import arrow from "../images/svg/carpetDown.svg";

// Search Images
import search from "../images/svg/search.svg";

// Modal Card Data
export const MODAL_CARD_DATA = {
    currentLesson: 3,
    lessonNumber: 25,
    currentModule: "Lesson 3 — Analyze Charts",
};

export const getProgressPercents = (current: number, total: number): number => {
    return Math.round((current / total) * 100);
};

// Trading Overview Data
export const WATCHLIST_ITEMS = [
    { id: 1, symbol: "PLTR", signal: "check signal" },
    { id: 2, symbol: "PLTR", signal: "check signal" },
    { id: 3, symbol: "PLTR", signal: "check signal" },
];

// Menu Links Data
export const MENU_LINKS = [
    { logo: home, linkName: "Dashboard" },
    { logo: charts, linkName: "Learning Analytics" },
    { logo: graduate, linkName: "Lesson Library" },
    { logo: tradeUp, linkName: "Practice Trading" },
    { logo: target, linkName: "Tasks" },
    { logo: settings, linkName: "Settings" },
];

// Header Controls Data
export const HEADER_CONTROLS_DATA = {
    notificationCount: 5,
    profileName: "Max Kim",
    profileEmail: "maxk@gmail.com",
};

// Export all image imports for easy access
export const IMAGES = {
    // Community Card
    community,
    union,
    profilePhoto1,
    profilePhoto2,
    profilePhoto3,
    profilePhoto4,
    // Modal Card
    leaf,
    progress,
    videoBlank,
    progressBarEmpty,
    targetColorful,
    buttonIcon,
    // Trading Overview
    arrowOut,
    tradeUp,
    infoGray,
    carpetLeft,
    carpetRight,
    dots,
    stockIcon,
    Plus,
    // Links
    charts,
    graduate,
    home,
    settings,
    target,
    // Header Controls
    bell,
    info,
    profilePic,
    arrow,
    // Search
    search,
};
