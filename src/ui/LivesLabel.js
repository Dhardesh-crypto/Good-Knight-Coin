import Phaser from 'phaser'

const formatLives = (lives) => `${lives}`

export default class LiveLabel extends Phaser.GameObjects.Text
{
	constructor(scene, x, y, lives, style)
	{
		super(scene, x, y, formatLives(lives), style)

		this.lives = lives
	}

	setLives(lives)
	{
		this.lives  = lives
		this.updateLivesText()
	}

	add(lives)
	{
		this.setLives(this.lives + lives)
	}

    subtract(lives)
	{
		this.setLives(this.lives - lives)
	}


	updateLivesText()
	{
		this.setText(formatLives(this.lives))
	}
}
