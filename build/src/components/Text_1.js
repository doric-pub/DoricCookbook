import { Color, Gravity, layoutConfig, text, vlayout } from "doric";
import * as PubTool from "../PubTool";
export function ui() {
    return vlayout([
        text({
            text: "This is normal text",
            textSize: 20,
        }),
        text({
            text: "This is bold text",
            textSize: 20,
            fontStyle: "bold"
        }),
        text({
            text: "This is normal text with shadow ",
            textSize: 20,
            shadow: {
                color: Color.parse("#1DD6DE"),
                offsetX: 0,
                offsetY: 1,
                opacity: 0.8,
                radius: 3.0
            }
        }),
        text({
            text: "This is line Spaceing 0,\nSecond line",
            maxLines: 0,
        }),
        text({
            text: "This is line Spaceing 40,\nSecond line",
            maxLines: 0,
            lineSpacing: 40,
            textColor: Color.MAGENTA,
            textAlignment: Gravity.Right,
            onClick: function () {
                this.textAlignment = Gravity.Left;
                this.textColor = Color.BLACK;
            }
        }),
        text({
            text: "This is strikethrough text.",
            textSize: 20,
            textColor: Color.RED,
            strikethrough: true,
        }),
        text({
            text: "This is underline text.",
            textSize: 20,
            textColor: Color.BLUE,
            underline: true,
        }),
    ], {
        space: 10,
        gravity: Gravity.Left,
        backgroundColor: PubTool.bgColor,
        layoutConfig: layoutConfig().mostWidth().fitHeight()
    });
}
export function codeString() {
    return `
    export function ui() {
        return vlayout([
            text({
                text: "This is normal text",
                textSize: 20,
            }),
            text({
                text: "This is bold text",
                textSize: 20,
                fontStyle: "bold"
            }),
            text({
                text: "This is normal text with shadow ",
                textSize: 20,
                shadow: {
                    color: Color.parse("#1DD6DE"),
                    offsetX: 0,
                    offsetY: 1,
                    opacity: 0.8,
                    radius: 3.0
                }
            }),
            text({
                text: "This is line Spaceing 0,\nSecond line",
                maxLines: 0,
            }),
            text({
                text: "This is line Spaceing 40,\nSecond line",
                maxLines: 0,
                lineSpacing: 40,
                textColor: Color.MAGENTA,
                textAlignment: Gravity.Right,
                onClick: function () {
                    (this as Text).textAlignment = Gravity.Left;
                    (this as Text).textColor = Color.BLACK;
                }
            }),
            text({
                text: "This is strikethrough text.",
                textSize: 20,
                textColor: Color.RED,
                strikethrough: true,
            }),
            text({
                text: "This is underline text.",
                textSize: 20,
                textColor: Color.BLUE,
                underline: true,
            }),
    
        ], {
            space: 10,
            gravity: Gravity.Left,
            backgroundColor: PubTool.bgColor,
            layoutConfig: layoutConfig().mostWidth().fitHeight()
        })
    }
    `;
}
//# sourceMappingURL=Text_1.js.map