export const isDown = (game, key) => game.input.keyboard.isDown(key)
export const createText = (game, target) =>
game.add.text(target.x, target.y, '',{
    fontsize: '12px',
    fill: '#FFF',
    align: 'center'
})