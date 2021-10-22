import { Panel, stack, Group, vlayout, layoutConfig, Gravity, text, Text, Color, navbar, hlayout, list, LayoutSpec, List, ListItem, listItem, HLayout, modal, navigator } from "doric";
import { Container } from "./Container"
import { ComponentDetail } from "./ComponentDetail";
import { ComponentModel } from "./ComponentModel"
import localJson from "./localComponents.json";
import * as PubTool from "./PubTool"

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
                navigator(context).push(ComponentDetail, {
                    extra: model,
                })
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
    // 数据源
    private models: ComponentModel[] = []

    onCreate() {
        this.makeLocalDatas();
    }

    onShow() {
        navbar(context).setTitle("DoricExamples")
    }

    build(rootView: Group): void {
        list({
            itemCount: this.models.length,
            renderItem: (index: number) => cell(this.models[index]),
        }).apply({
            layoutConfig: layoutConfig().most(),
        }).in(rootView)
    }

    /// 构造本地数据
    makeLocalDatas() {
        this.models = localJson
    }
}

