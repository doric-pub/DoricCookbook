var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Panel, stack, layoutConfig, Gravity, Color, navbar, image } from "doric";
let TestImageDemo = class TestImageDemo extends Panel {
    onShow() {
        navbar(this.context).setTitle('yyimage');
    }
    build(rootView) {
        stack([
            stack([
                image({
                    imageUrl: "https://p6.hellobixin.com/bx-user/e2879f178be74b9ba4a6df52a2e364b0.png",
                    backgroundColor: Color.RED,
                    width: 200,
                    height: 280,
                    layoutConfig: layoutConfig().just(),
                })
            ], {
                backgroundColor: Color.BLUE,
                layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
            })
        ], {
            layoutConfig: layoutConfig().most(),
        }).in(rootView);
    }
};
TestImageDemo = __decorate([
    Entry
], TestImageDemo);
export { TestImageDemo };
//# sourceMappingURL=TestImageDemo.js.map