

# Support mongo-shell

<note> Pour démarré mongo-shell, pensez à configurée la variable d'environnement.  

### Présentation de Mongo-shell

La console mongo-shell permet d'exécutée des query en JavaScript contrairement à l'interface mongoDB où elle ne peu comprendre une instruction en JavaScript. Mongo-shell ressemble au Cmd de Windows ou à la console Git Bash, c'est une console interne propre à mongodb.

### Présentation  de Mongodb

Mongodb se traduit par l'interface de donnée propres aux produits Mongo, dit comme sa, sa peu paraitre abstrait dit comme sa mais souvenez vous de Wamp, phpMyAdmin est ce qu'est mongodb, une interface visuelle pour gérer vos databases, plus élégant qu'une console ou un terminal non ?

### Présentation  de Mongoose

Mongoose est une API faisant la liaison entre NodeJs et votre base de donnée mongodb. Mongoose s'applique cotée serveur de votre projet / application, il demande la plus part du temps un Schema c'est à dire un schéma de vos données dans lesquelles vous allez indiquez le document et son type attribué. Paradoxalement, le NoSQL n'as pas besoin d'être préparée d'avance, il peu s'écrire à la volée et mongodb le comprend sans broncher, faire un Schema peu paraître bizarre donc mais cela permet de garder une certaine cohérence à vos données.

_____



### Aparté 

Importation d'un fichier JSON via mongo-shell

```js
mongoimport --db nomDeMaBase --collection nomDeCollection --jsonArray --file monFichier.json
```

C'est possible que si votre variable environnement est configurée correctement. Sans quoi Windows ne reconnaîtras pas mongo.

```--jsonArray```  indique le type du document à importée. Sa peu paraître étrange de voir Array mais il faut comprendre que les données JSON sont encapsulées dans un tableau afin d'être comprises par mongodb.

```json
[
  {
    "_id": "5fd280419deb42d4dcfbf22a",
    "isActive": true,
    "age": 27,
    "name": "Stevenson Deleon",
    "gender": "male",
    "address": "185 Withers Street, Gorham, North Dakota, 2593",
    "about": "Labore do in commodo cillum nulla sit id mollit. Consectetur Lorem voluptat.\r\n",
    "registered": "2016-06-02T12:26:27 -02:00",
    "latitude": -31.217497,
    "longitude": -111.204448,
    "tags": [
      "minim",
      "aute",
      "tempor",
      "eu"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Matilda Terry"
      },
      {
        "id": 1,
        "name": "Miranda Hendricks"
      },
      {
        "id": 2,
        "name": "Adriana Osborn"
      }
    ],
    "greeting": "Hello, Stevenson Deleon! You have 2 unread messages.",
    "favoriteFruit": "strawberry"
  }
]
```



_____



## Mongo-shell

### Commandes courantes 

Ils existes de nombreuses commandes pour gérée mongodb, ici seule les plus utilisée seront évoquées.

```show dbs``` Permet de montré les bases de données existantes.

```db``` Indique votre base de donnée actuelle.

```use nomDeBase``` Sélectionne une base de donnée. Note cette commande permet aussi de crée une base de donnée, voir section "Crée une base donné".

```show collections``` Pour voir les collections de la base de donnée sélectionné.

```db.nomDeCollection.find()``` Cette commande permet de montrée le document de votre collection.

​	Vous remarquerez que ```find()```  est ce qu'est ```SELECT * FROM maTable``` .Ce query vous montre les row propre à une table. En NoSQL, les tables sont des collections et les row des documents. Vous remarquez aussi que cela ne vous montre qu'une partie de vos documents et ces tant mieux ! Mongo est conçue pour contenir beaucoup, beaucoup de donnée, si ```find()``` décharger tout vos documents cela causerais certainement un crash.. Pour voir d'avantage de document lorsque vous exécutez cette commande ```find()``` vous pouvez écrire après ```it``` pour décharger une partie de supplémentaire de vos documents. 

