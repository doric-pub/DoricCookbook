var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Panel, gravity, Color, AnimationSet, vlayout, layoutConfig, modal, stack, hlayout, text, TranslationAnimation, ScaleAnimation, RotationAnimation, TimingFunction, RotationXAnimation, RotationYAnimation } from "doric";
import { title, colors, box } from "./utils";
function thisLabel(str) {
    return text({
        text: str,
        width: 80,
        height: 30,
        backgroundColor: colors[0],
        textSize: 10,
        textColor: Color.WHITE,
        layoutConfig: layoutConfig().just(),
    });
}
let ComplicatedAnimationDemo = class ComplicatedAnimationDemo extends Panel {
    build(rootView) {
        const view = box(2);
        // const view = image({
        //     imageUrl: "https://pic3.zhimg.com/v2-5847d0813bd0deba333fcbe52435e83e_b.jpg"
        // })
        // view.onClick = () => {
        //     modal(this.context).toast('Clicked')
        // }
        vlayout([
            title("Complicated  Animation"),
            vlayout([
                hlayout([
                    thisLabel('reset').apply({
                        onClick: () => {
                            const rotation = new RotationAnimation;
                            rotation.duration = 1000;
                            rotation.fromRotation = view.rotation || 0;
                            rotation.toRotation = 0;
                            const translation = new TranslationAnimation;
                            translation.duration = 1000;
                            translation.fromTranslationX = view.translationX || 0;
                            translation.toTranslationX = 0;
                            translation.fromTranslationY = view.translationY || 0;
                            translation.toTranslationY = 0;
                            const scale = new ScaleAnimation;
                            scale.duration = 1000;
                            scale.fromScaleX = view.scaleX || 1;
                            scale.toScaleX = 1;
                            scale.fromScaleY = view.scaleY || 1;
                            scale.toScaleY = 1;
                            const animationSet = new AnimationSet;
                            animationSet.addAnimation(rotation);
                            animationSet.addAnimation(translation);
                            animationSet.addAnimation(scale);
                            view.doAnimation(this.context, animationSet).then(() => {
                                modal(this.context).toast('Resetd');
                            });
                        }
                    }),
                ], { space: 10 }),
                hlayout([
                    thisLabel('TranslationX').apply({
                        onClick: () => {
                            const animation = new TranslationAnimation;
                            animation.duration = 1000;
                            animation.fromTranslationX = view.translationX || 0;
                            animation.toTranslationX = animation.fromTranslationX + 100;
                            animation.fromTranslationY = view.translationY || 0;
                            animation.toTranslationY = view.translationY || 0;
                            view.doAnimation(this.context, animation);
                        }
                    }),
                    thisLabel('TranslationY').apply({
                        onClick: () => {
                            const animation = new TranslationAnimation;
                            animation.duration = 1000;
                            animation.fromTranslationX = view.translationX || 0;
                            animation.toTranslationX = view.translationX || 0;
                            animation.fromTranslationY = view.translationY || 0;
                            animation.toTranslationY = animation.fromTranslationY + 100;
                            view.doAnimation(this.context, animation);
                        }
                    }),
                    thisLabel('ScaleX').apply({
                        onClick: () => {
                            const animation = new ScaleAnimation;
                            animation.duration = 1000;
                            animation.fromScaleX = view.scaleX || 1;
                            animation.toScaleX = animation.fromScaleX + 1;
                            animation.fromScaleY = view.scaleY || 1;
                            animation.toScaleY = animation.fromScaleY;
                            view.doAnimation(this.context, animation);
                        }
                    }),
                    thisLabel('ScaleY').apply({
                        onClick: () => {
                            const animation = new ScaleAnimation;
                            animation.duration = 1000;
                            animation.fromScaleX = view.scaleX || 1;
                            animation.toScaleX = animation.fromScaleX || 1;
                            animation.fromScaleY = view.scaleY || 1;
                            animation.toScaleY = animation.fromScaleY + 1;
                            view.doAnimation(this.context, animation);
                        }
                    }),
                    thisLabel('rotation').apply({
                        onClick: () => {
                            const animation = new RotationAnimation;
                            animation.duration = 1000;
                            animation.fromRotation = view.rotation || 0;
                            animation.toRotation = animation.fromRotation + 0.25;
                            view.doAnimation(this.context, animation);
                        }
                    }),
                ], { space: 10 }),
                hlayout([
                    thisLabel('group').apply({
                        onClick: () => {
                            const rotation = new RotationAnimation;
                            rotation.duration = 1000;
                            rotation.fromRotation = 0;
                            rotation.toRotation = 4;
                            const translation = new TranslationAnimation;
                            translation.duration = 1000;
                            translation.fromTranslationX = view.translationX || 0;
                            translation.toTranslationX = 100;
                            const animationSet = new AnimationSet;
                            animationSet.addAnimation(rotation);
                            animationSet.addAnimation(translation);
                            view.doAnimation(this.context, animationSet);
                        }
                    }),
                    thisLabel('rotationX').apply({
                        onClick: () => {
                            const rotation = new RotationXAnimation;
                            rotation.duration = 5000;
                            rotation.fromRotation = 0;
                            rotation.toRotation = 0.5;
                            const animationSet = new AnimationSet;
                            animationSet.addAnimation(rotation);
                            view.doAnimation(this.context, animationSet);
                        }
                    }),
                    thisLabel('rotationY').apply({
                        onClick: () => {
                            const rotation = new RotationYAnimation;
                            rotation.duration = 5000;
                            rotation.fromRotation = 0;
                            rotation.toRotation = 4;
                            const animationSet = new AnimationSet;
                            animationSet.addAnimation(rotation);
                            view.doAnimation(this.context, animationSet);
                        }
                    }),
                ], { space: 10 }),
                hlayout([
                    thisLabel('Default').apply({
                        onClick: () => {
                            const translation = new TranslationAnimation;
                            translation.duration = 3000;
                            translation.fromTranslationX = 0;
                            translation.toTranslationX = 300;
                            translation.timingFunction = TimingFunction.Default;
                            view.doAnimation(this.context, translation);
                        }
                    }),
                    thisLabel('Linear').apply({
                        onClick: () => {
                            const translation = new TranslationAnimation;
                            translation.duration = 3000;
                            translation.fromTranslationX = 0;
                            translation.toTranslationX = 300;
                            translation.timingFunction = TimingFunction.Linear;
                            view.doAnimation(this.context, translation);
                        }
                    }),
                    thisLabel('EaseIn').apply({
                        onClick: () => {
                            const translation = new TranslationAnimation;
                            translation.duration = 3000;
                            translation.fromTranslationX = 0;
                            translation.toTranslationX = 300;
                            translation.timingFunction = TimingFunction.EaseIn;
                            view.doAnimation(this.context, translation);
                        }
                    }),
                    thisLabel('EaseOut').apply({
                        onClick: () => {
                            const translation = new TranslationAnimation;
                            translation.duration = 3000;
                            translation.fromTranslationX = 0;
                            translation.toTranslationX = 300;
                            translation.timingFunction = TimingFunction.EaseOut;
                            view.doAnimation(this.context, translation);
                        }
                    }),
                    thisLabel('EaseInEaseOut').apply({
                        onClick: () => {
                            const translation = new TranslationAnimation;
                            translation.duration = 3000;
                            translation.fromTranslationX = 0;
                            translation.toTranslationX = 300;
                            translation.timingFunction = TimingFunction.EaseInEaseOut;
                            view.doAnimation(this.context, translation);
                        }
                    }),
                ], { space: 10 }),
            ], { space: 10 }),
            stack([
                view.also(v => {
                    v.x = 20;
                    v.y = 20;
                    v.width = 30;
                    v.left = 30;
                }),
                // view2.also(v => {
                //     v.x = v.y = 20
                //     v.y = 40
                //     //v.scaleX = 1.5
                // })
            ], {
                layoutConfig: layoutConfig().most(),
                backgroundColor: colors[1].alpha(0.3 * 255),
            }),
        ], {
            layoutConfig: layoutConfig().most(),
            gravity: gravity().center(),
            space: 10,
        }).in(rootView);
    }
};
ComplicatedAnimationDemo = __decorate([
    Entry
], ComplicatedAnimationDemo);
export { ComplicatedAnimationDemo };
//# sourceMappingURL=ComplicatedAnimationDemo.js.map