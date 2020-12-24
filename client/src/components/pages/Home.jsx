import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// Composant du diapo (abstract)



// Le Dom virtuel impose de conaître d'avance ces composants & elements.
import wrap from '../../media/img/wrapInscription.jpg';

import iconNpm from '../../media/icon/iconNpm.png';
import iconReact from '../../media/icon/iconReactNative.png';
import iconSass from '../../media/icon/iconSass2.png';
import iconAssets from '../../media/icon/iconAssets.png';
import iconYarn from '../../media/icon/iconYarn.png';
import iconMongo from '../../media/icon/iconMongo.png';
import iconExpressJs from '../../media/icon/iconExpressJS.png';
import iconNodeJS from '../../media/icon/iconNodeJS.png';

// styles (patern)
import JsonCss from './../json/styles';
const {section,subInfo,card} = JsonCss;

const Home = () => {

  const media = {
    front : [
      {
        uri:iconNpm,
        alt:"logo Npm",
        txt: "Npm est un gestionnaire de packages permettant de trouver les dépendances de l'environnement NodeJs. Les dépendances peuvents être officiel comme inventé par les utilisateurs. Ces dépendances sont gérée via le packages.json."
      },
      {
        uri:iconReact,
        alt:"logo ReactJs",
        txt:"React est une librairie javaScript conçue par FaceBook (un GAFAM donc). L'idée React étais de pouvoir réutilisée des morceaux de code plus facilement pour les applications, il est repose donc sur un principe de Composant, la force de React aussi est qu'il propose un DOM virtuel en plus du DOM initial propre à l'application, grace à ce concept, React ne change qu'une partie du DOM ciblée selon les états (life cycle). Autre aspect de React, le JSX (javaScript XML) qui permet d'éditée des Composants librements avec l'html."
      },
      {
        uri:iconSass,
        alt:"logo Sass",
        txt:"Sass est un préprocesseur pour le css, il sert à harmoniser une structure à travers les feuilles de styles, le Sass reste du css et bien qu'il n'est pas compris par les navigateurs il le devient avec la compilation (d'où le préprocesseur). Il faut savoir que Sass offre les mêmes possibilitées que le css mais de façon simple. Pour ce projet j'ai opter pour la patern 7-1 chaque feuille sont rangée dans des dossier que l'ont nomme partial, chaque feuille possède un underscore cela indique à sass de ne pas les compilée. Mais la vrais force de Sass est qu'il s'adapte à pratiquement toutes les techno, même le JSON."
      },
      {
        uri:iconAssets,
        alt:"logo html, css, javaScript",
        txt:"L'Assets constitue les trois langages fondamentaux du web (html css javaScript) et sont généralement rangée dans la partie static d'un site. Ces langages n'ont pas besoin d'être compilée."
      },
    ],
    back : [
      {
        uri:iconYarn,
        alt:"logo Yarn",
        txt:"Yarn est un Npm améliorée, possédant un locker.file et une vitesse acrus pour les téléchargements, notée qu'il est possible aussi de bloquée les versions de dépendances sans Yarn."
      },
      {
        uri:iconMongo,
        alt:"logo mongo",
        txt:"base orientée document"
      },
      {
        uri:iconExpressJs,
        alt:"logo ExpressJS",
        txt:"micro framework"
      },
      {
        uri:iconNodeJS,
        alt:"logo NodeJs",
        txt:"env js server"
      }
    ]
  }

/*_________________________*/
  const [state,setState] = useState(false);

  // recup data local => global
  const [text, setText] = useState('');


/*_________________________*/

  const {front} = media;
  const {back} = media;

  return (
    <main className="wrap container row col-sm-12" style={{backgroundImage:`url(${wrap})`}}>
      <section className={`${subInfo.wrap} mt-xs-0 mt-sm-10`}>
        <h2 className={subInfo.title}>Ce &#123; petit &#125; site fait avec :</h2>
        <article className={subInfo.article}>
          <h3 className={subInfo.title}>Cotée Client : </h3>

          <figure className={card.wrap}>
            {
              front.map((logo,j) =>
              <React.Fragment key={j}>
                  <img
                    src={logo.uri}
                    alt={logo.alt}
                    onClick={() => (setState(!state), setText(logo.txt)) }
                    className="col-3"
                  />
              </React.Fragment>
            )
          }
          {
            state ? <figcaption className={card.legend}>{text}</figcaption>
            : ''
          }
          </figure>

          <h3 className={subInfo.title}>Cotée Server : </h3>
          <figure className={card.wrap}>
            {
              back.map((logo,k) =>
              <React.Fragment key={k}>
                  <img
                    src={logo.uri}
                    alt={logo.alt}
                    onClick={() => (setState(!state), setText(logo.txt)) }
                    className="col-3"
                  />
              </React.Fragment>
            )
          }
          </figure>
          <Link className={subInfo.link} to="/inscription">S'inscrire</Link>
        </article>
      </section>
    </main>
  )
}

export default Home;
