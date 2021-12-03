/** @type {import ("../../typing/phaser")} */
/** @type {import ("../../typing/SpinePlugin")} */
/** @type {import ("../../typing/spine")} */

import { CST } from "../Helper/CST";

export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENE.LOAD_SCENE,
            pack: {
                files: [
                    { type: 'scenePlugin', key: 'SpinePlugin', url: 'SpinePlugin.min.js', sceneKey: 'spine' }
                ]
            }
        });
    }

    init() {
        //  Inject our CSS
        var element = document.createElement('style');
        document.head.appendChild(element);
        var sheet = element.sheet;
        var styles = '@font-face { font-family: "SwisBlack"; src: url("assets/font/SwisBlack.ttf") format("opentype"); }\n';
        sheet.insertRule(styles, 0);
    }

    preload() {
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
        this.load.image(CST.IMAGES.BIG_BUTTON, "./assets/images/" + CST.IMAGES.BIG_BUTTON);
        this.load.image(CST.IMAGES.BACK_BUTTON, "./assets/images/" + CST.IMAGES.BACK_BUTTON);
    }

    create() {
        WebFont.load({
            custom: {
                families: ['SwisBlack']
            }
        });
        this.scene.start(CST.SCENE.FIRST_SCENE);
    }
}