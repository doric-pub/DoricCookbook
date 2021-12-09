var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Panel, Color, vlayout, scroller, layoutConfig, hlayout, } from "doric";
import { label } from "./utils";
let ScrollerDemo = class ScrollerDemo extends Panel {
    build(rootView) {
        scroller(hlayout([
            vlayout([
                scroller(vlayout(new Array(50).fill(1).map((e) => label("Scroll Content1"))), {
                    layoutConfig: layoutConfig().justWidth().fitHeight(),
                    width: 300,
                    backgroundColor: Color.RED,
                }),
                scroller(vlayout(new Array(50).fill(1).map((e) => label("Scroll Content2"))), {
                    layoutConfig: layoutConfig().justWidth().fitHeight(),
                    width: 300,
                    backgroundColor: Color.CYAN,
                }),
            ]),
            vlayout(new Array(50).fill(1).map((e) => label("Scroll Content3"))).apply({
                layoutConfig: layoutConfig().justWidth().fitHeight(),
                width: 300,
            }),
        ], {
            layoutConfig: layoutConfig().fitWidth().fitHeight(),
        }), {
            layoutConfig: layoutConfig().mostWidth().justHeight(),
            height: 500,
            backgroundColor: Color.YELLOW,
        }).in(rootView);
    }
};
ScrollerDemo = __decorate([
    Entry
], ScrollerDemo);
export { ScrollerDemo };
//# sourceMappingURL=ScrollerDemo.js.map