/** @type {import ("../../typing/phaser")} */
import { CST } from "../Helper/CST";
import { Extention } from '../Helper/Extension';

export class SecondScene extends Phaser.Scene {
    characterInitialPosition = { x: 0, y: 0 };
    toggleInteractable = true;
    constructor() {
        super({
            key: CST.SCENE.SECOND_SCENE,
            pack: {
                files: [
                    { type: 'scenePlugin', key: 'SpinePlugin', url: 'SpinePlugin.min.js', sceneKey: 'spine' }
                ]
            }
        });
    }

    preload(){
        if(this.cache.json.exists("Boy")){
            this.cache.json.remove("Boy");
        }
    }

    create() {
        var boy =  this.add.spine(500, 700, "Boy", "idle", true);
        var skin = boy.skeletonData.findSkin("Default");
        CST.CHARACTER_SKINS.forEach(skinName => {
            let tempSkin = boy.skeletonData.findSkin(skinName);
            skin.addSkin(tempSkin);
        });
        boy.setSkin(skin);
        boy.setSlotsToSetupPose();

        let backButton = this.add.image(65, this.game.renderer.height - 40, CST.IMAGES.BACK_BUTTON);
        backButton.setInteractive();
        backButton.on("pointerup", () => {
            Extention.buttonClick(this, backButton, 40).on("complete", () => {
                this.scene.start(CST.SCENE.FIRST_SCENE);
            });
        });

        this.add.text(this.game.renderer.width / 2 -100, 70, "Second Scene",
        {
            fontFamily: "SwisBlack", fontSize: 38, color: '#fff', shadow: {
                offsetX: 10,
                offsetY: 10,
                color: '#212121',
                blur: 3,
            }
        });
        
    }
}