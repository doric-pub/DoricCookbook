var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Panel, vlayout, stack, LayoutSpec, Gravity, text, Color, animate, TruncateAt, } from "doric";
function lineText(cont, config) {
    let tv1;
    let sTv1;
    return [
        stack([
            (sTv1 = text(config).apply({
                alpha: 0,
                textSize: 17,
                fontStyle: "italic",
            })),
            (tv1 = text({
                text: sTv1.text,
                textColor: Color.RED,
                textSize: sTv1.textSize,
                fontStyle: sTv1.fontStyle,
                layoutConfig: {
                    widthSpec: LayoutSpec.JUST,
                    heightSpec: LayoutSpec.FIT,
                },
                truncateAt: TruncateAt.Clip,
            })),
        ]),
        () => __awaiter(this, void 0, void 0, function* () {
            const width = yield sTv1.getWidth(cont);
            return animate(cont)({
                animations: () => {
                    tv1.width = width;
                },
                duration: 5000,
            });
        }),
    ];
}
const poem = `In faith I do not love thee with mine eyes,
For they in thee a thousand errors note;
But \`tis my heart that loves what they despise,
Who in despite of view is pleased to dote.
Nor are mine ears with thy tongue\`s tune delighted;
Nor tender feeling to base touches prone,
Nor taste, nor smell, desire to be invited
To any sensual feast with thee alone.
But my five wits, nor my five senses can
Dissuade one foolish heart from serving thee,
Who leaves unswayed the likeness of a man,
Thy proud heart\`s slave and vassal wretch to be.
Only my plague thus far I count my gain,
That she that makes me sin awards me pain.`;
let TextAnimationDemo = class TextAnimationDemo extends Panel {
    build(root) {
        const poemLines = poem.split("\n").map((e) => {
            return lineText(this.context, {
                text: e.trim(),
            });
        });
        vlayout([...poemLines.map((e) => e[0])], {
            layoutConfig: {
                widthSpec: LayoutSpec.MOST,
                heightSpec: LayoutSpec.MOST,
            },
            backgroundColor: Color.WHITE,
            space: 12,
            gravity: Gravity.Center,
        }).in(root);
        this.addOnRenderFinishedCallback(() => __awaiter(this, void 0, void 0, function* () {
            const animates = poemLines.map((e) => e[1]);
            for (let i = 0; i < animates.length; i++) {
                yield animates[i]();
            }
        }));
    }
};
TextAnimationDemo = __decorate([
    Entry
], TextAnimationDemo);
export { TextAnimationDemo };
//# sourceMappingURL=TextAnimationDemo.js.map