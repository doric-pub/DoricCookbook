import { Color, Gravity, layoutConfig, stack } from "doric";
import * as PubTool from "../PubTool";
function subViews() {
    let blueView = stack([], {
        width: 80,
        height: 80,
        top: 10,
        left: 20,
        layoutConfig: layoutConfig().just(),
        backgroundColor: Color.BLUE,
    });
    let cyanView = stack([], {
        width: 80,
        height: 80,
        top: 0,
        right: 240,
        layoutConfig: layoutConfig().just(),
        backgroundColor: Color.CYAN
    });
    let redView = stack([], {
        width: 60,
        height: 60,
        bottom: 160,
        backgroundColor: Color.RED,
        layoutConfig: layoutConfig().just(),
    });
    return [
        blueView,
        cyanView,
        redView
    ];
}
export function ui() {
    return stack([
        ...subViews()
    ], {
        width: 240,
        height: 160,
        layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
        backgroundColor: PubTool.bgColor,
    });
}
export function codeString() {
    return `function subViews() {
        let blueView = stack([],
            {
                width: 80,
                height: 80,
                top: 10,
                left: 20,
                layoutConfig: layoutConfig().just(),
                backgroundColor: Color.BLUE,
            }
        )
        let cyanView = stack([],
            {
                width: 80,
                height: 80,
                top: 0,
                right: 240,
                layoutConfig: layoutConfig().just(),
                backgroundColor: Color.CYAN
            }
        )
        let redView = stack([],
            {
                width: 60,
                height: 60,
                bottom: 160,
                backgroundColor: Color.RED,
                layoutConfig: layoutConfig().just(),
            }
        )
        return [
            blueView,
            cyanView,
            redView
        ]
    }
    
    export function ui() {
        return stack(
            [
                ...subViews()
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
//# sourceMappingURL=Stack_5.js.map