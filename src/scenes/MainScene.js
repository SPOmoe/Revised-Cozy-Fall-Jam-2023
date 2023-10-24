class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    create() {
        // add map to scene with the assets used
        const map = this.add.tilemap("tilemapJSON");
        const grassTiles = map.addTilesetImage("Grass", "grassImage");
        const treeTiles = map.addTilesetImage("Basic Grass Biom things 1", "biomThingsImage");

        // create layers
        const bgLayer = map.createLayer("Background", grassTiles, 0, 0);
        const treeLayer = map.createLayer("Trees", treeTiles, 0, 0).setDepth(100);

        // add player
        this.slime = new Player(this, 32, 32, 'slime', 0).setOrigin(0.5, 0.5);

        // creating animation for player
        this.anims.create({
            key: "bounce",
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("slime", {
                start: 0,
                end: 1,
            }),
        });

        // animate
        this.slime.play("bounce");

        // set world collisions for player
        this.slime.body.setCollideWorldBounds(true);

        // create collisions by layer
        treeLayer.setCollisionByProperty({collides: true});

        // set player to collide to layers
        this.physics.add.collider(this.slime, treeLayer);

        // bound camera to player
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.slime, true, 0.25, 0.25);
        this.cameras.main.setZoom(2);
        this.physics.world.bounds.setTo(0, 0, map.widthInPixels, map.heightInPixels);

        // player input
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

   }

    update() {
        // update player movement
        this.slime.update();
    }
}