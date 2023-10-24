class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    create() {
        console.log("in main scene");

        const map = this.add.tilemap("tilemapJSON");
        const grassTiles = map.addTilesetImage("Grass", "grassImage");
        const treeTiles = map.addTilesetImage("Basic Grass Biom things 1", "biomThingsImage");

        const bgLayer = map.createLayer("Background", grassTiles, 0, 0);
        const treeLayer = map.createLayer("Trees", treeTiles, 0, 0).setDepth(100);

        this.slime = new Player(this, 32, 32, 'slime', 0).setOrigin(0.5, 0.5);
        this.anims.create({
            key: "bounce",
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("slime", {
                start: 0,
                end: 1,
            }),
        });

        this.slime.play("bounce");

        this.slime.body.setCollideWorldBounds(true);

        treeLayer.setCollisionByProperty({collides: true});

        this.physics.add.collider(this.slime, treeLayer);

        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.slime, true, 0.25, 0.25);
        this.physics.world.bounds.setTo(0, 0, map.widthInPixels, map.heightInPixels);

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

   }

    update() {
        this.slime.update();
    }
}