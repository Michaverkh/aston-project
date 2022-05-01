export const getHistoryItems = function (currentUser) {
    const historyItems = JSON.parse(localStorage.getItem(currentUser)).history;
    return historyItems
}