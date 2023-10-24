let config = {
    type: Phaser.CANVAS,
    width: 1024,
    height: 720,

    physics: {
        default: "arcade",
        arcade: {
            debug: true,
        }
    },
    
    scene: [Load, MainScene],
}

let keyW, keyS, keyA, keyD;

let game = new Phaser.Game(config);