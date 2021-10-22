
import { Color, GradientOrientation, Gravity, layoutConfig, LayoutSpec, stack, text, vlayout } from "doric"
import * as PubTool from "../PubTool"

/// 颜色渐变
export function ui() {

    return stack(
        [
            vlayout([
                text({
                    textAlignment: Gravity.Left,
                    maxLines: 0,
                    // layoutConfig: layoutConfig().mostWidth().fitHeight(),
                    htmlText: `<div>
                    <ul>
                    <li>
                    <h2>br</h2>
                    <p>
                    To break<br/>lines<br/>in a<br/>paragraph,<br/>use the br tag.
                    </p>
                    </li>
                    <li>
                    <h2>p</h2>
                    <p>This is a paragraph.</p>
                    <p>This is a paragraph.</p>
                    <p>Paragraph elements are defined by p tags.</p>
                    <p style="color:#FF0000 text-decoration:line-through background:#eeeeee">
                    Support setting background color and foreground color and underline.</p>
                    </li>
                    <li>
                    <h2>ul</h2>
                    <p>An unordered list:</p>
                    <ul>
                    <li>coffee</li>
                    <li>tea</li>
                    <li>milk</li>
                    </ul>
                    </li>
                    <li>
                    <h2>div</h2>
                    <h3>This is a header</h3>
                    <p>This is a paragraph.</p>
                    <li>
                    <h1>a</h1>
                    <a href="https://m.baidu.com">Click anchor</a>
                    </li>
                    </div>
                    `
                }),
            ], {
                space: 10,
                layoutConfig: layoutConfig().most(),
            })
        ],
        {
            layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}

export function codeString() {

    return `
    text({
        textAlignment: Gravity.Left,
        maxLines: 0,
        // layoutConfig: layoutConfig().mostWidth().fitHeight(),
        htmlText: \`<div>
        <ul>
        <li>
        <h2>br</h2>
        <p>
        To break<br/>lines<br/>in a<br/>paragraph,<br/>use the br tag.
        </p>
        </li>
        <li>
        <h2>p</h2>
        <p>This is a paragraph.</p>
        <p>This is a paragraph.</p>
        <p>Paragraph elements are defined by p tags.</p>
        <p style="color:#FF0000 text-decoration:line-through background:#eeeeee">
        Support setting background color and foreground color and underline.</p>
        </li>
        <li>
        <h2>ul</h2>
        <p>An unordered list:</p>
        <ul>
        <li>coffee</li>
        <li>tea</li>
        <li>milk</li>
        </ul>
        </li>
        <li>
        <h2>div</h2>
        <h3>This is a header</h3>
        <p>This is a paragraph.</p>
        <li>
        <h1>a</h1>
        <a href="https://m.baidu.com">Click anchor</a>
        </li>
        </div>
       \`
    }),
    
    `
}