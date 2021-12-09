var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Panel, Color, layoutConfig, stack, vlayout, text, Gravity, TranslationAnimation, log } from "doric";
let AnimationsDemo = class AnimationsDemo extends Panel {
    build(root) {
        const animation = new TranslationAnimation;
        animation.fromTranslationX = 0;
        animation.toTranslationX = 100;
        animation.duration = 5000;
        let view;
        vlayout([
            view = stack([], {
                layoutConfig: layoutConfig().just(),
                width: 20,
                height: 21,
                backgroundColor: Color.BLUE,
            }),
            text({
                text: "Start",
                onClick: () => {
                    log('start');
                    view.doAnimation(this.context, animation);
                }
            }),
            text({
                text: "Cancel",
                onClick: () => {
                    view.cancelAnimation(this.context, animation);
                }
            }),
            text({
                text: "Clear",
                onClick: () => {
                    view.clearAnimation(this.context, animation);
                }
            }),
        ], {
            space: 20,
            layoutConfig: layoutConfig().most(),
            gravity: Gravity.Center
        }).in(root);
    }
};
AnimationsDemo = __decorate([
    Entry
], AnimationsDemo);
export { AnimationsDemo };
//# sourceMappingURL=AnimationsDemo.js.map