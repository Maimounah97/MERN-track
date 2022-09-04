const team = require('../models/team.model');
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World"
  });
}
// create a nes product
module.exports.createPlayer = (request, response) => {
  const { name, position } = request.body;
  team.create({
    name,
    position
  })
    .then(team => response.json(team))
    .catch(err => response.status(400).json(err));
}

module.exports.findAllPlayers = (req, res) => {
  team.find()
    .then(allPlayers => res.json({ players: allPlayers  }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}

module.exports.getPlayer = (request, response) => {
  team.findOne({_id:request.params.id})
      .then(player => response.json(player))
      .catch(err => response.json(err))
}

module.exports.updatePlayer = (request, response) => {
  team.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
      .then(updatedPlayer => response.json(updatedPlayer))
      .catch(err => response.json(err))
}

module.exports.deletePlayer = (request, response) => {
  team.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}







