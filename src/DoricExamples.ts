import { Panel, stack, Group, vlayout, layoutConfig, Gravity, text, Text, Color, navbar, hlayout, list, LayoutSpec, List, ListItem, listItem, HLayout, modal } from "doric";
import { ComponentModel } from "./ComponentModel";
import { Container } from "./Container"

const themColor = Color.parse('#766BEA')
const colors = [
    "#f0932b",
    "#eb4d4b",
    "#6ab04c",
    "#e056fd",
    "#686de0",
    "#30336b",
]

var models: ComponentModel[] = []

function cell(model: ComponentModel) {
    let padding = 10
    let hPadding = 20
    let cellHeight = 118

    let titleLabel = text({
        text: model.name,
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
        text: model.name.substr(0, 1),
        width: 60,
        height: 60,
        textColor: themColor,
        textSize: 22,
        fontStyle: 'bold',
        backgroundColor: Color.safeParse('#EBDCCE'),
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
            // backgroundColor: Color.parse(colors[index || 0]),
            onClick: () => {
                modal(context).alert(`即将跳转${model.name}详情`)
            }
        }, Container.d({  // child 圆角白色 container
            corners: 8,
            border: {
                width: 1,
                color: themColor
            },
            layoutConfig: layoutConfig().most(),
            backgroundColor: Color.WHITE,
        }, hlayout([
            Container.d({
                width: 90,
                height: cellHeight - 2 * padding,  // 能不能不设置高度值，直接高度是父视图的高度？
                layoutConfig: {
                    widthSpec: LayoutSpec.JUST,
                    //, heightSpec: LayoutSpec.MOST,
                },
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

/// 本地数据
function _makeLocalDatas() {

    var model = new ComponentModel()
    model.name = 'Stack'
    model.desc = '层叠布局容器控件，子控件都是相对于其左上角顶点摆放'
    models.push(model)

    model = new ComponentModel()
    model.name = 'Text'
    model.desc = '文本控件'
    models.push(model)

    model = new ComponentModel()
    model.name = 'HLayout'
    model.desc = '水平线性布局容器控件'
    models.push(model)

    model = new ComponentModel()
    model.name = 'VLayout'
    model.desc = '垂直线性布局组件'
    models.push(model)
}

@Entry
class MainWidget extends Panel {

    onCreate() {
        _makeLocalDatas();
    }
    onShow() {
        navbar(context).setTitle("DoricExamples")
    }

    build(rootView: Group): void {
        list({
            itemCount: models.length,
            renderItem: (index: number) => cell(models[index]),
        }).apply({
            layoutConfig: layoutConfig().most(),
        }).in(rootView)
    }
}
