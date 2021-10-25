
import { Color, Gravity, hlayout, layoutConfig, stack, text, vlayout } from "doric"
import * as PubTool from "../PubTool"

/// 水平线性布局容器控件
export function ui() {

    return stack(
        [
            vlayout([

                hlayout([
                    text({
                        text: "固定宽",
                        textSize: 12,
                        height: 40,
                        width: 60,
                        layoutConfig: layoutConfig().just(),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                hlayout([
                    text({
                        text: "固定宽",
                        textSize: 12,
                        height: 40,
                        width: 60,
                        layoutConfig: layoutConfig().just(),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                hlayout([
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                hlayout([
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 2",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(2),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

            ], {
                space: 5,
                layoutConfig: layoutConfig().most()
            })
        ],
        {
            layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}

export function codeString() {

    return `
/// 水平线性布局容器控件
export function ui() {

    return stack(
        [
            vlayout([

                hlayout([
                    text({
                        text: "固定宽",
                        textSize: 12,
                        height: 40,
                        width: 60,
                        layoutConfig: layoutConfig().just(),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                hlayout([
                    text({
                        text: "固定宽",
                        textSize: 12,
                        height: 40,
                        width: 60,
                        layoutConfig: layoutConfig().just(),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                hlayout([
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                hlayout([
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 2",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(2),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

            ], {
                space: 5,
                layoutConfig: layoutConfig().most()
            })
        ],
        {
            layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}
    `
}