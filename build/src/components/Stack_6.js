import { Color, Gravity, layoutConfig, LayoutSpec, stack, text } from "doric";
import * as PubTool from "../PubTool";
export function ui() {
    return stack([
        stack([
            text({
                text: "我的最大高度不超过100",
                backgroundColor: Color.CYAN,
                layoutConfig: {
                    widthSpec: LayoutSpec.MOST,
                    heightSpec: LayoutSpec.JUST,
                    maxHeight: 100
                },
                height: 120,
            }),
        ], {
            backgroundColor: Color.RED,
            layoutConfig: layoutConfig().most()
        }),
    ], {
        width: 240,
        height: 160,
        layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
        backgroundColor: PubTool.bgColor,
    });
}
export function codeString() {
    return `export function ui() {
        return stack(
          [
            stack(
              [
                text({
                  text: "我的最大高度不超过100",
                  backgroundColor: Color.CYAN,
                  layoutConfig: {
                      widthSpec: LayoutSpec.MOST,
                      heightSpec: LayoutSpec.JUST,
                      maxHeight: 100
                  },
                  height: 120,
                }),
              ],
              {
                backgroundColor: Color.RED,
                layoutConfig: layoutConfig().most()
              }
            ),
          ],
          {
            width: 240,
            height: 160,
            layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
          }
        );
      }
    `;
}
//# sourceMappingURL=Stack_6.js.map