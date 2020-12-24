import React, {useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';

//api & database
import {FirebaseContext} from '../Firebase';

// img
import wrap from '../../media/img/wrapInscription.jpg';
import coffe from '../../media/img/coffeW.png';

// styles (patern)
import JsonCss from './../json/styles';
//selecteurs
const {section,subInfo,form} = JsonCss;


const Inscription = (props) => {

  //inst context
  const ctx = useContext(FirebaseContext);

  //variable d'etats
  const [error, setError] = useState('');
  const [btn,setBtn] = useState(false);
  const [pseudo,setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  //envoyée a api
  const handleSubmit = e => {

    //annule refresh attr btn
    e.preventDefault();

    //conssume context, methode(state).res(key)
    ctx.inscription(email,password)

    .then(authUser => {
      return ctx.user(authUser.user.uid).set({
        //doc ref aux states saisie, uid est cotée backend
        pseudo,
        email
      })
    })

    .then(() => {
        props.history.push("/accueil");
      //redirect
    })
    .catch(error => {
      //init var
      setBtn(false);
      setPseudo('');
      setEmail('');
      setPassword('');
      setConfPassword('');
      setError(error);
    })
  }

  //error
  const errorForm = error !== '' &&
    <div className="offset-1 col-xs-11 col-sm-11 my-2">
      {error.message}
    </div>;


    useEffect( () => {
      if(password.length >= 8 && email && pseudo !== '' && password === confPassword) {
        setBtn(true);
      } else {
        setBtn(false);
      }
    },[pseudo,email,password,confPassword,btn]);


// def value a '' sinon hook non controllée, hors obj js
//need a refactor here, map ?
  return (
      <section className={section.wrap} style={{backgroundImage:`url(${wrap})`}}>
        <form className={form.wrap}
          onSubmit={handleSubmit}>
          <fieldset className={form.boxLeft}>
            <legend className="col-12">Se créer un compte</legend>

            <label htmlFor="pseudo" className={form.cell}>
              <input type="text"
                id="pseudo"
                placeholder="Indiquez votre Pseudo"
                required
                autoFocus
                onChange={e => setPseudo(e.target.value)}
                value={pseudo}/>
            </label>
            <label htmlFor="email" className={form.cell}>
              <input type="email"
                id="email"
                placeholder="Indiquez votre mail"
                required
                onChange={e => setEmail(e.target.value)}
                value={email}/>
            </label>
            <label htmlFor="password" className={form.cell}>
              <input type="password"
                id="password"
                placeholder="Choisissez un mot de passe"
                required
                onChange={e => setPassword(e.target.value)}
                value={password}/>
            </label>
            <label htmlFor="confPassword" className={form.cell}>
              <input type="password"
                id="confPassword"
                placeholder="Comfirmer le mot de passe"
                required
                onChange={e => setConfPassword(e.target.value)}
                value={confPassword}/>
            </label>

            <div className={form.cell}>
              {
                btn ?
                  <button className={form.btn.isActive}>s'inscrire</button>
                :
                  <button disabled className={form.btn.disabled}>s'inscrire</button>
              }
            </div>
          </fieldset>
          <figure className={form.boxRight}>
            <img src={coffe} alt="coffee" className="fluid"/>
          </figure>
          {errorForm}
        </form>

        <div className={subInfo.sub}>
            <h3 className={subInfo.title}>Autre alternative :</h3>
            <Link className={subInfo.link} to="/connexion">Se connecté</Link>
        </div>

        <section className={`${subInfo.sub} mb-xs-0 mb-sm-10`}>
          <article className="row offset-1 col-11">
            <h3 className={subInfo.title}>A quoi sert l'inscription ?</h3>
            <p className={subInfo.txt}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis labore
              beatae autem temporibus impedit amet excepturi dolores dignissimos molestias, dolorum?
            </p>
            <h3 className={subInfo.title}>Où sont stockée les données ?</h3>
            <p className={subInfo.txt}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis labore beatae
              autem temporibus impedit amet excepturi dolores dignissimos molestias, dolorum?
            </p>
          </article>
        </section>

      </section>
  )
}

export default Inscription;
