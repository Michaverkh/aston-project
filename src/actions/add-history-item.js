export const addHistoryItem = (currentUser, historyItem) => {
    const currentUserObject = JSON.parse(localStorage.getItem(currentUser));

    if (historyItem !== "") {
        currentUserObject.history.push(historyItem)
        localStorage.setItem(currentUser, JSON.stringify(currentUserObject));
    }
}