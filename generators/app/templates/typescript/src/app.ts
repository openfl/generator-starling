import Sprite from "openfl/display/Sprite";
import Stage from "openfl/display/Stage";
import Starling from "starling/core/Starling";
import Game from "./game";


class App extends Sprite {
	
	
	private starling:Starling;
	
	
	constructor () {
		
		super ();
		
		this.starling = new Starling (Game, this.stage);
		this.starling.start ();
		
	}
	
	
}


var stage = new Stage (550, 400, 0xFFFFFF, App);
document.body.appendChild (stage.element);