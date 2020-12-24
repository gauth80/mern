
const router = require('express').Router();
//pas de const
let User = require('../models/user.model');


// read
router.route("/:id").get((req,res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('erreur : ' + err));
});

// create
router.route("/ajout").post((req,res) => {
  let newUser = new User(req.body);
  newUser.save()
    .then( () => res.json('utilisateur inscript'))
    .catch(err => res.status(400).json(`erreur lors de l'inscription : ${err}`));
});

//update
/*router.route("/:id").put(function(req,res) {
  //Schema.query(id, option(agregations), execution(callback))
  User.findByIdAndUpdate(req.params.id, {$set : req.body})
  .then(user => {
    req.body.active = !req.body.active;
    user.save();
    res.status(200)
    .send({message: `${users.mail} à étais modifier` })
  })
  .catch(err => { res.status(400)
    .send({error: `${err}\n Erreur lors du changement de l'adresse mail`})
  });
});

// delete (fonctionne)
router.route("/:id").delete(function(req, res) {
  User.findByIdAndRemove(req.params.id, function() {
    res.status(200).send('adresse mail supprimer');
  }).catch(err => { res.status(400)
    .send({error: `suppression mail impossible, voir erreur :\n ${err}`});
  });
});*/

//et non user
module.exports = router;
