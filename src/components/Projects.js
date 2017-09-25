import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <section id="projects" className="section projects">
        <div className="main-text">Check out my newest <span className="main-text__important">projects!</span></div>
        <div className="projects__container">
          <div className="project">
            <a className="project__preview  project__preview--1" href="https://pawelrokosz.github.io/RandomQuotesReactApp/" target="_blank" rel="noopener noreferrer">
              <div className="project__hover"><i className="fa fa-external-link fa-4x" aria-hidden="true"></i></div>
            </a>
            <div className="project__info">
              <div>
                <div className="project__title">What Does Startup Mean?</div>
                <div className="project__subtext">Random quote machine project that explains meanig of a startup.</div>
                <div className="project__subtext">It's build with HTML, CSS, SASS, JavaScript, React and Gulp.</div>
              </div>
              <footer className="project__footer">
                <a className="project__link" href="https://pawelrokosz.github.io/RandomQuotesReactApp/" target="_blank" rel="noopener noreferrer">Live</a>
                <a className="project__link" href="https://github.com/PawelRokosz/RandomQuotesReactApp" target="_blank" rel="noopener noreferrer">Github</a>
              </footer>
            </div>
          </div>
          <div className="project">
            <a className="project__preview  project__preview--4" href="https://pawelrokosz.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
              <div className="project__hover"><i className="fa fa-external-link fa-4x" aria-hidden="true"></i></div>
            </a>
            <div className="project__info">
              <div>
                <div className="project__title">Portfolio</div>
                <div className="project__subtext">Portfolio project that you're looking at just now :)</div>
                <div className="project__subtext">It's build with HTML, CSS, SASS, JavaScript and Gulp.</div>
              </div>
              <footer className="project__footer">
                <a className="project__link" href="https://pawelrokosz.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">Live</a>
                <a className="project__link" href="https://github.com/PawelRokosz/Portfolio" target="_blank" rel="noopener noreferrer">Github</a>
              </footer>
            </div>
          </div>
          <div className="project">
            <a className="project__preview  project__preview--2" href="https://pawelrokosz.github.io/ToDoReactApp/" target="_blank" rel="noopener noreferrer">
              <div className="project__hover"><i className="fa fa-external-link fa-4x" aria-hidden="true"></i></div>
            </a>
            <div className="project__info">
              <div>
                <div className="project__title">Todolisto</div>
                <div className="project__subtext">To-Do list project where you can add, delete, edit and complete tasks.</div>
                <div className="project__subtext">It's build with HTML, CSS, SASS, JavaScript, React and Gulp.</div>
              </div>
              <footer className="project__footer">
                <a className="project__link" href="https://pawelrokosz.github.io/ToDoReactApp/" target="_blank" rel="noopener noreferrer">Live</a>
                <a className="project__link" href="https://github.com/PawelRokosz/ToDoReactApp" target="_blank" rel="noopener noreferrer">Github</a>
              </footer>
            </div>
          </div>
          <div className="project">
            <a className="project__preview project__preview--3" href="https://pawelrokosz.github.io/SimpleFormsSass/" target="_blank" rel="noopener noreferrer">
              <div className="project__hover"><i className="fa fa-external-link fa-4x" aria-hidden="true"></i></div>
            </a>
            <div className="project__info">
              <div>
                <div className="project__title">Forms</div>
                <div className="project__subtext">Weekly WebDev Challenge project where you can fill forms.</div>
                <div className="project__subtext">It's build with HTML, CSS, SASS and Gulp.</div>
              </div>
              <footer className="project__footer">
                <a className="project__link" href="https://pawelrokosz.github.io/SimpleFormsSass/" target="_blank" rel="noopener noreferrer">Live</a>
                <a className="project__link" href="https://github.com/PawelRokosz/SimpleFormsSass" target="_blank" rel="noopener noreferrer">Github</a>
              </footer>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
