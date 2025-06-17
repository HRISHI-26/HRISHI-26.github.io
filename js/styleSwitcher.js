
const links = document.querySelectorAll('.alternate-style'),
    totalLinks = links.length;

function setActiveStyle(color) {
    for (let i = 0; i < totalLinks; i++) {
        if (color === links[i].getAttribute('title')) {
            links[i].removeAttribute('disabled');
        } else {
            links[i].setAttribute('disabled', true);
        }
    }
}

// body skin
// Apply light mode on page load as default
// const bodySkin = document.querySelectorAll('.body-skin'),
//     totalBodySkin = bodySkin.length;

// for (let i = 0; i < totalBodySkin; i++) {
//     bodySkin[i].addEventListener('change', function(){
//         if(this.value !== 'dark'){
//             document.body.className = 'dark';
//         } else {
//             document.body.className = '';
//         }
//     });
// }

// ##############################################################

// Apply dark mode on page load as default 
document.body.classList.add('dark');

// Listen to radio button changes
document.querySelectorAll('.body-skin').forEach((input) => {
    input.addEventListener('change', () => {
        if (input.value === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });
});

// #############################################################

document.querySelector('.toggle-style-switcher').addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});