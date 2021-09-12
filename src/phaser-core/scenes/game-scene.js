import Phaser from "phaser";
import logoImg from "../../logo.svg";
import store from "../../config/store";
import { increment } from "../../shared/slices/ui";

class GameScene extends Phaser.Scene {
  // eslint-disable-next-line no-useless-constructor
  constructor(config) {
    super(config);
  }

  preload() {
    this.load.image("logo", logoImg);
  }

  create() {
    const logo = this.add.image(50, 150, "logo").setOrigin(0);
    logo.setInteractive();

    logo.on("pointerdown", function (pointer) {
      console.log("CLICK", pointer);
      store.dispatch(increment());
    });
    this.tweens.add({
      targets: logo,
      y: 200,
      x: 50,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1,
    });
  }
}

export default GameScene;
