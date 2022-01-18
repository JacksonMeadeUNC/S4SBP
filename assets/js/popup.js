var i = false;
var c = document.getElementById("countdown2-2");
window.sessionStorage.clear();

function cd() {
    c.classList.remove(i ? "open" : "closed");
    c.classList.add(i ? "closed" : "open");
    i = !i;
    window.sessionStorage.setItem('petitioned', '1');
}


function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
}


document.addEventListener('scroll', e => {
    if (getScrollPercent() > 0.6 && !i && !(window.sessionStorage.getItem('petitioned') === "1")) cd();
});