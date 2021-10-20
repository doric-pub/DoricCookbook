import { Color } from "doric";

export const themColor = Color.parse('#766BEA')

/// 生成随机色
export function randomColor() {
    return Color.safeParse(randomHexColor())
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
