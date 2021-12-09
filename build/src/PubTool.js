import { Color, gravity, layoutConfig, LayoutSpec, Stack, Text, text } from "doric";
export const themColor = Color.parse('#766BEA');
export const bgColor = Color.parse('#FDF5E6');
/// 生成随机色
export function randomColor() {
    return Color.safeParse(randomHexColor());
}
// 随机生成RGB颜色
export function randomRgbColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`; //返回rgb(r,g,b)格式颜色
}
// 随机生成十六进制颜色
export function randomHexColor() {
    var hex = Math.floor(Math.random() * 16777216).toString(16);
    while (hex.length < 6) {
        hex = '0' + hex;
    }
    return '#' + hex; //返回‘#'开头16进制颜色
}
export const colors = [
    Color.RED,
    Color.CYAN,
    Color.YELLOW,
    Color.MAGENTA,
    themColor
];
/// 生成随机色
export function randomColorForDemo() {
    let index = (Math.floor(Math.random() * colors.length)) % (colors.length);
    return colors[index];
}
export function label(str) {
    return text({
        text: str,
        textSize: 16,
    });
}
export function box(idx = 0) {
    return (new Stack).also(it => {
        it.width = it.height = 20;
        it.backgroundColor = colors[idx || 0];
    });
}
export function boxStr(str, idx = 0) {
    return (new Text).also(it => {
        it.width = it.height = 20;
        it.text = str;
        it.textColor = Color.WHITE;
        it.backgroundColor = colors[idx || 0];
    });
}
export function title(str) {
    return text({
        text: str,
        layoutConfig: layoutConfig().configWidth(LayoutSpec.MOST),
        textSize: 30,
        textColor: Color.WHITE,
        backgroundColor: colors[1],
        textAlignment: gravity().center(),
        height: 50,
    });
}
//# sourceMappingURL=PubTool.js.map