import { useState } from "react";
import {
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    format,
    startOfWeek,
    endOfWeek,
} from "date-fns";
import styles from "./TradingOverview.module.scss";

import arrowOut from "../../../images/svg/ArrowOut.svg";
import tradeUp from "../../../images/svg/tradeUp.svg";
import infoGray from "../../../images/svg/infoGray.svg"

import carpetLeft from "../../../images/svg/Carpet_left.svg"
import carpetRight from "../../../images/svg/Carpet_right.svg"

const TradingOverview = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

    const days = eachDayOfInterval({ start: startDate, end: endDate });

    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

    const watchlistItems = [
        { id: 1, symbol: "PLTR", signal: "check signal" },
        { id: 2, symbol: "PLTR", signal: "check signal" },
        { id: 3, symbol: "PLTR", signal: "check signal" },
    ];

    return (
        <div className={styles.tradingOverview}>
            <div className={styles.header}>
                <div>
                    <h2>Trading Overview</h2>
                    <p>
                        Track your trades, strategies, and key market signals
                        for the day
                    </p>
                </div>
                <button className={styles.exportBtn}>
                    <img src={arrowOut} alt="" />
                </button>
            </div>

            <div className={styles.content}>
                <div className={styles.watchlist}>
                    <div className={styles.watchlistHeader}>
                        <div className="watchlistHeading"><img src={tradeUp} alt=""/> Watchlist</div>
                        <button className={styles.infoBtn}><img src={infoGray} alt=""/></button>
                    </div>

                    <div className={styles.watchlistItems}>
                        {watchlistItems.map((item) => (
                            <div key={item.id} className={styles.watchlistItem}>
                                <div className={styles.stockIcon}>🔘</div>
                                <div className={styles.stockInfo}>
                                    <strong>{item.symbol}</strong>
                                    <span>{item.signal}</span>
                                </div>
                                <button className={styles.moreBtn}>...</button>
                            </div>
                        ))}
                    </div>

                    <button className={styles.addStocksBtn}>
                        Add Stocks <span>+</span>
                    </button>
                </div>
                <div className={styles.calendar}>
                    <div className={styles.nav}>
                        <button onClick={prevMonth}><img src={carpetLeft} alt=""/></button>
                        <span>{format(currentDate, "MMM d")}</span>
                        <button onClick={nextMonth}><img src={carpetRight} alt=""/></button>
                    </div>

                    <div className={styles.daysHeader}>
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                            (day) => (
                                <div key={day} className={styles.dayLabel}>
                                    {day}
                                </div>
                            )
                        )}
                    </div>

                    <div className={styles.daysGrid}>
                        {days.map((day, index) => {
                            const isCurrentMonth =
                                day.getMonth() === monthStart.getMonth();
                            const isToday =
                                format(day, "yyyy-MM-dd") ===
                                format(new Date(), "yyyy-MM-dd");
                            const dayNumber = format(day, "d");

                            return (
                                <div
                                    key={index}
                                    className={`${styles.day} ${
                                        !isCurrentMonth ? styles.outside : ""
                                    } ${isToday ? styles.today : ""}`}
                                >
                                    {dayNumber}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradingOverview;
