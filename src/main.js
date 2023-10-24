let config = {
    //type: Phaser.CANVAS,
    type: Phaser.AUTO,

    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1024,
        height: 720,
    },

    render: {
        pixelArt: true,
    },

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