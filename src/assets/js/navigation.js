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
