import Phaser from 'phaser'

import GoodKnightCoinScene from './scenes/GoodKnightCoinScene'

const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
	scene: [GoodKnightCoinScene]
}

export default new Phaser.Game(config)
