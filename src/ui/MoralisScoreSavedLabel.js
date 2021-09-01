import Phaser from 'phaser'

const formatSave = (objectID) => `Moralis save success: ${objectID}`

export default class MoralisScoreSavedLabel extends Phaser.GameObjects.Text
{
	constructor(scene, x, y, objectID, style)
	{
		super(scene, x, y, formatSave(objectID), style)

		this.objectID = objectID
	}

	setSave(objectID)
	{
		this.objectID  = objectID
		this.updateSaveText()
	}

	updateSaveText()
	{
		this.setText(formatSave(this.objectID))
	}
}