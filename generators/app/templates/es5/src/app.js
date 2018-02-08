'use strict';
var Sprite = require ("openfl/display/Sprite").default;
var Stage = require ("openfl/display/Stage").default;
var Starling = require ("starling/core/Starling").default;
var Game = require ("./game").default;


var App = function () {
	
	Sprite.call (this);
	
	this.starling = new Starling (Game, this.stage);
	this.starling.start ();
	
}

App.prototype = Object.create (Sprite.prototype);
App.prototype.constructor = App;


var stage = new Stage (550, 400, 0xFFFFFF, App);
document.body.appendChild (stage.element);