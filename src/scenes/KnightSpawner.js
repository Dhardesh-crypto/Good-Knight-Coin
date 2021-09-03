import Phaser from 'phaser'

export default class KnightSpawner
{
	/**
	 * @param {Phaser.Scene} scene
	 */
	constructor(scene, knightkey = 'knight')
	{
		this.scene = scene
		this.key = knightkey
	}
    
	spawn()
	{
        const player = this.scene.physics.add.sprite(600, 100, this.key).setScale(0.4).refreshBody();
		player.setBodySize(player.width*0.6, player.height*0.8); // Makes the body collision area smaller
		player.setBounce(0.2)
		player.setCollideWorldBounds(true)

		this.scene.anims.create({
			key: 'left',
			frames: this.scene.anims.generateFrameNumbers(this.key, { start: 0, end: 5 }),
			frameRate: 10,
			repeat: -1
		})
		
		this.scene.anims.create({
			key: 'turn',
			frames: [ { key: this.key, frame: 6 } ],
			frameRate: 20
		})
		
		this.scene.anims.create({
			key: 'right',
			frames: this.scene.anims.generateFrameNumbers(this.key, { start: 7, end: 13 }),
			frameRate: 10,
			repeat: -1
		})

        return player
	}
}
