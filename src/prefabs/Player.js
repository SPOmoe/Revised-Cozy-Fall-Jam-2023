class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super (scene, x, y, texture, frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.moveSpeed = 200;
    }

    update () {
        this.direction = new Phaser.Math.Vector2(0);

        // check for player input
        if (keyW.isDown) {
            this.direction.y = -1;
        } else if (keyS.isDown) {
            this.direction.y = 1;
        }

        if (keyA.isDown) {
            this.direction.x = -1;
        } else if (keyD.isDown) {
            this.direction.x = 1;
        }

        // move player in 8 directions depending on input
        this.direction.normalize();
        this.setVelocityX(this.moveSpeed * this.direction.x);
        this.setVelocityY(this.moveSpeed * this.direction.y);
    }
}