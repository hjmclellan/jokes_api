const Jokes = require("../models/jokes.model");

module.exports = {

    getAll(req, res) {
        console.log("Yo, the getAll is running")
        Jokes.find()
        .then((allJokes) => res.json({jokes: allJokes }))
        .catch((err) => res.json({ message: 'Cannot get all jokes', error: err }))
    },


    getOne(req, res) {
        console.log("Yo, the getOne is running")
        Jokes.findOne({_id: req.params.id})
        .then((oneJokes) => res.json({jokes: oneJokes }))
        .catch((err) => res.json({ message: 'Can not get a joke', error: err }))
    },


    create(req, res){
        console.log("Yo, create a joke is running")
        Jokes.create(req.body)
        .then((newJokes) => res.json({jokes: newJokes }))
        .catch((err) => res.json({ message: 'Can not create a joke', error: err }))
    },

    update(req, res){
        console.log("Yo, update a joke is running")
        Jokes.findByIdAndUpdate(req.params.id, req.body)
        .then((updateJokes) => res.json({jokes: updateJokes }))
        .catch((err) => res.json({ message: 'Can not update joke', error: err }))
    },

    delete(req, res){
        console.log("Yo, delete a quote is running")
        Jokes.findByIdAndDelete(req.params.id)
        .then((deleteJokes) => res.json({jokes: deleteJokes }))
        .catch((err) => res.json({ message: 'Can not delete joke', error: err }))
    }
}