import React from 'react';
import {Provider} from 'react-redux';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    const navbarClass = `${bootstrap.navbar} ${bootstrap['navbar-inverse']} ${bootstrap['navbar-fixed-top']}`;
    const containerClass = `${bootstrap.container}`;
    const navbarHeaderClass = `${bootstrap['navbar-header']}`;
    const navbarBrandClass = `${bootstrap['navbar-brand']}`;
    const navbarCollapseClass = `${bootstrap.collapse} ${bootstrap['navbar-collapse']}`;
    const navbarNavClass = `${bootstrap.nav} ${bootstrap['navbar-nav']}`;
    const activeClass = `${bootstrap['active']}`;

    return (
      <div>
        <nav className={navbarClass}>
            <div className={containerClass}>
              <div className={navbarHeaderClass}>
                <a className={navbarBrandClass} href="#">Project name</a>
              </div>
              <div id="navbar" className={navbarCollapseClass}>
                <ul className={navbarNavClass}>
                  <li className={activeClass}><a href="#">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
        </nav>
      </div>
    );
  }
}

export default App;
