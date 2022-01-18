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
            content2.innerHTML = person.getAttribute("secondary-content-for");
        });
        person.addEventListener('mouseleave', e => {
            title.innerHTML = "Welcome!";
            nomme.innerHTML = "MEET THE ROBINSON TEAM";
            content.innerHTML = "Hover over a profile to learn about us!";
            content2.innerHTML = "";
        });
        person.nextSibling.innerHTML = `						<div class="container">
        <h4 class="card_subtitle style-medium mb-2 style-fonts-style display-4">${person.getAttribute("title-for")}</h4>
      <h3 class="style-section-subtitle style-fonts-style display-2" style="text-transform: uppercase;">${person.getAttribute("name-for")}</h3>
      <p class="style-text style-fonts-style display-4">
      ${person.getAttribute("content-for")}
    </p>
    <p class="style-text style-fonts-style display-4">
      <span id="personal-interests" style="opacity:  0.8">${person.getAttribute("secondary-content-for")}</span>
  </p>
          </div>`;
    };
});