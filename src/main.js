let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,

    physics: {
        default: "arcade",
        arcade: {
            debug: true,
        }
    },
    
    scene: [Load, MainScene],
}

let game = new Phaser.Game(config);