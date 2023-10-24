class Load extends Phaser.Scene {
    constructor() {
        super('load');
    }

    preload() {
        // create the loading bar
        let loadingbar = this.add.graphics();
        this.load.on("progress", (value) => {
            loadingbar.clear();
            loadingbar.fillStyle(0xFFFFFF, 1);
            loadingbar.fillRect(0, game.config.height/2, game.config.width * value, 10);
        });
        this.load.on("complete", () => {
            loadingbar.destroy();
        });

        // step into assets folder
        this.load.path = "./assets/";

        // load player
        this.load.spritesheet("slime", "slime.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        // load tile assets
        this.load.image("biomThingsImage", "Basic Grass Biom things 1.png");
        this.load.image("fencesImage", "Fences.png");
        this.load.image("grassImage", "Grass.png");
        this.load.image("tilledDirtImage", "Tilled Dirt.png");
        this.load.image("waterImage", "Water.png");

        // load map json file
        this.load.tilemapTiledJSON("tilemapJSON", "map.json");
    }

    create() {
        console.log("heading to main scene");
        this.scene.start("MainScene");
    }
}