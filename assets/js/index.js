
/* 
document.getElementById('resting').playbackRate = 0.5;


var sigvid = document.getElementById('signature');
sigvid.style.visibility = "hidden";

var ref = document.referrer;
if (
  !(["home.html", "home", "contact.html", "contact", "how-it-works.html", "how-it-works", "site-map.html", "site-map"]
  .includes(
    ref.substring(
      ref.lastIndexOf('/') + 1, 
      ref.length
    )
  ))
)
{
  console.log("referred from local!");
  ['.text-focus-in', '.blur-in-zoom'].forEach((class_name) => {
    document.querySelectorAll(class_name).forEach((element_with_that_class) => {
      element_with_that_class.classList.add('can-play');
    });
  });
  sigvid.currentTime = 0;
  setTimeout(function(){ sigvid.style.visibility = ""; sigvid.play(); }, 4278);
} else {
  sigvid.classList.add('fade-in-fwd', 'can-play');
  sigvid.style.visibility = "";
  sigvid.currentTime = sigvid.duration;
}

function supportsHEVCAlpha() {
    const navigator = window.navigator;
    const ua = navigator.userAgent.toLowerCase()
    const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)
    const isSafari = ((ua.indexOf('safari') != -1) && (!(ua.indexOf('chrome')!= -1) && (ua.indexOf('version/')!= -1)))
    return isSafari && hasMediaCapabilities
  }


  const player = document.getElementById('player');
  player.src = supportsHEVCAlpha() ? '../content/output.mov' : '../content/Signature.webm';
 
 */
var animation = lottie.loadAnimation({
    container: document.getElementById("signature"),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/content/data.json'
});

setTimeout(function(){ animation.play(); }, 16);