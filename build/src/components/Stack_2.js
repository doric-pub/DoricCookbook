import { Color, Gravity, layoutConfig, stack } from "doric";
import * as PubTool from "../PubTool";
function box(backgroundColor, width) {
    return stack([], {
        width: width,
        height: width,
        layoutConfig: layoutConfig().just(),
        backgroundColor: backgroundColor,
    });
}
export function ui() {
    return stack([
        box(Color.BLUE, 100),
        box(Color.CYAN, 80),
        box(Color.RED, 60),
    ], {
        width: 240,
        height: 160,
        layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
        backgroundColor: PubTool.bgColor,
    });
}
export function codeString() {
    return `function box(backgroundColor: Color, width: number) {
        return stack([],
            {
                width: width,
                height: width,
                layoutConfig: layoutConfig().just(),
                backgroundColor: backgroundColor,
            }
        )
    }
    
    export function ui() {
        return stack(
            [
                box(Color.BLUE, 100),
                box(Color.CYAN, 80),
                box(Color.RED, 60),
            ],
            {
                width: 240,
                height: 160,
                layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    `;
}
//# sourceMappingURL=Stack_2.js.map