const teamController = require('../controllers/team.controller');
module.exports = function(app){
    app.get('/api', teamController.index);
    app.get("/api/team", teamController.findAllPlayers);
    app.post('/api/player/new', teamController.createPlayer);
    app.get('/api/player/:id', teamController.getPlayer);
    app.put('/api/player/:id', teamController.updatePlayer);
    app.delete('/api/player/:id', teamController.deletePlayer);

}

