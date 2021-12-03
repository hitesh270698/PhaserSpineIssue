/** @type {import("../typing/phaser")} */

import { LoadScene } from "./Scene/LoadScene";
import { FirstScene } from "./Scene/FirstScene";
import { SecondScene } from "./Scene/SecondScene";

let game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor : "#577eff",
    parent: 'KansasGame',
    dom: {
        createContainer: true,
    },
    scene : [
        LoadScene,
        FirstScene,
        SecondScene
    ],
    physics:{
        default: "arcade",
        arcade: {
            debug : true
        }
    },
    scale : {
        mode : Phaser.Scale.FIT,
        autoCenter : Phaser.Scale.CENTER_BOTH
    }
});