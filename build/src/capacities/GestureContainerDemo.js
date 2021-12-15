var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Panel, gestureContainer, layoutConfig, Gravity, Color, stack, modal, scroller, vlayout, gravity, text, SwipeOrientation, } from "doric";
import { colors } from "./utils";
let GestureContainerDemo = class GestureContainerDemo extends Panel {
    build(rootView) {
        let touchChild = stack([], {
            layoutConfig: layoutConfig().just(),
            width: 100,
            height: 100,
            backgroundColor: Color.CYAN,
        });
        let pinchChild = stack([], {
            layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
            width: 100,
            height: 100,
            backgroundColor: Color.CYAN,
        });
        let panChild = stack([], {
            layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
            width: 100,
            height: 100,
            backgroundColor: Color.CYAN,
        });
        let rotateChild = stack([], {
            layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
            width: 100,
            height: 100,
            backgroundColor: Color.CYAN,
        });
        scroller(vlayout([
            vlayout([
                text({
                    text: "onTouch Demo",
                    layoutConfig: layoutConfig().mostWidth(),
                    textSize: 30,
                    textColor: Color.WHITE,
                    backgroundColor: colors[5],
                    textAlignment: gravity().center(),
                    height: 50,
                }),
                gestureContainer([touchChild], {
                    onTouchDown: (event) => {
                        modal(this.context).toast("onTouchDown x=" + event.x + " y=" + event.y);
                    },
                    onTouchMove: (event) => {
                        touchChild.x = event.x - 50;
                        touchChild.y = event.y - 50;
                    },
                    onTouchUp: (event) => {
                        modal(this.context).toast("onTouchUp x=" + event.x + " y=" + event.y);
                    },
                    onTouchCancel: (event) => {
                        modal(this.context).toast("onTouchCancel x=" + event.x + " y=" + event.y);
                    },
                }).apply({
                    layoutConfig: layoutConfig()
                        .just()
                        .configAlignment(Gravity.Center),
                    width: 300,
                    height: 300,
                    backgroundColor: Color.BLACK,
                }),
            ]).apply({
                layoutConfig: layoutConfig().mostWidth().fitHeight(),
            }),
            vlayout([
                text({
                    text: "SingleTap, DoubleTap, LongPress Demo",
                    layoutConfig: layoutConfig().mostWidth(),
                    textSize: 20,
                    textColor: Color.WHITE,
                    backgroundColor: colors[5],
                    textAlignment: gravity().center(),
                    height: 50,
                }),
                gestureContainer([], {
                    onSingleTap: () => {
                        modal(this.context).toast("onSingleTap");
                    },
                    onDoubleTap: () => {
                        modal(this.context).toast("onDoubleTap");
                    },
                    onLongPress: () => {
                        modal(this.context).toast("onLongPress");
                    },
                }).apply({
                    layoutConfig: layoutConfig()
                        .just()
                        .configAlignment(Gravity.Center),
                    width: 300,
                    height: 300,
                    backgroundColor: Color.BLACK,
                }),
            ]).apply({
                layoutConfig: layoutConfig().mostWidth().fitHeight(),
            }),
            vlayout([
                text({
                    text: "Pinch Demo",
                    layoutConfig: layoutConfig().mostWidth(),
                    textSize: 30,
                    textColor: Color.WHITE,
                    backgroundColor: colors[5],
                    textAlignment: gravity().center(),
                    height: 50,
                }),
                gestureContainer([pinchChild], {
                    onPinch: (scale) => {
                        pinchChild.width = 100 * scale;
                        pinchChild.height = 100 * scale;
                    },
                }).apply({
                    layoutConfig: layoutConfig()
                        .just()
                        .configAlignment(Gravity.Center),
                    width: 300,
                    height: 300,
                    backgroundColor: Color.BLACK,
                }),
            ]).apply({
                layoutConfig: layoutConfig().mostWidth().fitHeight(),
            }),
            vlayout([
                text({
                    text: "Pan Demo",
                    layoutConfig: layoutConfig().mostWidth(),
                    textSize: 30,
                    textColor: Color.WHITE,
                    backgroundColor: colors[5],
                    textAlignment: gravity().center(),
                    height: 50,
                }),
                gestureContainer([panChild], {
                    onPan: (dx, dy) => {
                        panChild.x -= dx;
                        panChild.y -= dy;
                    },
                }).apply({
                    layoutConfig: layoutConfig()
                        .just()
                        .configAlignment(Gravity.Center),
                    width: 300,
                    height: 300,
                    backgroundColor: Color.BLACK,
                }),
            ]).apply({
                layoutConfig: layoutConfig().mostWidth().fitHeight(),
            }),
            vlayout([
                text({
                    text: "Rotate Demo",
                    layoutConfig: layoutConfig().mostWidth(),
                    textSize: 30,
                    textColor: Color.WHITE,
                    backgroundColor: colors[5],
                    textAlignment: gravity().center(),
                    height: 50,
                }),
                gestureContainer([rotateChild], {
                    onRotate: (dAngle) => {
                        if (rotateChild.rotation == null) {
                            rotateChild.rotation = 0;
                        }
                        rotateChild.rotation += dAngle;
                    },
                }).apply({
                    layoutConfig: layoutConfig()
                        .just()
                        .configAlignment(Gravity.Center),
                    width: 300,
                    height: 300,
                    backgroundColor: Color.BLACK,
                }),
            ]).apply({
                layoutConfig: layoutConfig().mostWidth().fitHeight(),
            }),
            vlayout([
                text({
                    text: "Swipe Demo",
                    layoutConfig: layoutConfig().mostWidth(),
                    textSize: 30,
                    textColor: Color.WHITE,
                    backgroundColor: colors[5],
                    textAlignment: gravity().center(),
                    height: 50,
                }),
                gestureContainer([], {
                    onSwipe: (orientation) => {
                        if (orientation == SwipeOrientation.LEFT) {
                            modal(this.context).toast("onSwipeLeft");
                        }
                        else if (orientation == SwipeOrientation.RIGHT) {
                            modal(this.context).toast("onSwipeRight");
                        }
                        else if (orientation == SwipeOrientation.TOP) {
                            modal(this.context).toast("onSwipeTop");
                        }
                        else if (orientation == SwipeOrientation.BOTTOM) {
                            modal(this.context).toast("onSwipeBottom");
                        }
                    },
                }).apply({
                    layoutConfig: layoutConfig()
                        .just()
                        .configAlignment(Gravity.Center),
                    width: 300,
                    height: 300,
                    backgroundColor: Color.BLACK,
                }),
            ]).apply({
                layoutConfig: layoutConfig().mostWidth().fitHeight(),
            }),
        ], {
            space: 50,
            layoutConfig: layoutConfig().mostWidth().fitHeight(),
            gravity: gravity().centerX(),
        }), { layoutConfig: layoutConfig().most() }).in(rootView);
    }
};
GestureContainerDemo = __decorate([
    Entry
], GestureContainerDemo);
export { GestureContainerDemo };
//# sourceMappingURL=GestureContainerDemo.js.map