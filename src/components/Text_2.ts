
import { Color, Gravity, layoutConfig, LayoutSpec, stack, Text, text, vlayout } from "doric"

/// 字体文件使用
export function ui() {
    return vlayout([
        text({
            text: "Icon Font text from   \ue631 ",
            textSize: 20,
            font: 'iconfont3'
        }),
        text({
            text: "Icon Font text from assets/fonts/ \ue631 ",
            textSize: 20,
            font: 'iconfont.ttf'
        }),
    ], {
        space: 10,
        gravity: Gravity.Left,
        layoutConfig: layoutConfig().most().configHeight(LayoutSpec.FIT)
    })
}

export function codeString() {
    
    return `
    import { Color, Gravity, layoutConfig, LayoutSpec, stack, Text, text, vlayout } from "doric"

    /// 字体文件使用
    export function ui() {
        return vlayout([
            text({
                text: "Icon Font text from   \ue631 ",
                textSize: 20,
                font: 'iconfont3'
            }),
            text({
                text: "Icon Font text from assets/fonts/ \ue631 ",
                textSize: 20,
                font: 'iconfont.ttf'
            }),
        ], {
            space: 10,
            gravity: Gravity.Left,
            layoutConfig: layoutConfig().most().configHeight(LayoutSpec.FIT)
        })
    }
    `
}