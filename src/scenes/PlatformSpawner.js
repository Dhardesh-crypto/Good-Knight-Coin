import Phaser from 'phaser'

export default class PlatformSpawner
{
	/**
	 * @param {Phaser.Scene} scene
	 */
	constructor(scene, groundKey = 'ground', groundLeftKey = 'groundLeft', groundRightKey = 'groundRight')
	{
		this.scene = scene
		this.groundKey = groundKey
        this.groundLeftKey = groundLeftKey
        this.groundRightKey = groundRightKey

		this._group = this.scene.physics.add.staticGroup()
	}

	get group()
	{
		return this._group
	}

	spawn()
	{
        this.group.create(540,280, this.groundLeftKey).setScale(0.5).refreshBody();
        this.group.create(600,280, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(660,280, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(720,280, this.groundRightKey).setScale(0.5).refreshBody();

        this.group.create(20,600, this.groundLeftKey).setScale(0.5).refreshBody();
        this.group.create(80,600, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(140,600, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(200,600, this.groundRightKey).setScale(0.5).refreshBody();

        this.group.create(900,510, this.groundLeftKey).setScale(0.5).refreshBody();
        this.group.create(960,510, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(1020,510, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(1080,510, this.groundRightKey).setScale(0.5).refreshBody();

        // Floor
        this.group.create(-60,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(0,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(60,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(120,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(180,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(240,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(300,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(360,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(420,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(480,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(540,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(600,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(660,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(720,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(780,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(840,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(900,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(960,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(1020,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(1080,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(1140,790, this.groundKey).setScale(0.5).refreshBody();
        this.group.create(1200,790, this.groundKey).setScale(0.5).refreshBody();

		
		return this.group
	}
}