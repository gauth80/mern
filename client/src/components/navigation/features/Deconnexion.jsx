import React, {useState, useEffect, useContext} from 'react';
import {FirebaseContext} from './../../Firebase';
import {Link} from 'react-router-dom';

/*
  /// Logique du composant
  * @{props} pour avoir event
  * context pour les méthodes firebases
  * callback si changement d'etat
  * rendue du composant seulement
*/

const Deconnexion = (props) => {

  //context
  const ctx = useContext(FirebaseContext);

  //var etats
  const [session,setSession] = useState(false);

  //si changement
  useEffect(() => {
    //si true, alors deconnexion
    if (session) {
        ctx.deconnexion()
        //optio
        .then(() => {
          console.log(session ? `${session} : déconnectée` : 'encore connectée');
        });
    }
  //dépendance affectée que si nouveau état
}, [session,ctx]);


  //render
  return (
    <li className="list_box col-3">
     <Link
       to="/"
       value={session}
       onMouseOver={props.method.onlyDeconnexion}
       onMouseOut={props.method.removeShade}
       ref={props.method.refDeconnexion}
       onClick={e => setSession(true)}
       className="link_list">
       Deconnexion
     </Link>
   </li>
 )
}

export default Deconnexion;
