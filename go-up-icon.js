/* Scroll Up To The Beginning Icon */
function koktel_scrollUpIcon() {
    document.getElementById('koktel_header').scrollIntoView({ top: 0, behavior: 'smooth' });
}

// Create the icon element
let goUpIcon = document.createElement('ion-icon');
goUpIcon.setAttribute('name', 'caret-up-circle-outline');
goUpIcon.setAttribute('id', 'koktel_go_up_arrow');
goUpIcon.style.opacity = "0"; // Set initial opacity to 0
goUpIcon.onclick = koktel_scrollUpIcon;

// Append the icon to the body
document.body.appendChild(goUpIcon);

// Select the footer element
let koktel_footer = document.getElementById('koktel_footer');

/* Hide Or Show Go Up Button */
window.onscroll = function () {
    let footerRect = koktel_footer.getBoundingClientRect();
    if (footerRect.top < window.innerHeight) {
        goUpIcon.style.opacity = "1";
        goUpIcon.style.pointerEvents = 'auto'; // Make the icon clickable
    } else {
        goUpIcon.style.opacity = "0";
        goUpIcon.style.pointerEvents = 'none'; // Make the icon unclickable
    }
};

