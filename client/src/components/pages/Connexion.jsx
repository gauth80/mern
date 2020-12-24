import React, {useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../Firebase';
import {Link} from 'react-router-dom';


// img
import wrap from '../../media/img/wrapInscription.jpg';
import coffe from '../../media/img/coffeW.png';

// styles (patern)
import JsonCss from './../json/styles';
//selecteurs
const {section,subInfo,form} = JsonCss;


const Connexion = props => {

  //inst context
  const ctx = useContext(FirebaseContext);

  //var etat
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn,setBtn] = useState(false);
  const [error,setError] = useState('');



  useEffect(()=> {
      password.length >= 8 && email !== '' ? setBtn(true) : setBtn(false)
  }, [password,email,btn]);

  const handleSubmit = e => {

    //annule refresh attr btn
    e.preventDefault();
    ctx.connexion(email,password).then(user => {
      props.history.push("/accueil");

    }).catch(error => {
      setError(error);
      setEmail('');
      setPassword('');
      setBtn(false);
    })
  }

  const errorForm = error !== '' &&
    <div className="offset-1 col-xs-11 col-sm-11 my-2">
      {error.message}
    </div>;


// def value a '' sinon hook non controllée, hors obj js
  return (
      <section className={section.wrap} style={{backgroundImage:`url(${wrap})`}}>
        <form onSubmit={handleSubmit} className={form.wrap}>
          <fieldset className={form.boxLeft}>
            <legend className="col-12">Qui êtes vous ?</legend>

            <label htmlFor="email" className={form.cell}>
              <input type="email"
                id="email"
                placeholder="Indiquez votre mail"
                onChange={e => setEmail(e.target.value)}
                value={email}
                required/>
            </label>

            <label htmlFor="password" className={form.cell}>
              <input type="password"
                id="password"
                placeholder="Choisissez un mot de passe"
                onChange={e => setPassword(e.target.value)}
                value={password}
                required/>
            </label>
          </fieldset>

          <figure className={form.boxRight}>
            <img src={coffe} alt="coffee" className="fluid"/>
          </figure>
          <div className={form.cell}>
            {
              btn ?
                <button className={form.btn.isActive}>se connecter</button>
              :
                <button disabled className={form.btn.disabled}>se connecter</button>
            }
            {errorForm}
          </div>
        </form>

        <div className={`${subInfo.sub} mb-xs-0 mb-sm-10`}>
            <h3 className={subInfo.title}>Autre alternative :</h3>
            <Link className={subInfo.link} to="/inscription">S'inscrire</Link>
        </div>
      </section>
  )
}


export default Connexion;
