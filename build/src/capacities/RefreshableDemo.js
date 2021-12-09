var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { refreshable, Panel, pullable, gravity, Color, LayoutSpec, log, vlayout, layoutConfig, stack, image } from "doric";
import { title, label, colors, icon_refresh } from "./utils";
let RefreshableDemo = class RefreshableDemo extends Panel {
    build(rootView) {
        let refreshImage;
        let refreshView = refreshable({
            layoutConfig: layoutConfig().most(),
            onRefresh: () => {
                log('onRefresh');
                setTimeout(() => {
                    refreshView.setRefreshing(this.context, false);
                }, 2000);
            },
            header: pullable(stack([
                image({
                    layoutConfig: layoutConfig().just().configMargin({ top: 50, bottom: 10, }),
                    width: 30,
                    height: 30,
                    imageBase64: icon_refresh,
                }).also(v => {
                    refreshImage = v;
                }),
            ]), {
                startAnimation: () => {
                    log('startAnimation');
                },
                stopAnimation: () => {
                    log('stopAnimation');
                },
                setPullingDistance: (distance) => {
                    refreshImage.rotation = distance / 30;
                },
            }),
            content: (vlayout([
                title("Refreshable Demo"),
                label('start Refresh').apply({
                    width: 300,
                    height: 50,
                    backgroundColor: colors[0],
                    textSize: 30,
                    textColor: Color.WHITE,
                    layoutConfig: layoutConfig().just(),
                    onClick: () => {
                        refreshView.setRefreshing(this.context, true);
                    }
                }),
                label('stop Refresh').apply({
                    width: 300,
                    height: 50,
                    backgroundColor: colors[0],
                    textSize: 30,
                    textColor: Color.WHITE,
                    layoutConfig: layoutConfig().just(),
                    onClick: () => {
                        refreshView.setRefreshing(this.context, false);
                    }
                }),
                label('Enable Refresh').apply({
                    width: 300,
                    height: 50,
                    backgroundColor: colors[0],
                    textSize: 30,
                    textColor: Color.WHITE,
                    layoutConfig: layoutConfig().just(),
                    onClick: () => {
                        refreshView.setRefreshable(this.context, true);
                    }
                }),
                label('Disable Refresh').apply({
                    width: 300,
                    height: 50,
                    backgroundColor: colors[0],
                    textSize: 30,
                    textColor: Color.WHITE,
                    layoutConfig: layoutConfig().just(),
                    onClick: () => {
                        refreshView.setRefreshable(this.context, false);
                    }
                }),
            ]).apply({
                layoutConfig: layoutConfig().most().configHeight(LayoutSpec.FIT),
                gravity: gravity().centerX(),
                space: 10,
            }))
        }).apply({
            backgroundColor: Color.YELLOW
        }).in(rootView);
    }
};
RefreshableDemo = __decorate([
    Entry
], RefreshableDemo);
export { RefreshableDemo };
//# sourceMappingURL=RefreshableDemo.js.map