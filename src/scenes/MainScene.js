class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    create() {
        // add map to scene with the assets used
        const map = this.add.tilemap("tilemapJSON");
        const playerTiles = map.addTilesetImage("slime", "Slimey");
        const grassTiles = map.addTilesetImage("Grass", "grassImage");
        const grassBiomeTiles = map.addTilesetImage("Basic Grass Biom things 1", "biomThingsImage");
        const fenceTiles = map.addTilesetImage("Fences", "fencesImage");
        const dirtTiles = map.addTilesetImage("Tilled Dirt", "tilledDirtImage");
        // const waterTiles = map.addTilesetImage("Water", "waterImage");
        const npcTiles = map.addTilesetImage("Free Cow Sprites", "cowNPC");
        const houseTiles = map.addTilesetImage("Free_Chicken_House", "chickenHouse");

        // create layers
        const playerLayer = map.createLayer("Player", playerTiles, 0, 0);
        const grassLayer = map.createLayer("Grass", grassTiles, 0, 0);
        const fallenTreeLayer = map.createLayer("Misc. Pretties", grassBiomeTiles, 0, 0).setDepth(100);
        const fenceLayer = map.createLayer("Fences", fenceTiles, 0, 0).setDepth(100);
        const dirtLayer = map.createLayer("Road", dirtTiles, 0, 0);
        const npcLayer = map.createLayer("NPCs", npcTiles, 0, 0).setDepth(100);
        const houseLayer = map.createLayer("Houses", houseTiles, 0, 0).setDepth(100);


        // add player
        this.slime = new Player(this, game.config.width/2, 60, 'slime', 0).setOrigin(0.5, 0.5);

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
        fallenTreeLayer.setCollisionByProperty({collides: true});
        fenceLayer.setCollisionByProperty({collides: true});
        npcLayer.setCollisionByProperty({collides: true});
        houseLayer.setCollisionByProperty({collides: true});


        // set player to collide to layers
        this.physics.add.collider(this.slime, fallenTreeLayer);
        this.physics.add.collider(this.slime, fenceLayer);
        this.physics.add.collider(this.slime, npcLayer);
        this.physics.add.collider(this.slime, houseLayer);


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