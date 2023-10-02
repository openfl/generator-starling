import Sprite from "openfl/display/Sprite";
import Stage from "openfl/display/Stage";
import Starling from "starling/core/Starling";
import Game from "./game";

class App extends Sprite {
	constructor() {
		super();

		this.starling = new Starling(Game, this.stage);
		this.starling.start();
	}
}

const stage = new Stage(550, 400, 0xFFFFFF, App);
document.body.appendChild(stage.element);