var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Panel, stack, vlayout, layoutConfig, Gravity, text, Color, navbar, hlayout, list, LayoutSpec, ListItem, listItem, navigator, flexlayout, FlexDirection, Align, Justify } from "doric";
import * as PubTool from "./PubTool";
import * as CaseRoute from "./CaseRoute";
import { CodeIDE } from "./CodeIDE";
import { container } from "./Container";
// 1.顶部介绍cell
function _descCell(model) {
    let padding = 20;
    let hPadding = 20;
    let titleLabel = text({
        text: model.subTitle,
        textSize: 20,
        fontStyle: 'bold',
        textColor: PubTool.themColor,
        textAlignment: Gravity.Left,
        maxLines: 1,
        layoutConfig: layoutConfig().mostWidth().fitHeight(),
    });
    let descLabel = text({
        text: model.desc,
        textSize: 15,
        textColor: Color.safeParse('#666666'),
        textAlignment: Gravity.Left,
        maxLines: 0,
        lineSpacing: 4,
        layoutConfig: layoutConfig().mostWidth().fitHeight(),
    });
    return listItem([
        vlayout([
            titleLabel,
            descLabel
        ], {
            space: 15,
            layoutConfig: layoutConfig().mostWidth().fitHeight(),
        })
    ]).apply({
        layoutConfig: layoutConfig().mostWidth().fitHeight(),
        padding: { left: hPadding, right: hPadding, top: padding + 5, bottom: padding },
        identifier: 'headerCell'
    });
}
// 圆点Widget
function pointWidget() {
    return container({
        width: 12,
        height: 12,
        backgroundColor: PubTool.themColor,
        corners: 6,
        layoutConfig: layoutConfig().just()
    });
}
// 查看代码widget
function codeEntrance(caseModel) {
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
            });
        }
    });
}
// 2.case cell
function _caseCell(caseModel) {
    let padding = 20;
    let hPadding = 20;
    let titleLabel = text({
        text: caseModel.title,
        textSize: 16,
        fontStyle: 'bold',
        textColor: Color.BLACK,
        textAlignment: Gravity.Left,
        maxLines: 1,
        layoutConfig: layoutConfig().fit()
    });
    let caseTitle = hlayout([
        pointWidget(),
        titleLabel
    ], {
        layoutConfig: layoutConfig().fit(),
        space: 10,
        gravity: Gravity.CenterY,
    });
    let descLabel = text({
        text: caseModel.desc,
        layoutConfig: {
            widthSpec: LayoutSpec.MOST,
            heightSpec: LayoutSpec.FIT,
        },
        textSize: 15,
        textColor: Color.safeParse('#666666'),
        textAlignment: Gravity.Left,
        maxLines: 0,
        lineSpacing: 4,
    });
    let edge = 0;
    let container = stack([
        // 内部具体case
        CaseRoute.caseUIorCode(caseModel.ui)
    ], {
        layoutConfig: layoutConfig().mostWidth().fitHeight(),
        padding: { left: edge, right: edge, top: edge, bottom: edge },
        backgroundColor: Color.WHITE,
    });
    return listItem([
        vlayout([
            flexlayout([
                caseTitle,
                codeEntrance(caseModel)
            ], {
                flexConfig: {
                    flexDirection: FlexDirection.ROW,
                    justifyContent: Justify.SPACE_BETWEEN,
                    alignItems: Align.CENTER,
                },
                layoutConfig: layoutConfig().mostWidth().fitHeight(),
            }),
            container,
            descLabel
        ], {
            space: 25,
            layoutConfig: layoutConfig().most(),
        })
    ]).apply({
        layoutConfig: {
            widthSpec: LayoutSpec.MOST,
            heightSpec: LayoutSpec.FIT
        },
        identifier: 'contentCell',
        padding: { left: hPadding, right: hPadding, top: padding, bottom: padding },
    });
}
let ComponentDetail = class ComponentDetail extends Panel {
    onCreate() {
        // 拿到上个Panel传过来的数据
        if (this.getInitData()) {
            this.model = this.getInitData();
        }
    }
    onShow() {
        var _a, _b;
        navbar(context).setTitle((_b = (_a = this.model) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : '');
    }
    build(rootView) {
        var _a, _b;
        list({
            itemCount: 1 + ((_b = (_a = this.model) === null || _a === void 0 ? void 0 : _a.cases.length) !== null && _b !== void 0 ? _b : 0),
            renderItem: (index) => this.listItemCell(index)
        }).apply({
            layoutConfig: layoutConfig().most(),
        }).in(rootView);
    }
    listItemCell(index) {
        if (this.model) {
            if (index == 0)
                return _descCell(this.model);
            return _caseCell(this.model.cases[index - 1]);
        }
        return new ListItem();
    }
};
ComponentDetail = __decorate([
    Entry
], ComponentDetail);
export { ComponentDetail };
//# sourceMappingURL=ComponentDetail.js.map