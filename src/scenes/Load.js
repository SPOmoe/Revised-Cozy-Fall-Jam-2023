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
    }

    create() {
        this.scene.start("MainScene");
    }
}