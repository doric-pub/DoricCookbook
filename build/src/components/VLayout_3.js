import { Color, Gravity, hlayout, layoutConfig, stack, text, vlayout } from "doric";
import * as PubTool from "../PubTool";
/// 垂直线性布局容器控件
export function ui() {
    let width = 70;
    return stack([
        hlayout([
            vlayout([
                text({
                    text: "固定高",
                    textSize: 13,
                    lineSpacing: 0,
                    height: 40,
                    width: width,
                    layoutConfig: layoutConfig().just(),
                    backgroundColor: Color.RED
                }),
                text({
                    text: "weight: 1",
                    width: width,
                    textSize: 13,
                    lineSpacing: 0,
                    layoutConfig: layoutConfig().just().configWeight(1),
                    backgroundColor: Color.CYAN
                }),
            ], {
                gravity: Gravity.Center,
                layoutConfig: layoutConfig().fitWidth().mostHeight()
            }),
            vlayout([
                text({
                    text: "固定高",
                    textSize: 13,
                    lineSpacing: 0,
                    height: 40,
                    width: width,
                    layoutConfig: layoutConfig().just(),
                    backgroundColor: Color.RED
                }),
                text({
                    text: "weight: 1",
                    width: width,
                    textSize: 13,
                    lineSpacing: 0,
                    layoutConfig: layoutConfig().just().configWeight(1),
                    backgroundColor: Color.CYAN
                }),
                text({
                    text: "weight: 1",
                    width: width,
                    textSize: 13,
                    lineSpacing: 0,
                    layoutConfig: layoutConfig().just().configWeight(1),
                    backgroundColor: Color.YELLOW
                }),
            ], {
                gravity: Gravity.Center,
                layoutConfig: layoutConfig().fitWidth().mostHeight()
            }),
            vlayout([
                text({
                    text: "weight: 1",
                    textSize: 13,
                    lineSpacing: 0,
                    width: width,
                    layoutConfig: layoutConfig().just().configWeight(1),
                    backgroundColor: Color.RED
                }),
                text({
                    text: "weight: 1",
                    textSize: 13,
                    lineSpacing: 0,
                    width: width,
                    layoutConfig: layoutConfig().just().configWeight(1),
                    backgroundColor: Color.CYAN
                }),
                text({
                    text: "weight: 1",
                    textSize: 13,
                    lineSpacing: 0,
                    width: width,
                    layoutConfig: layoutConfig().just().configWeight(1),
                    backgroundColor: Color.YELLOW
                }),
            ], {
                gravity: Gravity.Center,
                layoutConfig: layoutConfig().fitWidth().mostHeight()
            }),
            vlayout([
                text({
                    text: "weight: 1",
                    textSize: 13,
                    lineSpacing: 0,
                    width: width,
                    layoutConfig: layoutConfig().just().configWeight(1),
                    backgroundColor: Color.RED
                }),
                text({
                    text: "weight: 2",
                    textSize: 13,
                    lineSpacing: 0,
                    width: width,
                    layoutConfig: layoutConfig().just().configWeight(2),
                    backgroundColor: Color.CYAN
                }),
                text({
                    text: "weight: 1",
                    textSize: 13,
                    lineSpacing: 0,
                    width: width,
                    layoutConfig: layoutConfig().just().configWeight(1),
                    backgroundColor: Color.YELLOW
                }),
            ], {
                gravity: Gravity.Center,
                layoutConfig: layoutConfig().fitWidth().mostHeight()
            }),
        ], {
            space: 10,
            height: 260,
            layoutConfig: layoutConfig().mostWidth().justHeight()
        })
    ], {
        layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
        backgroundColor: PubTool.bgColor,
    });
}
export function codeString() {
    return `
/// 垂直线性布局容器控件
export function ui() {
    let width = 70
    return stack(
        [
            hlayout([

                vlayout([
                    text({
                        text: "固定高",
                        textSize: 13,
                        lineSpacing: 0,
                        height: 40,
                        width: width,
                        layoutConfig: layoutConfig().just(),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        width: width,
                        textSize: 13,
                        lineSpacing: 0,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                vlayout([
                    text({
                        text: "固定高",
                        textSize: 13,
                        lineSpacing: 0,
                        height: 40,
                        width: width,
                        layoutConfig: layoutConfig().just(),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        width: width,
                        textSize: 13,
                        lineSpacing: 0,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        width: width,
                        textSize: 13,
                        lineSpacing: 0,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                vlayout([
                    text({
                        text: "weight: 1",
                        textSize: 13,
                        lineSpacing: 0,
                        width: width,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        textSize: 13,
                        lineSpacing: 0,
                        width: width,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        textSize: 13,
                        lineSpacing: 0,
                        width: width,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                vlayout([
                    text({
                        text: "weight: 1",
                        textSize: 13,
                        lineSpacing: 0,
                        width: width,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 2",
                        textSize: 13,
                        lineSpacing: 0,
                        width: width,
                        layoutConfig: layoutConfig().just().configWeight(2),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        textSize: 13,
                        lineSpacing: 0,
                        width: width,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

            ], {
                space: 10,
                height: 260,
                layoutConfig: layoutConfig().mostWidth().justHeight()
            })
        ],
        {
            layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}
    `;
}
//# sourceMappingURL=VLayout_3.js.map