var Sprite = require ("starling/display/Sprite").default;


var Game = function () {
	
	Sprite.call (this);
	
	
	
}

Game.prototype = Object.create (Sprite.prototype);
Game.prototype.constructor = Game;


module.exports.Game = Game;
module.exports.default = Game;