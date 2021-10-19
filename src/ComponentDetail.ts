import { Panel, stack, Group, vlayout, layoutConfig, Gravity, text, Text, Color, navbar, hlayout, list, LayoutSpec, List, ListItem, listItem, HLayout, modal, navigator } from "doric";
import { ComponentModel } from "./ComponentModel";
import { Container } from "./Container"


const themColor = Color.parse('#766BEA')
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
                modal(context).alert(`即将跳转${model.title}详情`)
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

// 1.顶部介绍cell
function _descCell(model: ComponentModel) {

    let padding = 20
    let hPadding = 20

    let titleLabel = text({
        text: model.subTitle,
        layoutConfig: layoutConfig().configWidth(LayoutSpec.MOST),
        textSize: 28,
        fontStyle: 'bold',
        textColor: themColor,
        textAlignment: Gravity.Left,
        maxLines: 1,
        height: 28,
    })

    return listItem(
        [
            vlayout(
                [
                    titleLabel,
                    titleLabel
                ],
                {
                    backgroundColor: Color.LTGRAY,
                    space: 10
                }
            )
        ]
    ).apply({
        height: 140,
        layoutConfig: {
            widthSpec: LayoutSpec.MOST,
            heightSpec: LayoutSpec.JUST,
        },
        backgroundColor: Color.YELLOW,
        padding: { left: hPadding, right: hPadding, top: padding, bottom: padding },
    })
}

@Entry
export class ComponentDetail extends Panel {

    private model?: ComponentModel

    onCreate() {
        // 拿到上个Panel传过来的数据
        if (this.getInitData()) {
            this.model = this.getInitData() as ComponentModel;
            modal(context).alert(`Init Data :${this.model.title}`)
        }

        // let filePath = fs.readFileSync("./src/localComponents.json", {encoding: "utf8"})
        // modal(context).alert(`Init Data :${filePath}`)
        // var models = JSON.parse(filePath)
        // modal(context).alert(`Init Data :${filePath}`)
    }

    onShow() {
        navbar(context).setTitle(this.model?.title ?? '')
    }

    build(rootView: Group): void {
        list({
            itemCount: 1,
            renderItem: (index: number) => _descCell(this.model!)
        }).apply({
            layoutConfig: layoutConfig().most(),
        }).in(rootView)
    }
}
