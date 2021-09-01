import Phaser from 'phaser'

export default class SkullSpawner
{
	/**
	 * @param {Phaser.Scene} scene
	 */
	constructor(scene, skullKey = 'skull')
	{
		this.scene = scene
		this.key = skullKey

		this._group = this.scene.physics.add.group()
	}

	get group()
	{
		return this._group
	}

	spawn(playerX = 0)
	{
		const x = (playerX < 600) ? Phaser.Math.Between(600, 1200) : Phaser.Math.Between(0, 600)

        const skull = this.group.create(x, 16, this.key).setScale(1.5).refreshBody();
        skull.setBounce(1)
        skull.setCollideWorldBounds(true)
		skull.setVelocity(Phaser.Math.Between(-200, 200), 20)
		
		return skull
	}
}