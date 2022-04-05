import { AssetsResource, Gravity, layoutConfig, LayoutSpec, text, vlayout } from "doric";
import * as PubTool from "../PubTool";
/// 字体文件使用
export function ui() {
    return vlayout([
        text({
            text: "this is Hanabi.ttf",
            textSize: 20,
            font: 'Hanabi.ttf'
        }),
        text({
            text: "Icon Font text from   \ue631 ",
            textSize: 20,
            font: 'iconfont'
        }),
        text({
            text: "Icon Font text from AssetsResource \ue631 ",
            textSize: 20,
            font: new AssetsResource('/fonts/iconfont.ttf'),
        }),
        text({
            text: "Font from custom loader:",
            textSize: 15,
        }),
        text({
            text: "Font from custom loader.",
            textSize: 22,
            font: new AssetsResource('/fonts/Hanabi.ttf')
        }),
    ], {
        space: 10,
        gravity: Gravity.Left,
        backgroundColor: PubTool.bgColor,
        layoutConfig: layoutConfig().most().configHeight(LayoutSpec.FIT)
    });
}
export function codeString() {
    return `
    /// 字体文件使用
    export function ui() {
        return vlayout([
            text({
                text: "this is Hanabi.ttf",
                textSize: 20,
                font: 'Hanabi.ttf'
            }),
            text({
                text: "Icon Font text from   \ue631 ",
                textSize: 20,
                font: 'iconfont'
            }),
            text({
                text: "Icon Font text from AssetsResource \ue631 ",
                textSize: 20,
                font: new AssetsResource('/fonts/iconfont.ttf'),
            }),
            text({
                text: "Font from custom loader:",
                textSize: 15,
            }),
            text({
                text: "Font from custom loader.",
                textSize: 22,
                font: new AssetsResource('/fonts/Hanabi.ttf')
            }),
        ], {
            space: 10,
            gravity: Gravity.Left,
            backgroundColor: PubTool.bgColor,
            layoutConfig: layoutConfig().most().configHeight(LayoutSpec.FIT)
        })
    }
    `;
}
//# sourceMappingURL=Text_3.js.map