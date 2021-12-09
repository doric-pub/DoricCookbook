var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Panel, image, layoutConfig, ScaleType, refreshable, Color, pullable, stack, list, listItem, text } from "doric";
import { colors } from "./utils";
let MyDemo = class MyDemo extends Panel {
    build(root) {
        let refreshed;
        let headerImage;
        stack([
            refreshed = refreshable({
                onRefresh: () => {
                    refreshed.setRefreshing(this.context, false);
                },
                header: pullable(stack([]).apply({
                    backgroundColor: Color.RED,
                    layoutConfig: layoutConfig().just(),
                    width: 100,
                    height: 30,
                }), {
                    startAnimation: () => {
                    },
                    stopAnimation: () => {
                    },
                    setPullingDistance: (distance) => {
                        headerImage.scaleX = headerImage.scaleY = (headerImage.height + distance * 2) / headerImage.height;
                    },
                }),
                content: list({
                    itemCount: 20,
                    renderItem: (idx) => {
                        return listItem(text({
                            text: `Item :${idx}`,
                            layoutConfig: layoutConfig().just(),
                            width: root.width,
                            height: 50,
                            textColor: Color.WHITE,
                            backgroundColor: colors[idx % colors.length],
                        }));
                    },
                    layoutConfig: layoutConfig().most(),
                }),
                layoutConfig: layoutConfig().most(),
            }).also(v => {
                v.top = 200;
            }),
            headerImage = image({
                imageUrl: "https://img.zcool.cn/community/01e75b5da933daa801209e1ffa4649.jpg@1280w_1l_2o_100sh.jpg",
                layoutConfig: layoutConfig().just(),
                width: root.width,
                height: 200,
                scaleType: ScaleType.ScaleAspectFill,
            }),
        ], {
            layoutConfig: layoutConfig().most()
        }).in(root);
    }
};
MyDemo = __decorate([
    Entry
], MyDemo);
//# sourceMappingURL=ComplicatedDemo.js.map