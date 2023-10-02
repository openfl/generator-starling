package {
	import openfl.display.Sprite;
	import starling.core.Starling;

	public class App extends Sprite {
        private var _starling:Starling;

		public function App() {
			super();

            _starling = new Starling(Game, stage);
            _starling.start();
		}
	}
}