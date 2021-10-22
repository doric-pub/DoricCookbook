
import { Color, Gravity, layoutConfig, LayoutSpec, stack, text, vlayout } from "doric"
import * as PubTool from "../PubTool"

/// 文字对齐方式
export function ui() {

    return stack(
        [
            vlayout([
                text({
                    text: "走进Doric",
                    textSize: 18,
                    backgroundColor: Color.MAGENTA,
                    textAlignment: Gravity.Left,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
                text({
                    text: "走进Doric",
                    textSize: 18,
                    backgroundColor: Color.GREEN,
                    textAlignment: Gravity.Center,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
                text({
                    text: "走进Doric",
                    textSize: 18,
                    backgroundColor: PubTool.themColor,
                    textAlignment: Gravity.Right,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
                text({
                    text: "走进Doric",
                    textSize: 18,
                    backgroundColor: Color.CYAN,
                    textAlignment: Gravity.Bottom,
                    height: 50,
                    layoutConfig: layoutConfig().mostWidth().justHeight(),
                }),
            ], {
                space: 10,
                layoutConfig: layoutConfig().most(),
            })
        ],
        {
            width: 240,
            height: 160,
            layoutConfig: layoutConfig().justWidth().justHeight().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}

export function codeString() {

    return `
    /// 文字对齐方式
    export function ui() {
    
        return stack(
            [
                vlayout([
                    text({
                        text: "走进Doric",
                        textSize: 18,
                        backgroundColor: Color.MAGENTA,
                        textAlignment: Gravity.Left,
                        layoutConfig: layoutConfig().mostWidth().fitHeight(),
                    }),
                    text({
                        text: "走进Doric",
                        textSize: 18,
                        backgroundColor: Color.GREEN,
                        textAlignment: Gravity.Center,
                        layoutConfig: layoutConfig().mostWidth().fitHeight(),
                    }),
                    text({
                        text: "走进Doric",
                        textSize: 18,
                        backgroundColor: PubTool.themColor,
                        textAlignment: Gravity.Right,
                        layoutConfig: layoutConfig().mostWidth().fitHeight(),
                    }),
                    text({
                        text: "走进Doric",
                        textSize: 18,
                        backgroundColor: Color.CYAN,
                        textAlignment: Gravity.Bottom,
                        height: 50,
                        layoutConfig: layoutConfig().mostWidth().justHeight(),
                    }),
                ], {
                    space: 10,
                    layoutConfig: layoutConfig().most(),
                })
            ],
            {
                width: 240,
                height: 160,
                layoutConfig: layoutConfig().justWidth().justHeight().configAlignment(Gravity.Center),
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    `
}