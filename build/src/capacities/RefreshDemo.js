var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Panel, text, gravity, Color, LayoutSpec, list, listItem, log, vlayout, Gravity, hlayout, refreshable, layoutConfig, } from "doric";
import { rotatedArrow, colors } from "./utils";
let RefreshDemo = class RefreshDemo extends Panel {
    build(rootView) {
        let refreshView;
        let offset = Math.ceil(Math.random() * colors.length);
        vlayout([
            text({
                text: "RefreshDemo",
                layoutConfig: {
                    widthSpec: LayoutSpec.MOST,
                    heightSpec: LayoutSpec.JUST,
                },
                textSize: 30,
                textColor: Color.parse("#535c68"),
                backgroundColor: Color.parse("#dff9fb"),
                textAlignment: gravity().center(),
                height: 50,
            }),
            (refreshView = refreshable({
                onRefresh: () => {
                    log("onRefresh");
                    setTimeout(() => {
                        refreshView.setRefreshing(this.context, false).then(() => {
                            refreshView.content.also((it) => {
                                log("List reset");
                                it.reset();
                                offset = Math.ceil(Math.random() * colors.length);
                                it.itemCount = 40;
                                it.loadMore = true;
                            });
                        });
                    }, 500);
                },
                header: rotatedArrow(),
                content: list({
                    itemCount: 0,
                    loadMore: true,
                    backgroundColor: Color.CYAN,
                    loadMoreView: listItem(text({
                        text: "Loading",
                        layoutConfig: layoutConfig()
                            .most()
                            .configHeight(LayoutSpec.JUST)
                            .configAlignment(Gravity.Center),
                        height: 50,
                    })),
                    renderItem: (idx) => {
                        let counter;
                        return listItem(hlayout([
                            text({
                                layoutConfig: {
                                    widthSpec: LayoutSpec.FIT,
                                    heightSpec: LayoutSpec.JUST,
                                    alignment: gravity().center(),
                                },
                                text: `Cell At Line ${idx}`,
                                textAlignment: gravity().center(),
                                textColor: Color.parse("#ffffff"),
                                textSize: 20,
                                height: 50,
                            }),
                            text({
                                textColor: Color.parse("#ffffff"),
                                textSize: 20,
                                text: "",
                            }).also((it) => {
                                counter = it;
                                it.layoutConfig = {
                                    widthSpec: LayoutSpec.FIT,
                                    heightSpec: LayoutSpec.FIT,
                                    margin: {
                                        left: 10,
                                    },
                                };
                            }),
                        ]).also((it) => {
                            it.layoutConfig = {
                                widthSpec: LayoutSpec.MOST,
                                heightSpec: LayoutSpec.FIT,
                                margin: {
                                    bottom: 2,
                                },
                            };
                            it.gravity = gravity().center();
                            it.backgroundColor = colors[(idx + offset) % colors.length];
                            let clicked = 0;
                            it.onClick = () => {
                                counter.text = `Item Clicked ${++clicked}`;
                            };
                        })).also((it) => {
                            it.layoutConfig = {
                                widthSpec: LayoutSpec.MOST,
                                heightSpec: LayoutSpec.FIT,
                            };
                            it.onClick = () => {
                                log(`Click item at ${idx}`);
                                it.height += 10;
                                it.nativeChannel(this.context, "getWidth")().then((resolve) => {
                                    log(`resolve,${resolve}`);
                                }, (reject) => {
                                    log(`reject,${reject}`);
                                });
                            };
                        });
                    },
                    onLoadMore: () => {
                        setTimeout(() => {
                            (refreshView === null || refreshView === void 0 ? void 0 : refreshView.content).also((it) => {
                                it.loadMore = true;
                                it.itemCount += 20;
                            });
                        }, 500);
                    },
                    layoutConfig: {
                        widthSpec: LayoutSpec.MOST,
                        heightSpec: LayoutSpec.MOST,
                    },
                }),
                layoutConfig: {
                    widthSpec: LayoutSpec.MOST,
                    heightSpec: LayoutSpec.FIT,
                    weight: 1,
                },
            })),
        ], {
            layoutConfig: layoutConfig().most(),
        }).in(rootView);
    }
};
RefreshDemo = __decorate([
    Entry
], RefreshDemo);
export { RefreshDemo };
//# sourceMappingURL=RefreshDemo.js.map