var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { animate, Panel, Color, vlayout, layoutConfig, modal, stack, hlayout, text, image, } from "doric";
import { title, colors } from "./utils";
function thisLabel(str) {
    return text({
        text: str,
        width: 65,
        height: 50,
        backgroundColor: colors[0],
        textSize: 15,
        textColor: Color.WHITE,
        layoutConfig: layoutConfig().justWidth().justHeight(),
    });
}
let AnimatorDemo = class AnimatorDemo extends Panel {
    build(rootView) {
        const view = image({
            imageUrl: "https://pic3.zhimg.com/v2-5847d0813bd0deba333fcbe52435e83e_b.jpg",
            layoutConfig: layoutConfig().just(),
            width: 100,
            height: 100
        });
        view.onClick = () => {
            modal(this.context).toast('Clicked');
        };
        //const view = box(3)
        let idx = 0;
        vlayout([
            title("Animator Demo"),
            vlayout([
                hlayout([thisLabel('Reset').apply({
                        onClick: () => {
                            animate(this.context)({
                                animations: () => {
                                    view.width = view.height = 100;
                                    view.x = view.y = 0;
                                    view.rotation = 0;
                                    view.backgroundColor = colors[2];
                                    view.corners = 0;
                                    view.scaleX = 1;
                                    view.scaleY = 1;
                                    view.translationX = 0;
                                    view.translationY = 0;
                                    view.rotation = 0;
                                    view.rotationX = 0;
                                    view.rotationY = 0;
                                },
                                duration: 1500,
                            }).then(() => {
                                modal(this.context).toast('Fininshed');
                            }).catch(e => {
                                modal(this.context).toast(`${e}`);
                            });
                        }
                    }),], { space: 10 }),
                hlayout([
                    thisLabel('X').apply({
                        onClick: () => {
                            animate(this.context)({
                                animations: () => {
                                    view.x = view.x || 0;
                                    view.x += 100;
                                    //view2.x += 50
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel('Y').apply({
                        onClick: () => {
                            animate(this.context)({
                                animations: () => {
                                    view.y = view.y || 0;
                                    view.y += 100;
                                    //view2.y += 50
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel('Width').apply({
                        onClick: () => {
                            animate(this.context)({
                                animations: () => {
                                    view.width += 100;
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel('Height').apply({
                        onClick: () => {
                            animate(this.context)({
                                animations: () => {
                                    view.height += 100;
                                },
                                duration: 1000,
                            });
                        }
                    }),
                ], { space: 10 }),
                hlayout([
                    thisLabel('BgColor').apply({
                        onClick: () => {
                            animate(this.context)({
                                animations: () => {
                                    view.backgroundColor = colors[(idx++) % colors.length];
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel('Rotation').apply({
                        onClick: () => {
                            animate(this.context)({
                                animations: () => {
                                    if (view.rotation) {
                                        view.rotation += 0.25;
                                    }
                                    else {
                                        view.rotation = 0.25;
                                    }
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel('RotationX').apply({
                        onClick: () => {
                            animate(this.context)({
                                animations: () => {
                                    if (view.rotationX) {
                                        view.rotationX += 0.25;
                                    }
                                    else {
                                        view.rotationX = 0.25;
                                    }
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel('RotationY').apply({
                        onClick: () => {
                            animate(this.context)({
                                animations: () => {
                                    if (view.rotationY) {
                                        view.rotationY += 0.25;
                                    }
                                    else {
                                        view.rotationY = 0.25;
                                    }
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel('Corner').apply({
                        onClick: () => {
                            animate(this.context)({
                                animations: () => {
                                    if (typeof view.corners === 'number') {
                                        view.corners += 10;
                                    }
                                    else {
                                        view.corners = 10;
                                    }
                                },
                                duration: 1000,
                            });
                        }
                    }),
                ], { space: 10 }),
                hlayout([
                    thisLabel('scaleX').apply({
                        onClick: () => {
                            animate(this.context)({
                                animations: () => {
                                    if (view.scaleX) {
                                        view.scaleX += 0.1;
                                    }
                                    else {
                                        view.scaleX = 1.1;
                                    }
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel('scaleY').apply({
                        onClick: () => {
                            animate(this.context)({
                                animations: () => {
                                    if (view.scaleY) {
                                        view.scaleY += 0.1;
                                    }
                                    else {
                                        view.scaleY = 1.1;
                                    }
                                },
                                duration: 1000,
                            });
                        }
                    }),
                ]).apply({ space: 10 }),
            ], { space: 10 }),
            stack([
                view,
            ], {
                layoutConfig: layoutConfig().most(),
                backgroundColor: colors[1].alpha(0.3 * 255),
            }),
        ], {
            layoutConfig: layoutConfig().most(),
            space: 10,
        }).in(rootView);
    }
};
AnimatorDemo = __decorate([
    Entry
], AnimatorDemo);
export { AnimatorDemo };
//# sourceMappingURL=AnimatorDemo.js.map