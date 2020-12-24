import React, {Component} from 'react';
//Components
import Navbar from './../navigation/Navbar';


class Header extends Component {
  render() {
    return (
      <header className="container row">
        <Navbar />
      </header>
    )
  }
}

export default Header;
