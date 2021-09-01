import Phaser from 'phaser'

export default class PlayerSpawner
{
	/**
	 * @param {Phaser.Scene} scene
	 */
	constructor(scene, dudekey = 'dude')
	{
		this.scene = scene
		this.key = dudekey
	}
    
	spawn()
	{
        const player = this.scene.physics.add.sprite(100, 450, this.key)
		player.setBounce(0.2)
		player.setCollideWorldBounds(true)

		this.scene.anims.create({
			key: 'left',
			frames: this.scene.anims.generateFrameNumbers(this.key, { start: 0, end: 3 }),
			frameRate: 10,
			repeat: -1
		})
		
		this.scene.anims.create({
			key: 'turn',
			frames: [ { key: this.key, frame: 4 } ],
			frameRate: 20
		})
		
		this.scene.anims.create({
			key: 'right',
			frames: this.scene.anims.generateFrameNumbers(this.key, { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1
		})

        return player
	}
}