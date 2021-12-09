var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { stack, Panel, popover, text, gravity, Color, LayoutSpec, vlayout, Gravity, scroller, layoutConfig, modal, navbar, } from "doric";
import { title, label, colors } from "./utils";
let PopoverDemo = class PopoverDemo extends Panel {
    build(rootView) {
        scroller(vlayout([
            title("Popover Demo"),
            label("show navbar").apply({
                width: 200,
                height: 50,
                backgroundColor: colors[0],
                textSize: 30,
                textColor: Color.WHITE,
                layoutConfig: layoutConfig().just(),
                onClick: () => {
                    navbar(this.context).setHidden(false);
                },
            }),
            label("hide navbar").apply({
                width: 200,
                height: 50,
                backgroundColor: colors[0],
                textSize: 30,
                textColor: Color.WHITE,
                layoutConfig: layoutConfig().just(),
                onClick: () => {
                    navbar(this.context).setHidden(true);
                },
            }),
            label("Popover").apply({
                width: 200,
                height: 50,
                backgroundColor: colors[0],
                textSize: 30,
                textColor: Color.WHITE,
                layoutConfig: layoutConfig().just(),
                onClick: () => {
                    popover(this.context).show(stack([
                        text({
                            width: 200,
                            height: 50,
                            backgroundColor: colors[0],
                            textColor: Color.WHITE,
                            layoutConfig: layoutConfig()
                                .just()
                                .configAlignment(Gravity.Center),
                            text: "This is PopOver Window",
                        }).also((v) => {
                            let idx = 0;
                            v.onClick = () => {
                                v.backgroundColor = colors[++idx % colors.length];
                            };
                            modal(this.context).toast("Dismissed after 3 seconds");
                            setTimeout(() => {
                                popover(this.context).dismiss();
                            }, 3000);
                        }),
                    ], {
                        layoutConfig: layoutConfig().most().configMargin({ left: 20, right: 20, top: 20, bottom: 20 }),
                        backgroundColor: Color.RED.alpha(1),
                    }));
                },
            }),
        ]).apply({
            layoutConfig: layoutConfig().most().configHeight(LayoutSpec.FIT),
            gravity: gravity().center(),
            space: 10,
        }))
            .apply({
            layoutConfig: layoutConfig().most(),
        })
            .in(rootView);
    }
};
PopoverDemo = __decorate([
    Entry
], PopoverDemo);
export { PopoverDemo };
//# sourceMappingURL=PopoverDemo.js.map