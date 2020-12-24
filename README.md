
### Notes :
checker les points avec ctrl+f =1...=9 etc (remplace les issues)

  > 15/11/2020 padding changer pour form.inscription, p-sm-$ écraser via le poids de selecteur;  
  controller contrôler pour le form.inscription (plus d'erreur de state).
  sécuritée des champs form.inscription légère, a revoir (=1).
  changement de composants accueil / home (initial page).
  sass text center pour xs

  > 17/11/2020 espace connexion, refactoring inscription
  session fonctionnelle

  > 18 ...22/11/2020 algo bon, voir plus niveau backend pour résoudre ce problème(=2)
  problèmes des dépendances des hooks effect résolues.
  logique de déconnection refaite

  > 26/11/2020 remise en question de l'architecture du projet, backend instable

*note* : étendre les sessions sur les autres composants..
#### Liens sympa

+ [CanIUse](https://caniuse.com/)  
+ [CssTriggers](https://csstriggers.com/)  
+ [Patern Sass](https://sass-guidelin.es/fr/#architecture)
+ [BEM](http://getbem.com/)

Rappel CSS :   
(**S'appuis sur la logique du BEM**)

Block_Parent (ex: box_navbar || list_box)  
  > box appartient à navbar.  
  > list appartient à box.  

A moins de faire :  

```css

  .Block:hover a {
    color: $newColorLink;
  }

```
Donc un even sur le Parent (block) et non l'enfant (a).  
Il y as pas 36 façon d'écrire un mod sur les selecteurs.  

Block_Parent__mod (ex: arrow_btn-arrow__inverse)    
  > alteration d'un selecteur.  

(moyen de s'orientée)

Si besoin, voir scss/layout/_navbar.scss

_________

### Cotée mongodb / Mongoose
**note / rappel**

simple rappel divert

- Viré les advertissements des méthodes légacy
```js
mongoose
  .connect(<db>, {useUnifiedTopology: true })
  .then(...)
  .catch(...);
```


_________

# Getting Started with Create React App

Squelette d'une app react [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Lance l'app sur l'environnement de développement.  
Se trouve via [http://localhost:3000](http://localhost:3000).  
Port par défaut 3000.  

### `npm test`
Lance un test (--watch)
Voir ici si besoin : [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build`

Crée un Build de l'app pour l'environnement de production.  
Le Build passe le tout dans un Bundle propre à React, Parcel à le même Bundle.    

Voir ici si besoin : [deployment](https://facebook.github.io/create-react-app/docs/deployment)  

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
