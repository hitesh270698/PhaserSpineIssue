/** @type {import ("../../typing/phaser")} */
/** @type {import ("../../typing/SpinePlugin")} */
/** @type {import ("../../typing/spine")} */

import { CST } from "../Helper/CST";
import { Extention } from '../Helper/Extension';

export class FirstScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENE.FIRST_SCENE,
            pack: {
                files: [
                    { type: 'scenePlugin', key: 'SpinePlugin', url: 'SpinePlugin.min.js', sceneKey: 'spine' }
                ]
            }
        });
    }

    preload(){
        this.load.spine("Boy", "./assets/spine/Boy/Boy.json", ["./assets/spine/Boy/Boy.atlas"]);
    }

    create() {
        this.add.text(this.game.renderer.width / 2 -100, 70, "First Scene",
        {
            fontFamily: "SwisBlack", fontSize: 38, color: '#fff', shadow: {
                offsetX: 10,
                offsetY: 10,
                color: '#212121',
                blur: 3,
            }
        });
        
        var boy =  this.add.spine(300, 700, "Boy", "idle", true);
        var skin = boy.skeletonData.findSkin("Default");
        CST.CHARACTER_SKINS.forEach(skinName => {
            let tempSkin = boy.skeletonData.findSkin(skinName);
            skin.addSkin(tempSkin);
        });
        boy.setSkin(skin);
        boy.setSlotsToSetupPose();

        let bigButton = this.add.image(0, 0, CST.IMAGES.BIG_BUTTON, 0);
        let nextButtonText = this.add.text(-68, -40, "NEXT",
            { fontFamily: "SwisBlack", fontSize: 60, stroke: '#fff', color: '#000', strokeThickness: 3 });

        let nextButton = this.add.container(this.game.renderer.width - 155, this.game.renderer.height - 80,
            [bigButton, nextButtonText]).setSize(210, 100);
        nextButton.setInteractive();
        let nextButtonTween = null;
        nextButton.on("pointerup", () => {
            if (nextButtonTween != null) {
                return;
            }
            nextButtonTween = Extention.buttonClick(this, nextButton, 80).on("complete", () => {
                nextButton.setScale(1);
                this.scene.start(CST.SCENE.SECOND_SCENE);
            });
        });
    }
}