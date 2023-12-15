
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);

let pn = 0; // positive, negative
let pnf = 0;
var num = 0;
let rndms = [0, 0, 0, 0, 0, 0, 0, 0];
const rndmss = ['--rndm1', '--rndm2', '--rndm3', '--rndm4', '--rdnm5', '--rndm6', '--rndm7', '--rndm8'];

function random_side(){
    for (let i = 0; i < rndms.length; i++) {
        pn = Math.random() // positive, negative
        pnf = pn < 0.5 ? 1 : -1;
        i >= 3 ? num = 6 : num = 12;
        rndms[i] = (Math.floor(Math.random() * num) * pnf) + 'px';
        root.style.setProperty(rndmss[i], rndms[i]);
    };
}
setInterval(random_side, 4000)
setInterval(console.log(window.scrollY), 500)

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');

const mains = document.getElementsByClassName('main');

Array.from(mains).forEach(main => {
    main.addEventListener('mouseover', function() {
        setTimeout(() => {
            main.addEventListener('click', function() {
                console.log(main.id);
                console.log(scrollY);
                main.style.animation = 'zoominpage 5s 1 forwards, glowmore 2s infinite alternate';
                switch (main.id){
                    case '1':
                        setTimeout(() => {img1.scrollIntoView({ behavior: 'smooth' })}, 1500);
                        document.cookie = "class=warrior";
                        setTimeout(() => {window.location.href = 'brb.html';}, 3000);
                        break;
                    case '2':
                        setTimeout(() => {img2.scrollIntoView({ behavior: 'smooth' })}, 1500);
                        document.cookie = "class=archer";
                        setTimeout(() => {window.location.href = 'brb.html';}, 3000);
                        break;
                    case '3':
                        setTimeout(() => {img3.scrollIntoView({ behavior: 'smooth' })}, 1500);
                        document.cookie = "class=magigan";
                        setTimeout(() => {window.location.href = 'brb.html';}, 3000);
                        break;
                    case '4':
                        setTimeout(() => {img4.scrollIntoView({ behavior: 'smooth' })}, 1500);
                        document.cookie = "class=healer";
                        setTimeout(() => {window.location.href = 'brb.html';}, 3000);
                        break;
                    case '5':
                        setTimeout(() => {img5.scrollIntoView({ behavior: 'smooth' })}, 1500);
                        document.cookie = "class=bulk";
                        setTimeout(() => {window.location.href = 'brb.html';}, 3000);
                        break;
                    case '6':
                        setTimeout(() => {img6.scrollIntoView({ behavior: 'smooth' })}, 1500);
                        document.cookie = "class=stalker";
                        setTimeout(() => {window.location.href = 'brb.html';}, 3000);
                        break;
                }
            });
        }, 500);
    });
});


const brbimage = document.getElementById('brbimg'); 
const brbaudio = document.getElementById('brbaudio'); 

switch (document.cookie){
    case "class=warrior":
        brbimage.src = 'warrior.gif';
        break;
    case "class=archer":
        brbimage.src = 'archer.gif';
        break;
    case "class=magigan":
        brbimage.src = 'magichan.gif';
        break;
    case "class=healer":
        brbimage.src = 'healer.gif';
        break;
    case "class=bulk":
        brbimage.src = 'bulk.gif';
        break;
    case "class=stalker":
        brbimage.src = 'stalker.gif';
        brbaudio.src = 'brb__.mp3';
        break;
}






//main.style.background = `conic-gradient(at ${hndrd1} ${hndrd2}, rgb(107, 0, 194) , rgb(58, 0, 194) , rgb(4, 0, 255)), linear-gradient(45deg, rgb(136, 200, 255),rgb(255, 255, 255)) border-box`;

//window.addEventListener('mousemove', function(e){});


