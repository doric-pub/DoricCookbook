import { Panel, Group, vlayout, layoutConfig, Gravity, text, Color, navbar, hlayout, list, LayoutSpec, listItem, navigator, stack, image, log, List } from "doric";
import { Container } from "./Container"
import { ComponentDetail } from "./ComponentDetail";
import { ComponentModel } from "./ComponentModel"
import localComponentJson from "./localComponents.json";
import localCapacitiesJson from "./localCapacities.json";
import * as PubTool from "./PubTool"
import { MyTabBar, myTabBar } from "./components/MyTabBar";

import tab_home_normal from "./images/tab_home_normal@2x.png"
import tab_home_selected from "./images/tab_home_selected@2x.png"
import tab_mine_normal from "./images/tab_mine_normal@2x.png"
import tab_mine_selected from "./images/tab_mine_selected@2x.png"

function cell(model: ComponentModel) {
    let padding = 10
    let hPadding = 20
    let cellHeight = 118

    let titleLabel = text({
        text: model.title,
        layoutConfig: layoutConfig().configWidth(LayoutSpec.MOST),
        textSize: 18,
        fontStyle: 'bold',
        textColor: Color.BLACK,
        textAlignment: Gravity.Left,
        maxLines: 1,
        height: 28,
    })

    let descLabel = text({
        text: model.desc,
        layoutConfig: layoutConfig().configWidth(LayoutSpec.MOST),
        textSize: 15,
        textColor: Color.safeParse('#666666'),
        textAlignment: Gravity.Left,
        maxLines: 2,
        lineSpacing: 4,
        height: 48,
    })

    let iconWidget = text({
        text: model.title.substr(0, 1),
        width: 60,
        height: 60,
        textColor: PubTool.themColor,
        textSize: 22,
        fontStyle: 'bold',
        backgroundColor: PubTool.bgColor,
        corners: 30,
        shadow: {
            opacity: 1,
            color: Color.BLACK,
            offsetX: 30,
            offsetY: 30,
            radius: 4,
        },
        layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
    })

    return listItem(
        Container.d({  // 底部背景
            height: cellHeight,
            layoutConfig: {
                widthSpec: LayoutSpec.MOST,
                heightSpec: LayoutSpec.JUST,
            },
            padding: { left: hPadding, right: hPadding, top: padding, bottom: padding },
            onClick: () => {
                if (model.capacityClass && model.capacityClass.length) {
                    navigator(context).push(`assets//src/capacities/${model.capacityClass}.js`, {
                        extra: model,
                    })
                } else {
                    navigator(context).push(ComponentDetail, {
                        extra: model,
                    })
                }
            }
        }, Container.d({  // child 圆角白色 container
            corners: 8,
            border: {
                width: 1,
                color: PubTool.themColor
            },
            layoutConfig: layoutConfig().most(),
            backgroundColor: Color.WHITE,
        }, hlayout([
            Container.d({
                width: 90,
                height: cellHeight - 2 * padding,  // 能不能不设置高度值，直接高度是父视图的高度？
                layoutConfig: layoutConfig().configWidth(LayoutSpec.JUST)
            }, iconWidget),
            vlayout([
                titleLabel,
                descLabel,
            ]).apply({
                layoutConfig: layoutConfig().most().configAlignment(Gravity.Center),
                gravity: Gravity.Center,
                space: 1
            })
        ]).apply({
            space: 5
        })),
        ))
}

@Entry
class MainWidget extends Panel {
    // 基础widgets数据源
    private widgetModels: ComponentModel[] = []
    // 基础widgets list
    private widgetList: List = new List
   
    // 常见功能数据源
    private capacityModels: ComponentModel[] = []
    // 常见功能list
    private capacityList: List = new List

    private tabBar: MyTabBar = new MyTabBar

    onCreate() {
        this.widgetModels = localComponentJson
        this.capacityModels = localCapacitiesJson
    }

    onShow() {
        navbar(context).setTitle("DoricExamples")
    }

    build(rootView: Group): void {
        let normalImages = [
            image({
                imageBase64: tab_home_normal,
                layoutConfig: layoutConfig().fit()
            }),
            image({
                imageBase64: tab_mine_normal,
                layoutConfig: layoutConfig().fit()
            })
        ]
        let selectedImages = [
            image({
                imageBase64: tab_home_selected,
                layoutConfig: layoutConfig().fit()
            }),
            image({
                imageBase64: tab_mine_selected,
                layoutConfig: layoutConfig().fit()
            })
        ]
        this.widgetList = list({
            itemCount: this.widgetModels.length,
            renderItem: (index: number) => cell(this.widgetModels[index]),
        }).apply({
            layoutConfig: layoutConfig().fit()
        })
        this.capacityList = list({
            itemCount: this.capacityModels.length,
            renderItem: (index: number) => cell(this.capacityModels[index]),
        }).apply({
            layoutConfig: layoutConfig().fit()
        })

        vlayout([
            stack(
                [this.widgetList, this.capacityList],
                {
                    backgroundColor: Color.WHITE,
                    layoutConfig: layoutConfig().most().configWeight(1)
                }
            ),
            this.tabBar = myTabBar({
                onSelectedHandler: (currentIndex: number) => {
                    log('currentIndex =' + currentIndex)
                    this.widgetList.hidden = currentIndex != 0
                    this.capacityList.hidden = currentIndex == 0
                }
            }).applyChild({
                titles: ['基础组件', '常见功能'],
                normalImages: normalImages,
                selectedImages: selectedImages
            })
        ]).in(rootView)
        this.tabBar.onSelectedHandler(this.tabBar.selectedIndex)
    }
}

