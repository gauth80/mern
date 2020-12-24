import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import Deconnexion from './features/Deconnexion';


const Navbar = props => {

  //les ref

  const refConnexion = useRef(Navbar);
  const refInscription = useRef(Navbar);
  //const refDeconnexion = useRef(Navbar);

  //hides buttons
  const onlyConnexion = props => {
    refInscription.current.classList.add("shade");
    //refDeconnexion.current.classList.add("shade");
  }

  const onlyInscription = props => {
    refConnexion.current.classList.add("shade");
    //refDeconnexion.current.classList.add("shade");
  }
  const onlyDeconnexion = props => {
    refConnexion.current.classList.add("shade");
    refInscription.current.classList.add("shade");
  }

  //show buttons
  const removeShade = props => {
    if(refConnexion.current.classList.contains("shade")) {
          refConnexion.current.classList.remove("shade");
    } else if(refInscription.current.classList.contains("shade")) {
          refInscription.current.classList.remove("shade");
    } /*else if(refDeconnexion.current.classList.contains("shade")) {
          refDeconnexion.current.classList.remove("shade");
    }*/
  }

    return (
      //changer col si switch
      <nav className="navbar row col-12">
        <ul className="box_navbar col-8">
          <li className="list_box col-3">
            <Link to="/" className="link_list">liens-1</Link>
          </li>
          <li className="list_box col-3">
            <Link to="/" className="link_list">liens-2</Link>
          </li>
          <li className="list_box col-3">
            <Link to="/" className="link_list">liens-3</Link>
          </li>
        </ul>
        <ul className="box_navbar col-4">
            <Deconnexion method = {
                onlyDeconnexion,
                removeShade
              }
            />




            <li className="list_box col-3">
              <Link
                to="/connexion"
                onMouseOver={onlyConnexion}
                onMouseOut={removeShade}
                ref={refConnexion}
                className="link_list">
                Connexion
              </Link>
            </li>
            <li className="list_box col-3">
              <Link
                to="/inscription"
                onMouseOver={onlyInscription}
                onMouseOut={removeShade}
                ref={refInscription}
                className="link_list">
                Inscription
              </Link>
            </li>
          </ul>
        </nav>
    )
  }

export default Navbar;
