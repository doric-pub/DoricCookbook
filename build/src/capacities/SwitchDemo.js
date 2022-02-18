var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Panel, switchView, text, Color, vlayout, Gravity, layoutConfig, } from "doric";
let SwitchDemo = class SwitchDemo extends Panel {
    build(rootView) {
        let switchStatus;
        vlayout([
            (switchStatus = text({
                text: "Switch开关",
            })),
            switchView({
                state: true,
                onSwitch: (state) => {
                    switchStatus.text = `Switch 当前状态:${state ? "ON" : "OFF"}`;
                },
            }),
            switchView({
                state: true,
                onSwitch: (state) => {
                    switchStatus.text = `Switch 当前状态:${state ? "ON" : "OFF"}`;
                },
                offTintColor: Color.RED,
                onTintColor: Color.YELLOW,
                thumbTintColor: Color.CYAN,
            }),
        ], {
            layoutConfig: layoutConfig().most(),
            space: 20,
            gravity: Gravity.Center,
        }).in(rootView);
    }
};
SwitchDemo = __decorate([
    Entry
], SwitchDemo);
export { SwitchDemo };
//# sourceMappingURL=SwitchDemo.js.map