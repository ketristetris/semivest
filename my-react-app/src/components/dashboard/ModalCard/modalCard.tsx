import "./modalCard.scss";
import Button from "../../universalComponents/button/button";
import { IMAGES, MODAL_CARD_DATA, getProgressPercents } from "../../data";

const ModalCard = () => {
    const currentLesson = MODAL_CARD_DATA.currentLesson;
    const lessonNumber = MODAL_CARD_DATA.lessonNumber;
    const progressPercents = getProgressPercents(currentLesson, lessonNumber);
    const currentModule = MODAL_CARD_DATA.currentModule;
    return (
        <div className="modalCard">
            <div className="thisModule">
                <div className="moduleInfo">
                    <div className="moduleInfoText">
                        <div className="moduleInfoHeading">
                            <div className="modulePercents">
                                <div className="h2">{progressPercents}%</div>
                                <div className="h5">Complete</div>
                            </div>
                            <div className="moduleBadge">
                                <img src={IMAGES.leaf} alt="" />
                                <div className="moduleBadgeName">Beginner</div>
                            </div>
                        </div>
                        <div className="currentModule">
                            <div className="currentModuleText">
                                Current Module:
                            </div>
                            <div className="currentModuleName">
                                {currentModule}
                            </div>
                        </div>
                    </div>
                    <div className="moduleInfoVideo">
                        <img alt="Modal video" src={IMAGES.videoBlank} />
                    </div>
                </div>
                <div className="progressBar">
                    <div className="progressBarText">
                        <div className="progressBarHeading">
                            <img src={IMAGES.progress} alt="" />
                            <div>Course progress</div>
                        </div>
                        <div className="coursesCount">
                            {currentLesson} of {lessonNumber} lessons
                        </div>
                    </div>
                    <div className="progressBarGraph">
                        <img src={IMAGES.progressBarEmpty} alt="" />
                        <div
                            className="progressBarAccent"
                            style={{ width: `${progressPercents}%` }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="nextModule">
                <div className="Milestone">
                    <div className="MilestoneIconContainer">
                        <img src={IMAGES.targetColorful} alt="" />
                    </div>
                    <div className="nextMilestone">
                        <div className="MilestoneHeading">Next Milestone</div>
                        <div className="MilestoneTask">
                            Complete 5 lessons to unlock Practice Trading
                        </div>
                    </div>
                </div>
                <div className="nextModuleButton">
                    <Button
                        type="Accent"
                        style="Primary"
                        size="medium"
                        onClick={() => console.log("Go!")}
                    >
                        <img src={IMAGES.buttonIcon} alt=""/>
                        Continue modul
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ModalCard;
