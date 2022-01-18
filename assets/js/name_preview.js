var people = document.getElementsByClassName("item");

var title = document.getElementById('personal-title');
var nomme = document.getElementById('personal-name');
var content = document.getElementById('personal-content');
var content2 = document.getElementById('personal-interests');

Array.prototype.filter.call(people, person => {
    if (!person.classList.contains('spacer') && !person.classList.contains('empty') && !person.classList.contains('explainer')) {
        person.addEventListener('mouseenter', e => {
            title.innerHTML = person.getAttribute("title-for");
            nomme.innerHTML = person.getAttribute("name-for");
            content.innerHTML = person.getAttribute("content-for");
        })
        person.addEventListener('mouseleave', e => {
            title.innerHTML = "Welcome!";
            nomme.innerHTML = "MEET THE ROBINSON TEAM";
            content.innerHTML = "Hover over a profile to learn about us!";
            content2.innerHTML = "";
        })
    };
});