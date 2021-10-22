import { Panel, stack, Group, vlayout, layoutConfig, Gravity, text, Text, Color, navbar, hlayout, list, LayoutSpec, List, ListItem, listItem, HLayout, modal, navigator, flexlayout, FlexDirection, Align, Justify, View } from "doric";
import { CasesModel, ComponentModel } from "./ComponentModel";
// import { Stack_1 } from "./components/Stack_1";
import { Container } from "./Container"
import * as PubTool from "./PubTool"
import * as CaseRoute from "./CaseRoute"
import { CodeIDE } from "./CodeIDE";


// 1.顶部介绍cell
function _descCell(model: ComponentModel) {

    let padding = 20
    let hPadding = 20

    let titleLabel = text({
        text: model.subTitle,
        textSize: 20,
        fontStyle: 'bold',
        textColor: PubTool.themColor,
        textAlignment: Gravity.Left,
        maxLines: 1,
    })

    let descLabel = text({
        text: model.desc,
        textSize: 15,
        textColor: Color.safeParse('#666666'),
        textAlignment: Gravity.Left,
        maxLines: 0,
        lineSpacing: 4,
    })

    return listItem(
        [
            vlayout(
                [
                    titleLabel,
                    descLabel
                ],
                {
                    space: 10
                }
            )
        ]
    ).apply({
        layoutConfig: layoutConfig().mostWidth().fitHeight(),
        // backgroundColor: PubTool.randomColor(),
        padding: { left: hPadding, right: hPadding, top: padding, bottom: padding },
    })
}

// 圆点Widget
function pointWidget() {
    return Container.d({
        width: 12,
        height: 12,
        backgroundColor: PubTool.themColor,
        corners: 6,
        layoutConfig: layoutConfig().just()
    })
}

// 查看代码widget
function codeEntrance(caseModel: CasesModel) {
    return text({
        text: '<>',
        width: 40,
        height: 30,
        layoutConfig: {
            widthSpec: LayoutSpec.JUST,
            heightSpec: LayoutSpec.FIT,
        },
        textSize: 16,
        fontStyle: 'bold',
        textColor: PubTool.themColor,
        textAlignment: Gravity.Right,
        maxLines: 1,
        onClick: function () {
            navigator(context).push(CodeIDE, {
                extra: caseModel,
            })
        }
    })
}

// 2.case cell
function _caseCell(caseModel: CasesModel) {

    let padding = 20
    let hPadding = 20

    let titleLabel = text({
        text: caseModel.title,
        textSize: 16,
        fontStyle: 'bold',
        textColor: Color.BLACK,
        textAlignment: Gravity.Left,
        // backgroundColor: PubTool.randomColor(),
        maxLines: 1,
        layoutConfig: layoutConfig().fit()
    })

    let caseTitle = hlayout([
        pointWidget(),
        titleLabel
    ], {
        layoutConfig: layoutConfig().fit(),
        space: 10,
        gravity: Gravity.CenterY,
        // backgroundColor: PubTool.randomColor(),
    })

    let descLabel = text({
        text: caseModel.desc,
        layoutConfig: {
            widthSpec: LayoutSpec.MOST,
            heightSpec: LayoutSpec.FIT,
        },
        textSize: 15,
        textColor: Color.safeParse('#666666'),
        textAlignment: Gravity.Left,
        // backgroundColor: PubTool.randomColor(),
        maxLines: 0,
        lineSpacing: 4,
    })

    let edge = 5

    let container = stack(
        [
            // 内部具体case
            CaseRoute.caseUIorCode(caseModel.ui) as View
        ],
        {
            // width: 200,
            // height: 160,
            layoutConfig: layoutConfig().mostWidth().fitHeight(),
            padding: { left: edge, right: edge, top: edge, bottom: edge },
            backgroundColor: PubTool.bgColor,
        }
    )
    return listItem(
        [
            vlayout(
                [
                    flexlayout(
                        [
                            caseTitle,
                            codeEntrance(caseModel)
                        ], {
                        flexConfig: {
                            flexDirection: FlexDirection.ROW,
                            justifyContent: Justify.SPACE_BETWEEN,
                            alignItems: Align.CENTER,
                        },
                        layoutConfig: layoutConfig().mostWidth().fitHeight(),
                    }
                    ),
                    container,
                    descLabel
                ],
                {
                    // backgroundColor: Color.CYAN,
                    space: 25,
                    gravity: Gravity.CenterX,
                    layoutConfig: layoutConfig().most(),
                }
            )
        ]
    ).apply({
        layoutConfig: {
            widthSpec: LayoutSpec.MOST,
            heightSpec: LayoutSpec.FIT
        },
        // backgroundColor: PubTool.randomColor(),
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
            // modal(context).alert(`Init Data :${this.model.title}`)
        }
    }

    onShow() {
        navbar(context).setTitle(this.model?.title ?? '')
    }

    build(rootView: Group): void {
        list({
            itemCount: 1 + (this.model?.cases.length ?? 0),
            renderItem: (index: number) => this.listItemCell(index)
        }).apply({
            layoutConfig: layoutConfig().most(),
        }).in(rootView)
    }

    listItemCell(index: number): ListItem {
        if (this.model) {
            if (index == 0) return _descCell(this.model!)
            return _caseCell(this.model.cases[index - 1])
        }
        return new ListItem()
    }
}
