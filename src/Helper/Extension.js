export class Extention {
    static buttonClick = function (scene, button, time) {
        var tween = scene.tweens.add({
            targets: button,
            duration: time,
            ease: 'Bounce',
            scaleX: 0.8,
            scaleY: 0.8,
            yoyo: true
        });
        return tween;
    }
}