Enfin, vous pouvez chaîné de cette façon```db.macollect.find().pretty()``` pour avoir un aperçue plus sympa. 

### Filtre et projection

```db.macollect.find( { Nom : /Dupont/i } ).count()``` Ici on ajoute un filtre { l'objet } dans cette objet on indique le nom de la donnée avec pour valeur une regex (simpliste). Le flag i permet d'ignorée la cases, mongodb est sensible à cette dernière. Count() comme en SQL compteras le nombre de fois que Dupont ou dupont auras étais trouver. 

La projection est ce que vous souhaitez obtenir, il est assez facile de confondre le filtre et sa projection, voici une structure d'une commande pour différencier.

```db.macollect.find( { Filtre }, { projection } ).autreMethode()``` 

Le Filtre peut être vide. La projection peu contenir une donnée associer à un Boolean. Dans ce contexte : ```db.macollect.find( { Nom : /Dupont/i }, { Nom : 1, Age : 1, _id : 0 } ).pretty()  ``` 
1 devient True tandis que 0 devient False, la commande donneras alors le Nom et l'Age mais pas _id des Documents.



_____



### Crée une base de donnée

Pour crée une base de donnée il suffit d'entrer la commande ```use maNouvelleBase``` use est le query et c'est suivit du nom de la base que vous voulez crée, cette commande sert aussi de switch (changement) entre une autre base de donnée.
Notée que lorsque vous crée une nouvelle base de donnée celle ci ne figureras pas dans ```show dbs``` et c'est normal. Elle est bien crée mais untracker (non tracé). Pour y remédiez, il faut lui ajoutée au moins une collection.

``` db.jeRajouteMaCollection``` C'est aussi simple que sa.

#### Ajoutée un Document	

Avoir une Collection c'est chouette mais il faut lui ajoutée de la donnée, pour ce faire alors on as différents query, en voici quelques uns : 

```js
// ajout un Documents
db.macollect.insertOne( { "Nom" : "Dupont", "Age" : 18, "genre" : "H", "isActive" : true })

// ajouts de plusieurs Documents
db.macollect.insertMany(
    [
        {
            "Nom" : "Dupont",
        	"Age" : 21,
            "Genre" : "F"
        },
        {
            "Nom" : "Dupont",
        	"Age" : 65,
            "Genre" : "H"
        },
         {
            "Nom" : "Dupont",
        	"Age" : 69,
            "Genre" : "F"
        }
    ]
)

// ajout d'un ou plusieurs Documents
db.macollect.insert(...)
// Ce query fonctionne comme les deux aux dessus, à vous de choisir.
```



 le query insert peut être intéressant si vous ne savez pas se dont vous allez mettre comme donnée ou pour une composition un peu plus complexe : 

```js
db.profil.insert({
    "information" : 
      {
        "public" : 
          {
            "Prenom" : "Monique",
            "Age" : 69,
            "Genre" : "F"
          },
          "private" : 
            {
              "Nom" : "Dupont",
              "password" : "izaugfilefqzeyfzeyf",
              "mail" : "udfmeruvgmaerufmerguerugfiegbuaeh"
            }
      },
      "system" : 
        {
          "isActive" : true,
          "isOnline" : false,
          "isPremium" : false
        },
          "tags" : 
    	      {
              "pref" : 
        	      [
        	      "vert",
                  "mer",
                  "geranium",
                  "SKA"
        	      ],
                "noPref" : 
         	      [
                  "rose",
                  "montagne",
                  "rose",
                  "variétée française"
                ]  
            }
})
```

Aidez vous avec [l' editeur JSON](https://jsoneditoronline.org/#left=local.fobilu') si vous avez besoin de faire ce genre de Document.
Autre inutile de préciser des id, contrairement au model relationnel où une table demande un id pour être fonctionnelle dès son entrée, mongo les génères aux besoins.



#### Supprimer des éléments 

Sous mongo, il est possible bien évidement de supprimer les databases, les collections ou encore les Documents. Ce genre d'action n'est pas anodin, mongo se fout de votre niveau d'attribution (admin ou non admin) prenez garde à ce que vous supprimer.

##### Supprimer un Document spécifique

```js
// même syntaxe qu'avec un insert
db.collect.deleteOne( {}, {_comment : 1})

// on retrouve la version pour ciblée plusieurs Documents
db.collect.deleteMany([{Filtre}, {Projection}])

// et sa version général
db.collect.remove({password : "izaugfilefqzeyfzeyf"})
```

Ils existes de nombreuses façon de sélectionnée une donnée que ce soit par le biais d'un filtre, d'une seule projection ou encore à l'aide de paramètre.

##### Supprimer une Collection

```js
db.macollect.drop()
```

##### Supprimer une Database

Supprime la base en cours d'utilisation

```
db.dropDatabase()
```



#### Update ces données

Pour ce passage il est nécessaires de comprendre aux moins la façon d'utiliser les opérateurs.

##### Update plusieurs propriétés avec $set

 ```js
// la structure
db.macollect.update({quoi}, {action})

//un filtre si vous n'avez pas l'id en tête
db.profil.update( {"_id" : ObjectId("5fd553594de623dd5021f84d") }, { 
    $set : { 
        information : {
             public : {
                 age : 70
             },
            tags : {
                pref : ["vert fonçé", "mer","geranium","SKA","Diablo-III"]
            }
        }
    }
})

 ```

L'opérateur $set vous permet de faire du cas par cas, vous n' êtes pas obligée de tout ré écrire les propriétés afin de les mettre à jour, seulement il y as un hic pour les tableaux. Vous aurais peut être remarqué pour le cas d'un tableau le comportement étrange, set ré écrit le tableau, si vous ne redéclarée pas la ou les données en question, enfin si une donnée dans le tableau n'existe pas de base, mongo l'ajouteras.



##### Update brut

Si vous faite un Update sans précision mongo écraseras le Document et le remplaceras avec ces nouvelles du Update.
Par exemple : 

```js
db.music.update({ une data : "une valeur" })
```



##### Update un tableau

Ajoutée une seule donnée :

```js
db.music.update({groupe : "Massive Attack"},{$addToSet : { album : "Heligoland" }})
```

$addToSet permet d'ajoutée une donnée si celle ci n'existe pas encore.



Ajoutée plusieurs données : 

```js
db.music.update({groupe : "Epica"},
	{$addToSet : {album : {$each : ["The Holographic Principle","The Quantum Enigma"]} }} )

```

$each indique que l'ont vas ajoutée plusieurs donnée dans le propriété album. Une fois encore si les données existes, ces dernières ne seront pas remplacée.

##### Le cas Upserted

Lorsque vous insérez, lisez, modifiez quelques choses dans mongo, vous avez certainement constatées que le query renvois des indications comme :

```WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 }) ``` 

• nMatched Indique que quelque chose à étais trouver
• nModified Dit que quelques chose à donc étais modifier

Pour le cas de Upserted il est a true si l'ont force l'update, c'est à dire que si vous avez un Documents qui n'existe pas et que vous souhaitez malgré tout le mettre à jour (oui, c'est possible) c'est possible en passant un Boolean en guise de paramètre.

```js
db.music.update({groupe : "Stupeflip"},
	{$addToSet : {album : "The Hypnoflip Invasion"} } , true )
```

Cependant sachez seulement que si le groupe n'existe pas, il faudra alors le précisé dans les valeurs pendant update.
Sans quoi cela vous donneras, juste un id générée et un tableau (album).

_____



### Instruction JavaScript

Sa beau être une console, cette console comprend pas mal d' instructions JavaScript telle que les boucles, les variables, les fonctions etc.. 

#### Les boucles

Ils est possible de faire une boucle afin de répétée une tâche dans mongod, pour illustrée ce propos imaginez devoir crée une base de données avec 200 Documents d'utilisateurs, on peu alors procédée ainsi :

```js
// on crée sa base (vive l'originalité)
use sandbox2

//on crée sa boucle
for(i = 0; i < 200; i++) {
   
	db.users.insert({
    	_id : `e_sb2_user-${i}`,
        description : "Lorem ipsum dolor sit amet, culpa non temporibus dolore, mollitia porro eos",
        atCreate : new Date()
	}) 
}

```

Si vous souhaitez vous amusez un peu avec sa, essayée de crée une méthode afin de générée une description aléatoire en Lorem.

#### Variable 

```js
var voir = db.profil.find().pretty();
voir
```

Par exemple avec cette exemple, un query est stocker dans une variable, ils nous suffit alors de tapper "voir" puis de faire entrer pour exécuté, pas besoin de passer par une fonction



______



 ### Opérateur courant

#### La structure

```js
//$or et $and sont des cas particulier
db.macollect.find({ propriété : { $opérateur : valeur, $autreOpérateur : valeur } })
```

Si vous utilisez ces opérateurs vous devrez ouvrir un objet en guise de valeur pour commençais, cette objet devras ensuite contenir vos opérateurs avec les valeurs souhaitez.



#### Opérateurs de comparaison

|     Nom      | Syntaxe |   Traduction   | Comparaison |
| :----------: | :-----: | :------------: | :---------: |
| greater than |   $gt   | plus grand que |      >      |
|  less than   |   $lt   | plus petit que |      <      |
|    equal     |   $eq   |    égale à     |     ==      |

En exemple : 

```js
//cherche les terminals qui ont plus de 18 ans
db.ecole.find({classe : /Terminal/i }, { age : {$gt : 18}})

//ceux qui ont pile 18 ans
db.ecole.find({classe : /Terminal/i }, { age : {$eq : 18}})

//ceux qui ont entre 18 ans et 20 ans
db.ecole.find({classe : /Terminal/i }, { age : {$gte : 18, $lte: 20}})
```

Pour le dernier exemple ont très bien aussi rajoutée le e d'equal en fin pour donnée $gte ou $lte.

|          Nom          | Syntaxe |       Traduction       | Comparaison |
| :-------------------: | :-----: | :--------------------: | :---------: |
| equal or greater than |  $gte   | égal ou plus grand que |     >=      |
|  equal or less than   |  $lte   | égal ou plus petit que |     <=      |



Si vous devez cherchez une ou plusieurs données relatives dans un tableau, vous pouvais utilisée aussi $in et $nin.

|  Nom   | Syntaxe | Traduction | Comparaison |
| :----: | :-----: | :--------: | :---------: |
|   in   |   $in   |    dans    |             |
| not in |  $nin   | pas dedans |             |

Par exemple :

```js
//chercher dans la propriété section.. 
db.macollect.find( { section : { $in : ["math", "science", "physique"] } })

//ignorée dans la propriété section...
db.macollect.find( { section : { $nin : ["anglais", "français"] } })

```



#### Opérateurs logiques

Ces opérateurs fonctionnes à l'aide de tableau.

| Nom  | Syntaxe | Traduction | Comparaison |
| :--: | :-----: | :--------: | :---------: |
|  or  |   $or   |     ou     |    \|\|     |
| and  |  $and   |     et     |     &&      |

En Exemple : 

```js
// affiche les Documents seulements avec ces données
db.profil.find({ $or : [ { matiere : "musique"}, {matiere : "math" } ] })

//affiche les Documents si ces deux données sont enssembles
db.profil.find({ $and : [ { matiere : "musique"}, {matiere : "math" } ] })
```

#### Opérateur d'élément

Ils y en as deux $exists et $type, $type est pas souvent utilisée.

```js
// vas chercher dans les Docoments si musique existe ou non (valeur boolean, 0 ou 1)  
db.macollect.find({musique : { $exists : 1 }})
```

Cette opérateur ne suit pas la hiérarchie de vos collections, souvent avec Mongoose les données sont établies à l'aide d'un Schema et donc sont structurées. Cette opérateur ignore ceci se qui permet de trouver n'importe quel donnée avec.























