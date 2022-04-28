import React from 'react';
import "./history-page.css"
import {useSelector} from "react-redux";
import {getHistoryItems} from "../../actions/get-history-items";

const HistoryPage = () => {
    const currentUser = useSelector(state => state.login.user.username);
    const historyItems = getHistoryItems(currentUser)

    return (
        <div className="history">
            <h2>History</h2>
            {(historyItems.length >0) && (
                <ul className="history__list">
                    {historyItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                )
            }

        </div>
    );
};

export default HistoryPage;