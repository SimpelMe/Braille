if (window.localStorage) {
    if (localStorage.getItem("saveTextToLocalStorageBool") == "true") {
    saveTextToLocalStorageBool = true;
    document.getElementById("checkboxLocalStorage").checked = true;
    }
    if (localStorage.getItem("useVollschrift") == "false") {
    useVollschrift = false;
    document.getElementById("checkboxVollschrift").checked = false;
    }
    readFromLocalStorage();
}
