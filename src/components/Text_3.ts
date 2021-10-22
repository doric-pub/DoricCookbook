
import { Gravity, layoutConfig, LayoutSpec, text, vlayout } from "doric"
import * as PubTool from "../PubTool"

/// 字体文件使用
export function ui() {
    return vlayout([
        text({
            text: "Icon Font text from   \ue631 ",
            textSize: 20,
            font: 'iconfont'
        }),
        text({
            text: "Icon Font text from assets/fonts/ \ue631 ",
            textSize: 20,
            font: '/res/font/Hanabi.ttf'
        }),
    ], {
        space: 10,
        gravity: Gravity.Left,
        backgroundColor: PubTool.bgColor,
        layoutConfig: layoutConfig().most().configHeight(LayoutSpec.FIT)
    })
}

export function codeString() {

    return `
    /// 字体文件使用
    export function ui() {
        return vlayout([
            text({
                text: "Icon Font text from   \ue631 ",
                textSize: 20,
                font: 'iconfont'
            }),
            text({
                text: "Icon Font text from assets/fonts/ \ue631 ",
                textSize: 20,
                font: '/res/font/Hanabi.ttf'
            }),
        ], {
            space: 10,
            gravity: Gravity.Left,
            backgroundColor: PubTool.bgColor,
            layoutConfig: layoutConfig().most().configHeight(LayoutSpec.FIT)
        })
    }
    `
}


