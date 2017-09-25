import React from 'react';
import logo from '../assets/images/logo.png';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav id="nav" className="nav">
        <div id="logo" className="logo">
          <div className="logo__img"><img id="logoImg" src={logo} alt="logo"/></div>
          <div className="logo__title">Portfolio</div>
        </div>
        <div className="menu">
          <div className="links">

            <Link to='/Portfolio/' className="links__link">
                <i className="fa fa-user-circle-o fa-lg link" aria-hidden="true"></i>
                <span className="links__text">About</span>
            </Link>

            <Link to='/Portfolio/projects' className="links__link">
                <i className="fa fa-th-large fa-lg link" aria-hidden="true"></i>
                <span className="links__text">Projects</span>
            </Link>

            <Link to='/Portfolio/contact' className="links__link">
                <i className="fa fa-paper-plane-o fa-lg link" aria-hidden="true"></i>
                <span className="links__text">Contact</span>
            </Link>

          </div>
          <footer className="footer">
            <a className="footer__link" href="https://github.com/PawelRokosz" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
            <a className="footer__link" href="https://twitter.com/Pawel_Rokosz" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>
          </footer>
        </div>
      </nav>
    );
  }
}

export default Nav;
