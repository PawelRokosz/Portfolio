import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="section contact">
        <div className="main-text"><p><span className="main-text__important">Let's build something together!</span></p><p>Wanna get in touch or talk to me about a project?</p><p>Just send me an email to <span className="main-text__important">rokosz.pawel@gmail.com</span> and let's talk.</p></div>
        <footer className="contact__footer">
          <div className="secondary-text"><p>Let's get social? Follow my online profiles on Github, Twitter, Facebook and Linkedin.</p></div>
          <div className="contact__links">
            <a className="contact__link" href="https://github.com/PawelRokosz" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-3x" aria-hidden="true"></i></a>
            <a className="contact__link" href="https://twitter.com/Pawel_Rokosz" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square fa-3x" aria-hidden="true"></i></a>
            <a className="contact__link" href="https://facebook.com/paolomenader" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i></a>
            <a className="contact__link" href="https://www.linkedin.com/in/pawelrokosz/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
