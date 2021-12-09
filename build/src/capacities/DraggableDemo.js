var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Panel, vlayout, layoutConfig, draggable, Color, modal, Gravity, stack, text, } from "doric";
let DraggableDemo = class DraggableDemo extends Panel {
    build(root) {
        let textView;
        let drag = draggable((textView = text({
            layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
            width: 100,
            height: 30,
            textColor: Color.RED,
            onClick: () => {
                modal(this.context).toast("Clicked");
            },
        })), {
            onDrag: (x, y) => {
                textView.text = "x: " + x.toFixed(0) + " y: " + y.toFixed(0);
            },
            layoutConfig: layoutConfig().just(),
            width: 100,
            height: 100,
            backgroundColor: Color.YELLOW,
        });
        vlayout([
            text({
                layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
                text: "Draggable Demo",
                textColor: Color.RED,
            }),
            stack([drag], {
                layoutConfig: layoutConfig().most(),
            }),
        ], {
            layoutConfig: layoutConfig().most(),
            backgroundColor: Color.CYAN,
        }).in(root);
    }
};
DraggableDemo = __decorate([
    Entry
], DraggableDemo);
export { DraggableDemo };
//# sourceMappingURL=DraggableDemo.js.map