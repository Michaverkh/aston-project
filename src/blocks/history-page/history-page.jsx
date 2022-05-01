import React from 'react';
import "./history-page.css"
import {useSelector} from "react-redux";
import {getHistoryItems} from "../../actions/get-history-items";
import HistoryButton from "../button/history-button";

const HistoryPage = () => {
    const currentUser = useSelector(state => state.login.user.username);
    const historyItems = getHistoryItems(currentUser)

    return (
        <div className="history">
            <h2>History</h2>
            {(historyItems.length >0) && (
                <div className="history__list">
                    {historyItems.map((item, index) => (
                        <HistoryButton query ={item} key={index}>{item}</HistoryButton>
                    ))}
                </div>
                )
            }

        </div>
    );
};

export default HistoryPage;