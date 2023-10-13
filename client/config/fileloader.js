import { ASSETS_URL } from ".";

const fileloader = game => {
    game.load.crossOigin = 'Anonymous'
    game.stage.backgroundColor = '#1E1E1E'
    game.load.image('asphalt', `${ASSETS_URL}/sprites/asphalt/asphalt.png`)
    game.load.image('car', `${ASSETS_URL}/sprites/car/car.png`)

}
export default fileloader