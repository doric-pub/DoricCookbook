var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Align, Color, Direction, FlexDirection, flexlayout, Gravity, Justify, layoutConfig, list, listItem, Panel, Stack, stack } from "doric";
import * as PubTool from "../PubTool";
function cornerExampleCell(index) {
    var box1 = box().apply({
        layoutConfig: layoutConfig().just(),
        corners: {
            leftTop: 30,
            rightBottom: 30,
        },
        onClick: () => {
            if (index % 2 == 0) {
                box1.corners = {
                    leftTop: 0,
                    rightBottom: 30,
                };
            }
            else {
                box1.corners = {
                    leftBottom: 30,
                    rightTop: 30,
                };
            }
        }
    });
    var box2 = box().apply({
        layoutConfig: layoutConfig().just(),
        corners: 30,
        onClick: () => {
            if (index % 2 == 0) {
                box2.corners = 50;
            }
            else {
                box2.corners = 0;
            }
        }
    });
    return listItem(stack([
        flexlayout([
            box1,
            box2,
        ], {
            flexConfig: {
                direction: Direction.LTR,
                flexDirection: FlexDirection.ROW,
                justifyContent: Justify.SPACE_AROUND,
                alignItems: Align.CENTER
            },
            layoutConfig: layoutConfig().most().configAlignment(Gravity.Center),
        }),
        line(),
    ], {
        layoutConfig: layoutConfig().most(),
    }), {
        height: 120,
        layoutConfig: layoutConfig().justHeight().mostWidth(),
        identifier: 'cornerExampleCell'
    });
}
function line() {
    return (new Stack).also(it => {
        it.height = 0.5;
        it.backgroundColor = Color.LTGRAY;
        it.layoutConfig = layoutConfig().justHeight().mostWidth().configAlignment(Gravity.Bottom);
    });
}
function box() {
    return (new Stack).also(it => {
        it.width = it.height = 100;
        it.backgroundColor = PubTool.randomColor();
    });
}
let ListEffectsDemo = class ListEffectsDemo extends Panel {
    build(rootView) {
        list({
            itemCount: 10,
            renderItem: (index) => cornerExampleCell(index),
        }).apply({
            layoutConfig: layoutConfig().most()
        }).in(rootView);
    }
};
ListEffectsDemo = __decorate([
    Entry
], ListEffectsDemo);
export { ListEffectsDemo };
//# sourceMappingURL=ListEffectsDemo.js.map