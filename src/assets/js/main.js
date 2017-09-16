// const logo =  document.getElementById('logo');
// const logoImg =  document.getElementById('logoImg');
// const nav =  document.getElementById('nav');
// let navIndicator = 0;
// console.log(window.innerWidth);
//
// let resetStyles = () => {
//   if (window.innerWidth <= 640) {
//     nav.style.width = "100%";
//     logoImg.style.position = "static";
//     logoImg.style.width = "100%";
//     logoImg.style.height = "100%";
//     logoImg.style.transform = "rotate(0deg) translateY(0px) translateX(0px)";
//   } else {
//     nav.style.width = "150px";
//   }
// }
//
// let toggleNav = () => {
//   if (navIndicator === 0) {
//     nav.style.width = "0px";
//     nav.style.minWidth = "0px";
//     logoImg.style.position = "absolute";
//     logoImg.style.width = "150px";
//     logoImg.style.height = "150px";
//     logoImg.style.transform = "rotate(65deg) translateY(35px) translateX(-70px)";
//     navIndicator = 1;
//   } else {
//     nav.style.width = "150px";
//     nav.style.minWidth = "150px";
//     logoImg.style.position = "static";
//     logoImg.style.width = "100%";
//     logoImg.style.height = "100%";
//     logoImg.style.transform = "rotate(0deg) translateY(0px) translateX(0px)";
//     navIndicator = 0;
//   }
// }
//
// logo.addEventListener('click', toggleNav);
// // window.onresize = resetStyles;

const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');

const goAbout = document.getElementById('goAbout');
const goProjects = document.getElementById('goProjects');
const goContact = document.getElementById('goContact');

const navigation = [
  {
    "section": about,
    "link": goAbout
  },
  {
    "section": projects,
    "link": goProjects
  },
  {
    "section": contact,
    "link": goContact
  }
];

navigation.forEach(x => {

  let showSection = () => {

    navigation.forEach(y => {
      y.section.classList.add('section--hidden');
    });

    x.section.classList.remove('section--hidden');
  }

  x.link.addEventListener('click', showSection);
});