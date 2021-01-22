const {Author} = require('../models/author.model');

module.exports.index = (req, res) => {
  res.json({
    message: "Hello World"
  });
}

module.exports.findAllAuthors = (req, res) => {
  Author.find({})
    .then(allAuthors => res.json(allAuthors))
    .catch(err => res.json(err))
}

module.exports.findOneAuthor = (req, res) => {
  Author.findOne({_id: req.params.id})
    .then(oneAuthor => res.json(oneAuthor))
    .catch(err => res.json(err))
}

module.exports.createAuthor = (req, res) => {
  const {name} = req.body;
  Author.create({
    name
  })
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}

module.exports.updateAuthor = (req, res) => {
  Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true}) //does runValidators check errors from the model?
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({_id: req.params.id})
    .then(deletedAuthor => res.json(deletedAuthor))
    .catch(err => res.json(err))
}