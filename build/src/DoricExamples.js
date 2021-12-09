var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Panel, vlayout, layoutConfig, Gravity, text, Color, navbar, hlayout, list, listItem, navigator, stack, image, log, List, } from "doric";
import { container } from "./Container";
import { ComponentDetail } from "./ComponentDetail";
import localComponentJson from "./localComponents.json";
import localCapacitiesJson from "./localCapacities.json";
import * as PubTool from "./PubTool";
import { MyTabBar, myTabBar } from "./components/MyTabBar";
import tab_home_normal from "./images/tab_home_normal@2x.png";
import tab_home_selected from "./images/tab_home_selected@2x.png";
import tab_mine_normal from "./images/tab_mine_normal@2x.png";
import tab_mine_selected from "./images/tab_mine_selected@2x.png";
import { PanelRouter } from "./PanelRouter";
function cell(model) {
    let padding = 10;
    let hPadding = 20;
    let cellHeight = 118;
    let titleLabel = text({
        text: model.title,
        layoutConfig: layoutConfig().mostWidth(),
        textSize: 18,
        fontStyle: "bold",
        textColor: Color.BLACK,
        textAlignment: Gravity.Left,
        maxLines: 1,
        height: 28,
    });
    let descLabel = text({
        text: model.desc,
        layoutConfig: layoutConfig().mostWidth(),
        textSize: 15,
        textColor: Color.safeParse("#666666"),
        textAlignment: Gravity.Left,
        maxLines: 2,
        lineSpacing: 4,
        height: 48,
    });
    let iconWidget = container({
        width: 60,
        height: 60,
        backgroundColor: PubTool.bgColor,
        corners: 30,
        shadow: {
            opacity: 0.15,
            color: Color.BLACK,
            offsetX: 2,
            offsetY: 2,
            radius: 6,
        },
        layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
        child: text({
            text: model.title.substr(0, 1),
            textColor: PubTool.themColor,
            textSize: 22,
            fontStyle: "bold",
            layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
        }),
    });
    return listItem(container({
        // 底部背景
        height: cellHeight,
        layoutConfig: layoutConfig().mostWidth().justHeight(),
        padding: {
            left: hPadding,
            right: hPadding,
            top: padding,
            bottom: padding,
        },
        onClick: () => {
            if (model.path && model.path.length) {
                let panel = PanelRouter.instance().panelWithPath(model.path);
                navigator(context).push(panel, {
                    extra: model,
                });
                // navigator(context).push(`assets://src/capacities/${model.capacityClass}.js`, {
                //     extra: model,
                // })
            }
            else {
                navigator(context).push(ComponentDetail, {
                    extra: model,
                });
            }
        },
        child: container({
            // child 圆角白色 container
            corners: 8,
            border: {
                width: 1,
                color: PubTool.themColor,
            },
            layoutConfig: layoutConfig().most(),
            backgroundColor: Color.WHITE,
            child: hlayout([
                container({
                    width: 90,
                    layoutConfig: layoutConfig().justWidth().mostHeight(),
                    child: iconWidget,
                }),
                vlayout([titleLabel, descLabel], {
                    layoutConfig: layoutConfig()
                        .most()
                        .configAlignment(Gravity.Center),
                    gravity: Gravity.Center,
                    space: 1,
                }),
            ], {
                space: 5,
                layoutConfig: layoutConfig().most(),
            }),
        }),
    }), {
        identifier: "normalcell",
        layoutConfig: layoutConfig().mostWidth().fitHeight(),
    });
}
let MainWidget = class MainWidget extends Panel {
    constructor() {
        super(...arguments);
        // 基础widgets数据源
        this.widgetModels = [];
        // 基础widgets list
        this.widgetList = new List();
        // 常见功能数据源
        this.capacityModels = [];
        // 常见功能list
        this.capacityList = new List();
        this.tabBar = new MyTabBar();
    }
    onCreate() {
        this.capacityModels = localCapacitiesJson;
        this.widgetModels = localComponentJson;
    }
    onShow() {
        navbar(context).setTitle("DoricExamples");
    }
    build(rootView) {
        let normalImages = [
            image({
                imageBase64: tab_home_normal,
                layoutConfig: layoutConfig().fit(),
            }),
            image({
                imageBase64: tab_mine_normal,
                layoutConfig: layoutConfig().fit(),
            }),
        ];
        let selectedImages = [
            image({
                imageBase64: tab_home_selected,
                layoutConfig: layoutConfig().fit(),
            }),
            image({
                imageBase64: tab_mine_selected,
                layoutConfig: layoutConfig().fit(),
            }),
        ];
        this.widgetList = list({
            itemCount: this.widgetModels.length,
            renderItem: (index) => cell(this.widgetModels[index]),
        }).apply({
            layoutConfig: layoutConfig().most(),
        });
        this.capacityList = list({
            itemCount: this.capacityModels.length,
            renderItem: (index) => cell(this.capacityModels[index]),
        }).apply({
            layoutConfig: layoutConfig().most(),
        });
        vlayout([
            stack([this.widgetList, this.capacityList], {
                layoutConfig: layoutConfig().most().configWeight(1),
            }),
            (this.tabBar = myTabBar({
                titles: ["基础组件", "常见功能"],
                normalImages: normalImages,
                selectedImages: selectedImages,
                onSelectedHandler: (currentIndex) => {
                    log("currentIndex =" + currentIndex);
                    this.widgetList.hidden = currentIndex != 0;
                    this.capacityList.hidden = currentIndex != 1;
                },
            })),
        ], {
            layoutConfig: layoutConfig().most(),
        }).in(rootView);
        if (this.tabBar.onSelectedHandler) {
            this.tabBar.onSelectedHandler(this.tabBar.selectedIndex);
        }
    }
};
MainWidget = __decorate([
    Entry
], MainWidget);
export { MainWidget };
//# sourceMappingURL=DoricExamples.js.map