// Setting the bingoItems
function setBingoItems(bingoItems) {
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("bingoItems", JSON.stringify(bingoItems));
        console.log(bingoItems);
    }   
}

// Getting the bingoItems
function getBingoItems() {
    if (typeof(Storage) !== "undefined") {
        return sessionStorage.getItem("bingoItems");
    }
}