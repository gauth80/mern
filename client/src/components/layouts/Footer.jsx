import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      //*<!> container provoque un débordement sous moz*
      <footer className="container row">
          <div className="row col-12">
            <p className="col-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aut natus a possimus reiciendis aperiam nulla nobis rem, minima fugit quae provident, beatae, saepe magnam. Reiciendis cum sed, quam doloribus!</p>
          </div>
      </footer>
    )
  }
}

export default Footer;
