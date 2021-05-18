import * as Unicons from '@iconscout/react-unicons';
import main from './main.js';
import './App.css';

function App() {
  return (
    <div>
    {/* HEADER */}
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">DeliveryB<span>oo</span>th</a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#about" className="nav__link">
              <Unicons.UilUser size="20" className="nav__icon" /> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
              <Unicons.UilBriefcaseAlt size="20" className="nav__icon" /> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#team" className="nav__link">
              <Unicons.UilUsersAlt size="20" className="nav__icon" /> Team
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
              <Unicons.UilMessage size="20" className="nav__icon" /> Contact Us
              </a>
            </li>
          </ul>
          <Unicons.UilTimes size="28" className="nav__close" id="nav-close" />
        </div>

        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle">
          <Unicons.UilApps size="20" />
          </div>
        </div>
      </nav>
    </header>

    {/* MAIN */}
    <main className="main">
      {/* Home */}
      <section className="home section" id="home">
        <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a href="https://www.linkedin.com/" target="_blank" className="home__social-icon">
            <Unicons.UilLinkedinAlt size="20" className="" />
            </a>
            <a href="https://dribbble.com/" target="_blank" className="home__social-icon">
            <Unicons.UilDribbble size="20" className="" />
            </a>
            <a href="https://github.com/" target="_blank" className="home__social-icon">
            <Unicons.UilGithubAlt size="20" className="" />
            </a>
          </div>
        </div>
        </div>
      </section>
    </main>
    </div>
  );
}

export default App;
