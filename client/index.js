import { WINDOW_WIDTH, WINDOW_HEIGHT } from './config'
import Game from './state/Game'

class App extends Phase.Game{
    constructor(){
        super(WINDOW_WIDTH, WINDOW_HEIGHT, Phase.AUTO)
        this.state.add('Game', Game)
        this.state.start('Game')
    }
}
const SimpleGame = new App()