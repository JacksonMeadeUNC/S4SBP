if (window.sessionStorage.getItem("Cleared") != "1") {
    document.title = "Leave Now, Not Authorized";
    document.getRootNode.body.innerHTML = "";
}