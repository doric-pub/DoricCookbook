'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var doric = require('doric');

const themColor = doric.Color.parse('#766BEA');
const bgColor = doric.Color.parse('#FDF5E6');
/// 生成随机色
function randomColor() {
    return doric.Color.safeParse(randomHexColor());
}
// 随机生成十六进制颜色
function randomHexColor() {
    var hex = Math.floor(Math.random() * 16777216).toString(16);
    while (hex.length < 6) {
        hex = '0' + hex;
    }
    return '#' + hex; //返回‘#'开头16进制颜色
}
const colors$2 = [
    doric.Color.RED,
    doric.Color.CYAN,
    doric.Color.YELLOW,
    doric.Color.MAGENTA,
    themColor
];
function label$2(str) {
    return doric.text({
        text: str,
        textSize: 16,
    });
}
function title$1(str) {
    return doric.text({
        text: str,
        layoutConfig: doric.layoutConfig().configWidth(doric.LayoutSpec.MOST),
        textSize: 30,
        textColor: doric.Color.WHITE,
        backgroundColor: colors$2[1],
        textAlignment: doric.gravity().center(),
        height: 50,
    });
}

var __decorate$s = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Container = class Container extends doric.Stack {
    constructor() {
        super();
    }
    apply(config) {
        let t = super.apply(config);
        let child = config.child;
        if (child) {
            t.addChild(child);
        }
        if (config.isRandomColor) {
            t.backgroundColor = randomColor();
        }
        return t;
    }
};
Container = __decorate$s([
    doric.ViewComponent,
    __metadata$1("design:paramtypes", [])
], Container);
function container(config) {
    const ret = new Container;
    if (config) {
        ret.apply(config);
    }
    return ret;
}

function ui$p() {
    return doric.vlayout([
        doric.text({
            text: "This is normal text",
            textSize: 20,
        }),
        doric.text({
            text: "This is bold text",
            textSize: 20,
            fontStyle: "bold"
        }),
        doric.text({
            text: "This is normal text with shadow ",
            textSize: 20,
            shadow: {
                color: doric.Color.parse("#1DD6DE"),
                offsetX: 0,
                offsetY: 1,
                opacity: 0.8,
                radius: 3.0
            }
        }),
        doric.text({
            text: "This is line Spaceing 0,\nSecond line",
            maxLines: 0,
        }),
        doric.text({
            text: "This is line Spaceing 40,\nSecond line",
            maxLines: 0,
            lineSpacing: 40,
            textColor: doric.Color.MAGENTA,
            textAlignment: doric.Gravity.Right,
            onClick: function () {
                this.textAlignment = doric.Gravity.Left;
                this.textColor = doric.Color.BLACK;
            }
        }),
        doric.text({
            text: "This is strikethrough text.",
            textSize: 20,
            textColor: doric.Color.RED,
            strikethrough: true,
        }),
        doric.text({
            text: "This is underline text.",
            textSize: 20,
            textColor: doric.Color.BLUE,
            underline: true,
        }),
    ], {
        space: 10,
        gravity: doric.Gravity.Left,
        backgroundColor: bgColor,
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight()
    });
}
function codeString$p() {
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

/// 文字对齐方式
function ui$o() {
    return doric.stack([
        doric.vlayout([
            doric.text({
                text: "走进Doric",
                textSize: 18,
                backgroundColor: doric.Color.MAGENTA,
                textAlignment: doric.Gravity.Left,
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            }),
            doric.text({
                text: "走进Doric",
                textSize: 18,
                backgroundColor: doric.Color.GREEN,
                textAlignment: doric.Gravity.Center,
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            }),
            doric.text({
                text: "走进Doric",
                textSize: 18,
                backgroundColor: themColor,
                textAlignment: doric.Gravity.Right,
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            }),
            doric.text({
                text: "走进Doric",
                textSize: 18,
                backgroundColor: doric.Color.CYAN,
                textAlignment: doric.Gravity.Bottom,
                height: 50,
                layoutConfig: doric.layoutConfig().mostWidth().justHeight(),
            }),
        ], {
            space: 10,
            layoutConfig: doric.layoutConfig().most(),
        })
    ], {
        width: 240,
        height: 160,
        layoutConfig: doric.layoutConfig().justWidth().justHeight().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$o() {
    return `
    /// 文字对齐方式
    export function ui() {
    
        return stack(
            [
                vlayout([
                    text({
                        text: "走进Doric",
                        textSize: 18,
                        backgroundColor: Color.MAGENTA,
                        textAlignment: Gravity.Left,
                        layoutConfig: layoutConfig().mostWidth().fitHeight(),
                    }),
                    text({
                        text: "走进Doric",
                        textSize: 18,
                        backgroundColor: Color.GREEN,
                        textAlignment: Gravity.Center,
                        layoutConfig: layoutConfig().mostWidth().fitHeight(),
                    }),
                    text({
                        text: "走进Doric",
                        textSize: 18,
                        backgroundColor: PubTool.themColor,
                        textAlignment: Gravity.Right,
                        layoutConfig: layoutConfig().mostWidth().fitHeight(),
                    }),
                    text({
                        text: "走进Doric",
                        textSize: 18,
                        backgroundColor: Color.CYAN,
                        textAlignment: Gravity.Bottom,
                        height: 50,
                        layoutConfig: layoutConfig().mostWidth().justHeight(),
                    }),
                ], {
                    space: 10,
                    layoutConfig: layoutConfig().most(),
                })
            ],
            {
                width: 240,
                height: 160,
                layoutConfig: layoutConfig().justWidth().justHeight().configAlignment(Gravity.Center),
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    `;
}

/// 字体文件使用
function ui$n() {
    return doric.vlayout([
        doric.text({
            text: "Icon Font text from assets/fonts/  \ue631 ",
            textSize: 20,
            font: 'assets/fonts/iconfont.ttf'
        }),
        doric.text({
            text: "Icon Font text from assets/fonts/ \ue631 ",
            textSize: 20,
            font: 'assets/fonts/iconfont'
        }),
    ], {
        space: 10,
        gravity: doric.Gravity.Left,
        backgroundColor: bgColor,
        layoutConfig: doric.layoutConfig().most().configHeight(doric.LayoutSpec.FIT)
    });
}
function codeString$n() {
    return `
/// 字体文件使用
export function ui() {
    return vlayout([
        text({
            text: "Icon Font text from assets/fonts/  \ue631 ",
            textSize: 20,
            font: 'assets/fonts/iconfont.ttf'
        }),
        text({
            text: "Icon Font text from assets/fonts/ \ue631 ",
            textSize: 20,
            font: 'assets/fonts/iconfont'
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

/// 颜色渐变
function ui$m() {
    return doric.stack([
        doric.vlayout([
            doric.text({
                text: "渐变方向为：L_R",
                textSize: 18,
                fontStyle: "bold",
                backgroundColor: doric.Color.TRANSPARENT,
                textColor: {
                    start: doric.Color.RED,
                    end: doric.Color.GREEN,
                    orientation: doric.GradientOrientation.LEFT_RIGHT,
                },
                textAlignment: doric.Gravity.Left,
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            }),
            doric.text({
                text: "渐变方向为：R_L",
                textSize: 18,
                fontStyle: "bold",
                backgroundColor: doric.Color.TRANSPARENT,
                textColor: {
                    start: doric.Color.RED,
                    end: doric.Color.GREEN,
                    orientation: doric.GradientOrientation.RIGHT_LEFT,
                },
                textAlignment: doric.Gravity.Left,
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            }),
            doric.text({
                text: "渐变方向为：T_B",
                textSize: 18,
                fontStyle: "bold",
                backgroundColor: doric.Color.TRANSPARENT,
                textColor: {
                    start: doric.Color.RED,
                    end: doric.Color.GREEN,
                    orientation: doric.GradientOrientation.TOP_BOTTOM,
                },
                textAlignment: doric.Gravity.Left,
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            }),
            doric.text({
                text: "渐变方向为：TL_BR",
                textSize: 18,
                fontStyle: "bold",
                backgroundColor: doric.Color.TRANSPARENT,
                textColor: {
                    start: doric.Color.RED,
                    end: doric.Color.GREEN,
                    orientation: doric.GradientOrientation.TL_BR,
                },
                textAlignment: doric.Gravity.Left,
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            }),
        ], {
            space: 10,
            layoutConfig: doric.layoutConfig().most(),
        })
    ], {
        width: 240,
        layoutConfig: doric.layoutConfig().justWidth().fitHeight().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$m() {
    return `
/// 颜色渐变
export function ui() {

    return stack(
        [
            vlayout([
                text({
                    text: "渐变方向为：L_R",
                    textSize: 18,
                    fontStyle: "bold",
                    backgroundColor: Color.TRANSPARENT,
                    textColor: {
                        start: Color.RED,
                        end: Color.GREEN,
                        orientation: GradientOrientation.LEFT_RIGHT,
                    },
                    textAlignment: Gravity.Left,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
                text({
                    text: "渐变方向为：R_L",
                    textSize: 18,
                    fontStyle: "bold",
                    backgroundColor: Color.TRANSPARENT,
                    textColor: {
                        start: Color.RED,
                        end: Color.GREEN,
                        orientation: GradientOrientation.RIGHT_LEFT,
                    },
                    textAlignment: Gravity.Left,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
                text({
                    text: "渐变方向为：T_B",
                    textSize: 18,
                    fontStyle: "bold",
                    backgroundColor: Color.TRANSPARENT,
                    textColor: {
                        start: Color.RED,
                        end: Color.GREEN,
                        orientation: GradientOrientation.TOP_BOTTOM,
                    },
                    textAlignment: Gravity.Left,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
                text({
                    text: "渐变方向为：TL_BR",
                    textSize: 18,
                    fontStyle: "bold",
                    backgroundColor: Color.TRANSPARENT,
                    textColor: {
                        start: Color.RED,
                        end: Color.GREEN,
                        orientation: GradientOrientation.TL_BR,
                    },
                    textAlignment: Gravity.Left,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
            ], {
                space: 10,
                layoutConfig: layoutConfig().most(),
            })
        ],
        {
            width: 240,
            layoutConfig: layoutConfig().justWidth().fitHeight().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}
    `;
}

/// 颜色渐变
function ui$l() {
    return doric.stack([
        doric.vlayout([
            doric.text({
                textAlignment: doric.Gravity.Left,
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
            layoutConfig: doric.layoutConfig().most(),
        })
    ], {
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$l() {
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
    
    `;
}

function ui$k() {
    let cyanView = doric.stack([], {
        width: 80,
        height: 80,
        layoutConfig: doric.layoutConfig().just(),
        backgroundColor: doric.Color.CYAN
    });
    return doric.stack([
        cyanView
    ], {
        width: 240,
        height: 160,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$k() {
    return `export function ui() {
        let cyanView = stack([],
            {
                width: 80,
                height: 80,
                layoutConfig: layoutConfig().just().configAlignment(Gravity.Left),
                backgroundColor: Color.CYAN
            }
        )
        return stack(
            [
                cyanView
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

function box$3(backgroundColor, width) {
    return doric.stack([], {
        width: width,
        height: width,
        layoutConfig: doric.layoutConfig().just(),
        backgroundColor: backgroundColor,
    });
}
function ui$j() {
    return doric.stack([
        box$3(doric.Color.BLUE, 100),
        box$3(doric.Color.CYAN, 80),
        box$3(doric.Color.RED, 60),
    ], {
        width: 240,
        height: 160,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$j() {
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

function subViews$3() {
    let blueView = doric.stack([], {
        width: 80,
        height: 80,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.gravity().right().top()),
        backgroundColor: doric.Color.BLUE,
    });
    let cyanView = doric.stack([], {
        width: 80,
        height: 80,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.gravity().left().bottom()),
        backgroundColor: doric.Color.CYAN
    });
    let redView = doric.stack([], {
        width: 60,
        height: 60,
        backgroundColor: doric.Color.RED,
        layoutConfig: {
            widthSpec: doric.LayoutSpec.JUST,
            heightSpec: doric.LayoutSpec.JUST,
            alignment: doric.gravity().right().bottom()
        }
    });
    return [
        blueView,
        cyanView,
        redView
    ];
}
function ui$i() {
    return doric.stack([
        ...subViews$3()
    ], {
        width: 240,
        height: 160,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$i() {
    return `function subViews() {

        let blueView = stack([],
            {
                width: 80,
                height: 80,
                layoutConfig: layoutConfig().just().configAlignment(gravity().right().top()),
                backgroundColor: Color.BLUE,
            }
        )
    
        let cyanView = stack([],
            {
                width: 80,
                height: 80,
                layoutConfig: layoutConfig().just().configAlignment(gravity().left().bottom()),
                backgroundColor: Color.CYAN
            }
        )
    
        let redView = stack([],
            {
                width: 60,
                height: 60,
                layoutConfig: layoutConfig().just().configAlignment(gravity().right().bottom()),
                backgroundColor: Color.RED,
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

function ui$h() {
    const cyanView = doric.stack([], {
        width: 80,
        height: 80,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
        backgroundColor: doric.Color.CYAN,
        onClick: () => {
            doric.animate(context)({
                animations: () => {
                    if (cyanView.rotation) {
                        cyanView.rotation += 0.25;
                    }
                    else {
                        cyanView.rotation = 0.25;
                    }
                },
                duration: 3000
            });
        }
    });
    return doric.stack([
        cyanView
    ], {
        width: 240,
        height: 160,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$h() {
    return `export function ui() {

        const cyanView = stack([],
            {
                width: 80,
                height: 80,
                layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
                backgroundColor: Color.CYAN,
                onClick: () => {
                    animate(context)({
                        animations: () => {
                            if (cyanView.rotation) {
                                cyanView.rotation += 0.25
                            } else {
                                cyanView.rotation = 0.25
                            }
                        },
                        duration: 3000
                    })
                }
            }
        )
    
        return stack(
            [
                cyanView
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

function subViews$2() {
    let blueView = doric.stack([], {
        width: 80,
        height: 80,
        top: 10,
        left: 20,
        layoutConfig: doric.layoutConfig().just(),
        backgroundColor: doric.Color.BLUE,
    });
    let cyanView = doric.stack([], {
        width: 80,
        height: 80,
        top: 0,
        right: 240,
        layoutConfig: doric.layoutConfig().just(),
        backgroundColor: doric.Color.CYAN
    });
    let redView = doric.stack([], {
        width: 60,
        height: 60,
        bottom: 160,
        backgroundColor: doric.Color.RED,
        layoutConfig: doric.layoutConfig().just(),
    });
    return [
        blueView,
        cyanView,
        redView
    ];
}
function ui$g() {
    return doric.stack([
        ...subViews$2()
    ], {
        width: 240,
        height: 160,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$g() {
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

function subViews$1() {
    // PNG
    let pngView = doric.image({
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/14/Animated_PNG_example_bouncing_beach_ball.png",
    });
    // GIF
    let gifView = doric.image({
        imageUrl: "https://www.w3.org/People/mimasa/test/imgformat/img/w3c_home_animation.gif",
        scaleType: doric.ScaleType.ScaleToFill,
        imageScale: 3,
    });
    // Animated PNG
    let aniPngView = doric.image({
        imageUrl: "https://p6.hellobixin.com/bx-user/e2879f178be74b9ba4a6df52a2e364b0.png",
    });
    return [
        pngView,
        gifView,
        aniPngView
    ];
}
function ui$f() {
    return doric.stack([
        doric.vlayout([
            ...subViews$1()
        ], {
            space: 30,
            gravity: doric.Gravity.Center,
            layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
        })
    ], {
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configAlignment(doric.Gravity.Center),
        padding: { left: 10, right: 10, top: 10, bottom: 10 },
        backgroundColor: bgColor,
    });
}
function codeString$f() {
    return `function subViews() {
        // PNG
        let pngView = image({
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/14/Animated_PNG_example_bouncing_beach_ball.png",
        })
        // GIF
        let gifView = image({
            imageUrl: "https://www.w3.org/People/mimasa/test/imgformat/img/w3c_home_animation.gif",
            scaleType: ScaleType.ScaleToFill,
            imageScale: 3,
        })
        // Animated PNG
        let aniPngView = image({
            imageUrl: "https://p6.hellobixin.com/bx-user/e2879f178be74b9ba4a6df52a2e364b0.png",
        })
    
        return [
            pngView,
            gifView,
            aniPngView
        ]
    }
    
    export function ui() {
        return stack(
            [
                vlayout([
                    ...subViews()
                ], {
                    space: 30,
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                })
            ],
            {
                layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                padding: {left: 10, right: 10, top: 10, bottom: 10},
                backgroundColor: PubTool.bgColor,
            }
        )
    }   
    `;
}

function subViews() {
    // WebP
    let webPImage = doric.image({
        imageUrl: "https://p.upyun.com/demo/webp/webp/jpg-0.webp",
        layoutConfig: doric.layoutConfig().just(),
        width: 200,
        height: 200,
        scaleType: doric.ScaleType.ScaleAspectFit,
        loadCallback: (ret) => {
            if (ret) {
                webPImage.width = ret.width;
                webPImage.height = ret.height;
            }
        }
    });
    // Animated WebP
    let animatedWebPImage = doric.image({
        imageUrl: "https://p.upyun.com/demo/webp/webp/animated-gif-0.webp",
        width: 200,
        height: 200,
        scaleType: doric.ScaleType.ScaleAspectFit,
        loadCallback: (ret) => {
            if (ret) {
                animatedWebPImage.width = ret.width;
                animatedWebPImage.height = ret.height;
            }
        }
    });
    return [
        webPImage,
        animatedWebPImage,
    ];
}
function ui$e() {
    return doric.stack([
        doric.vlayout([
            ...subViews()
        ], {
            space: 10,
            gravity: doric.Gravity.Center,
            layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
        })
    ], {
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configAlignment(doric.Gravity.Center),
        padding: { left: 10, right: 10, top: 10, bottom: 10 },
        backgroundColor: bgColor,
    });
}
function codeString$e() {
    return `function subViews() {
        // WebP
        let webPImage = image({
            imageUrl: "https://p.upyun.com/demo/webp/webp/jpg-0.webp",
            layoutConfig: layoutConfig().just(),
            width: 200,
            height: 200,
            scaleType: ScaleType.ScaleAspectFit,
            loadCallback: (ret) => {
                if (ret) {
                    webPImage.width = ret.width
                    webPImage.height = ret.height
                }
            }
        })
    
        // Animated WebP
        let animatedWebPImage = image({
            imageUrl: "https://p.upyun.com/demo/webp/webp/animated-gif-0.webp",
            width: 200,
            height: 200,
            scaleType: ScaleType.ScaleAspectFit,
            loadCallback: (ret) => {
                if (ret) {
                    animatedWebPImage.width = ret.width
                    animatedWebPImage.height = ret.height
                }
            }
        })
        return [
            webPImage,
            animatedWebPImage,
        ]
    }
    
    export function ui() {
        return stack(
            [
                vlayout([
                    ...subViews()
                ], {
                    space: 10,
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                })
            ],
            {
    
                layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                padding: {left: 10, right: 10, top: 10, bottom: 10},
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    `;
}

var img$b = "data:image/png;base64,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";

function ui$d() {
    return doric.stack([
        doric.vlayout([
            doric.image({
                imageBase64: img$b,
                scaleType: doric.ScaleType.ScaleToFill,
                layoutConfig: doric.layoutConfig().fit(),
            }),
            doric.image({
                imageBase64: img$b,
                scaleType: doric.ScaleType.ScaleToFill,
                layoutConfig: doric.layoutConfig().fit(),
                imageScale: 2,
            }),
            doric.image({
                imageBase64: img$b,
                scaleType: doric.ScaleType.ScaleToFill,
                layoutConfig: doric.layoutConfig().just(),
                width: 200,
                height: 150 / 2.75,
                stretchInset: {
                    left: 100,
                    top: 0,
                    right: 100,
                    bottom: 0
                },
                imageScale: 2.75,
            }),
            doric.image({
                imageBase64: img$b,
                scaleType: doric.ScaleType.ScaleToFill,
                layoutConfig: doric.layoutConfig().just(),
                width: 200,
                height: 75,
                stretchInset: {
                    left: 100,
                    top: 0,
                    right: 100,
                    bottom: 0
                },
                imageScale: 2,
            }),
        ], {
            space: 20,
            gravity: doric.Gravity.Center,
            layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
        })
    ], {
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configAlignment(doric.Gravity.Center),
        padding: { left: 10, right: 10, top: 10, bottom: 10 },
        backgroundColor: bgColor,
    });
}
function codeString$d() {
    return `export function ui() {
        return stack(
            [
                vlayout([
    
                    image({
                        imageBase64: buttonImage,
                        scaleType: ScaleType.ScaleToFill,
                        layoutConfig: layoutConfig().fit(),
                    }),
    
                    image({
                        imageBase64: buttonImage,
                        scaleType: ScaleType.ScaleToFill,
                        layoutConfig: layoutConfig().fit(),
                        imageScale: 2,
                    }),
    
                    image({
                        imageBase64: buttonImage,
                        scaleType: ScaleType.ScaleToFill,
                        layoutConfig: layoutConfig().just(),
                        width: 200,
                        height: 150 / 2.75,
                        stretchInset: {
                            left: 100,
                            top: 0,
                            right: 100,
                            bottom: 0
                        },
                        imageScale: 2.75,
                    }),
    
                    image({
                        imageBase64: buttonImage,
                        scaleType: ScaleType.ScaleToFill,
                        layoutConfig: layoutConfig().just(),
                        width: 200,
                        height: 75,
                        stretchInset: {
                            left: 100,
                            top: 0,
                            right: 100,
                            bottom: 0
                        },
                        imageScale: 2,
                    }),
    
                ], {
                    space: 20,
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                })
            ],
            {
                layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                padding: {left: 10, right: 10, top: 10, bottom: 10},
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    `;
}

function ui$c() {
    const imageRef = doric.createRef();
    const remoteImageRef = doric.createRef();
    return doric.jsx.createElement(doric.Stack, { layoutConfig: doric.layoutConfig().mostWidth().fitHeight(), backgroundColor: bgColor, padding: { left: 10, right: 10, top: 10, bottom: 10 } },
        doric.jsx.createElement(doric.VLayout, { layoutConfig: doric.layoutConfig().mostWidth().fitHeight(), gravity: doric.Gravity.Center, space: 20 },
            doric.jsx.createElement(doric.Image, { ref: imageRef, width: 200, height: 200, scaleType: doric.ScaleType.ScaleAspectFit, image: Environment.platform === 'Android'
                    ? new doric.AndroidAssetsResource('assets/The_Parthenon_in_Athens.jpeg')
                    : new doric.MainBundleResource("assets/The_Parthenon_in_Athens.jpeg"), layoutConfig: doric.layoutConfig().just(), loadCallback: (res) => {
                    var _a, _b;
                    imageRef.current.width = (_a = res === null || res === void 0 ? void 0 : res.width) !== null && _a !== void 0 ? _a : 200;
                    imageRef.current.height = (_b = res === null || res === void 0 ? void 0 : res.height) !== null && _b !== void 0 ? _b : 200;
                } }),
            doric.jsx.createElement(doric.Image, { ref: remoteImageRef, image: new doric.RemoteResource("https://p.upyun.com/demo/webp/webp/jpg-0.webp"), width: 201, height: 200, layoutConfig: doric.layoutConfig().just(), scaleType: doric.ScaleType.ScaleAspectFit, loadCallback: (res) => {
                    var _a, _b;
                    remoteImageRef.current.width = (_a = res === null || res === void 0 ? void 0 : res.width) !== null && _a !== void 0 ? _a : 200;
                    remoteImageRef.current.height = (_b = res === null || res === void 0 ? void 0 : res.height) !== null && _b !== void 0 ? _b : 200;
                } })));
}
function codeString$c() {
    return `export function ui() {
        const imageRef = createRef<Image>()
        const remoteImageRef = createRef<Image>()
        return <Stack
            layoutConfig={layoutConfig().mostWidth().fitHeight()}
            backgroundColor={PubTool.bgColor}
            padding={{ left: 10, right: 10, top: 10, bottom: 10 }}>
            <VLayout
                layoutConfig={layoutConfig().mostWidth().fitHeight()}
                gravity={Gravity.Center} space={20}
            >
                <Image
                    ref={imageRef}
                    width={200}
                    height={200}
                    scaleType={ScaleType.ScaleAspectFit}
                    image={Environment.platform === 'Android'
                        ? new AndroidAssetsResource('assets/The_Parthenon_in_Athens.jpeg')
                        : new MainBundleResource("assets/The_Parthenon_in_Athens.jpeg")}
                    layoutConfig={layoutConfig().just()}
                    loadCallback={(res) => {
                        imageRef.current.width = res?.width ?? 200
                        imageRef.current.height = res?.height ?? 200
                    }}></Image>
                <Image
                    ref={remoteImageRef}
                    image={new RemoteResource("https://p.upyun.com/demo/webp/webp/jpg-0.webp")}
                    width={201}
                    height={200}
                    layoutConfig={layoutConfig().just()}
                    scaleType={ScaleType.ScaleAspectFit}
                    loadCallback={(res) => {
                        remoteImageRef.current.width = res?.width ?? 200
                        remoteImageRef.current.height = res?.height ?? 200
                    }}></Image>
            </VLayout>
        </Stack>
    }
    `;
}

/// 水平线性布局容器控件
function ui$b() {
    let blueView = doric.stack([], {
        width: 60,
        height: 60,
        layoutConfig: doric.layoutConfig().just(),
        backgroundColor: doric.Color.BLUE,
    });
    let cyanView = doric.stack([], {
        width: 60,
        height: 60,
        layoutConfig: doric.layoutConfig().just(),
        backgroundColor: doric.Color.CYAN
    });
    let redView = doric.stack([], {
        width: 60,
        height: 60,
        layoutConfig: doric.layoutConfig().just(),
        backgroundColor: doric.Color.RED
    });
    return doric.stack([
        doric.hlayout([
            blueView,
            cyanView,
            redView,
        ], {
            space: 10,
            layoutConfig: doric.layoutConfig().most()
        }),
    ], {
        width: 240,
        height: 160,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$b() {
    return `
/// 水平线性布局容器控件
export function ui() {

    let blueView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.BLUE,
        }
    )

    let cyanView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.CYAN
        }
    )

    let redView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.RED
        }
    )

    return stack(
        [
            hlayout([
                blueView,
                cyanView,
                redView,
            ],{
                space: 10,
                layoutConfig: layoutConfig().most()
            }),
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

/// 水平线性布局容器控件
function ui$a() {
    let blueView = doric.stack([], {
        width: 60,
        height: 60,
        layoutConfig: doric.layoutConfig().just().configMargin({ right: 10 }),
        backgroundColor: doric.Color.BLUE,
    });
    let cyanView = doric.stack([], {
        width: 60,
        height: 100,
        layoutConfig: doric.layoutConfig().just(),
        backgroundColor: doric.Color.CYAN
    });
    let redView = doric.stack([], {
        width: 60,
        height: 60,
        layoutConfig: doric.layoutConfig().just().configMargin({ left: 10 }),
        backgroundColor: doric.Color.RED
    });
    return doric.stack([
        doric.hlayout([
            blueView,
            cyanView,
            redView,
        ], {
            gravity: doric.gravity().center(),
            layoutConfig: doric.layoutConfig().most(),
        }),
    ], {
        width: 240,
        height: 160,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$a() {
    return `
/// 水平线性布局容器控件
export function ui() {

    let blueView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just().configMargin({right: 10}),
            backgroundColor: Color.BLUE,
        }
    )

    let cyanView = stack([],
        {
            width: 60,
            height: 100,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.CYAN
        }
    )

    let redView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just().configMargin({left: 10}),
            backgroundColor: Color.RED
        }
    )

    return stack(
        [
            hlayout([
                blueView,
                cyanView,
                redView,
            ],{
                gravity: gravity().center(),
                layoutConfig: layoutConfig().most(),
            }),
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

/// 水平线性布局容器控件
function ui$9() {
    return doric.stack([
        doric.vlayout([
            doric.hlayout([
                doric.text({
                    text: "固定宽",
                    textSize: 12,
                    height: 40,
                    width: 60,
                    layoutConfig: doric.layoutConfig().just(),
                    backgroundColor: doric.Color.RED
                }),
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.CYAN
                }),
            ], {
                gravity: doric.Gravity.Center,
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight()
            }),
            doric.hlayout([
                doric.text({
                    text: "固定宽",
                    textSize: 12,
                    height: 40,
                    width: 60,
                    layoutConfig: doric.layoutConfig().just(),
                    backgroundColor: doric.Color.RED
                }),
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.CYAN
                }),
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.YELLOW
                }),
            ], {
                gravity: doric.Gravity.Center,
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight()
            }),
            doric.hlayout([
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.RED
                }),
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.CYAN
                }),
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.YELLOW
                }),
            ], {
                gravity: doric.Gravity.Center,
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight()
            }),
            doric.hlayout([
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.RED
                }),
                doric.text({
                    text: "weight: 2",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(2),
                    backgroundColor: doric.Color.CYAN
                }),
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.YELLOW
                }),
            ], {
                gravity: doric.Gravity.Center,
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight()
            }),
        ], {
            space: 5,
            layoutConfig: doric.layoutConfig().mostWidth().fitHeight()
        })
    ], {
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$9() {
    return `
    /// 水平线性布局容器控件
    export function ui() {
    
        return stack(
            [
                vlayout([
    
                    hlayout([
                        text({
                            text: "固定宽",
                            textSize: 12,
                            height: 40,
                            width: 60,
                            layoutConfig: layoutConfig().just(),
                            backgroundColor: Color.RED
                        }),
                        text({
                            text: "weight: 1",
                            height: 40,
                            layoutConfig: layoutConfig().just().configWeight(1),
                            backgroundColor: Color.CYAN
                        }),
                    ], {
                        gravity: Gravity.Center,
                        layoutConfig: layoutConfig().mostWidth().fitHeight()
                    }),
    
                    hlayout([
                        text({
                            text: "固定宽",
                            textSize: 12,
                            height: 40,
                            width: 60,
                            layoutConfig: layoutConfig().just(),
                            backgroundColor: Color.RED
                        }),
                        text({
                            text: "weight: 1",
                            height: 40,
                            layoutConfig: layoutConfig().just().configWeight(1),
                            backgroundColor: Color.CYAN
                        }),
                        text({
                            text: "weight: 1",
                            height: 40,
                            layoutConfig: layoutConfig().just().configWeight(1),
                            backgroundColor: Color.YELLOW
                        }),
                    ], {
                        gravity: Gravity.Center,
                        layoutConfig: layoutConfig().mostWidth().fitHeight()
                    }),
    
                    hlayout([
                        text({
                            text: "weight: 1",
                            height: 40,
                            layoutConfig: layoutConfig().just().configWeight(1),
                            backgroundColor: Color.RED
                        }),
                        text({
                            text: "weight: 1",
                            height: 40,
                            layoutConfig: layoutConfig().just().configWeight(1),
                            backgroundColor: Color.CYAN
                        }),
                        text({
                            text: "weight: 1",
                            height: 40,
                            layoutConfig: layoutConfig().just().configWeight(1),
                            backgroundColor: Color.YELLOW
                        }),
                    ], {
                        gravity: Gravity.Center,
                        layoutConfig: layoutConfig().mostWidth().fitHeight()
                    }),
    
                    hlayout([
                        text({
                            text: "weight: 1",
                            height: 40,
                            layoutConfig: layoutConfig().just().configWeight(1),
                            backgroundColor: Color.RED
                        }),
                        text({
                            text: "weight: 2",
                            height: 40,
                            layoutConfig: layoutConfig().just().configWeight(2),
                            backgroundColor: Color.CYAN
                        }),
                        text({
                            text: "weight: 1",
                            height: 40,
                            layoutConfig: layoutConfig().just().configWeight(1),
                            backgroundColor: Color.YELLOW
                        }),
                    ], {
                        gravity: Gravity.Center,
                        layoutConfig: layoutConfig().mostWidth().fitHeight()
                    }),
    
                ], {
                    space: 5,
                    layoutConfig: layoutConfig().mostWidth().fitHeight()
                })
            ],
            {
                layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    `;
}

/// 垂直线性布局容器控件
function ui$8() {
    let blueView = doric.stack([], {
        width: 60,
        height: 60,
        layoutConfig: doric.layoutConfig().just(),
        backgroundColor: doric.Color.BLUE,
    });
    let cyanView = doric.stack([], {
        width: 60,
        height: 60,
        layoutConfig: doric.layoutConfig().just(),
        backgroundColor: doric.Color.CYAN
    });
    return doric.stack([
        doric.vlayout([
            blueView,
            cyanView,
        ], {
            space: 10,
            gravity: doric.Gravity.Left,
            layoutConfig: doric.layoutConfig().most()
        }),
    ], {
        width: 240,
        height: 160,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$8() {
    return `
    /// 垂直线性布局容器控件
    export function ui() {
        let blueView = stack([],
            {
                width: 60,
                height: 60,
                layoutConfig: layoutConfig().just(),
                backgroundColor: Color.BLUE,
            }
        )
        let cyanView = stack([],
            {
                width: 60,
                height: 60,
                layoutConfig: layoutConfig().just(),
                backgroundColor: Color.CYAN
            }
        )
        return stack(
            [
                vlayout([
                    blueView,
                    cyanView,
                ],{
                    space: 10,
                    gravity: Gravity.Left,
                    layoutConfig: layoutConfig().most()
                }),
            ],
            {
                width: 240,
                height: 160,
                layoutConfig: layoutConfig().justWidth().justHeight().configAlignment(Gravity.Center),
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    `;
}

/// 垂直线性布局容器控件
function ui$7() {
    let cyanView = doric.stack([], {
        width: 60,
        height: 60,
        layoutConfig: doric.layoutConfig().just(),
        backgroundColor: doric.Color.CYAN
    });
    let redView = doric.stack([], {
        width: 60,
        height: 60,
        layoutConfig: doric.layoutConfig().just(),
        backgroundColor: doric.Color.RED
    });
    return doric.stack([
        doric.vlayout([
            cyanView,
            redView,
        ], {
            space: 10,
            gravity: doric.Gravity.Center,
            layoutConfig: doric.layoutConfig().most()
        }),
    ], {
        width: 240,
        height: 160,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$7() {
    return `
    /// 垂直线性布局容器控件
    export function ui() {
        let cyanView = stack([],
            {
                width: 60,
                height: 60,
                layoutConfig: layoutConfig().just(),
                backgroundColor: Color.CYAN
            }
        )
        let redView = stack([],
            {
                width: 60,
                height: 60,
                layoutConfig: layoutConfig().just(),
                backgroundColor: Color.RED
            }
        )
        return stack(
            [
                vlayout([
                    cyanView,
                    redView,
                ],{
                    space: 10,
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().most()
                }),
            ],
            {
                width: 240,
                height: 160,
                layoutConfig: layoutConfig().justWidth().justHeight().configAlignment(Gravity.Center),
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    
    `;
}

/// 垂直线性布局容器控件
function ui$6() {
    let width = 70;
    return doric.stack([
        doric.hlayout([
            doric.vlayout([
                doric.text({
                    text: "固定高",
                    textSize: 13,
                    lineSpacing: 0,
                    height: 40,
                    width: width,
                    layoutConfig: doric.layoutConfig().just(),
                    backgroundColor: doric.Color.RED
                }),
                doric.text({
                    text: "weight: 1",
                    width: width,
                    textSize: 13,
                    lineSpacing: 0,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.CYAN
                }),
            ], {
                gravity: doric.Gravity.Center,
                layoutConfig: doric.layoutConfig().fitWidth().mostHeight()
            }),
            doric.vlayout([
                doric.text({
                    text: "固定高",
                    textSize: 13,
                    lineSpacing: 0,
                    height: 40,
                    width: width,
                    layoutConfig: doric.layoutConfig().just(),
                    backgroundColor: doric.Color.RED
                }),
                doric.text({
                    text: "weight: 1",
                    width: width,
                    textSize: 13,
                    lineSpacing: 0,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.CYAN
                }),
                doric.text({
                    text: "weight: 1",
                    width: width,
                    textSize: 13,
                    lineSpacing: 0,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.YELLOW
                }),
            ], {
                gravity: doric.Gravity.Center,
                layoutConfig: doric.layoutConfig().fitWidth().mostHeight()
            }),
            doric.vlayout([
                doric.text({
                    text: "weight: 1",
                    textSize: 13,
                    lineSpacing: 0,
                    width: width,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.RED
                }),
                doric.text({
                    text: "weight: 1",
                    textSize: 13,
                    lineSpacing: 0,
                    width: width,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.CYAN
                }),
                doric.text({
                    text: "weight: 1",
                    textSize: 13,
                    lineSpacing: 0,
                    width: width,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.YELLOW
                }),
            ], {
                gravity: doric.Gravity.Center,
                layoutConfig: doric.layoutConfig().fitWidth().mostHeight()
            }),
            doric.vlayout([
                doric.text({
                    text: "weight: 1",
                    textSize: 13,
                    lineSpacing: 0,
                    width: width,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.RED
                }),
                doric.text({
                    text: "weight: 2",
                    textSize: 13,
                    lineSpacing: 0,
                    width: width,
                    layoutConfig: doric.layoutConfig().just().configWeight(2),
                    backgroundColor: doric.Color.CYAN
                }),
                doric.text({
                    text: "weight: 1",
                    textSize: 13,
                    lineSpacing: 0,
                    width: width,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.YELLOW
                }),
            ], {
                gravity: doric.Gravity.Center,
                layoutConfig: doric.layoutConfig().fitWidth().mostHeight()
            }),
        ], {
            space: 10,
            height: 260,
            layoutConfig: doric.layoutConfig().mostWidth().justHeight()
        })
    ], {
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$6() {
    return `
/// 垂直线性布局容器控件
export function ui() {
    let width = 70
    return stack(
        [
            hlayout([

                vlayout([
                    text({
                        text: "固定高",
                        textSize: 13,
                        lineSpacing: 0,
                        height: 40,
                        width: width,
                        layoutConfig: layoutConfig().just(),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        width: width,
                        textSize: 13,
                        lineSpacing: 0,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                vlayout([
                    text({
                        text: "固定高",
                        textSize: 13,
                        lineSpacing: 0,
                        height: 40,
                        width: width,
                        layoutConfig: layoutConfig().just(),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        width: width,
                        textSize: 13,
                        lineSpacing: 0,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        width: width,
                        textSize: 13,
                        lineSpacing: 0,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                vlayout([
                    text({
                        text: "weight: 1",
                        textSize: 13,
                        lineSpacing: 0,
                        width: width,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        textSize: 13,
                        lineSpacing: 0,
                        width: width,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        textSize: 13,
                        lineSpacing: 0,
                        width: width,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                vlayout([
                    text({
                        text: "weight: 1",
                        textSize: 13,
                        lineSpacing: 0,
                        width: width,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 2",
                        textSize: 13,
                        lineSpacing: 0,
                        width: width,
                        layoutConfig: layoutConfig().just().configWeight(2),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        textSize: 13,
                        lineSpacing: 0,
                        width: width,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

            ], {
                space: 10,
                height: 260,
                layoutConfig: layoutConfig().mostWidth().justHeight()
            })
        ],
        {
            layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}
    `;
}

function createBoxes$4() {
    var boxes = [];
    for (let index = 1; index <= 5; index++) {
        boxes.push(doric.text({
            text: `${index}`,
            height: 45,
            width: 45,
            layoutConfig: doric.layoutConfig().just(),
            backgroundColor: colors$2[index % colors$2.length]
        }));
    }
    return boxes;
}
function exampleUI$4(flexDirection, boxes) {
    var desc;
    switch (flexDirection) {
        case doric.FlexDirection.COLUMN:
            desc = 'COLUMN';
            break;
        case doric.FlexDirection.COLUMN_REVERSE:
            desc = 'COLUMN_REVERSE';
            break;
        case doric.FlexDirection.ROW:
            desc = 'ROW';
            break;
        case doric.FlexDirection.ROW_REVERSE:
            desc = 'ROW_REVERSE';
            break;
        default: desc = '';
    }
    return doric.vlayout([
        doric.text({
            text: `${desc}:`,
            textSize: 12,
            textColor: doric.Color.safeParse('#666666'),
            layoutConfig: doric.layoutConfig().fit(),
        }),
        doric.flexlayout(boxes, {
            flexConfig: {
                flexDirection: flexDirection,
                justifyContent: doric.Justify.FLEX_START,
                alignContent: doric.Align.FLEX_START
            },
            backgroundColor: bgColor,
            layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
            height: 160,
            width: 240,
            border: {
                width: 0.5,
                color: doric.Color.safeParse('#666666')
            },
        }),
    ], {
        space: 2,
        layoutConfig: doric.layoutConfig().fit().configAlignment(doric.Gravity.Center),
    });
}
/// Flex Box布局
function ui$5() {
    let boxes = createBoxes$4();
    return doric.stack([
        doric.vlayout([
            exampleUI$4(doric.FlexDirection.ROW, boxes),
            exampleUI$4(doric.FlexDirection.ROW_REVERSE, boxes),
            exampleUI$4(doric.FlexDirection.COLUMN, boxes),
            exampleUI$4(doric.FlexDirection.COLUMN_REVERSE, boxes),
        ], {
            space: 20,
            layoutConfig: doric.layoutConfig().fit().configMargin({ top: 5 }),
        })
    ], {
        layoutConfig: doric.layoutConfig().fit().configAlignment(doric.Gravity.Center),
        backgroundColor: doric.Color.WHITE,
    });
}
function codeString$5() {
    return `
    function createBoxes() {
        var boxes: View[] = []
        for (let index = 1; index <= 5; index++) {
            boxes.push(
                text({
                    text: \`\${index}\`,
                    height: 45,
                    width: 45,
                    layoutConfig: layoutConfig().just(),
                    backgroundColor: PubTool.colors[index % PubTool.colors.length]
                }),
            )
        }
        return boxes
    }
    
    function exampleUI(flexDirection: FlexDirection, boxes: View[]) {
        var desc
        switch (flexDirection) {
            case FlexDirection.COLUMN: desc = 'COLUMN'; break;
            case FlexDirection.COLUMN_REVERSE: desc = 'COLUMN_REVERSE'; break;
            case FlexDirection.ROW: desc = 'ROW'; break;
            case FlexDirection.ROW_REVERSE: desc = 'ROW_REVERSE'; break;
            default: desc = ''
        }
        return vlayout([
            text({
                text: \`\${desc}:\`,
                textSize: 12,
                textColor: Color.safeParse('#666666'),
                layoutConfig: layoutConfig().fit(),
            }),
            flexlayout(boxes, {
                flexConfig: {
                    flexDirection: flexDirection,
                    justifyContent: Justify.FLEX_START,
                    alignContent: Align.FLEX_START
                },
                backgroundColor: PubTool.bgColor,
                layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
                height: 160,
                width: 240,
                border: {
                    width: 0.5,
                    color: Color.safeParse('#666666')
                },
            }),
        ], {
            space: 2,
            layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
        })
    }
    
    /// Flex Box布局
    export function ui() {
        let boxes = createBoxes()
        return stack(
            [
                vlayout([
                    exampleUI(FlexDirection.ROW, boxes),
                    exampleUI(FlexDirection.ROW_REVERSE, boxes),
                    exampleUI(FlexDirection.COLUMN, boxes),
                    exampleUI(FlexDirection.COLUMN_REVERSE, boxes),
                ], {
                    space: 20,
                    layoutConfig: layoutConfig().fit().configMargin({ top: 5 }),
                })
            ],
            {
                layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
                backgroundColor: Color.WHITE,
            }
        )
    }    
    `;
}

function createBoxes$3() {
    var boxes = [];
    for (let index = 0; index < 3; index++) {
        boxes.push(doric.text({
            height: 40,
            width: 40 + Math.floor(Math.random() * 40),
            layoutConfig: doric.layoutConfig().just(),
            backgroundColor: colors$2[index % colors$2.length]
        }));
    }
    return boxes;
}
function exampleUI$3(justifyContent, boxes) {
    var desc;
    switch (justifyContent) {
        case doric.Justify.FLEX_START:
            desc = 'FLEX_START';
            break;
        case doric.Justify.CENTER:
            desc = 'CENTER';
            break;
        case doric.Justify.FLEX_END:
            desc = 'FLEX_END';
            break;
        case doric.Justify.SPACE_BETWEEN:
            desc = 'SPACE_BETWEEN';
            break;
        case doric.Justify.SPACE_AROUND:
            desc = 'SPACE_AROUND';
            break;
        case doric.Justify.SPACE_EVENLY:
            desc = 'SPACE_EVENLY';
            break;
        default: desc = '';
    }
    return doric.vlayout([
        doric.text({
            text: `${desc}:`,
            textSize: 12,
            textColor: doric.Color.safeParse('#666666'),
            layoutConfig: doric.layoutConfig().fit(),
        }),
        doric.flexlayout(boxes, {
            flexConfig: {
                flexDirection: doric.FlexDirection.ROW,
                justifyContent: justifyContent,
                alignContent: doric.Align.FLEX_START
            },
            border: {
                width: 0.5,
                color: doric.Color.safeParse('#666666')
            },
            height: 40,
            layoutConfig: doric.layoutConfig().mostWidth().justHeight()
        }),
    ], {
        space: 5,
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight()
    });
}
/// Flex Box布局
function ui$4() {
    let boxes = createBoxes$3();
    return doric.stack([
        doric.vlayout([
            exampleUI$3(doric.Justify.FLEX_START, boxes),
            exampleUI$3(doric.Justify.CENTER, boxes),
            exampleUI$3(doric.Justify.FLEX_END, boxes),
            exampleUI$3(doric.Justify.SPACE_BETWEEN, boxes),
            exampleUI$3(doric.Justify.SPACE_AROUND, boxes),
            exampleUI$3(doric.Justify.SPACE_EVENLY, boxes),
        ], {
            space: 15,
            layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configMargin({ top: 5 })
        })
    ], {
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$4() {
    return `
    function createBoxes() {
        var boxes: View[] = []
        for (let index = 0; index < 3; index++) {
            boxes.push(
                text({
                    height: 40,
                    width: 40 + Math.floor(Math.random() * 40),
                    layoutConfig: layoutConfig().just(),
                    backgroundColor: PubTool.colors[index % PubTool.colors.length]
                }),
            )
        }
        return boxes
    }
    
    function exampleUI(justifyContent: Justify, boxes: View[]) {
        var desc
        switch (justifyContent) {
            case Justify.FLEX_START: desc = 'FLEX_START'; break;
            case Justify.CENTER: desc = 'CENTER'; break;
            case Justify.FLEX_END: desc = 'FLEX_END'; break;
            case Justify.SPACE_BETWEEN: desc = 'SPACE_BETWEEN'; break;
            case Justify.SPACE_AROUND: desc = 'SPACE_AROUND'; break;
            case Justify.SPACE_EVENLY: desc = 'SPACE_EVENLY'; break;
            default: desc = ''
        }
        return vlayout([
            text({
                text: \`\${desc}:\`,
                textSize: 12,
                textColor: Color.safeParse('#666666'),
                layoutConfig: layoutConfig().fit(),
            }),
            flexlayout(boxes, {
                flexConfig: {
                    flexDirection: FlexDirection.ROW,
                    justifyContent: justifyContent,
                    alignContent: Align.FLEX_START
                },
                border: {
                    width: 0.5,
                    color: Color.safeParse('#666666')
                },
                height: 40,
                layoutConfig: layoutConfig().mostWidth().justHeight()
            }),
        ], {
            space: 5,
            layoutConfig: layoutConfig().mostWidth().fitHeight()
        })
    }
    
    /// Flex Box布局
    export function ui() {
        let boxes = createBoxes()
        return stack(
            [
                vlayout([
                    exampleUI(Justify.FLEX_START, boxes),
                    exampleUI(Justify.CENTER, boxes),
                    exampleUI(Justify.FLEX_END, boxes),
                    exampleUI(Justify.SPACE_BETWEEN, boxes),
                    exampleUI(Justify.SPACE_AROUND, boxes),
                    exampleUI(Justify.SPACE_EVENLY, boxes),
                ], {
                    space: 15,
                    layoutConfig: layoutConfig().mostWidth().fitHeight().configMargin({top: 5})
                })
            ],
            {
                layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    
    `;
}

function createBoxes$2() {
    var boxes = [];
    for (let index = 0; index < 4; index++) {
        boxes.push(doric.text({
            height: 30 + Math.floor(Math.random() * 50),
            width: 50,
            layoutConfig: doric.layoutConfig().just(),
            backgroundColor: colors$2[index % colors$2.length]
        }));
    }
    return boxes;
}
function exampleUI$2(alignItems, boxes) {
    var desc;
    switch (alignItems) {
        case doric.Align.AUTO:
            desc = 'AUTO';
            break;
        case doric.Align.FLEX_START:
            desc = 'FLEX_START';
            break;
        case doric.Align.CENTER:
            desc = 'CENTER';
            break;
        case doric.Align.FLEX_END:
            desc = 'FLEX_END';
            break;
        case doric.Align.STRETCH:
            desc = 'STRETCH';
            break;
        case doric.Align.BASELINE:
            desc = 'BASELINE';
            break;
        case doric.Align.SPACE_BETWEEN:
            desc = 'SPACE_BETWEEN';
            break;
        case doric.Align.SPACE_AROUND:
            desc = 'SPACE_AROUND';
            break;
        default: desc = '';
    }
    return doric.vlayout([
        doric.text({
            text: `${desc}:`,
            textSize: 12,
            textColor: doric.Color.safeParse('#666666'),
            layoutConfig: doric.layoutConfig().fit(),
        }),
        doric.flexlayout(boxes, {
            flexConfig: {
                flexDirection: doric.FlexDirection.ROW,
                justifyContent: doric.Justify.SPACE_BETWEEN,
                alignItems: alignItems
            },
            layoutConfig: doric.layoutConfig().mostWidth().justHeight(),
            height: 90,
            border: {
                width: 0.5,
                color: doric.Color.safeParse('#666666')
            },
        }),
    ], {
        space: 5,
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight()
    });
}
/// Flex Box布局
function ui$3() {
    let boxes = createBoxes$2();
    return doric.stack([
        doric.vlayout([
            exampleUI$2(doric.Align.AUTO, boxes),
            exampleUI$2(doric.Align.FLEX_START, boxes),
            exampleUI$2(doric.Align.CENTER, boxes),
            exampleUI$2(doric.Align.FLEX_END, boxes),
            exampleUI$2(doric.Align.STRETCH, boxes),
            exampleUI$2(doric.Align.BASELINE, boxes),
            exampleUI$2(doric.Align.SPACE_BETWEEN, boxes),
            exampleUI$2(doric.Align.SPACE_AROUND, boxes),
        ], {
            space: 15,
            layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configMargin({ top: 5 })
        })
    ], {
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$3() {
    return `
    function createBoxes() {
        var boxes: View[] = []
        for (let index = 0; index < 4; index++) {
            boxes.push(
                text({
                    height: 30 + Math.floor(Math.random() * 50),
                    width: 50,
                    layoutConfig: layoutConfig().just(),
                    backgroundColor: PubTool.colors[index % PubTool.colors.length]
                }),
            )
        }
        return boxes
    }
    
    function exampleUI(alignItems: Align, boxes: View[]) {
        var desc
        switch (alignItems) {
            case Align.AUTO: desc = 'AUTO'; break;
            case Align.FLEX_START: desc = 'FLEX_START'; break;
            case Align.CENTER: desc = 'CENTER'; break;
            case Align.FLEX_END: desc = 'FLEX_END'; break;
            case Align.STRETCH: desc = 'STRETCH'; break;
            case Align.BASELINE: desc = 'BASELINE'; break;
            case Align.SPACE_BETWEEN: desc = 'SPACE_BETWEEN'; break;
            case Align.SPACE_AROUND: desc = 'SPACE_AROUND'; break;
            default: desc = ''
        }
        return vlayout([
            text({
                text: \`\${desc}:\`,
                textSize: 12,
                textColor: Color.safeParse('#666666'),
                layoutConfig: layoutConfig().fit(),
            }),
            flexlayout(boxes, {
                flexConfig: {
                    flexDirection: FlexDirection.ROW,
                    justifyContent: Justify.SPACE_BETWEEN,
                    alignItems: alignItems
                },
                layoutConfig: layoutConfig().mostWidth().justHeight(),
                height: 90,
                border: {
                    width: 0.5,
                    color: Color.safeParse('#666666')
                },
            }),
        ], {
            space: 5,
            layoutConfig: layoutConfig().mostWidth().fitHeight()
        })
    }
    
    /// Flex Box布局
    export function ui() {
        let boxes = createBoxes()
        return stack(
            [
                vlayout([
                    exampleUI(Align.AUTO, boxes),
                    exampleUI(Align.FLEX_START, boxes),
                    exampleUI(Align.CENTER, boxes),
                    exampleUI(Align.FLEX_END, boxes),
                    exampleUI(Align.STRETCH, boxes),
                    exampleUI(Align.BASELINE, boxes),
                    exampleUI(Align.SPACE_BETWEEN, boxes),
                    exampleUI(Align.SPACE_AROUND, boxes),
                ], {
                    space: 15,
                    layoutConfig: layoutConfig().mostWidth().fitHeight().configMargin({ top: 5 })
                })
            ],
            {
                layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    `;
}

function createBoxes$1() {
    var boxes = [];
    for (let index = 0; index < 10; index++) {
        boxes.push(doric.text({
            text: `${index + 1}`,
            height: 30,
            width: 30 + Math.floor(Math.random() * 50),
            layoutConfig: doric.layoutConfig().just(),
            backgroundColor: colors$2[index % colors$2.length]
        }));
    }
    return boxes;
}
function exampleUI$1(flexWrap, boxes) {
    var desc;
    switch (flexWrap) {
        case doric.Wrap.NO_WRAP:
            desc = 'NO_WRAP';
            break;
        case doric.Wrap.WRAP:
            desc = 'WRAP';
            break;
        case doric.Wrap.WRAP_REVERSE:
            desc = 'WRAP_REVERSE';
            break;
        default: desc = '';
    }
    return doric.vlayout([
        doric.text({
            text: `${desc}:`,
            textSize: 12,
            textColor: doric.Color.safeParse('#666666'),
            layoutConfig: doric.layoutConfig().fit(),
        }),
        doric.flexlayout(boxes, {
            flexConfig: {
                flexDirection: doric.FlexDirection.ROW,
                justifyContent: doric.Justify.FLEX_START,
                flexWrap: flexWrap,
            },
            backgroundColor: bgColor,
            layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
            height: 160,
            width: 240,
            border: {
                width: 0.5,
                color: doric.Color.safeParse('#666666')
            },
        }),
    ], {
        space: 5,
        layoutConfig: doric.layoutConfig().fit()
    });
}
/// Flex Box布局
function ui$2() {
    let boxes = createBoxes$1();
    return doric.stack([
        doric.vlayout([
            exampleUI$1(doric.Wrap.NO_WRAP, boxes),
            exampleUI$1(doric.Wrap.WRAP, boxes),
            exampleUI$1(doric.Wrap.WRAP_REVERSE, boxes),
        ], {
            space: 20,
            layoutConfig: doric.layoutConfig().fit().configMargin({ top: 5 })
        })
    ], {
        layoutConfig: doric.layoutConfig().fit().configAlignment(doric.Gravity.Center),
        backgroundColor: doric.Color.WHITE,
    });
}
function codeString$2() {
    return `
    function createBoxes() {
        var boxes: View[] = []
        for (let index = 0; index < 10; index++) {
            boxes.push(
                text({
                    text: \`\${index+1}\`,
                    height: 30,
                    width: 30 + Math.floor(Math.random() * 50),
                    layoutConfig: layoutConfig().just(),
                    backgroundColor: PubTool.colors[index % PubTool.colors.length]
                }),
            )
        }
        return boxes
    }
    
    function exampleUI(flexWrap: Wrap, boxes: View[]) {
        var desc
        switch (flexWrap) {
            case Wrap.NO_WRAP: desc = 'NO_WRAP'; break;
            case Wrap.WRAP: desc = 'WRAP'; break;
            case Wrap.WRAP_REVERSE: desc = 'WRAP_REVERSE'; break;
            default: desc = ''
        }
        return vlayout([
            text({
                text: \`\${desc}:\`,
                textSize: 12,
                textColor: Color.safeParse('#666666'),
                layoutConfig: layoutConfig().fit(),
            }),
            flexlayout(boxes, {
                flexConfig: {
                    flexDirection: FlexDirection.ROW,
                    justifyContent: Justify.FLEX_START,
                    flexWrap: flexWrap,
                },
                backgroundColor: PubTool.bgColor,
                layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
                height: 160,
                width: 240,
                border: {
                    width: 0.5,
                    color: Color.safeParse('#666666')
                },
            }),
        ], {
            space: 5,
            layoutConfig: layoutConfig().fit()
        })
    }
    
    /// Flex Box布局
    export function ui() {
        let boxes = createBoxes()
        return stack(
            [
                vlayout([
                    exampleUI(Wrap.NO_WRAP, boxes),
                    exampleUI(Wrap.WRAP, boxes),
                    exampleUI(Wrap.WRAP_REVERSE, boxes),
                ], {
                    space: 20,
                    layoutConfig: layoutConfig().fit().configMargin({ top: 5 })
                })
            ],
            {
                layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
                backgroundColor: Color.WHITE,
            }
        )
    }
    `;
}

function createBoxes() {
    var boxes = [];
    for (let index = 0; index < 10; index++) {
        boxes.push(doric.text({
            text: `${index + 1}`,
            height: 30,
            width: 30 + Math.floor(Math.random() * 50),
            layoutConfig: doric.layoutConfig().just(),
            backgroundColor: colors$2[index % colors$2.length]
        }));
    }
    return boxes;
}
function exampleUI(alignContent, boxes) {
    var desc;
    switch (alignContent) {
        case doric.Align.AUTO:
            desc = 'AUTO';
            break;
        case doric.Align.FLEX_START:
            desc = 'FLEX_START';
            break;
        case doric.Align.CENTER:
            desc = 'CENTER';
            break;
        case doric.Align.FLEX_END:
            desc = 'FLEX_END';
            break;
        case doric.Align.STRETCH:
            desc = 'STRETCH';
            break;
        case doric.Align.BASELINE:
            desc = 'BASELINE';
            break;
        case doric.Align.SPACE_BETWEEN:
            desc = 'SPACE_BETWEEN';
            break;
        case doric.Align.SPACE_AROUND:
            desc = 'SPACE_AROUND';
            break;
        default: desc = '';
    }
    return doric.vlayout([
        doric.text({
            text: `${desc}:`,
            textSize: 12,
            textColor: doric.Color.safeParse('#666666'),
            layoutConfig: doric.layoutConfig().fit(),
        }),
        doric.flexlayout(boxes, {
            flexConfig: {
                flexDirection: doric.FlexDirection.ROW,
                flexWrap: doric.Wrap.WRAP,
                justifyContent: doric.Justify.FLEX_START,
                alignContent: alignContent,
            },
            backgroundColor: bgColor,
            layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
            height: 160,
            width: 240,
            border: {
                width: 0.5,
                color: doric.Color.safeParse('#666666')
            },
        }),
    ], {
        space: 5,
        layoutConfig: doric.layoutConfig().fit()
    });
}
/// Flex Box布局
function ui$1() {
    let boxes = createBoxes();
    return doric.stack([
        doric.vlayout([
            exampleUI(doric.Align.AUTO, boxes),
            exampleUI(doric.Align.FLEX_START, boxes),
            exampleUI(doric.Align.CENTER, boxes),
            exampleUI(doric.Align.FLEX_END, boxes),
            exampleUI(doric.Align.STRETCH, boxes),
            exampleUI(doric.Align.BASELINE, boxes),
            exampleUI(doric.Align.SPACE_BETWEEN, boxes),
            exampleUI(doric.Align.SPACE_AROUND, boxes),
        ], {
            space: 20,
            layoutConfig: doric.layoutConfig().fit().configMargin({ top: 5 })
        })
    ], {
        layoutConfig: doric.layoutConfig().fit().configAlignment(doric.Gravity.Center),
        backgroundColor: doric.Color.WHITE,
    });
}
function codeString$1() {
    return `
    function createBoxes() {
        var boxes: View[] = []
        for (let index = 0; index < 10; index++) {
            boxes.push(
                text({
                    text: \`\${index+1}\`,
                    height: 30,
                    width: 30 + Math.floor(Math.random() * 50),
                    layoutConfig: layoutConfig().just(),
                    backgroundColor: PubTool.colors[index % PubTool.colors.length]
                }),
            )
        }
        return boxes
    }
    
    function exampleUI(alignContent: Align, boxes: View[]) {
        var desc
        switch (alignContent) {
            case Align.AUTO: desc = 'AUTO'; break;
            case Align.FLEX_START: desc = 'FLEX_START'; break;
            case Align.CENTER: desc = 'CENTER'; break;
            case Align.FLEX_END: desc = 'FLEX_END'; break;
            case Align.STRETCH: desc = 'STRETCH'; break;
            case Align.BASELINE: desc = 'BASELINE'; break;
            case Align.SPACE_BETWEEN: desc = 'SPACE_BETWEEN'; break;
            case Align.SPACE_AROUND: desc = 'SPACE_AROUND'; break;
            default: desc = ''
        }
        return vlayout([
            text({
                text: \`\${desc}:\`,
                textSize: 12,
                textColor: Color.safeParse('#666666'),
                layoutConfig: layoutConfig().fit(),
            }),
            flexlayout(boxes, {
                flexConfig: {
                    flexDirection: FlexDirection.ROW,
                    flexWrap: Wrap.WRAP,
                    justifyContent: Justify.FLEX_START,
                    alignContent: alignContent,
                },
                backgroundColor: PubTool.bgColor,
                layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
                height: 160,
                width: 240,
                border: {
                    width: 0.5,
                    color: Color.safeParse('#666666')
                },
            }),
        ], {
            space: 5,
            layoutConfig: layoutConfig().fit()
        })
    }
    
    /// Flex Box布局
    export function ui() {
        let boxes = createBoxes()
        return stack(
            [
                vlayout([
                    exampleUI(Align.AUTO, boxes),
                    exampleUI(Align.FLEX_START, boxes),
                    exampleUI(Align.CENTER, boxes),
                    exampleUI(Align.FLEX_END, boxes),
                    exampleUI(Align.STRETCH, boxes),
                    exampleUI(Align.BASELINE, boxes),
                    exampleUI(Align.SPACE_BETWEEN, boxes),
                    exampleUI(Align.SPACE_AROUND, boxes),
                ], {
                    space: 20,
                    layoutConfig: layoutConfig().fit().configMargin({ top: 5 })
                })
            ],
            {
                layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
                backgroundColor: Color.WHITE,
            }
        )
    }
    `;
}

/// 水平线性布局容器控件
function ui() {
    return doric.stack([
        doric.vlayout([
            doric.hlayout([
                doric.text({
                    text: "固定宽",
                    textSize: 12,
                    height: 40,
                    width: 60,
                    layoutConfig: doric.layoutConfig().just(),
                    backgroundColor: doric.Color.RED
                }),
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.CYAN
                }),
            ], {
                gravity: doric.Gravity.Center,
                layoutConfig: doric.layoutConfig().fit()
            }),
            doric.hlayout([
                doric.text({
                    text: "固定宽",
                    textSize: 12,
                    height: 40,
                    width: 60,
                    layoutConfig: doric.layoutConfig().just(),
                    backgroundColor: doric.Color.RED
                }),
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.CYAN
                }),
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.YELLOW
                }),
            ], {
                gravity: doric.Gravity.Center,
                layoutConfig: doric.layoutConfig().fit()
            }),
            doric.hlayout([
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.RED
                }),
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.CYAN
                }),
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.YELLOW
                }),
            ], {
                gravity: doric.Gravity.Center,
                layoutConfig: doric.layoutConfig().fit()
            }),
            doric.hlayout([
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.RED
                }),
                doric.text({
                    text: "weight: 2",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(2),
                    backgroundColor: doric.Color.CYAN
                }),
                doric.text({
                    text: "weight: 1",
                    height: 40,
                    layoutConfig: doric.layoutConfig().just().configWeight(1),
                    backgroundColor: doric.Color.YELLOW
                }),
            ], {
                gravity: doric.Gravity.Center,
                layoutConfig: doric.layoutConfig().fit()
            }),
        ], {
            space: 5,
            layoutConfig: doric.layoutConfig().most()
        })
    ], {
        layoutConfig: doric.layoutConfig().fit().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString() {
    return `
/// 水平线性布局容器控件
export function ui() {

    return stack(
        [
            vlayout([

                hlayout([
                    text({
                        text: "固定宽",
                        textSize: 12,
                        height: 40,
                        width: 60,
                        layoutConfig: layoutConfig().just(),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                hlayout([
                    text({
                        text: "固定宽",
                        textSize: 12,
                        height: 40,
                        width: 60,
                        layoutConfig: layoutConfig().just(),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                hlayout([
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

                hlayout([
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.RED
                    }),
                    text({
                        text: "weight: 2",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(2),
                        backgroundColor: Color.CYAN
                    }),
                    text({
                        text: "weight: 1",
                        height: 40,
                        layoutConfig: layoutConfig().just().configWeight(1),
                        backgroundColor: Color.YELLOW
                    }),
                ], {
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().fit()
                }),

            ], {
                space: 5,
                layoutConfig: layoutConfig().most()
            })
        ],
        {
            layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}
    `;
}

function caseUIorCode(path, needCode) {
    switch (path) {
        case "Text_1":
            return needCode ? codeString$p() : ui$p();
        case "Text_2":
            return needCode ? codeString$o() : ui$o();
        case "Text_3":
            return needCode ? codeString$n() : ui$n();
        case "Text_4":
            return needCode ? codeString$m() : ui$m();
        case "Text_5":
            return needCode ? codeString$l() : ui$l();
        case "Stack_1":
            return needCode ? codeString$k() : ui$k();
        case "Stack_2":
            return needCode ? codeString$j() : ui$j();
        case "Stack_3":
            return needCode ? codeString$i() : ui$i();
        case "Stack_4":
            return needCode ? codeString$h() : ui$h();
        case "Stack_5":
            return needCode ? codeString$g() : ui$g();
        case "Image_1":
            return needCode ? codeString$f() : ui$f();
        case "Image_2":
            return needCode ? codeString$e() : ui$e();
        case "Image_3":
            return needCode ? codeString$d() : ui$d();
        case "Image_5":
            return needCode ? codeString$c() : ui$c();
        case "HLayout_1":
            return needCode ? codeString$b() : ui$b();
        case "HLayout_2":
            return needCode ? codeString$a() : ui$a();
        case "HLayout_3":
            return needCode ? codeString$9() : ui$9();
        case "VLayout_1":
            return needCode ? codeString$8() : ui$8();
        case "VLayout_2":
            return needCode ? codeString$7() : ui$7();
        case "VLayout_3":
            return needCode ? codeString$6() : ui$6();
        case "FlexLayout_1":
            return needCode ? codeString$5() : ui$5();
        case "FlexLayout_2":
            return needCode ? codeString$4() : ui$4();
        case "FlexLayout_3":
            return needCode ? codeString$3() : ui$3();
        case "FlexLayout_4":
            return needCode ? codeString$2() : ui$2();
        case "FlexLayout_5":
            return needCode ? codeString$1() : ui$1();
        case "List_1":
            return needCode ? codeString() : ui();
        default:
            return needCode ? "" : doric.stack([]);
    }
}

var __decorate$r = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let CodeIDE = class CodeIDE extends doric.Panel {
    onCreate() {
        if (this.getInitData()) {
            this.caseModel = this.getInitData();
        }
    }
    onShow() {
        var _a, _b;
        doric.navbar(context).setTitle((_b = (_a = this.caseModel) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : '');
    }
    build(rootView) {
        var _a, _b;
        rootView.backgroundColor = doric.Color.BLACK;
        let codeString = caseUIorCode((_b = (_a = this.caseModel) === null || _a === void 0 ? void 0 : _a.ui) !== null && _b !== void 0 ? _b : '', true);
        doric.scroller(doric.text({
            text: codeString,
            maxLines: 0,
            textColor: doric.Color.safeParse('#47B19B'),
            textAlignment: doric.Gravity.Left,
            backgroundColor: doric.Color.BLACK,
            layoutConfig: doric.layoutConfig().fit(),
        }), {
            layoutConfig: doric.layoutConfig().most()
        }).in(rootView);
    }
};
CodeIDE = __decorate$r([
    Entry
], CodeIDE);

var __decorate$q = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1.顶部介绍cell
function _descCell(model) {
    let padding = 20;
    let hPadding = 20;
    let titleLabel = doric.text({
        text: model.subTitle,
        textSize: 20,
        fontStyle: 'bold',
        textColor: themColor,
        textAlignment: doric.Gravity.Left,
        maxLines: 1,
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
    });
    let descLabel = doric.text({
        text: model.desc,
        textSize: 15,
        textColor: doric.Color.safeParse('#666666'),
        textAlignment: doric.Gravity.Left,
        maxLines: 0,
        lineSpacing: 4,
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
    });
    return doric.listItem([
        doric.vlayout([
            titleLabel,
            descLabel
        ], {
            space: 15,
            layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
        })
    ]).apply({
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
        padding: { left: hPadding, right: hPadding, top: padding + 5, bottom: padding },
        identifier: 'headerCell'
    });
}
// 圆点Widget
function pointWidget() {
    return container({
        width: 12,
        height: 12,
        backgroundColor: themColor,
        corners: 6,
        layoutConfig: doric.layoutConfig().just()
    });
}
// 查看代码widget
function codeEntrance(caseModel) {
    return doric.text({
        text: '<>',
        width: 40,
        height: 30,
        layoutConfig: {
            widthSpec: doric.LayoutSpec.JUST,
            heightSpec: doric.LayoutSpec.FIT,
        },
        textSize: 16,
        fontStyle: 'bold',
        textColor: themColor,
        textAlignment: doric.Gravity.Right,
        maxLines: 1,
        onClick: function () {
            doric.navigator(context).push(CodeIDE, {
                extra: caseModel,
            });
        }
    });
}
// 2.case cell
function _caseCell(caseModel) {
    let padding = 20;
    let hPadding = 20;
    let titleLabel = doric.text({
        text: caseModel.title,
        textSize: 16,
        fontStyle: 'bold',
        textColor: doric.Color.BLACK,
        textAlignment: doric.Gravity.Left,
        maxLines: 1,
        layoutConfig: doric.layoutConfig().fit()
    });
    let caseTitle = doric.hlayout([
        pointWidget(),
        titleLabel
    ], {
        layoutConfig: doric.layoutConfig().fit(),
        space: 10,
        gravity: doric.Gravity.CenterY,
    });
    let descLabel = doric.text({
        text: caseModel.desc,
        layoutConfig: {
            widthSpec: doric.LayoutSpec.MOST,
            heightSpec: doric.LayoutSpec.FIT,
        },
        textSize: 15,
        textColor: doric.Color.safeParse('#666666'),
        textAlignment: doric.Gravity.Left,
        maxLines: 0,
        lineSpacing: 4,
    });
    let edge = 0;
    let container = doric.stack([
        // 内部具体case
        caseUIorCode(caseModel.ui)
    ], {
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
        padding: { left: edge, right: edge, top: edge, bottom: edge },
        backgroundColor: doric.Color.WHITE,
    });
    return doric.listItem([
        doric.vlayout([
            doric.flexlayout([
                caseTitle,
                codeEntrance(caseModel)
            ], {
                flexConfig: {
                    flexDirection: doric.FlexDirection.ROW,
                    justifyContent: doric.Justify.SPACE_BETWEEN,
                    alignItems: doric.Align.CENTER,
                },
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            }),
            container,
            descLabel
        ], {
            space: 25,
            layoutConfig: doric.layoutConfig().most(),
        })
    ]).apply({
        layoutConfig: {
            widthSpec: doric.LayoutSpec.MOST,
            heightSpec: doric.LayoutSpec.FIT
        },
        identifier: 'contentCell',
        padding: { left: hPadding, right: hPadding, top: padding, bottom: padding },
    });
}
let ComponentDetail = class ComponentDetail extends doric.Panel {
    onCreate() {
        // 拿到上个Panel传过来的数据
        if (this.getInitData()) {
            this.model = this.getInitData();
        }
    }
    onShow() {
        var _a, _b;
        doric.navbar(context).setTitle((_b = (_a = this.model) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : '');
    }
    build(rootView) {
        var _a, _b;
        doric.list({
            itemCount: 1 + ((_b = (_a = this.model) === null || _a === void 0 ? void 0 : _a.cases.length) !== null && _b !== void 0 ? _b : 0),
            renderItem: (index) => this.listItemCell(index)
        }).apply({
            layoutConfig: doric.layoutConfig().most(),
        }).in(rootView);
    }
    listItemCell(index) {
        if (this.model) {
            if (index == 0)
                return _descCell(this.model);
            return _caseCell(this.model.cases[index - 1]);
        }
        return new doric.ListItem();
    }
};
ComponentDetail = __decorate$q([
    Entry
], ComponentDetail);

var localComponentJson = [
	{
		title: "Stack",
		subTitle: "堆叠布局",
		path: "",
		desc: "Stack是Doric最基本的视图组件，可容纳多个子视图，子视图按添加顺序依次堆叠摆放。后添加的子视图在更上层，最先添加的的子视图在最底层，子视图都是相对于其左上角顶点为坐标系原点。",
		cases: [
			{
				title: "Stack基本使用",
				desc: "【功能】：用来显示一个View\n【views】：子视图列表，可以放一个或者多个子视图\n【config】： 配置项Partial<Stack>",
				ui: "Stack_1"
			},
			{
				title: "多个子视图场景",
				desc: "多个子视图，默认左上角对齐布局，以数组顺序层叠堆放视图，最后添加的视图在最上层。",
				ui: "Stack_2"
			},
			{
				title: "子视图对齐方式",
				desc: "【alignment】：子视图相对位置，可以设置对齐方式\n 左对齐、右对齐、居中对齐等方式可直接通过Gravity的静态方法设置，但是右上、右下等对齐方式需要用对象方法设置，比如\n【右下对齐】：通过Gravity的构造方式设置，比如gravity().right().bottom()",
				ui: "Stack_3"
			},
			{
				title: "精确位置定位",
				desc: "可以指定上下左右的边界对子视图进行位置精准安放\ntop、left分别代表离父视图上边界和左边界的距离\n而bottom和right不能理解成离底部和右边界的距离\n【bottom】代表视图的底部离父视图顶部的距离\n【right】代表视图的右部离父视图左边界的距离",
				ui: "Stack_5"
			}
		]
	},
	{
		title: "Image",
		subTitle: "图片控件",
		path: "",
		desc: "用于显示一张图片，支持从本地文件或者网络链接加载图片，支持base64、webp、gif等图片，可以指定不同的缩放模式",
		cases: [
			{
				title: "加载PNG、GIF",
				desc: "【imageUrl】：网络图片地址，支持GIF\n【isBlur】：是否高斯模糊\n【scaleType】：图片缩放方式",
				ui: "Image_1"
			},
			{
				title: "加载WebP、Animated WebP",
				desc: "【imageUrl】：网络图片地址，支持WebP\n【isBlur】：是否高斯模糊\n【scaleType】：图片缩放方式",
				ui: "Image_2"
			},
			{
				title: "拉伸图片",
				desc: "【imageBase64】：本地图片转成Base64格式加载\nimport buttonImage from \"../images/button.png\"\n【stretchInset】：图片拉伸部分",
				ui: "Image_3"
			},
			{
				title: "通过Resource加载图片",
				desc: "【image】：通过resource loader加载图片的方式\n【MainBundleResource】：MainBundleResource(\"assets/The_Parthenon_in_Athens.jpeg\")\"\n【RemoteResource】：RemoteResource(\"https://p.upyun.com/demo/webp/webp/jpg-0.webp\")",
				ui: "Image_5"
			}
		]
	},
	{
		title: "Text",
		subTitle: "文字组件",
		path: "",
		desc: "用于显示文字的组件，拥有的属性非常多",
		cases: [
			{
				title: "基本使用",
				desc: "【textSize】：文字大小\n【textColor】：文字颜色\n【fontStyle】：字体样式 normal/bold/italic\n【maxLines】：最大行数，设置为0代表不限行数\n【shadow】：阴影\n【lineSpacing】：行间距\n【strikethrough】：显示中横线，默认false\n【underline】：显示下划线，默认false",
				ui: "Text_1"
			},
			{
				title: "文字对齐方式",
				desc: "【textAlignment】：对齐方式，例如Gravity.Center代表中心对齐，上图依次是Left、Center、Right、Bottom",
				ui: "Text_2"
			},
			{
				title: "字体文件使用",
				desc: "【font】：字体文件名/字体文件路径",
				ui: "Text_3"
			},
			{
				title: "字体渐变色",
				desc: "【textColor】：支持渐变色GradientColor\n【start】：开始颜色\n【end】：结束颜色\n【orientation】：渐变方向",
				ui: "Text_4"
			},
			{
				title: "支持html文本",
				desc: "【htmlText】：html文本",
				ui: "Text_5"
			}
		]
	},
	{
		title: "HLayout",
		subTitle: "水平线性布局容器控件",
		path: "",
		desc: "沿着水平方向，线性布局子控件，可设置子控件间距，交叉方向上子控件的对齐方式",
		cases: [
			{
				title: "基本使用",
				desc: "【space】：子控件间距\n【gravity】：垂直方向上子控件的对齐方式，默认为左上对齐",
				ui: "HLayout_1"
			},
			{
				title: "垂直方向对齐方式",
				desc: "【gravity】：垂直方向上子控件的对齐方式设置为中心对齐，Gravity.Center\n【margin】：组件外间距",
				ui: "HLayout_2"
			},
			{
				title: "按比重分配",
				desc: "【weight】：按照水平方向宽度所占比重，默认值为0\n【weight>0】： 其余子控件宽度按照weight比重分配",
				ui: "HLayout_3"
			}
		]
	},
	{
		title: "VLayout",
		subTitle: "垂直线性布局组件",
		path: "",
		desc: "沿着垂直方向，线性布局子控件，可设置子控件间距，交叉方向上子控件的对齐方式",
		cases: [
			{
				title: "基本使用",
				desc: "【space】：子控件间距\n【gravity】：水平方向上子控件的对齐方式，默认为左上对齐",
				ui: "VLayout_1"
			},
			{
				title: "水平方向对齐方式",
				desc: "【gravity】：水平方向上子控件的对齐方式设置为中心对齐，Gravity.Center",
				ui: "VLayout_2"
			},
			{
				title: "按比重分配",
				desc: "【weight】：按照垂直方向高度所占比重，默认值为0\n【weight>0】： 其余子控件高度按照weight比重分配",
				ui: "VLayout_3"
			}
		]
	},
	{
		title: "FlexLayout",
		subTitle: "弹性盒子布局",
		path: "",
		desc: "弹性盒子是一种用于按行或按列布局元素的一维布局方法，对一个容器中的子元素进行排列、对齐和分配空白空间。\n容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；\n交叉轴的开始位置叫做cross start，结束位置叫做cross end。\n项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。",
		cases: [
			{
				title: "flexDirection属性",
				desc: "【flexDirection】：属性决定主轴的方向（即项目的排列方向）\n【row（默认值）】：主轴为水平方向，起点在左端。\n【column】：主轴为垂直方向，起点在上沿。\n【row-reverse】：主轴为水平方向，起点在右端。\n【column-reverse】：主轴为垂直方向，起点在下沿。",
				ui: "FlexLayout_1"
			},
			{
				title: "justifyContent属性",
				desc: "【justifyContent】：属性定义了项目在主轴上的对齐方式。\n假设主轴为从左到右：\n【flex-start（默认值）】：左对齐\n【flex-end】：右对齐\n【center】：居中\n【space-between】：两端对齐，项目之间的间隔都相等\n【space-around】：每个项目两侧的间隔相等，项目之间的间隔比项目与边框的间隔大一倍\n【space-evenly】：项目与边框的间距以及项目之间的间距均相等，间距均等。",
				ui: "FlexLayout_2"
			},
			{
				title: "alignItems属性",
				desc: "【alignItems】属性定义项目在交叉轴上如何对齐。\n【flex-start】：交叉轴的起点对齐。\n【flex-end】：交叉轴的终点对齐。\n【center】：交叉轴的中点对齐。\n【baseline】: 项目的第一行文字的基线对齐。\n【stretch（默认值）】：如果项目未设置高度或设为auto，将占满整个容器的高度。",
				ui: "FlexLayout_3"
			},
			{
				title: "flex-wrap属性",
				desc: "【flexWrap】属性定义，如果一条轴线排不下，如何换行。\n【nowrap】：默认情况下，项目都排在一条轴线上，不换行。\n【wrap】：换行，第一行在上方。\n【wrap-reverse】：换行，第一行在下方。",
				ui: "FlexLayout_4"
			},
			{
				title: "align-content属性",
				desc: "【align-content】属性定义项目在与交叉轴上如何对齐。\n【flex-start】：与交叉轴的起点对齐。\n【flex-end】：与交叉轴的终点对齐。\n【center】：与交叉轴的中点对齐。\n【stretch（默认值）】：轴线占满整个交叉轴。\n【space-between】：与交叉轴两端对齐，轴线之间的间隔平均分布\n【space-around】：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。\n",
				ui: "FlexLayout_5"
			}
		]
	},
	{
		title: "List",
		subTitle: "列表控件",
		path: "/effects/list",
		desc: "圆角阴影在List中的示例",
		cases: [
		]
	},
	{
		title: "FlowLayout",
		subTitle: "【itemCount】内容总条数。\n【renderItem】：每条内容的渲染回调。\n【columnCount】：每行列数。\n【columnSpace】：列间距\n【rowSpace】：行间距",
		path: "/FlowLayoutDemo",
		desc: "FlowLayout流式网格布局",
		cases: [
		]
	},
	{
		title: "Slider",
		subTitle: "【itemCount】幻灯片页数。\n【renderPage】：每页的渲染回调。\n【onPageSlided】：幻灯片滑动回调。",
		desc: "滑动翻页(幻灯片)控件示例",
		path: "/slider",
		cases: [
		]
	},
	{
		title: "Scroller",
		subTitle: "Scroller滑动控件示例",
		desc: "Scroller滑动控件示例",
		path: "/ScrollerDemo",
		cases: [
		]
	}
];

var localCapacitiesJson = [
	{
		title: "三国·华容道",
		subTitle: "三国·华容道",
		desc: "三国·华容道",
		path: "/HuaRongDao",
		cases: [
		]
	},
	{
		title: "MVVM",
		subTitle: "一个计数器的例子",
		desc: "一个计数器的例子",
		path: "/CounterDemo",
		cases: [
		]
	},
	{
		title: "Refreshable",
		subTitle: "上下拉刷新",
		desc: "上下拉刷",
		path: "/RefreshDemo",
		cases: [
		]
	},
	{
		title: "Refreshable",
		subTitle: "刷新视图组件",
		desc: "刷新视图组件",
		path: "/RefreshableDemo",
		cases: [
		]
	},
	{
		title: "animate",
		subTitle: "基础动画",
		desc: "基础动画",
		path: "/AnimatorDemo",
		cases: [
		]
	},
	{
		title: "doAnimation",
		subTitle: "复杂组合动画",
		desc: "复杂组合动画",
		path: "/ComplicatedAnimationDemo",
		cases: [
		]
	},
	{
		title: "TranslationAnimation",
		subTitle: "translation动画",
		desc: "translation动画",
		path: "/AnimationsDemo",
		cases: [
		]
	},
	{
		title: "Keyboard",
		subTitle: "键盘相关功能",
		desc: "键盘相关功能",
		path: "/keyboard",
		cases: [
		]
	},
	{
		title: "BlurEffects",
		subTitle: "高斯模糊&毛玻璃使用示例",
		desc: "高斯模糊&毛玻璃使用示例",
		path: "/BlurEffectsDemo",
		cases: [
		]
	},
	{
		title: "Network",
		subTitle: "网络请求",
		path: "/NetworkDemo",
		desc: "网络请求",
		cases: [
		]
	},
	{
		title: "GestureContainer",
		subTitle: "手势演示示例",
		desc: "手势演示示例",
		path: "/GestureContainerDemo",
		cases: [
		]
	},
	{
		title: "EffectsDemo",
		subTitle: "圆角阴影示例",
		desc: "圆角阴影示例",
		path: "/effects",
		cases: [
		]
	},
	{
		title: "ListEffectsDemo",
		subTitle: "圆角阴影在List中的示例",
		desc: "圆角阴影在List中的示例",
		path: "/effects/list",
		cases: [
		]
	},
	{
		title: "Popover",
		subTitle: "popover示例",
		desc: "popover示例",
		path: "/PopoverDemo",
		cases: [
		]
	},
	{
		title: "Draggable",
		subTitle: "可拖拽组件draggable示例",
		desc: "可拖拽组件draggable示例",
		path: "/DraggableDemo",
		cases: [
		]
	},
	{
		title: "TextAnimationDemo",
		subTitle: "文本动画示例",
		desc: "文本动画示例",
		path: "/TextAnimationDemo",
		cases: [
		]
	},
	{
		title: "PathButtonDemo",
		subTitle: "组合动画示例",
		desc: "组合动画示例",
		path: "/PathButtonDemo",
		cases: [
		]
	},
	{
		title: "GestureTSXDemo",
		subTitle: "手势演示示例(TSX版本)",
		desc: "手势演示示例(TSX版本)",
		path: "/GestureTSXDemo",
		cases: [
		]
	},
	{
		title: "StorageDemo",
		subTitle: "数据缓存、持久化存储",
		desc: "数据缓存、持久化存储",
		path: "/StorageDemo",
		cases: [
		]
	},
	{
		title: "SwitchDemo",
		subTitle: "Switch控件",
		desc: "Switch控件",
		path: "/SwitchDemo",
		cases: [
		]
	}
];

var __decorate$p = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let MyTabBar = class MyTabBar extends doric.FlexLayout {
    constructor() {
        super();
        this.tempConfig = {};
        this.selectedIndex = 0;
        this.titles = [];
        this.normalColor = doric.Color.GRAY;
        this.selectedColor = doric.Color.safeParse('#4BA664');
        this.backgroundColor = doric.Color.WHITE;
        if (Environment.platform == 'iOS') {
            // 有刘海的屏幕:44 没有刘海的屏幕为20
            // 有刘海的屏幕:34 没有刘海的屏幕0
            this.height = Environment.statusBarHeight > 20 ? (48 + 34) : 48;
        }
        else {
            this.height = 48;
        }
        this.layoutConfig = doric.layoutConfig().mostWidth().justHeight();
    }
    apply(config) {
        var _a;
        let t = super.apply(config);
        this.tempConfig = config;
        var tabItems = [];
        if (config.titles && config.titles.length > 0) {
            let selectedIndex = (_a = config.selectedIndex) !== null && _a !== void 0 ? _a : t.selectedIndex;
            for (let index = 0; index < config.titles.length; index++) {
                let title = config.titles[index];
                let color = doric.Color.LTGRAY;
                if (config.selectedColor && config.normalColor) {
                    color = (index == selectedIndex) ? config.selectedColor : config.normalColor;
                }
                else {
                    color = (index == selectedIndex) ? t.selectedColor : t.normalColor;
                }
                var imageV = new doric.Image;
                if (config.selectedImages && config.normalImages) {
                    imageV = (index == selectedIndex) ? config.selectedImages[index % config.selectedImages.length] : config.normalImages[index % config.normalImages.length];
                }
                var itemViews = [];
                if (imageV) {
                    itemViews.push(imageV);
                }
                itemViews.push(doric.text({
                    text: title,
                    textSize: 13,
                    textColor: color,
                    layoutConfig: doric.layoutConfig().fit()
                }));
                tabItems.push(doric.vlayout(itemViews, {
                    height: 48,
                    gravity: doric.Gravity.Center,
                    space: 5,
                    layoutConfig: doric.layoutConfig().fitWidth().justHeight(),
                    onClick: () => {
                        t.selectedIndex = index;
                        if (t.tempConfig) {
                            t.tempConfig.selectedIndex = index;
                            t.apply(this.tempConfig);
                        }
                        if (t.onSelectedHandler) {
                            t.onSelectedHandler(this.selectedIndex);
                        }
                    }
                }));
            }
        }
        if (tabItems) {
            t.removeAllChildren();
            doric.flexlayout(tabItems, {
                flexConfig: {
                    flexDirection: doric.FlexDirection.ROW,
                    justifyContent: doric.Justify.SPACE_AROUND
                },
                layoutConfig: doric.layoutConfig().most()
            }).in(this);
        }
        return t;
    }
};
MyTabBar = __decorate$p([
    doric.ViewComponent,
    __metadata("design:paramtypes", [])
], MyTabBar);
function myTabBar(config) {
    const ret = new MyTabBar;
    if (config) {
        ret.apply(config);
    }
    return ret;
}

var img$a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGCAYAAAA6hjFpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkU0MTM1QjhGNzA0MTFFQUJDRTdGNTVBMThFRTFBMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkU0MTM1QjlGNzA0MTFFQUJDRTdGNTVBMThFRTFBMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRTQxMzVCNkY3MDQxMUVBQkNFN0Y1NUExOEVFMUEwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRTQxMzVCN0Y3MDQxMUVBQkNFN0Y1NUExOEVFMUEwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq6ykvgAAAI0SURBVHja7JzBSxRRAIfdMHOL1UMiumLZyZQuIuRoncKLCh7qXoIggohQ3YQg8KYH6VSgYH9AgngIliUIFDewoCSqv2CvW3rV7Tf4xG0pttld971xvg++i+zMG+d7Mzu74xjL5/N14A4X2AUEAYIQBAhCECAIQYAgBAGCAEEIAuVQX+sBM5lMqHaQ53kcIRwh4eWqnJFD8ki+ly/lT4LUnjG5ItsKfjYip+WEicObeg1IyFdysyjGCV3ynVySjQQ5W+7Kz3JKxkr8Xk/kR9lPkOpzSS6a09CNAMv1yh35LCyn5zAE6ZO78mmZ23tRPpfb8iZBKrvgmJcf5K0qrO+2/CTnSpzuCPIXuuWWXDAzvFrE5bJMy+sEKY0/c2fNTB44w3HuyS/yEUH+TadMyRfycg3Ga5JrckO2EuRPHso9OWxh7HEz9n2CHM/MN/K1bGY77Aa5I7+6MjMLjtRvsieKQfwrqBYHL3Ta5eMoBulz+DPQYNSCNNg+V5fgWtSCxAO+/q1Mms8p5Zg06/hfEnWWvvsKy5eLkzJbwfJZs44gXIlSkAMLY4biUTFbQQ4Dvr74zmBQOuRqwGWs3AYOyy3c0QpPWaGBvzohCBCEIEAQggBBCAIEIQgQBAhCECAIQSrjl8P75SCKQdIOB0lFMYj/qEHOwRg5s22RC/Jd+g+Br8t9B0Lsm23xzLZZwfYt3B/yAW/lp8T4v71cZQFBCAIEIQgQhCBAEIIAQYAgBAGCnAN+CzAA/M1JjGJ8jbcAAAAASUVORK5CYII=";

var img$9 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGCAYAAAA6hjFpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjhGNjI2NzNGNzA1MTFFQUJDRTdGNTVBMThFRTFBMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjhGNjI2NzRGNzA1MTFFQUJDRTdGNTVBMThFRTFBMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRTQxMzVCQUY3MDQxMUVBQkNFN0Y1NUExOEVFMUEwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOEY2MjY3MkY3MDUxMUVBQkNFN0Y1NUExOEVFMUEwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvSKt/cAAAI4SURBVHja7JzNSxRhAIfdKHOVrUMiuqHZqQ+6iJCbdpIuJXgoumYQRCARVLdAELzpQToVGJRXKYgOwrIEQRJBBRah/QV7Xd291vRbfKVtUXZnZ3fed5zngeey7Mw7zjMzOx/uJjzPawN3OMQqIAgQhCBAEIIAQQgCBCEIEAQIQhBohMNhD5hYuRWpFeTdXGYPYQ+JLifktByVf+QH+UxuESR8JuSS7K147aq8J2+bOHyoh0BKPpfvqmLsMijfywXZQZDWclmuy7vl84Maf9cj+VUOE6T5HJXz5jB02sd05+UnOROVw3MUggzJL/Jxg8t7RM7KNXmWIMFOOJ7Iz/JCE+Z3UX6TD2oc7giyB2fkRzlntvBmkZSLMidPEaSOC3l532zJIy0cZ1x+l1ME2Z9+mZVPZWcI4x2TL+Vb2UOQ/ynf4Pohr1gYe9KMfZ0gO1vma/lKHmc57AYZkz9d2TIr9tQNeS6OQcpnUN0Onuj0yYdxDDLk8DXQpbgFabd9rK7BQNyCJH2+f1WmzXVKI6bNPOol1Wbp3ldUbi7ekfkA0+fNPPzQFacgJQtjRuKrYraC/Pb5/uong345KV/4nMbKY+CoPMK9FvCQFRn4rxOCAEEIAgQhCBCEIEAQggBBgCAEAYIQJBjbDq+XUhyD5BwOko1jkPJXDQoOxiiYZYtdkE2ZkW9k0YEQRbMsGbNsVrD9CPeXvMFH+T8S/G4vZ1lAEIIAQQgCBCEIEIQgQBAgCEGAIAeAvwIMABctSYybE39uAAAAAElFTkSuQmCC";

var img$8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGCAYAAAA6hjFpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0Q1MTUzQUVGNzA1MTFFQUJDRTdGNTVBMThFRTFBMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTg0ODFENjhGNzA1MTFFQUJDRTdGNTVBMThFRTFBMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RDUxNTNBQ0Y3MDUxMUVBQkNFN0Y1NUExOEVFMUEwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RDUxNTNBREY3MDUxMUVBQkNFN0Y1NUExOEVFMUEwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkjjnbEAAAKASURBVHja7JzPi4xxHMefQX4lM/biYEQcdmWL1NQclCPJxa+NQnLcA8sBZ7Vb26b1D2hrL4psSoqLi9LEXkTkSCGF2hy0ofH+tp8DWtH3+T77fB/f16tel519PjPNa7/PPDPfdmrdbjeDeFjEU0AQIAhBgCAEAYIQBAhCECAIEIQgQBCCQGiWLPQddjqdSj1B7XabFcIpq3qskYPytnwlZ+Vn+cJ+Nmi/wymrYJbLs/K8bPx221LZZ+6Tw3JMjssvrJDwbJSP5cg8MeajYVEe2bEECUhTPpD9Hsf227FNgoQ7TU3lfEKbNmMFQfIzJFsB5rRsFkFy0CMvBpx3wWYSxJOjsh5wXt1mEsST3QXM3EMQf7YXMHMbQfxZW5GZyQSZzRIj9iDvCpj5niD+vCxg5hOC+HOvgJl3CeLPNTkTcN6MzSSIJ5/kaMB5ozaTIDm4Ip8GmPPMZnGVlRO3uXRAvs0x443cn1Vgo6oqH79vlvflN4/jv2dz+yFb5SqC+LNDTsqPdmV0LPPbcl4sj8hb8oO8LncS5N/ZIm/IaXlcrgw4e5k8bCvmjkUnyB9YJyfsBfyQrBV8f3stulsxmwjyK6fkc3nSTjELRc1WjLsCGyLIHJflVbm6xMfg9trH7XEkHeSEPBfRadOt1NOpBnF/lSMRXlRcykrcdy8zyEF7IY+Nuq3c5IIMRPweaCC1IO5+d0UcpFXWu/qygmwo+arqb7hPBPpSCtKbxU9vSkHWVyBIM6Ug9QoEaaQU5GsGUQV5KGP/9s3plIK4/4Ryn+i+jjCE23M/I2+WdXlXFlMm/ESN7+3lNQQIQhAgCEGAIAQBghAECAIEIQgQ5D/ghwADAKBcV67fom8HAAAAAElFTkSuQmCC";

var img$7 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGCAYAAAA6hjFpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTg0ODFENkJGNzA1MTFFQUJDRTdGNTVBMThFRTFBMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTg0ODFENkNGNzA1MTFFQUJDRTdGNTVBMThFRTFBMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBODQ4MUQ2OUY3MDUxMUVBQkNFN0Y1NUExOEVFMUEwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBODQ4MUQ2QUY3MDUxMUVBQkNFN0Y1NUExOEVFMUEwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqU9VzAAAAKBSURBVHja7Jy9axRBGId3VfxCvDONhSeKFokYUALXBSwVsfEjQUFFLFNotFBrwUAQSf6BINgIBoMggjY2goWmEUWxVFARVAgWElTO35C3MCGizM5mZ53ngadJsu8d92T29m4uyTudTgbxsIyHgCBAEIIAQQgCBCEIEIQgQBAgCEGAIASB0KxY6hvMJ0/W6gHqDNxghXDKqh8b5JC8K9/IWflVvrKvDdnPcMoqmdXynLwgmwu+t1L2mAfkFXlVjslvrJDwbJVP5cgiMRajaVGe2LEECUhLPpK9Hsf22rEtgoQ7TU0VfEBbNmMNQYozLNsB5rRtFkEK0CUvBZx30WYSxJNjshFwXsNmEsSTvSXM3EcQf3aXMHMXQfzZWJOZyQSZzRIj9iAfSpj5kSD+vC5h5jOC+POghJn3CeLPTTkTcN6MzSSIJ1/kaMB5ozaTIAUYl88DzHlhs7jKKojbXDok3xeY8U4ezGqwUVWXt9+3y4fyh8fxP7O5/ZCdch1B/OmT7iMfn+3K6Hjmt+W8XB6Vd+QneUv2E+Tf2SEn5bQ8IdcGnL1KDtiKuWfRCfIHNsnr9gR+ROYl395+i+5WzDaCzOe0fClP2SlmqchtxbgrsGGCzHFNTsj1Fd4Ht9c+Zvcj6SDuc6XnIzptupV6JtUg7rdyJMKListZhfvuVQY5bE/ksdGwlZtckMGIXwMNphbE3e6eiIO0q3pVX1WQLRVfVf0N945AT0pBurP46U4pyOYaBGmlFKRRgyDNlIJ8zyCqII9l7P99czqlIO4vodw7um8jDOH23M/K21Vd3lXFlAm/kfN/e3kOAYIQBAhCECAIQYAgBAGCAEEIAgT5D/glwAC6rVeuclZOsgAAAABJRU5ErkJggg==";

var __decorate$o = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter$6 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getInput(c) {
    const inputView = doric.input(c);
    const isFocused = doric.text({
        layoutConfig: {
            widthSpec: doric.LayoutSpec.MOST,
            heightSpec: doric.LayoutSpec.JUST,
        },
        height: 50,
    });
    const inputed = doric.text({
        layoutConfig: {
            widthSpec: doric.LayoutSpec.MOST,
            heightSpec: doric.LayoutSpec.JUST,
        },
        height: 50,
    });
    inputView.onFocusChange = (onFocusChange) => {
        isFocused.text = onFocusChange ? `Focused` : `Unfocused`;
    };
    inputView.onTextChange = (text) => {
        inputed.text = `Inputed:${text}`;
    };
    return [inputView, isFocused, inputed];
}
let KeyboardDemo = class KeyboardDemo extends doric.Panel {
    build(rootView) {
        var [inputView, ...otherView] = getInput({
            layoutConfig: {
                widthSpec: doric.LayoutSpec.FIT,
                heightSpec: doric.LayoutSpec.FIT,
            },
            hintText: "Please input something in one line",
            border: {
                width: 1,
                color: doric.Color.GRAY,
            },
            multiline: false,
            textSize: 20,
            maxLength: 20,
            padding: { top: 10, bottom: 11 },
            inputType: doric.InputType.Decimal,
            password: true,
        });
        let bottomView = label$2('Bottom View').apply({
            width: 200,
            height: 50,
            backgroundColor: colors$2[0],
            textSize: 30,
            textColor: doric.Color.WHITE,
            layoutConfig: doric.layoutConfig().just().configAlignment(new doric.Gravity().bottom().centerX())
        });
        doric.stack([
            doric.vlayout([
                title$1("Keyboard Demo"),
                label$2('Subscribe').apply({
                    width: 200,
                    height: 50,
                    corners: 25,
                    backgroundColor: colors$2[0],
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    layoutConfig: doric.layoutConfig().just(),
                    onClick: () => {
                        doric.keyboard(this.context).subscribe(data => {
                            bottomView.translationY = -(data.bottomMargin + data.height);
                        }).then(e => {
                            doric.modal(this.context).toast(`Keyboard Subscribe`);
                            this.subscribeId = e;
                        });
                    }
                }),
                label$2('Unsubscribe').apply({
                    width: 200,
                    height: 50,
                    corners: 25,
                    backgroundColor: colors$2[0],
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    layoutConfig: doric.layoutConfig().just(),
                    onClick: () => {
                        if (this.subscribeId) {
                            doric.keyboard(this.context).unsubscribe(this.subscribeId).then(e => {
                                doric.modal(this.context).toast(`Keyboard Unsubscribe`);
                                this.subscribeId = undefined;
                            });
                        }
                    }
                }),
                inputView,
                ...otherView,
                label$2('获取输入文本').apply({
                    width: 180,
                    height: 40,
                    corners: 20,
                    backgroundColor: colors$2[3],
                    textSize: 22,
                    textColor: doric.Color.WHITE,
                    layoutConfig: doric.layoutConfig().just(),
                    onClick: () => __awaiter$6(this, void 0, void 0, function* () {
                        var _a;
                        let inputT = inputView;
                        let text = (_a = yield inputT.getText(this.context)) !== null && _a !== void 0 ? _a : '';
                        doric.modal(this.context).toast(text);
                    })
                }),
            ]).apply({
                layoutConfig: doric.layoutConfig().most(),
                gravity: doric.gravity().centerX(),
                space: 10,
            }),
            bottomView,
        ]).apply({
            layoutConfig: doric.layoutConfig().most(),
        }).in(rootView);
    }
};
KeyboardDemo = __decorate$o([
    Entry
], KeyboardDemo);

const icon_refresh = 'data:image/png;base64,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';
const colors$1 = [
    "#70a1ff",
    "#7bed9f",
    "#ff6b81",
    "#a4b0be",
    "#f0932b",
    "#eb4d4b",
    "#6ab04c",
    "#e056fd",
    "#686de0",
    "#30336b",
].map(e => doric.Color.parse(e));
function label$1(str) {
    return doric.text({
        text: str,
        textSize: 16,
    });
}
function box$2(idx = 0) {
    return (new doric.Stack).also(it => {
        it.width = it.height = 20;
        it.backgroundColor = colors$1[idx || 0];
    });
}
function title(str) {
    return doric.text({
        text: str,
        layoutConfig: doric.layoutConfig().configWidth(doric.LayoutSpec.MOST),
        textSize: 30,
        textColor: doric.Color.WHITE,
        backgroundColor: colors$1[1],
        textAlignment: doric.gravity().center(),
        height: 50,
    });
}
function rotatedArrow() {
    let refreshImage;
    return doric.pullable(doric.stack([
        doric.image({
            layoutConfig: doric.layoutConfig().just().configMargin({ top: 50, bottom: 10, }),
            width: 30,
            height: 30,
            imageBase64: icon_refresh,
        }).also(v => refreshImage = v),
    ]), {
        startAnimation: () => {
            doric.log('startAnimation');
        },
        stopAnimation: () => {
            doric.log('stopAnimation');
        },
        setPullingDistance: (distance) => {
            refreshImage.rotation = distance / 30;
        },
    });
}

var __decorate$n = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter$5 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const imageUrls = [
    'http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg',
    'http://f.hiphotos.baidu.com/image/pic/item/0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
    'http://f.hiphotos.baidu.com/image/pic/item/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg',
    'http://b.hiphotos.baidu.com/image/pic/item/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
    'http://a.hiphotos.baidu.com/image/h%3D300/sign=b38f3fc35b0fd9f9bf175369152cd42b/9a504fc2d5628535bdaac29e9aef76c6a6ef63c2.jpg',
    'http://h.hiphotos.baidu.com/image/pic/item/810a19d8bc3eb1354c94a704ac1ea8d3fd1f4439.jpg',
    'http://calonye.com/wp-content/uploads/2015/08/0-wx_fmtgiftpwebpwxfrom5wx_lazy1-9.gif',
    'http://hbimg.b0.upaiyun.com/ca29ea125b7f2d580f573e48eb594b1ef509757f34a08-m0hK45_fw658',
    'https://misc.aotu.io/ONE-SUNDAY/SteamEngine.png',
    'http://b.hiphotos.baidu.com/image/pic/item/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg',
    'http://f.hiphotos.baidu.com/image/pic/item/0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
    'http://f.hiphotos.baidu.com/image/pic/item/b151f8198618367aa7f3cc7424738bd4b31ce525.jpg',
    'http://b.hiphotos.baidu.com/image/pic/item/0eb30f2442a7d9337119f7dba74bd11372f001e0.jpg',
    'http://a.hiphotos.baidu.com/image/h%3D300/sign=b38f3fc35b0fd9f9bf175369152cd42b/9a504fc2d5628535bdaac29e9aef76c6a6ef63c2.jpg',
    'http://h.hiphotos.baidu.com/image/pic/item/810a19d8bc3eb1354c94a704ac1ea8d3fd1f4439.jpg',
    'http://calonye.com/wp-content/uploads/2015/08/0-wx_fmtgiftpwebpwxfrom5wx_lazy1-9.gif',
];
let SliderDemo = class SliderDemo extends doric.Panel {
    build(rootView) {
        let pager = doric.slider({
            itemCount: imageUrls.length,
            renderPage: (idx) => {
                return doric.slideItem(doric.image({
                    imageUrl: imageUrls[idx % imageUrls.length],
                    scaleType: doric.ScaleType.ScaleAspectFit,
                    layoutConfig: doric.layoutConfig().configWidth(doric.LayoutSpec.MOST).configHeight(doric.LayoutSpec.MOST).configAlignment(doric.gravity().center()),
                })).also(it => {
                    let start = idx;
                    it.onClick = () => {
                        it.backgroundColor = (colors$1[++start % colors$1.length]);
                    };
                });
            },
            loop: true,
            layoutConfig: {
                widthSpec: doric.LayoutSpec.MOST,
                heightSpec: doric.LayoutSpec.MOST,
                weight: 1,
            },
            onPageSlided: (index) => {
                doric.modal(this.context).toast(index.toString());
            }
        });
        let pageIndexInput = doric.input({
            backgroundColor: doric.Color.WHITE,
            layoutConfig: {
                widthSpec: doric.LayoutSpec.FIT,
                heightSpec: doric.LayoutSpec.FIT,
            },
            hintText: "Page index",
            inputType: doric.InputType.Number,
            textAlignment: doric.Gravity.Center,
            border: {
                width: 1,
                color: doric.Color.GRAY,
            },
        });
        rootView.addChild(doric.vlayout([
            doric.text({
                text: "Gallery",
                layoutConfig: {
                    widthSpec: doric.LayoutSpec.MOST,
                    heightSpec: doric.LayoutSpec.JUST,
                },
                textSize: 30,
                textColor: doric.Color.WHITE,
                backgroundColor: colors$1[1],
                textAlignment: doric.gravity().center(),
                height: 50,
            }),
            doric.hlayout([
                doric.text({
                    text: "Loop",
                    layoutConfig: {
                        widthSpec: doric.LayoutSpec.FIT,
                        heightSpec: doric.LayoutSpec.JUST,
                    },
                    textSize: 20,
                    textColor: doric.Color.BLACK,
                    textAlignment: doric.gravity().center(),
                    height: 50,
                }),
                doric.switchView({
                    state: true,
                    onSwitch: (state) => {
                        pager.loop = state;
                    },
                }),
            ], {
                layoutConfig: doric.layoutConfig().most().configHeight(doric.LayoutSpec.FIT),
                gravity: doric.gravity().center(),
                space: 10,
                backgroundColor: doric.Color.RED,
            }),
            doric.hlayout([
                doric.text({
                    text: "Bounces",
                    layoutConfig: {
                        widthSpec: doric.LayoutSpec.FIT,
                        heightSpec: doric.LayoutSpec.JUST,
                    },
                    textSize: 20,
                    textColor: doric.Color.BLACK,
                    textAlignment: doric.gravity().center(),
                    height: 50,
                }),
                doric.switchView({
                    state: true,
                    onSwitch: (state) => {
                        pager.bounces = state;
                    },
                }),
            ], {
                layoutConfig: doric.layoutConfig().most().configHeight(doric.LayoutSpec.FIT),
                gravity: doric.gravity().center(),
                space: 10,
                backgroundColor: doric.Color.RED,
            }),
            doric.hlayout([
                doric.text({
                    text: "Slide to page",
                    layoutConfig: {
                        widthSpec: doric.LayoutSpec.FIT,
                        heightSpec: doric.LayoutSpec.JUST,
                    },
                    textSize: 20,
                    textColor: doric.Color.BLACK,
                    textAlignment: doric.gravity().center(),
                    height: 50,
                }),
                pageIndexInput,
                doric.text({
                    text: "Go!",
                    layoutConfig: {
                        widthSpec: doric.LayoutSpec.FIT,
                        heightSpec: doric.LayoutSpec.JUST,
                    },
                    padding: {
                        left: 10,
                        right: 10
                    },
                    textSize: 20,
                    textColor: doric.Color.BLACK,
                    backgroundColor: doric.Color.WHITE,
                    textAlignment: doric.gravity().center(),
                    height: 40,
                    onClick: () => __awaiter$5(this, void 0, void 0, function* () {
                        let index = yield pageIndexInput.getText(this.context);
                        yield pager.slidePage(this.context, parseInt(index), true);
                    })
                }),
            ], {
                layoutConfig: doric.layoutConfig().most().configHeight(doric.LayoutSpec.FIT),
                gravity: doric.gravity().center(),
                space: 10,
                backgroundColor: doric.Color.RED,
            }),
            doric.hlayout([
                doric.text({
                    text: "getSlidedPage",
                    layoutConfig: {
                        widthSpec: doric.LayoutSpec.FIT,
                        heightSpec: doric.LayoutSpec.JUST,
                    },
                    textSize: 20,
                    textColor: doric.Color.BLACK,
                    textAlignment: doric.gravity().center(),
                    height: 50,
                    onClick: () => __awaiter$5(this, void 0, void 0, function* () {
                        let index = yield pager.getSlidedPage(this.context);
                        doric.modal(this.context).toast(index.toString());
                    })
                }),
            ], {
                layoutConfig: doric.layoutConfig().most().configHeight(doric.LayoutSpec.FIT),
                gravity: doric.gravity().center(),
                space: 10,
                backgroundColor: doric.Color.RED,
            }),
            pager,
        ]).also(it => {
            it.layoutConfig = {
                widthSpec: doric.LayoutSpec.MOST,
                heightSpec: doric.LayoutSpec.MOST,
            };
        }));
    }
};
SliderDemo = __decorate$n([
    Entry
], SliderDemo);

var __decorate$m = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function box$1(idx = 0) {
    return (new doric.Stack).also(it => {
        it.width = it.height = 20;
        it.backgroundColor = doric.Color.CYAN;
    });
}
function label(str) {
    return doric.text({
        text: str,
        textSize: 16,
    });
}
let EffectsDemo = class EffectsDemo extends doric.Panel {
    build(rootView) {
        doric.scroller(doric.vlayout([
            doric.hlayout([
                doric.vlayout([
                    label("Origin view"),
                    box$1().apply({
                        width: 100,
                        height: 100
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Border"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        border: {
                            width: 5,
                            color: randomColor()
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Corner"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        corners: 10,
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            bottom: 10
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Shadow"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        shadow: {
                            opacity: 1,
                            color: randomColor(),
                            offsetX: 3,
                            offsetY: 3,
                            radius: 5,
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            bottom: 10
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
            ], { space: 20 }),
            doric.hlayout([
                doric.vlayout([
                    label("Border,Corner"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        border: {
                            width: 5,
                            color: randomColor()
                        },
                        corners: 10,
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Border,Shadow"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        border: {
                            width: 5,
                            color: randomColor()
                        },
                        shadow: {
                            opacity: 1,
                            color: randomColor(),
                            offsetX: 3,
                            offsetY: 3,
                            radius: 5,
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            bottom: 10
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Corner,Shadow"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        corners: 10,
                        shadow: {
                            opacity: 1,
                            color: randomColor(),
                            offsetX: 3,
                            offsetY: 3,
                            radius: 5,
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            bottom: 10
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Border,Corner,Shadow"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        border: {
                            width: 5,
                            color: randomColor()
                        },
                        corners: 10,
                        shadow: {
                            opacity: 1,
                            color: randomColor(),
                            offsetX: 3,
                            offsetY: 3,
                            radius: 5,
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
            ], { space: 20 }),
            doric.hlayout([
                doric.vlayout([
                    label("Shadow"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        corners: 50,
                        shadow: {
                            opacity: 1,
                            color: randomColor(),
                            offsetX: 0,
                            offsetY: 0,
                            radius: 10,
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 10,
                            right: 10,
                            bottom: 10,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Shadow,offset"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        corners: 50,
                        shadow: {
                            opacity: 1,
                            color: randomColor(),
                            offsetX: 5,
                            offsetY: 5,
                            radius: 5,
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 10,
                            right: 10,
                            bottom: 10,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Shadow,opacity"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        corners: 50,
                        shadow: {
                            opacity: 0.5,
                            color: randomColor(),
                            offsetX: 5,
                            offsetY: 5,
                            radius: 5,
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 10,
                            right: 10,
                            bottom: 10,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Shadow,color"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        corners: 50,
                        shadow: {
                            opacity: 1,
                            color: randomColor(),
                            offsetX: 5,
                            offsetY: 5,
                            radius: 5,
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 10,
                            right: 10,
                            bottom: 10,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
            ], { space: 20 }),
            doric.hlayout([
                doric.vlayout([
                    label("Corner round"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        corners: 50,
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Corner left top"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        corners: {
                            leftTop: 50,
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Corner right top"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        corners: {
                            rightTop: 50,
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Corner left bottom"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        corners: {
                            leftBottom: 50,
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Corner right bottom"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        corners: {
                            rightBottom: 50,
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
            ], { space: 20 }),
            doric.hlayout([
                doric.vlayout([
                    label("Gradient TOP_BOTTOM"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            start: randomColor(),
                            end: doric.Color.WHITE,
                            orientation: doric.GradientOrientation.TOP_BOTTOM
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Gradient TR_BL"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            start: randomColor(),
                            end: doric.Color.WHITE,
                            orientation: doric.GradientOrientation.TR_BL
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Gradient RIGHT_LEFT"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            start: randomColor(),
                            end: doric.Color.WHITE,
                            orientation: doric.GradientOrientation.RIGHT_LEFT
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Gradient BR_TL"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            start: randomColor(),
                            end: doric.Color.WHITE,
                            orientation: doric.GradientOrientation.BR_TL
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Gradient BOTTOM_TOP"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            start: randomColor(),
                            end: doric.Color.WHITE,
                            orientation: doric.GradientOrientation.BOTTOM_TOP
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Gradient BL_TR"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            start: randomColor(),
                            end: doric.Color.WHITE,
                            orientation: doric.GradientOrientation.BL_TR
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Gradient LEFT_RIGHT"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            start: randomColor(),
                            end: doric.Color.WHITE,
                            orientation: doric.GradientOrientation.LEFT_RIGHT
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Gradient TL_BR"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            start: randomColor(),
                            end: doric.Color.WHITE,
                            orientation: doric.GradientOrientation.TL_BR
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
            ], { space: 20 }),
            doric.hlayout([
                doric.vlayout([
                    label("Multi-Grad TOP_BOTTOM"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            colors: [randomColor(), doric.Color.WHITE, randomColor()],
                            orientation: doric.GradientOrientation.TOP_BOTTOM
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Multi-Grad TR_BL"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            colors: [randomColor(), doric.Color.WHITE, randomColor()],
                            orientation: doric.GradientOrientation.TR_BL
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Multi-Grad RIGHT_LEFT"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            colors: [randomColor(), doric.Color.WHITE, randomColor()],
                            orientation: doric.GradientOrientation.RIGHT_LEFT
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Multi-Grad BR_TL"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            colors: [randomColor(), doric.Color.WHITE, randomColor()],
                            orientation: doric.GradientOrientation.BR_TL
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Multi-Grad BOTTOM_TOP"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            colors: [randomColor(), doric.Color.WHITE, randomColor()],
                            orientation: doric.GradientOrientation.BOTTOM_TOP
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Multi-Grad BL_TR"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            colors: [randomColor(), doric.Color.WHITE, randomColor()],
                            orientation: doric.GradientOrientation.BL_TR
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Multi-Grad LEFT_RIGHT"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            colors: [randomColor(), doric.Color.WHITE, randomColor()],
                            orientation: doric.GradientOrientation.LEFT_RIGHT
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
                doric.vlayout([
                    label("Multi-Grad TL_BR"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            colors: [randomColor(), doric.Color.WHITE, randomColor()],
                            orientation: doric.GradientOrientation.TL_BR
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
            ], { space: 20 }),
            doric.hlayout([
                doric.vlayout([
                    label("Multi-Grad locations"),
                    box$1().apply({
                        width: 100,
                        height: 100,
                        backgroundColor: {
                            colors: [randomColor(), doric.Color.WHITE, randomColor()],
                            locations: [0, 0.3, 1],
                            orientation: doric.GradientOrientation.TOP_BOTTOM
                        },
                        layoutConfig: doric.layoutConfig().just().configMargin({
                            left: 5,
                            right: 5,
                            bottom: 5,
                        })
                    }),
                ], {
                    gravity: doric.Gravity.Center,
                    space: 10,
                }),
            ], { space: 20 })
        ], {
            space: 20
        }), {
            layoutConfig: doric.layoutConfig().most()
        }).in(rootView);
    }
};
EffectsDemo = __decorate$m([
    Entry
], EffectsDemo);

var __decorate$l = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function cornerExampleCell(index) {
    var box1 = box().apply({
        layoutConfig: doric.layoutConfig().just(),
        corners: {
            leftTop: 30,
            rightBottom: 30,
        },
        onClick: () => {
            if (index % 2 == 0) {
                box1.corners = {
                    leftTop: 0,
                    rightBottom: 30,
                };
            }
            else {
                box1.corners = {
                    leftBottom: 30,
                    rightTop: 30,
                };
            }
        }
    });
    var box2 = box().apply({
        layoutConfig: doric.layoutConfig().just(),
        corners: 30,
        onClick: () => {
            if (index % 2 == 0) {
                box2.corners = 50;
            }
            else {
                box2.corners = 0;
            }
        }
    });
    return doric.listItem(doric.stack([
        doric.flexlayout([
            box1,
            box2,
        ], {
            flexConfig: {
                direction: doric.Direction.LTR,
                flexDirection: doric.FlexDirection.ROW,
                justifyContent: doric.Justify.SPACE_AROUND,
                alignItems: doric.Align.CENTER
            },
            layoutConfig: doric.layoutConfig().most().configAlignment(doric.Gravity.Center),
        }),
        line(),
    ], {
        layoutConfig: doric.layoutConfig().most(),
    }), {
        height: 120,
        layoutConfig: doric.layoutConfig().justHeight().mostWidth(),
        identifier: 'cornerExampleCell'
    });
}
function line() {
    return (new doric.Stack).also(it => {
        it.height = 0.5;
        it.backgroundColor = doric.Color.LTGRAY;
        it.layoutConfig = doric.layoutConfig().justHeight().mostWidth().configAlignment(doric.Gravity.Bottom);
    });
}
function box() {
    return (new doric.Stack).also(it => {
        it.width = it.height = 100;
        it.backgroundColor = randomColor();
    });
}
let ListEffectsDemo = class ListEffectsDemo extends doric.Panel {
    build(rootView) {
        doric.list({
            itemCount: 10,
            renderItem: (index) => cornerExampleCell(index),
        }).apply({
            layoutConfig: doric.layoutConfig().most()
        }).in(rootView);
    }
};
ListEffectsDemo = __decorate$l([
    Entry
], ListEffectsDemo);

var __decorate$k = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AnimationsDemo = class AnimationsDemo extends doric.Panel {
    build(root) {
        const animation = new doric.TranslationAnimation;
        animation.fromTranslationX = 0;
        animation.toTranslationX = 100;
        animation.duration = 5000;
        let view;
        doric.vlayout([
            view = doric.stack([], {
                layoutConfig: doric.layoutConfig().just(),
                width: 20,
                height: 21,
                backgroundColor: doric.Color.BLUE,
            }),
            doric.text({
                text: "Start",
                onClick: () => {
                    doric.log('start');
                    view.doAnimation(this.context, animation);
                }
            }),
            doric.text({
                text: "Cancel",
                onClick: () => {
                    view.cancelAnimation(this.context, animation);
                }
            }),
            doric.text({
                text: "Clear",
                onClick: () => {
                    view.clearAnimation(this.context, animation);
                }
            }),
        ], {
            space: 20,
            layoutConfig: doric.layoutConfig().most(),
            gravity: doric.Gravity.Center
        }).in(root);
    }
};
AnimationsDemo = __decorate$k([
    Entry
], AnimationsDemo);

var __decorate$j = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter$4 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let AnimatedImageDemo = class AnimatedImageDemo extends doric.Panel {
    build(root) {
        const imageRef = doric.createRef();
        doric.jsx.createElement(doric.VLayout, { parent: root, layoutConfig: doric.layoutConfig().most(), gravity: doric.Gravity.Center, space: 20 },
            doric.jsx.createElement(doric.Image, { scaleType: doric.ScaleType.ScaleToFill, ref: imageRef, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/14/Animated_PNG_example_bouncing_beach_ball.png" }),
            doric.jsx.createElement(doric.Text, { textSize: 20, backgroundColor: colors$2[0], textColor: doric.Color.WHITE, padding: { left: 10, top: 10, right: 10, bottom: 10 }, onClick: () => __awaiter$4(this, void 0, void 0, function* () {
                    const isAnimating = yield imageRef.current.isAnimating(this.context);
                    doric.modal(this.context).alert(`Is Animating: ${isAnimating}`);
                }) }, "isAnimating"),
            doric.jsx.createElement(doric.Text, { textSize: 20, backgroundColor: colors$2[0], textColor: doric.Color.WHITE, padding: { left: 10, top: 10, right: 10, bottom: 10 }, onClick: () => {
                    imageRef.current.startAnimating(this.context);
                } }, "startAnimating"),
            doric.jsx.createElement(doric.Text, { textSize: 20, backgroundColor: colors$2[0], textColor: doric.Color.WHITE, padding: { left: 10, top: 10, right: 10, bottom: 10 }, onClick: () => {
                    imageRef.current.stopAnimating(this.context);
                } }, "stopAnimating"));
    }
};
AnimatedImageDemo = __decorate$j([
    Entry
], AnimatedImageDemo);

var __decorate$i = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function thisLabel$1(str) {
    return doric.text({
        text: str,
        width: 65,
        height: 50,
        backgroundColor: colors$1[0],
        textSize: 15,
        textColor: doric.Color.WHITE,
        layoutConfig: doric.layoutConfig().justWidth().justHeight(),
    });
}
let AnimatorDemo = class AnimatorDemo extends doric.Panel {
    build(rootView) {
        const view = doric.image({
            imageUrl: "https://pic3.zhimg.com/v2-5847d0813bd0deba333fcbe52435e83e_b.jpg",
            layoutConfig: doric.layoutConfig().just(),
            width: 100,
            height: 100
        });
        view.onClick = () => {
            doric.modal(this.context).toast('Clicked');
        };
        //const view = box(3)
        let idx = 0;
        doric.vlayout([
            title("Animator Demo"),
            doric.vlayout([
                doric.hlayout([thisLabel$1('Reset').apply({
                        onClick: () => {
                            doric.animate(this.context)({
                                animations: () => {
                                    view.width = view.height = 100;
                                    view.x = view.y = 0;
                                    view.rotation = 0;
                                    view.backgroundColor = colors$1[2];
                                    view.corners = 0;
                                    view.scaleX = 1;
                                    view.scaleY = 1;
                                    view.translationX = 0;
                                    view.translationY = 0;
                                    view.rotation = 0;
                                    view.rotationX = 0;
                                    view.rotationY = 0;
                                },
                                duration: 1500,
                            }).then(() => {
                                doric.modal(this.context).toast('Fininshed');
                            }).catch(e => {
                                doric.modal(this.context).toast(`${e}`);
                            });
                        }
                    }),], { space: 10 }),
                doric.hlayout([
                    thisLabel$1('X').apply({
                        onClick: () => {
                            doric.animate(this.context)({
                                animations: () => {
                                    view.x = view.x || 0;
                                    view.x += 100;
                                    //view2.x += 50
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel$1('Y').apply({
                        onClick: () => {
                            doric.animate(this.context)({
                                animations: () => {
                                    view.y = view.y || 0;
                                    view.y += 100;
                                    //view2.y += 50
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel$1('Width').apply({
                        onClick: () => {
                            doric.animate(this.context)({
                                animations: () => {
                                    view.width += 100;
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel$1('Height').apply({
                        onClick: () => {
                            doric.animate(this.context)({
                                animations: () => {
                                    view.height += 100;
                                },
                                duration: 1000,
                            });
                        }
                    }),
                ], { space: 10 }),
                doric.hlayout([
                    thisLabel$1('BgColor').apply({
                        onClick: () => {
                            doric.animate(this.context)({
                                animations: () => {
                                    view.backgroundColor = colors$1[(idx++) % colors$1.length];
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel$1('Rotation').apply({
                        onClick: () => {
                            doric.animate(this.context)({
                                animations: () => {
                                    if (view.rotation) {
                                        view.rotation += 0.25;
                                    }
                                    else {
                                        view.rotation = 0.25;
                                    }
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel$1('RotationX').apply({
                        onClick: () => {
                            doric.animate(this.context)({
                                animations: () => {
                                    if (view.rotationX) {
                                        view.rotationX += 0.25;
                                    }
                                    else {
                                        view.rotationX = 0.25;
                                    }
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel$1('RotationY').apply({
                        onClick: () => {
                            doric.animate(this.context)({
                                animations: () => {
                                    if (view.rotationY) {
                                        view.rotationY += 0.25;
                                    }
                                    else {
                                        view.rotationY = 0.25;
                                    }
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel$1('Corner').apply({
                        onClick: () => {
                            doric.animate(this.context)({
                                animations: () => {
                                    if (typeof view.corners === 'number') {
                                        view.corners += 10;
                                    }
                                    else {
                                        view.corners = 10;
                                    }
                                },
                                duration: 1000,
                            });
                        }
                    }),
                ], { space: 10 }),
                doric.hlayout([
                    thisLabel$1('scaleX').apply({
                        onClick: () => {
                            doric.animate(this.context)({
                                animations: () => {
                                    if (view.scaleX) {
                                        view.scaleX += 0.1;
                                    }
                                    else {
                                        view.scaleX = 1.1;
                                    }
                                },
                                duration: 1000,
                            });
                        }
                    }),
                    thisLabel$1('scaleY').apply({
                        onClick: () => {
                            doric.animate(this.context)({
                                animations: () => {
                                    if (view.scaleY) {
                                        view.scaleY += 0.1;
                                    }
                                    else {
                                        view.scaleY = 1.1;
                                    }
                                },
                                duration: 1000,
                            });
                        }
                    }),
                ]).apply({ space: 10 }),
            ], { space: 10 }),
            doric.stack([
                view,
            ], {
                layoutConfig: doric.layoutConfig().most(),
                backgroundColor: colors$1[1].alpha(0.3 * 255),
            }),
        ], {
            layoutConfig: doric.layoutConfig().most(),
            space: 10,
        }).in(rootView);
    }
};
AnimatorDemo = __decorate$i([
    Entry
], AnimatorDemo);

var __decorate$h = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function thisLabel(str) {
    return doric.text({
        text: str,
        width: 80,
        height: 30,
        backgroundColor: colors$1[0],
        textSize: 10,
        textColor: doric.Color.WHITE,
        layoutConfig: doric.layoutConfig().just(),
    });
}
let ComplicatedAnimationDemo = class ComplicatedAnimationDemo extends doric.Panel {
    build(rootView) {
        const view = box$2(2);
        // const view = image({
        //     imageUrl: "https://pic3.zhimg.com/v2-5847d0813bd0deba333fcbe52435e83e_b.jpg"
        // })
        // view.onClick = () => {
        //     modal(this.context).toast('Clicked')
        // }
        doric.vlayout([
            title("Complicated  Animation"),
            doric.vlayout([
                doric.hlayout([
                    thisLabel('reset').apply({
                        onClick: () => {
                            const rotation = new doric.RotationAnimation;
                            rotation.duration = 1000;
                            rotation.fromRotation = view.rotation || 0;
                            rotation.toRotation = 0;
                            const translation = new doric.TranslationAnimation;
                            translation.duration = 1000;
                            translation.fromTranslationX = view.translationX || 0;
                            translation.toTranslationX = 0;
                            translation.fromTranslationY = view.translationY || 0;
                            translation.toTranslationY = 0;
                            const scale = new doric.ScaleAnimation;
                            scale.duration = 1000;
                            scale.fromScaleX = view.scaleX || 1;
                            scale.toScaleX = 1;
                            scale.fromScaleY = view.scaleY || 1;
                            scale.toScaleY = 1;
                            const animationSet = new doric.AnimationSet;
                            animationSet.addAnimation(rotation);
                            animationSet.addAnimation(translation);
                            animationSet.addAnimation(scale);
                            view.doAnimation(this.context, animationSet).then(() => {
                                doric.modal(this.context).toast('Resetd');
                            });
                        }
                    }),
                ], { space: 10 }),
                doric.hlayout([
                    thisLabel('TranslationX').apply({
                        onClick: () => {
                            const animation = new doric.TranslationAnimation;
                            animation.duration = 1000;
                            animation.fromTranslationX = view.translationX || 0;
                            animation.toTranslationX = animation.fromTranslationX + 100;
                            animation.fromTranslationY = view.translationY || 0;
                            animation.toTranslationY = view.translationY || 0;
                            view.doAnimation(this.context, animation);
                        }
                    }),
                    thisLabel('TranslationY').apply({
                        onClick: () => {
                            const animation = new doric.TranslationAnimation;
                            animation.duration = 1000;
                            animation.fromTranslationX = view.translationX || 0;
                            animation.toTranslationX = view.translationX || 0;
                            animation.fromTranslationY = view.translationY || 0;
                            animation.toTranslationY = animation.fromTranslationY + 100;
                            view.doAnimation(this.context, animation);
                        }
                    }),
                    thisLabel('ScaleX').apply({
                        onClick: () => {
                            const animation = new doric.ScaleAnimation;
                            animation.duration = 1000;
                            animation.fromScaleX = view.scaleX || 1;
                            animation.toScaleX = animation.fromScaleX + 1;
                            animation.fromScaleY = view.scaleY || 1;
                            animation.toScaleY = animation.fromScaleY;
                            view.doAnimation(this.context, animation);
                        }
                    }),
                    thisLabel('ScaleY').apply({
                        onClick: () => {
                            const animation = new doric.ScaleAnimation;
                            animation.duration = 1000;
                            animation.fromScaleX = view.scaleX || 1;
                            animation.toScaleX = animation.fromScaleX || 1;
                            animation.fromScaleY = view.scaleY || 1;
                            animation.toScaleY = animation.fromScaleY + 1;
                            view.doAnimation(this.context, animation);
                        }
                    }),
                    thisLabel('rotation').apply({
                        onClick: () => {
                            const animation = new doric.RotationAnimation;
                            animation.duration = 1000;
                            animation.fromRotation = view.rotation || 0;
                            animation.toRotation = animation.fromRotation + 0.25;
                            view.doAnimation(this.context, animation);
                        }
                    }),
                ], { space: 10 }),
                doric.hlayout([
                    thisLabel('group').apply({
                        onClick: () => {
                            const rotation = new doric.RotationAnimation;
                            rotation.duration = 1000;
                            rotation.fromRotation = 0;
                            rotation.toRotation = 4;
                            const translation = new doric.TranslationAnimation;
                            translation.duration = 1000;
                            translation.fromTranslationX = view.translationX || 0;
                            translation.toTranslationX = 100;
                            const animationSet = new doric.AnimationSet;
                            animationSet.addAnimation(rotation);
                            animationSet.addAnimation(translation);
                            view.doAnimation(this.context, animationSet);
                        }
                    }),
                    thisLabel('rotationX').apply({
                        onClick: () => {
                            const rotation = new doric.RotationXAnimation;
                            rotation.duration = 5000;
                            rotation.fromRotation = 0;
                            rotation.toRotation = 0.5;
                            const animationSet = new doric.AnimationSet;
                            animationSet.addAnimation(rotation);
                            view.doAnimation(this.context, animationSet);
                        }
                    }),
                    thisLabel('rotationY').apply({
                        onClick: () => {
                            const rotation = new doric.RotationYAnimation;
                            rotation.duration = 5000;
                            rotation.fromRotation = 0;
                            rotation.toRotation = 4;
                            const animationSet = new doric.AnimationSet;
                            animationSet.addAnimation(rotation);
                            view.doAnimation(this.context, animationSet);
                        }
                    }),
                ], { space: 10 }),
                doric.hlayout([
                    thisLabel('Default').apply({
                        onClick: () => {
                            const translation = new doric.TranslationAnimation;
                            translation.duration = 3000;
                            translation.fromTranslationX = 0;
                            translation.toTranslationX = 300;
                            translation.timingFunction = doric.TimingFunction.Default;
                            view.doAnimation(this.context, translation);
                        }
                    }),
                    thisLabel('Linear').apply({
                        onClick: () => {
                            const translation = new doric.TranslationAnimation;
                            translation.duration = 3000;
                            translation.fromTranslationX = 0;
                            translation.toTranslationX = 300;
                            translation.timingFunction = doric.TimingFunction.Linear;
                            view.doAnimation(this.context, translation);
                        }
                    }),
                    thisLabel('EaseIn').apply({
                        onClick: () => {
                            const translation = new doric.TranslationAnimation;
                            translation.duration = 3000;
                            translation.fromTranslationX = 0;
                            translation.toTranslationX = 300;
                            translation.timingFunction = doric.TimingFunction.EaseIn;
                            view.doAnimation(this.context, translation);
                        }
                    }),
                    thisLabel('EaseOut').apply({
                        onClick: () => {
                            const translation = new doric.TranslationAnimation;
                            translation.duration = 3000;
                            translation.fromTranslationX = 0;
                            translation.toTranslationX = 300;
                            translation.timingFunction = doric.TimingFunction.EaseOut;
                            view.doAnimation(this.context, translation);
                        }
                    }),
                    thisLabel('EaseInEaseOut').apply({
                        onClick: () => {
                            const translation = new doric.TranslationAnimation;
                            translation.duration = 3000;
                            translation.fromTranslationX = 0;
                            translation.toTranslationX = 300;
                            translation.timingFunction = doric.TimingFunction.EaseInEaseOut;
                            view.doAnimation(this.context, translation);
                        }
                    }),
                ], { space: 10 }),
            ], { space: 10 }),
            doric.stack([
                view.also(v => {
                    v.x = 20;
                    v.y = 20;
                    v.width = 30;
                    v.left = 30;
                }),
                // view2.also(v => {
                //     v.x = v.y = 20
                //     v.y = 40
                //     //v.scaleX = 1.5
                // })
            ], {
                layoutConfig: doric.layoutConfig().most(),
                backgroundColor: colors$1[1].alpha(0.3 * 255),
            }),
        ], {
            layoutConfig: doric.layoutConfig().most(),
            gravity: doric.gravity().center(),
            space: 10,
        }).in(rootView);
    }
};
ComplicatedAnimationDemo = __decorate$h([
    Entry
], ComplicatedAnimationDemo);

var __decorate$g = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RefreshableDemo = class RefreshableDemo extends doric.Panel {
    build(rootView) {
        let refreshImage;
        let refreshView = doric.refreshable({
            layoutConfig: doric.layoutConfig().most(),
            onRefresh: () => {
                doric.log('onRefresh');
                setTimeout(() => {
                    refreshView.setRefreshing(this.context, false);
                }, 2000);
            },
            header: doric.pullable(doric.stack([
                doric.image({
                    layoutConfig: doric.layoutConfig().just().configMargin({ top: 50, bottom: 10, }),
                    width: 30,
                    height: 30,
                    imageBase64: icon_refresh,
                }).also(v => {
                    refreshImage = v;
                }),
            ]), {
                startAnimation: () => {
                    doric.log('startAnimation');
                },
                stopAnimation: () => {
                    doric.log('stopAnimation');
                },
                setPullingDistance: (distance) => {
                    refreshImage.rotation = distance / 30;
                },
            }),
            content: (doric.vlayout([
                title("Refreshable Demo"),
                label$1('start Refresh').apply({
                    width: 300,
                    height: 50,
                    backgroundColor: colors$1[0],
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    layoutConfig: doric.layoutConfig().just(),
                    onClick: () => {
                        refreshView.setRefreshing(this.context, true);
                    }
                }),
                label$1('stop Refresh').apply({
                    width: 300,
                    height: 50,
                    backgroundColor: colors$1[0],
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    layoutConfig: doric.layoutConfig().just(),
                    onClick: () => {
                        refreshView.setRefreshing(this.context, false);
                    }
                }),
                label$1('Enable Refresh').apply({
                    width: 300,
                    height: 50,
                    backgroundColor: colors$1[0],
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    layoutConfig: doric.layoutConfig().just(),
                    onClick: () => {
                        refreshView.setRefreshable(this.context, true);
                    }
                }),
                label$1('Disable Refresh').apply({
                    width: 300,
                    height: 50,
                    backgroundColor: colors$1[0],
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    layoutConfig: doric.layoutConfig().just(),
                    onClick: () => {
                        refreshView.setRefreshable(this.context, false);
                    }
                }),
            ]).apply({
                layoutConfig: doric.layoutConfig().most().configHeight(doric.LayoutSpec.FIT),
                gravity: doric.gravity().centerX(),
                space: 10,
            }))
        }).apply({
            backgroundColor: doric.Color.YELLOW
        }).in(rootView);
    }
};
RefreshableDemo = __decorate$g([
    Entry
], RefreshableDemo);

var __decorate$f = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RefreshDemo = class RefreshDemo extends doric.Panel {
    build(rootView) {
        let refreshView;
        let offset = Math.ceil(Math.random() * colors$1.length);
        doric.vlayout([
            doric.text({
                text: "RefreshDemo",
                layoutConfig: {
                    widthSpec: doric.LayoutSpec.MOST,
                    heightSpec: doric.LayoutSpec.JUST,
                },
                textSize: 30,
                textColor: doric.Color.parse("#535c68"),
                backgroundColor: doric.Color.parse("#dff9fb"),
                textAlignment: doric.gravity().center(),
                height: 50,
            }),
            (refreshView = doric.refreshable({
                onRefresh: () => {
                    doric.log("onRefresh");
                    setTimeout(() => {
                        refreshView.setRefreshing(this.context, false).then(() => {
                            refreshView.content.also((it) => {
                                doric.log("List reset");
                                it.reset();
                                offset = Math.ceil(Math.random() * colors$1.length);
                                it.itemCount = 40;
                                it.loadMore = true;
                            });
                        });
                    }, 500);
                },
                header: rotatedArrow(),
                content: doric.list({
                    itemCount: 0,
                    loadMore: true,
                    backgroundColor: doric.Color.CYAN,
                    loadMoreView: doric.listItem(doric.text({
                        text: "Loading",
                        layoutConfig: doric.layoutConfig()
                            .most()
                            .configHeight(doric.LayoutSpec.JUST)
                            .configAlignment(doric.Gravity.Center),
                        height: 50,
                    })),
                    renderItem: (idx) => {
                        let counter;
                        return doric.listItem(doric.hlayout([
                            doric.text({
                                layoutConfig: {
                                    widthSpec: doric.LayoutSpec.FIT,
                                    heightSpec: doric.LayoutSpec.JUST,
                                    alignment: doric.gravity().center(),
                                },
                                text: `Cell At Line ${idx}`,
                                textAlignment: doric.gravity().center(),
                                textColor: doric.Color.parse("#ffffff"),
                                textSize: 20,
                                height: 50,
                            }),
                            doric.text({
                                textColor: doric.Color.parse("#ffffff"),
                                textSize: 20,
                                text: "",
                            }).also((it) => {
                                counter = it;
                                it.layoutConfig = {
                                    widthSpec: doric.LayoutSpec.FIT,
                                    heightSpec: doric.LayoutSpec.FIT,
                                    margin: {
                                        left: 10,
                                    },
                                };
                            }),
                        ]).also((it) => {
                            it.layoutConfig = {
                                widthSpec: doric.LayoutSpec.MOST,
                                heightSpec: doric.LayoutSpec.FIT,
                                margin: {
                                    bottom: 2,
                                },
                            };
                            it.gravity = doric.gravity().center();
                            it.backgroundColor = colors$1[(idx + offset) % colors$1.length];
                            let clicked = 0;
                            it.onClick = () => {
                                counter.text = `Item Clicked ${++clicked}`;
                            };
                        })).also((it) => {
                            it.layoutConfig = {
                                widthSpec: doric.LayoutSpec.MOST,
                                heightSpec: doric.LayoutSpec.FIT,
                            };
                            it.onClick = () => {
                                doric.log(`Click item at ${idx}`);
                                it.height += 10;
                                it.nativeChannel(this.context, "getWidth")().then((resolve) => {
                                    doric.log(`resolve,${resolve}`);
                                }, (reject) => {
                                    doric.log(`reject,${reject}`);
                                });
                            };
                        });
                    },
                    onLoadMore: () => {
                        setTimeout(() => {
                            (refreshView === null || refreshView === void 0 ? void 0 : refreshView.content).also((it) => {
                                it.loadMore = true;
                                it.itemCount += 20;
                            });
                        }, 500);
                    },
                    layoutConfig: {
                        widthSpec: doric.LayoutSpec.MOST,
                        heightSpec: doric.LayoutSpec.MOST,
                    },
                }),
                layoutConfig: {
                    widthSpec: doric.LayoutSpec.MOST,
                    heightSpec: doric.LayoutSpec.FIT,
                    weight: 1,
                },
            })),
        ], {
            layoutConfig: doric.layoutConfig().most(),
        }).in(rootView);
    }
};
RefreshDemo = __decorate$f([
    Entry
], RefreshDemo);

var __decorate$e = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class CounterView extends doric.ViewHolder {
    build(root) {
        doric.log('CounterView build');
        doric.stack([
            this.numberText = doric.text({
                textSize: 36,
                fontStyle: 'bold',
                layoutConfig: doric.layoutConfig().fit().configAlignment(doric.Gravity.Center).configMargin({ bottom: 60 })
            }),
            this.clickText = doric.text({
                textSize: 26,
                text: 'click me!',
                layoutConfig: doric.layoutConfig().fit().configAlignment(doric.Gravity.Center),
            })
        ], {
            backgroundColor: doric.Color.WHITE,
            layoutConfig: doric.layoutConfig().most()
        }).in(root);
    }
}
class CounterVM extends doric.ViewModel {
    onAttached(state, vh) {
        doric.log(`onAttached state: ${state.count}`);
        vh.clickText.onClick = () => {
            Promise.resolve(this.getState().count).then(count => {
                Promise.resolve().then(() => {
                    this.updateState((state) => {
                        state.count = count + 1;
                    });
                });
            });
        };
    }
    onBind(state, vh) {
        doric.log(`onBind state: ${state.count}`);
        vh.numberText.text = `${state.count}`;
    }
}
let CounterDemo = class CounterDemo extends doric.VMPanel {
    constructor() {
        super(...arguments);
        this.countModel = {
            count: 0
        };
    }
    getState() {
        return this.countModel;
    }
    getViewHolderClass() {
        return CounterView;
    }
    getViewModelClass() {
        return CounterVM;
    }
};
CounterDemo = __decorate$e([
    Entry
], CounterDemo);

var __decorate$d = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let PopoverDemo = class PopoverDemo extends doric.Panel {
    build(rootView) {
        doric.scroller(doric.vlayout([
            title("Popover Demo"),
            label$1("show navbar").apply({
                width: 200,
                height: 50,
                backgroundColor: colors$1[0],
                textSize: 30,
                textColor: doric.Color.WHITE,
                layoutConfig: doric.layoutConfig().just(),
                onClick: () => {
                    doric.navbar(this.context).setHidden(false);
                },
            }),
            label$1("hide navbar").apply({
                width: 200,
                height: 50,
                backgroundColor: colors$1[0],
                textSize: 30,
                textColor: doric.Color.WHITE,
                layoutConfig: doric.layoutConfig().just(),
                onClick: () => {
                    doric.navbar(this.context).setHidden(true);
                },
            }),
            label$1("Popover").apply({
                width: 200,
                height: 50,
                backgroundColor: colors$1[0],
                textSize: 30,
                textColor: doric.Color.WHITE,
                layoutConfig: doric.layoutConfig().just(),
                onClick: () => {
                    doric.popover(this.context).show(doric.stack([
                        doric.text({
                            width: 200,
                            height: 50,
                            backgroundColor: colors$1[0],
                            textColor: doric.Color.WHITE,
                            layoutConfig: doric.layoutConfig()
                                .just()
                                .configAlignment(doric.Gravity.Center),
                            text: "This is PopOver Window",
                        }).also((v) => {
                            let idx = 0;
                            v.onClick = () => {
                                v.backgroundColor = colors$1[++idx % colors$1.length];
                            };
                            doric.modal(this.context).toast("Dismissed after 3 seconds");
                            setTimeout(() => {
                                doric.popover(this.context).dismiss();
                            }, 3000);
                        }),
                    ], {
                        layoutConfig: doric.layoutConfig().most().configMargin({ left: 20, right: 20, top: 20, bottom: 20 }),
                        backgroundColor: doric.Color.RED.alpha(1),
                    }));
                },
            }),
        ]).apply({
            layoutConfig: doric.layoutConfig().most().configHeight(doric.LayoutSpec.FIT),
            gravity: doric.gravity().center(),
            space: 10,
        }))
            .apply({
            layoutConfig: doric.layoutConfig().most(),
        })
            .in(rootView);
    }
};
PopoverDemo = __decorate$d([
    Entry
], PopoverDemo);

var __decorate$c = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let FlowLayoutDemo = class FlowLayoutDemo extends doric.Panel {
    build(rootView) {
        const flowView = doric.flowlayout({
            layoutConfig: doric.layoutConfig().most(),
            itemCount: 20,
            columnCount: 3,
            columnSpace: 10,
            rowSpace: 10,
            renderItem: (idx) => {
                return doric.flowItem(doric.text({
                    text: `${idx}`,
                    textColor: doric.Color.BLACK,
                    textSize: 20,
                    layoutConfig: doric.layoutConfig().fit().configAlignment(doric.Gravity.Center),
                }), {
                    backgroundColor: colors$2[idx % colors$2.length],
                    height: 50 + (idx % 3) * 20,
                    layoutConfig: doric.layoutConfig().configWidth(doric.LayoutSpec.MOST),
                    onClick: () => __awaiter$3(this, void 0, void 0, function* () {
                        yield flowView.findCompletelyVisibleItems(this.context);
                    }),
                }).also((it) => {
                    if (idx == 15) {
                        it.fullSpan = true;
                        it.identifier = "fullSpan";
                    }
                });
            },
            loadMore: true,
            onLoadMore: () => {
                setTimeout(() => {
                    flowView.itemCount += 20;
                }, 1000);
            },
            loadMoreView: doric.flowItem(doric.text({
                text: "load more",
                textColor: doric.Color.WHITE,
                textSize: 20,
                layoutConfig: doric.layoutConfig().fit().configAlignment(doric.Gravity.Center),
            }), {
                backgroundColor: colors$2[500 % colors$2.length],
                height: 50,
                fullSpan: true,
                layoutConfig: doric.layoutConfig().configWidth(doric.LayoutSpec.MOST),
            }),
            onScrollEnd: () => __awaiter$3(this, void 0, void 0, function* () {
                const ret = yield flowView.findCompletelyVisibleItems(this.context);
                doric.log("completelyVisible Items is:", ret);
                const ret2 = yield flowView.findVisibleItems(this.context);
                doric.log("visible Items is:", ret2);
            }),
        }).in(rootView);
    }
};
FlowLayoutDemo = __decorate$c([
    Entry
], FlowLayoutDemo);

var __decorate$b = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ScrollerDemo = class ScrollerDemo extends doric.Panel {
    build(rootView) {
        doric.scroller(doric.hlayout([
            doric.vlayout([
                doric.scroller(doric.vlayout(new Array(50).fill(1).map((e) => label$1("Scroll Content1"))), {
                    layoutConfig: doric.layoutConfig().justWidth().fitHeight(),
                    width: 300,
                    backgroundColor: doric.Color.RED,
                }),
                doric.scroller(doric.vlayout(new Array(50).fill(1).map((e) => label$1("Scroll Content2"))), {
                    layoutConfig: doric.layoutConfig().justWidth().fitHeight(),
                    width: 300,
                    backgroundColor: doric.Color.CYAN,
                }),
            ]),
            doric.vlayout(new Array(50).fill(1).map((e) => label$1("Scroll Content3"))).apply({
                layoutConfig: doric.layoutConfig().justWidth().fitHeight(),
                width: 300,
            }),
        ], {
            layoutConfig: doric.layoutConfig().fitWidth().fitHeight(),
        }), {
            layoutConfig: doric.layoutConfig().mostWidth().justHeight(),
            height: 500,
            backgroundColor: doric.Color.YELLOW,
        }).in(rootView);
    }
};
ScrollerDemo = __decorate$b([
    Entry
], ScrollerDemo);

var __decorate$a = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let DraggableDemo = class DraggableDemo extends doric.Panel {
    build(root) {
        let textView;
        let drag = doric.draggable((textView = doric.text({
            layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
            width: 100,
            height: 30,
            textColor: doric.Color.RED,
            onClick: () => {
                doric.modal(this.context).toast("Clicked");
            },
        })), {
            onDrag: (x, y) => {
                textView.text = "x: " + x.toFixed(0) + " y: " + y.toFixed(0);
            },
            layoutConfig: doric.layoutConfig().just(),
            width: 100,
            height: 100,
            backgroundColor: doric.Color.YELLOW,
        });
        doric.vlayout([
            doric.text({
                layoutConfig: doric.layoutConfig().fit().configAlignment(doric.Gravity.Center),
                text: "Draggable Demo",
                textColor: doric.Color.RED,
            }),
            doric.stack([drag], {
                layoutConfig: doric.layoutConfig().most(),
            }),
        ], {
            layoutConfig: doric.layoutConfig().most(),
            backgroundColor: doric.Color.CYAN,
        }).in(root);
    }
};
DraggableDemo = __decorate$a([
    Entry
], DraggableDemo);

var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function lineText(cont, config) {
    let tv1;
    let sTv1;
    return [
        doric.stack([
            (sTv1 = doric.text(config).apply({
                alpha: 0,
                textSize: 17,
                fontStyle: "italic",
            })),
            (tv1 = doric.text({
                text: sTv1.text,
                textColor: doric.Color.RED,
                textSize: sTv1.textSize,
                fontStyle: sTv1.fontStyle,
                layoutConfig: {
                    widthSpec: doric.LayoutSpec.JUST,
                    heightSpec: doric.LayoutSpec.FIT,
                },
                truncateAt: doric.TruncateAt.Clip,
            })),
        ]),
        () => __awaiter$2(this, void 0, void 0, function* () {
            const width = yield sTv1.getWidth(cont);
            return doric.animate(cont)({
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
let TextAnimationDemo = class TextAnimationDemo extends doric.Panel {
    build(root) {
        const poemLines = poem.split("\n").map((e) => {
            return lineText(this.context, {
                text: e.trim(),
            });
        });
        doric.vlayout([...poemLines.map((e) => e[0])], {
            layoutConfig: {
                widthSpec: doric.LayoutSpec.MOST,
                heightSpec: doric.LayoutSpec.MOST,
            },
            backgroundColor: doric.Color.WHITE,
            space: 12,
            gravity: doric.Gravity.Center,
        }).in(root);
        this.addOnRenderFinishedCallback(() => __awaiter$2(this, void 0, void 0, function* () {
            const animates = poemLines.map((e) => e[1]);
            for (let i = 0; i < animates.length; i++) {
                yield animates[i]();
            }
        }));
    }
};
TextAnimationDemo = __decorate$9([
    Entry
], TextAnimationDemo);

var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let PathButtonDemo = class PathButtonDemo extends doric.Panel {
    constructor() {
        super(...arguments);
        this.collapse = false;
    }
    build(root) {
        let clockWise = () => __awaiter$1(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            (_a = this.menu1) === null || _a === void 0 ? void 0 : _a.let((it) => {
                it.scaleX = 0;
                it.scaleY = 0;
            });
            (_b = this.menu2) === null || _b === void 0 ? void 0 : _b.let((it) => {
                it.scaleX = 0;
                it.scaleY = 0;
            });
            (_c = this.menu3) === null || _c === void 0 ? void 0 : _c.let((it) => {
                it.scaleX = 0;
                it.scaleY = 0;
            });
            (_d = this.menu4) === null || _d === void 0 ? void 0 : _d.let((it) => {
                it.scaleX = 0;
                it.scaleY = 0;
            });
            yield doric.animate(this.context)({
                animations: () => {
                    var _a, _b, _c, _d, _e;
                    (_a = this.dock) === null || _a === void 0 ? void 0 : _a.let((it) => { it.rotation = 0.5; });
                    (_b = this.menu1) === null || _b === void 0 ? void 0 : _b.let((it) => {
                        it.translationX = -150;
                        it.scaleX = 1;
                        it.scaleY = 1;
                    });
                    (_c = this.menu2) === null || _c === void 0 ? void 0 : _c.let((it) => {
                        it.translationY = -150;
                        it.scaleX = 1;
                        it.scaleY = 1;
                    });
                    (_d = this.menu3) === null || _d === void 0 ? void 0 : _d.let((it) => {
                        it.translationX = -150 * Math.cos(1 / 6 * Math.PI);
                        it.translationY = -150 * Math.sin(1 / 6 * Math.PI);
                        it.scaleX = 1;
                        it.scaleY = 1;
                    });
                    (_e = this.menu4) === null || _e === void 0 ? void 0 : _e.let((it) => {
                        it.translationX = -150 * Math.cos(1 / 3 * Math.PI);
                        it.translationY = -150 * Math.sin(1 / 3 * Math.PI);
                        it.scaleX = 1;
                        it.scaleY = 1;
                    });
                },
                duration: 300,
            });
        });
        let antiClockWise = () => __awaiter$1(this, void 0, void 0, function* () {
            yield doric.animate(this.context)({
                animations: () => {
                    var _a, _b, _c, _d, _e;
                    (_a = this.dock) === null || _a === void 0 ? void 0 : _a.let((it) => { it.rotation = 0; });
                    (_b = this.menu1) === null || _b === void 0 ? void 0 : _b.let((it) => {
                        it.translationX = 0;
                        it.scaleX = 0;
                        it.scaleY = 0;
                    });
                    (_c = this.menu2) === null || _c === void 0 ? void 0 : _c.let((it) => {
                        it.translationY = 0;
                        it.scaleX = 0;
                        it.scaleY = 0;
                    });
                    (_d = this.menu3) === null || _d === void 0 ? void 0 : _d.let((it) => {
                        it.translationX = 0;
                        it.translationY = 0;
                        it.scaleX = 0;
                        it.scaleY = 0;
                    });
                    (_e = this.menu4) === null || _e === void 0 ? void 0 : _e.let((it) => {
                        it.translationX = 0;
                        it.translationY = 0;
                        it.scaleX = 0;
                        it.scaleY = 0;
                    });
                },
                duration: 300,
            });
        });
        doric.stack([
            this.menu1 = doric.stack([], {
                width: 50,
                height: 50,
                layoutConfig: doric.layoutConfig().just(),
                corners: 25,
                backgroundColor: doric.Color.RED,
                x: Environment.screenWidth - 100,
                y: Environment.screenHeight - 140,
            }),
            this.menu2 = doric.stack([], {
                width: 50,
                height: 50,
                layoutConfig: doric.layoutConfig().just(),
                corners: 25,
                backgroundColor: doric.Color.RED,
                x: Environment.screenWidth - 100,
                y: Environment.screenHeight - 140,
            }),
            this.menu3 = doric.stack([], {
                width: 50,
                height: 50,
                layoutConfig: doric.layoutConfig().just(),
                corners: 25,
                backgroundColor: doric.Color.RED,
                x: Environment.screenWidth - 100,
                y: Environment.screenHeight - 140,
            }),
            this.menu4 = doric.stack([], {
                width: 50,
                height: 50,
                layoutConfig: doric.layoutConfig().just(),
                corners: 25,
                backgroundColor: doric.Color.RED,
                x: Environment.screenWidth - 100,
                y: Environment.screenHeight - 140,
            }),
            this.dock = doric.text({
                text: '+',
                textColor: doric.Color.WHITE,
                textSize: 40,
                textAlignment: doric.Gravity.Center,
                layoutConfig: doric.layoutConfig().just(),
                backgroundColor: doric.Color.RED,
                corners: 25,
                x: Environment.screenWidth - 100,
                y: Environment.screenHeight - 140,
                width: 50,
                height: 50,
                onClick: () => {
                    this.collapse = !this.collapse;
                    if (this.collapse) {
                        clockWise();
                    }
                    else {
                        antiClockWise();
                    }
                }
            }),
        ], {
            backgroundColor: colors$1[0],
            layoutConfig: doric.layoutConfig().most(),
        }).in(root);
    }
};
PathButtonDemo = __decorate$8([
    Entry
], PathButtonDemo);

var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let BlurEffectsDemo = class BlurEffectsDemo extends doric.Panel {
    build(root) {
        root.backgroundColor = doric.Color.WHITE;
        const blurEffectRef = doric.createRef();
        const gestureRef = doric.createRef();
        doric.jsx.createElement(doric.Scroller, { parent: root, layoutConfig: doric.layoutConfig().most() },
            doric.jsx.createElement(doric.VLayout, { layoutConfig: doric.layoutConfig().mostWidth().fitHeight() },
                doric.jsx.createElement(doric.BlurEffect, { layoutConfig: doric.layoutConfig().mostWidth().fitHeight(), radius: 20, ref: blurEffectRef, effectiveRect: {
                        x: 50,
                        y: 50,
                        width: 200,
                        height: 200,
                    } },
                    doric.jsx.createElement(doric.GestureContainer, { ref: gestureRef, layoutConfig: doric.layoutConfig().mostWidth().fitHeight() },
                        doric.jsx.createElement(doric.VLayout, { space: 20, padding: { left: 5, right: 5 } },
                            doric.jsx.createElement(doric.Image, { imageUrl: "https://doric.pub/about/The_Parthenon_in_Athens.jpg" }),
                            doric.jsx.createElement(doric.HLayout, { space: 10 },
                                doric.jsx.createElement(doric.Image, { imageUrl: "https://doric.pub/logo.png" }),
                                doric.jsx.createElement(doric.Text, { layoutConfig: doric.layoutConfig().mostWidth().fitHeight(), maxLines: -1, textAlignment: doric.Gravity.Left }, "\u5E0C\u814A\u5E15\u7279\u519C\u795E\u5E99\u5386\u7ECF\u6570\u5343\u5E74\u98CE\u96E8\u4FB5\u8680\uFF0C\u65E9\u5DF2\u65AD\u5899\u6B8B\u57A3\u3002\u7136\u800C\u90A3\u4E9B\u5ECA\u67F1\u5C79\u7ACB\u5343\u5E74\uFF0C\u4ECD\u7136\u575A\u56FA\u5DCD\u7136\u3002 \u8FD9\u79CD\u5ECA\u67F1\u6837\u5F0F\u53EB\u505A Doric\uFF0C\u5373\u6211\u4EEC\u8FD9\u4E2A\u9879\u76EE\u7684\u540D\u79F0\u7531\u6765\u3002 \u6B63\u5982Doric\u6837\u5F0F\u7684\u5ECA\u67F1\u6491\u8D77\u4E86\u795E\u5E99\u7684\u5343\u5E74\u98CE\u96E8\uFF0C\u6211\u4EEC\u4E5F\u5E0C\u671BDoric\u9879\u76EE\u80FD\u591F\u4F5C\u4E3A\u524D\u7AEF\u9875\u9762\u7684\u652F\u67F1\uFF0C\u7B80\u6D01\uFF0C\u53EF\u9760\u3002 \u76EE\u524DDoric\u6B63\u5728\u6301\u7EED\u8FED\u4EE3\u4E2D\u3002\u5982\u679C\u60A8\u5BF9Doric\u9879\u76EE\u611F\u5174\u8DA3\uFF0C\u6B22\u8FCE\u52A0\u5165\u6211\u4EEC\u3002"))))),
                doric.jsx.createElement(doric.VLayout, { layoutConfig: doric.layoutConfig()
                        .mostWidth()
                        .fitHeight()
                        .configMargin({ top: 20 }), space: 5, padding: { left: 10, right: 10 } }, (() => {
                    const labelRef = doric.createRef();
                    const spinnerRef = doric.createRef();
                    const containerRef = doric.createRef();
                    this.addOnRenderFinishedCallback(() => __awaiter(this, void 0, void 0, function* () {
                        const width = yield containerRef.current.getWidth(this.context);
                        const maxValue = 25;
                        spinnerRef.current.width =
                            ((blurEffectRef.current.radius || 0) * width) / maxValue;
                        labelRef.current.text = `Blur radius: ${blurEffectRef.current.radius}`;
                        containerRef.current.onTouchDown = (event) => __awaiter(this, void 0, void 0, function* () {
                            spinnerRef.current.width = event.x;
                            blurEffectRef.current.radius = Math.round((event.x / width) * maxValue);
                            labelRef.current.text = `Blur radius: ${blurEffectRef.current.radius}`;
                        });
                        containerRef.current.onTouchMove = (event) => __awaiter(this, void 0, void 0, function* () {
                            spinnerRef.current.width = event.x;
                            blurEffectRef.current.radius = Math.round((event.x / width) * maxValue);
                            labelRef.current.text = `Blur radius: ${blurEffectRef.current.radius}`;
                        });
                    }));
                    return (doric.jsx.createElement(doric.jsx.Fragment, null,
                        doric.jsx.createElement(doric.Text, { textSize: 20, ref: labelRef }, "Blur radius:\\t"),
                        doric.jsx.createElement(doric.GestureContainer, { layoutConfig: doric.layoutConfig().mostWidth().fitHeight(), ref: containerRef, border: {
                                width: 1,
                                color: colors$1[4],
                            } },
                            doric.jsx.createElement(doric.Stack, { ref: spinnerRef, backgroundColor: colors$1[6], layoutConfig: doric.layoutConfig().justWidth().justHeight(), height: 40 }))));
                })()),
                doric.jsx.createElement(doric.VLayout, { layoutConfig: doric.layoutConfig()
                        .mostWidth()
                        .fitHeight()
                        .configMargin({ top: 20 }), space: 5, padding: { left: 10, right: 10 } }, (() => {
                    const labelRef = doric.createRef();
                    const spinnerRef = doric.createRef();
                    const containerRef = doric.createRef();
                    this.addOnRenderFinishedCallback(() => __awaiter(this, void 0, void 0, function* () {
                        var _a, _b;
                        const width = yield containerRef.current.getWidth(this.context);
                        const maxValue = yield blurEffectRef.current.getWidth(this.context);
                        spinnerRef.current.width =
                            ((((_a = blurEffectRef.current.effectiveRect) === null || _a === void 0 ? void 0 : _a.width) || 0) * width) /
                                maxValue;
                        labelRef.current.text = `Effective Width: ${(_b = blurEffectRef.current.effectiveRect) === null || _b === void 0 ? void 0 : _b.width}`;
                        containerRef.current.onTouchDown = (event) => __awaiter(this, void 0, void 0, function* () {
                            var _c;
                            spinnerRef.current.width = event.x;
                            blurEffectRef.current.effectiveRect = Object.assign(Object.assign({}, blurEffectRef.current.effectiveRect), { width: Math.floor((event.x / width) * maxValue) });
                            labelRef.current.text = `Effective Width: ${(_c = blurEffectRef.current.effectiveRect) === null || _c === void 0 ? void 0 : _c.width}`;
                        });
                        containerRef.current.onTouchMove = (event) => __awaiter(this, void 0, void 0, function* () {
                            var _d;
                            spinnerRef.current.width = event.x;
                            blurEffectRef.current.effectiveRect = Object.assign(Object.assign({}, blurEffectRef.current.effectiveRect), { width: Math.floor((event.x / width) * maxValue) });
                            labelRef.current.text = `Effective Width: ${(_d = blurEffectRef.current.effectiveRect) === null || _d === void 0 ? void 0 : _d.width}`;
                        });
                    }));
                    return (doric.jsx.createElement(doric.jsx.Fragment, null,
                        doric.jsx.createElement(doric.Text, { textSize: 20, ref: labelRef }),
                        doric.jsx.createElement(doric.GestureContainer, { layoutConfig: doric.layoutConfig().mostWidth().fitHeight(), ref: containerRef, border: {
                                width: 1,
                                color: colors$1[4],
                            } },
                            doric.jsx.createElement(doric.Stack, { ref: spinnerRef, backgroundColor: colors$1[6], layoutConfig: doric.layoutConfig().justWidth().justHeight(), height: 40 }))));
                })()),
                doric.jsx.createElement(doric.VLayout, { layoutConfig: doric.layoutConfig()
                        .mostWidth()
                        .fitHeight()
                        .configMargin({ top: 20 }), space: 5, padding: { left: 10, right: 10 } }, (() => {
                    const labelRef = doric.createRef();
                    const spinnerRef = doric.createRef();
                    const containerRef = doric.createRef();
                    this.addOnRenderFinishedCallback(() => __awaiter(this, void 0, void 0, function* () {
                        var _a, _b;
                        const width = yield containerRef.current.getWidth(this.context);
                        const maxValue = yield blurEffectRef.current.getHeight(this.context);
                        spinnerRef.current.width =
                            ((((_a = blurEffectRef.current.effectiveRect) === null || _a === void 0 ? void 0 : _a.height) || 0) * width) /
                                maxValue;
                        labelRef.current.text = `Effective Height: ${(_b = blurEffectRef.current.effectiveRect) === null || _b === void 0 ? void 0 : _b.height}`;
                        containerRef.current.onTouchDown = (event) => __awaiter(this, void 0, void 0, function* () {
                            var _c;
                            spinnerRef.current.width = event.x;
                            blurEffectRef.current.effectiveRect = Object.assign(Object.assign({}, blurEffectRef.current.effectiveRect), { height: Math.floor((event.x / width) * maxValue) });
                            labelRef.current.text = `Effective Height: ${(_c = blurEffectRef.current.effectiveRect) === null || _c === void 0 ? void 0 : _c.height}`;
                        });
                        containerRef.current.onTouchMove = (event) => __awaiter(this, void 0, void 0, function* () {
                            var _d;
                            spinnerRef.current.width = event.x;
                            blurEffectRef.current.effectiveRect = Object.assign(Object.assign({}, blurEffectRef.current.effectiveRect), { height: Math.floor((event.x / width) * maxValue) });
                            labelRef.current.text = `Effective Height: ${(_d = blurEffectRef.current.effectiveRect) === null || _d === void 0 ? void 0 : _d.height}`;
                        });
                    }));
                    return (doric.jsx.createElement(doric.jsx.Fragment, null,
                        doric.jsx.createElement(doric.Text, { textSize: 20, ref: labelRef }),
                        doric.jsx.createElement(doric.GestureContainer, { layoutConfig: doric.layoutConfig().mostWidth().fitHeight(), ref: containerRef, border: {
                                width: 1,
                                color: colors$1[4],
                            } },
                            doric.jsx.createElement(doric.Stack, { ref: spinnerRef, backgroundColor: colors$1[6], layoutConfig: doric.layoutConfig().justWidth().justHeight(), height: 40 }))));
                })())));
        this.addOnRenderFinishedCallback(() => {
            let x = 0, y = 0, posX = 0, posY = 0;
            gestureRef.current.onTouchDown = (event) => {
                const rect = blurEffectRef.current.effectiveRect || {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                };
                if (event.x >= rect.x &&
                    event.x <= rect.x + rect.width &&
                    event.y >= rect.y &&
                    event.y <= rect.y + rect.height) {
                    x = event.x;
                    y = event.y;
                    posX = rect.x;
                    posY = rect.y;
                }
                else {
                    x = -1;
                }
            };
            gestureRef.current.onTouchMove = (event) => {
                if (x >= 0) {
                    blurEffectRef.current.effectiveRect = Object.assign(Object.assign({}, blurEffectRef.current.effectiveRect), { x: posX + (event.x - x), y: posY + (event.y - y) });
                }
            };
        });
    }
};
BlurEffectsDemo = __decorate$7([
    Entry
], BlurEffectsDemo);

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let NetworkDemo = class NetworkDemo extends doric.Panel {
    build(rootView) {
        const padding = 15;
        const resGetText = doric.createRef();
        const resPostText = doric.createRef();
        const resRequestText = doric.createRef();
        doric.jsx.createElement(doric.Scroller, { parent: rootView, layoutConfig: doric.layoutConfig().most() },
            doric.jsx.createElement(doric.VLayout, { layoutConfig: doric.layoutConfig().mostWidth().fitHeight(), space: 15 },
                doric.jsx.createElement(doric.Text, { layoutConfig: doric.layoutConfig().fit().configMargin({ left: padding, top: 2 * padding }), textSize: 20, fontStyle: 'bold', textColor: themColor }, "\u7F51\u7EDC\u8BF7\u6C42"),
                doric.jsx.createElement(doric.HLayout, { layoutConfig: doric.layoutConfig().fit().configMargin({ left: padding, top: padding }), space: 10, gravity: doric.Gravity.CenterY },
                    doric.jsx.createElement(doric.Stack, { layoutConfig: doric.layoutConfig().just(), height: 12, width: 12, corners: 6, backgroundColor: themColor }),
                    doric.jsx.createElement(doric.Text, { layoutConfig: doric.layoutConfig().fit(), textSize: 16, fontStyle: 'bold', textColor: doric.Color.BLACK }, "GET\u8BF7\u6C42")),
                doric.jsx.createElement(doric.Stack, { layoutConfig: doric.layoutConfig().mostWidth().justHeight().configMargin({ left: padding, right: padding }), padding: { top: padding, left: padding, bottom: padding, right: padding }, backgroundColor: bgColor, height: 280 },
                    doric.jsx.createElement(doric.VLayout, { layoutConfig: doric.layoutConfig().most(), space: 10 },
                        doric.jsx.createElement(doric.Text, { fontStyle: "bold" }, "response:"),
                        doric.jsx.createElement(doric.Scroller, { layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configWeight(1) },
                            doric.jsx.createElement(doric.Text, { layoutConfig: doric.layoutConfig().fit(), ref: resGetText, maxLines: 0, textSize: 13 })),
                        doric.jsx.createElement(doric.Text, { width: 100, height: 38, corners: 19, textColor: doric.Color.WHITE, layoutConfig: doric.layoutConfig().just().configAlignment(doric.gravity().bottom().center()), backgroundColor: themColor, onClick: () => {
                                doric.modal(this.context).toast('请求中...', doric.Gravity.Center);
                                doric.network(this.context).get('https://www.dmoe.cc/random.php?return=json').then(res => {
                                    doric.log(`Response : ${res.data}`);
                                    const jsonStr = JSON.stringify(res);
                                    resGetText.current.text = jsonStr;
                                    doric.modal(this.context).alert(jsonStr);
                                }).catch(e => {
                                    doric.modal(this.context).toast('Catched:' + JSON.stringify(e));
                                });
                            } }, " \u53D1\u8D77\u8BF7\u6C42"))),
                doric.jsx.createElement(doric.HLayout, { layoutConfig: doric.layoutConfig().fit().configMargin({ left: padding, top: padding }), space: 10, gravity: doric.Gravity.CenterY },
                    doric.jsx.createElement(doric.Stack, { layoutConfig: doric.layoutConfig().just(), height: 12, width: 12, corners: 6, backgroundColor: themColor }),
                    doric.jsx.createElement(doric.Text, { layoutConfig: doric.layoutConfig().fit(), textSize: 16, fontStyle: 'bold', textColor: doric.Color.BLACK }, "POST\u8BF7\u6C42")),
                doric.jsx.createElement(doric.Stack, { layoutConfig: doric.layoutConfig().mostWidth().justHeight().configMargin({ left: padding, right: padding }), padding: { top: padding, left: padding, bottom: padding, right: padding }, backgroundColor: bgColor, height: 280 },
                    doric.jsx.createElement(doric.VLayout, { layoutConfig: doric.layoutConfig().most(), space: 10 },
                        doric.jsx.createElement(doric.Text, { fontStyle: "bold" }, "response:"),
                        doric.jsx.createElement(doric.Scroller, { layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configWeight(1) },
                            doric.jsx.createElement(doric.Text, { layoutConfig: doric.layoutConfig().fit(), ref: resPostText, maxLines: 0, textSize: 13 })),
                        doric.jsx.createElement(doric.Text, { width: 100, height: 38, corners: 19, textColor: doric.Color.WHITE, layoutConfig: doric.layoutConfig().just().configAlignment(doric.gravity().bottom().center()), backgroundColor: themColor, onClick: () => {
                                doric.modal(this.context).toast('请求中...', doric.Gravity.Center);
                                const data = 'start=1&num=1';
                                doric.network(this.context).post('http://baobab.kaiyanapp.com/api/v4/discovery/hot', data).then(res => {
                                    doric.log(`Response : ${res.data}`);
                                    const jsonStr = JSON.stringify(res);
                                    resPostText.current.text = jsonStr;
                                    doric.modal(this.context).alert(jsonStr);
                                }).catch(e => {
                                    doric.modal(this.context).toast('Catched:' + JSON.stringify(e));
                                });
                            } }, " \u53D1\u8D77\u8BF7\u6C42"))),
                doric.jsx.createElement(doric.HLayout, { layoutConfig: doric.layoutConfig().fit().configMargin({ left: padding, top: padding }), space: 10, gravity: doric.Gravity.CenterY },
                    doric.jsx.createElement(doric.Stack, { layoutConfig: doric.layoutConfig().just(), height: 12, width: 12, corners: 6, backgroundColor: themColor }),
                    doric.jsx.createElement(doric.Text, { layoutConfig: doric.layoutConfig().fit(), textSize: 16, fontStyle: 'bold', textColor: doric.Color.BLACK }, "\u901A\u7528request\u8BF7\u6C42")),
                doric.jsx.createElement(doric.Stack, { layoutConfig: doric.layoutConfig().mostWidth().justHeight().configMargin({ left: padding, right: padding }), padding: { top: padding, left: padding, bottom: padding, right: padding }, backgroundColor: bgColor, height: 280 },
                    doric.jsx.createElement(doric.VLayout, { layoutConfig: doric.layoutConfig().most(), space: 10 },
                        doric.jsx.createElement(doric.Text, { fontStyle: "bold" }, "response:"),
                        doric.jsx.createElement(doric.Scroller, { layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configWeight(1) },
                            doric.jsx.createElement(doric.Text, { layoutConfig: doric.layoutConfig().fit(), ref: resRequestText, maxLines: 0, textSize: 13 })),
                        doric.jsx.createElement(doric.Text, { width: 100, height: 38, corners: 19, textColor: doric.Color.WHITE, layoutConfig: doric.layoutConfig().just().configAlignment(doric.gravity().bottom().center()), backgroundColor: themColor, onClick: () => {
                                doric.modal(this.context).toast('请求中...', doric.Gravity.Center);
                                var r = {
                                    url: 'http://baobab.kaiyanapp.com/api/v4/discovery/hot',
                                    method: 'post',
                                    data: 'start=1&num=1'
                                };
                                doric.network(this.context).request(r).then(res => {
                                    doric.log(`Response : ${res.data}`);
                                    const jsonStr = JSON.stringify(res);
                                    resRequestText.current.text = jsonStr;
                                    doric.modal(this.context).alert(jsonStr);
                                }).catch(e => {
                                    doric.modal(this.context).toast('Catched:' + JSON.stringify(e));
                                });
                            } }, " \u53D1\u8D77\u8BF7\u6C42")))));
    }
};
NetworkDemo = __decorate$6([
    Entry
], NetworkDemo);

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let GestureContainerDemo = class GestureContainerDemo extends doric.Panel {
    build(rootView) {
        let touchChild = doric.stack([], {
            layoutConfig: doric.layoutConfig().just(),
            width: 100,
            height: 100,
            backgroundColor: doric.Color.CYAN,
        });
        let pinchChild = doric.stack([], {
            layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
            width: 100,
            height: 100,
            backgroundColor: doric.Color.CYAN,
        });
        let panChild = doric.stack([], {
            layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
            width: 100,
            height: 100,
            backgroundColor: doric.Color.CYAN,
        });
        let rotateChild = doric.stack([], {
            layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
            width: 100,
            height: 100,
            backgroundColor: doric.Color.CYAN,
        });
        doric.scroller(doric.vlayout([
            doric.vlayout([
                doric.text({
                    text: "onTouch Demo",
                    layoutConfig: doric.layoutConfig().mostWidth(),
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    backgroundColor: colors$1[5],
                    textAlignment: doric.gravity().center(),
                    height: 50,
                }),
                doric.gestureContainer([touchChild], {
                    onTouchDown: (event) => {
                        doric.modal(this.context).toast("onTouchDown x=" + event.x + " y=" + event.y);
                    },
                    onTouchMove: (event) => {
                        touchChild.x = event.x - 50;
                        touchChild.y = event.y - 50;
                    },
                    onTouchUp: (event) => {
                        doric.modal(this.context).toast("onTouchUp x=" + event.x + " y=" + event.y);
                    },
                    onTouchCancel: (event) => {
                        doric.modal(this.context).toast("onTouchCancel x=" + event.x + " y=" + event.y);
                    },
                }).apply({
                    layoutConfig: doric.layoutConfig()
                        .just()
                        .configAlignment(doric.Gravity.Center),
                    width: 300,
                    height: 300,
                    backgroundColor: doric.Color.BLACK,
                }),
            ]).apply({
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            }),
            doric.vlayout([
                doric.text({
                    text: "SingleTap, DoubleTap, LongPress Demo",
                    layoutConfig: doric.layoutConfig().mostWidth(),
                    textSize: 20,
                    textColor: doric.Color.WHITE,
                    backgroundColor: colors$1[5],
                    textAlignment: doric.gravity().center(),
                    height: 50,
                }),
                doric.gestureContainer([], {
                    onSingleTap: () => {
                        doric.modal(this.context).toast("onSingleTap");
                    },
                    onDoubleTap: () => {
                        doric.modal(this.context).toast("onDoubleTap");
                    },
                    onLongPress: () => {
                        doric.modal(this.context).toast("onLongPress");
                    },
                }).apply({
                    layoutConfig: doric.layoutConfig()
                        .just()
                        .configAlignment(doric.Gravity.Center),
                    width: 300,
                    height: 300,
                    backgroundColor: doric.Color.BLACK,
                }),
            ]).apply({
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            }),
            doric.vlayout([
                doric.text({
                    text: "Pinch Demo",
                    layoutConfig: doric.layoutConfig().mostWidth(),
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    backgroundColor: colors$1[5],
                    textAlignment: doric.gravity().center(),
                    height: 50,
                }),
                doric.gestureContainer([pinchChild], {
                    onPinch: (scale) => {
                        pinchChild.width = 100 * scale;
                        pinchChild.height = 100 * scale;
                    },
                }).apply({
                    layoutConfig: doric.layoutConfig()
                        .just()
                        .configAlignment(doric.Gravity.Center),
                    width: 300,
                    height: 300,
                    backgroundColor: doric.Color.BLACK,
                }),
            ]).apply({
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            }),
            doric.vlayout([
                doric.text({
                    text: "Pan Demo",
                    layoutConfig: doric.layoutConfig().mostWidth(),
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    backgroundColor: colors$1[5],
                    textAlignment: doric.gravity().center(),
                    height: 50,
                }),
                doric.gestureContainer([panChild], {
                    onPan: (dx, dy) => {
                        panChild.x -= dx;
                        panChild.y -= dy;
                    },
                }).apply({
                    layoutConfig: doric.layoutConfig()
                        .just()
                        .configAlignment(doric.Gravity.Center),
                    width: 300,
                    height: 300,
                    backgroundColor: doric.Color.BLACK,
                }),
            ]).apply({
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            }),
            doric.vlayout([
                doric.text({
                    text: "Rotate Demo",
                    layoutConfig: doric.layoutConfig().mostWidth(),
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    backgroundColor: colors$1[5],
                    textAlignment: doric.gravity().center(),
                    height: 50,
                }),
                doric.gestureContainer([rotateChild], {
                    onRotate: (dAngle) => {
                        if (rotateChild.rotation == null) {
                            rotateChild.rotation = 0;
                        }
                        rotateChild.rotation += dAngle;
                    },
                }).apply({
                    layoutConfig: doric.layoutConfig()
                        .just()
                        .configAlignment(doric.Gravity.Center),
                    width: 300,
                    height: 300,
                    backgroundColor: doric.Color.BLACK,
                }),
            ]).apply({
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            }),
            doric.vlayout([
                doric.text({
                    text: "Swipe Demo",
                    layoutConfig: doric.layoutConfig().mostWidth(),
                    textSize: 30,
                    textColor: doric.Color.WHITE,
                    backgroundColor: colors$1[5],
                    textAlignment: doric.gravity().center(),
                    height: 50,
                }),
                doric.gestureContainer([], {
                    onSwipe: (orientation) => {
                        if (orientation == doric.SwipeOrientation.LEFT) {
                            doric.modal(this.context).toast("onSwipeLeft");
                        }
                        else if (orientation == doric.SwipeOrientation.RIGHT) {
                            doric.modal(this.context).toast("onSwipeRight");
                        }
                        else if (orientation == doric.SwipeOrientation.TOP) {
                            doric.modal(this.context).toast("onSwipeTop");
                        }
                        else if (orientation == doric.SwipeOrientation.BOTTOM) {
                            doric.modal(this.context).toast("onSwipeBottom");
                        }
                    },
                }).apply({
                    layoutConfig: doric.layoutConfig()
                        .just()
                        .configAlignment(doric.Gravity.Center),
                    width: 300,
                    height: 300,
                    backgroundColor: doric.Color.BLACK,
                }),
            ]).apply({
                layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            }),
        ], {
            space: 50,
            layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
            gravity: doric.gravity().centerX(),
        }), { layoutConfig: doric.layoutConfig().most() }).in(rootView);
    }
};
GestureContainerDemo = __decorate$5([
    Entry
], GestureContainerDemo);

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let GestureTSXDemo = class GestureTSXDemo extends doric.Panel {
    onShow() {
        doric.navbar(this.context).setTitle('GestureTSXDemo');
    }
    build(rootView) {
        const textRef = doric.createRef();
        const stackRef = doric.createRef();
        doric.jsx.createElement(doric.GestureContainer, { parent: rootView, layoutConfig: doric.layoutConfig().most(), onClick: () => {
                textRef.current.text = 'onClick';
                doric.log('onClick');
            }, onDoubleTap: () => {
                textRef.current.text = 'onDoubleTap';
                doric.log('onDoubleTap');
            }, onLongPress: () => {
                textRef.current.text = 'onLongPress';
                doric.log('onLongPress');
            }, onPan: (dx, dy) => {
                textRef.current.text = `onPan dx:${dx} dy:${dy}`;
                doric.log(`${textRef.current.text}`);
            }, onPinch: (scale) => {
                textRef.current.text = `onPinch scale: ${scale}`;
                doric.log(`${textRef.current.text}`);
            }, onRotate: (dAngle) => {
                textRef.current.text = `onRotate dAngle: ${dAngle}`;
                doric.log(`${textRef.current.text}`);
            }, onSwipe: (orientation) => {
                textRef.current.text = `onSwipe orientation: ${orientation}`;
                doric.log(`${textRef.current.text}`);
            }, onTouchDown: (event) => {
                textRef.current.text = `onTouchDown event.x:${event.x} event.y:${event.y}`;
                doric.log(`${textRef.current.text}`);
                stackRef.current.centerX = event.x;
                stackRef.current.centerY = event.y;
            }, onTouchMove: (event) => {
                textRef.current.text = `onTouchMove event.x:${event.x} event.y:${event.y}`;
                doric.log(`${textRef.current.text}`);
                stackRef.current.centerX = event.x;
                stackRef.current.centerY = event.y;
            }, onTouchUp: (event) => {
                textRef.current.text = `onTouchUp event.x:${event.x} event.y:${event.y}`;
                doric.log(`${textRef.current.text}`);
            }, onTouchCancel: (event) => {
                doric.log(`${textRef.current.text}`);
            } },
            doric.jsx.createElement(doric.Stack, { ref: stackRef, layoutConfig: doric.layoutConfig().just(), backgroundColor: doric.Color.RED, height: 100, width: 150 },
                doric.jsx.createElement(doric.Text, { layoutConfig: doric.layoutConfig().fit().configAlignment(doric.Gravity.Center), ref: textRef, maxLines: 0, textColor: doric.Color.WHITE }, "x: 0, y: 0")));
    }
};
GestureTSXDemo = __decorate$4([
    Entry
], GestureTSXDemo);

var img$6 = "data:image/png;base64,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";

var img$5 = "data:image/png;base64,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";

var img$4 = "data:image/png;base64,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";

var img$3 = "data:image/png;base64,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";

var img$2 = "data:image/png;base64,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";

var img$1 = "data:image/png;base64,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";

var img = "data:image/png;base64,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";

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const kMenuWidth = Math.floor((Environment.screenWidth - 60) / 4);
const kWidth = 4 * kMenuWidth;
const kHeight = 5 * kMenuWidth;
const kGameProgressKey = "kGameProgressKey";
const buttonColor = doric.Color.parse("#A0522D");
const colors = [
    doric.Color.parse("#339999"),
    doric.Color.parse("#CC3333"),
    doric.Color.parse("#FF9999"),
    doric.Color.parse("#CCCC00"),
    doric.Color.parse("#9999FF"),
    doric.Color.parse("#CC6699"),
    doric.Color.parse("#666699"),
    doric.Color.parse("#0099CC"),
];
let HuaRongDao = class HuaRongDao extends doric.Panel {
    constructor() {
        super(...arguments);
        // 数据源
        this.dataModel = {};
        this.btnEnabled = true;
        this.responsedGesture = false;
    }
    // 检测人物是否能向该方向移动
    // direction: 1 left, 2 right, 3 top, 4 top
    checkRoleCanMoveToDirection(index, direction, view) {
        const it = this.dataModel;
        if (!it ||
            !this.roleViews ||
            !it.rolePositions ||
            this.roleViews.length != it.rolePositions.length)
            return false;
        const item = it.rolePositions[index];
        var X = 0;
        var Y = 0;
        switch (direction) {
            case 1:
                {
                    // 向左边
                    X = (item.origin.x - 1) * kMenuWidth;
                    Y = item.origin.y * kMenuWidth;
                }
                break;
            case 2:
                {
                    // 向右边
                    X = (item.origin.x + 1) * kMenuWidth;
                    Y = item.origin.y * kMenuWidth;
                }
                break;
            case 3:
                {
                    // 向上
                    X = item.origin.x * kMenuWidth;
                    Y = (item.origin.y - 1) * kMenuWidth;
                }
                break;
            case 4:
                {
                    // 向下
                    X = item.origin.x * kMenuWidth;
                    Y = (item.origin.y + 1) * kMenuWidth;
                }
                break;
        }
        var width = Math.floor(item.type / 10) * kMenuWidth;
        var height = (item.type % 10) * kMenuWidth;
        var maxX = X + width;
        var maxY = Y + height;
        // 找到不可以移动的场景
        if (X < 0 || Y < 0) {
            return false;
        }
        if (maxX > kWidth || maxY > kHeight) {
            return false;
        }
        for (let index = 0; index < it.rolePositions.length; index++) {
            const element = it.rolePositions[index];
            if (element.name == item.name)
                continue;
            var elementX = element.origin.x * kMenuWidth;
            var elementY = element.origin.y * kMenuWidth;
            var elementWidth = Math.floor(element.type / 10) * kMenuWidth;
            var elementHeight = (element.type % 10) * kMenuWidth;
            var emaxX = elementX + elementWidth;
            var emaxY = elementY + elementHeight;
            if (emaxX > X && elementX < maxX && emaxY > Y && elementY < maxY) {
                return false;
            }
        }
        const duration = 100;
        switch (direction) {
            case 1:
                {
                    // 向左边
                    doric.animate(this.context)({
                        animations: () => {
                            view.x -= kMenuWidth;
                        },
                        duration: duration,
                    }).then(() => {
                        var _a;
                        item.origin.x -= 1;
                        (_a = it.steps) === null || _a === void 0 ? void 0 : _a.push({
                            direction: direction,
                            roleName: item.name,
                            desc: `${item.name}-向左`,
                            index: index,
                        });
                        this.judgeUserIsWin(item);
                    });
                }
                break;
            case 2:
                {
                    // 向右边
                    doric.animate(this.context)({
                        animations: () => {
                            view.x += kMenuWidth;
                        },
                        duration: duration,
                    }).then(() => {
                        var _a;
                        item.origin.x += 1;
                        (_a = it.steps) === null || _a === void 0 ? void 0 : _a.push({
                            direction: direction,
                            roleName: item.name,
                            desc: `${item.name}-向右`,
                            index: index,
                        });
                        this.judgeUserIsWin(item);
                    });
                }
                break;
            case 3:
                {
                    // 向上
                    doric.animate(this.context)({
                        animations: () => {
                            view.y -= kMenuWidth;
                        },
                        duration: duration,
                    }).then(() => {
                        var _a;
                        item.origin.y -= 1;
                        (_a = it.steps) === null || _a === void 0 ? void 0 : _a.push({
                            direction: direction,
                            roleName: item.name,
                            desc: `${item.name}-向上`,
                            index: index,
                        });
                        this.judgeUserIsWin(item);
                    });
                }
                break;
            case 4:
                {
                    // 向下
                    doric.animate(this.context)({
                        animations: () => {
                            view.y += kMenuWidth;
                        },
                        duration: duration,
                    }).then(() => {
                        var _a;
                        item.origin.y += 1;
                        (_a = it.steps) === null || _a === void 0 ? void 0 : _a.push({
                            direction: direction,
                            roleName: item.name,
                            desc: `${item.name}-向下`,
                            index: index,
                        });
                        this.judgeUserIsWin(item);
                    });
                }
                break;
        }
        return true;
    }
    // 判断是否获胜
    judgeUserIsWin(moveItem) {
        if (moveItem && moveItem.name == "曹操") {
            if (moveItem.origin.x == 1 && moveItem.origin.y == 3) {
                doric.modal(this.context)
                    .confirm({
                    title: "YOU WIN!",
                    msg: "恭喜您获胜！是否查看获胜步骤？",
                    okLabel: "查看",
                    cancelLabel: "取消",
                })
                    .then(() => {
                    var _a;
                    // OK 查看
                    const it = this.dataModel;
                    var str = "";
                    (_a = it.steps) === null || _a === void 0 ? void 0 : _a.forEach((step, index) => {
                        str = str + step.desc + ",";
                    });
                    doric.log(`获胜步骤为：${str}`);
                    doric.modal(this.context).confirm({
                        title: "获胜步骤",
                        msg: str,
                        okLabel: "分享",
                        cancelLabel: "取消",
                    });
                }, () => {
                    // Cancel 取消
                });
            }
        }
    }
    resetSubViewsFrame(state) {
        if (this.roleViews) {
            this.roleViews.forEach((view, index) => {
                if (this.roleViews &&
                    state.rolePositions &&
                    this.roleViews.length == state.rolePositions.length) {
                    const item = state.rolePositions[index];
                    if (item) {
                        view.y = item.origin.y * kMenuWidth;
                        view.x = item.origin.x * kMenuWidth;
                    }
                }
            });
            this.attached(state, this);
        }
    }
    attached(state, vh) {
        if (!state)
            return;
        vh.backBtn.onClick = () => {
            const it = this.dataModel;
            const steps = it.steps;
            if (!it ||
                !steps ||
                !vh.roleViews ||
                !it.rolePositions ||
                vh.roleViews.length != it.rolePositions.length)
                return;
            if (steps.length == 0) {
                doric.modal(this.context).toast("已回到游戏开始阶段");
            }
            else {
                if (!this.btnEnabled)
                    return;
                this.btnEnabled = false;
                const step = steps[steps.length - 1];
                const duration = 100;
                const item = it.rolePositions[step.index];
                const view = vh.roleViews[step.index];
                setTimeout(() => {
                    this.btnEnabled = true;
                }, 100);
                switch (step.direction) {
                    case 1:
                        {
                            // 向左边
                            doric.animate(this.context)({
                                animations: () => {
                                    view.x += kMenuWidth;
                                },
                                duration: duration,
                            }).then(() => {
                                var _a;
                                item.origin.x += 1;
                                (_a = it.steps) === null || _a === void 0 ? void 0 : _a.pop();
                            });
                        }
                        break;
                    case 2:
                        {
                            // 向右边
                            doric.animate(this.context)({
                                animations: () => {
                                    view.x -= kMenuWidth;
                                },
                                duration: duration,
                            }).then(() => {
                                var _a;
                                item.origin.x -= 1;
                                (_a = it.steps) === null || _a === void 0 ? void 0 : _a.pop();
                            });
                        }
                        break;
                    case 3:
                        {
                            // 向上
                            doric.animate(this.context)({
                                animations: () => {
                                    view.y += kMenuWidth;
                                },
                                duration: duration,
                            }).then(() => {
                                var _a;
                                item.origin.y += 1;
                                (_a = it.steps) === null || _a === void 0 ? void 0 : _a.pop();
                            });
                        }
                        break;
                    case 4:
                        {
                            // 向下
                            doric.animate(this.context)({
                                animations: () => {
                                    view.y -= kMenuWidth;
                                },
                                duration: duration,
                            }).then(() => {
                                var _a;
                                item.origin.y -= 1;
                                (_a = it.steps) === null || _a === void 0 ? void 0 : _a.pop();
                            });
                        }
                        break;
                }
            }
        };
        /// 保存进度
        vh.saveBtn.onClick = () => {
            const it = this.dataModel;
            doric.storage(this.context)
                .setItem(kGameProgressKey, JSON.stringify(it))
                .then(() => {
                doric.modal(this.context).toast("保存成功");
            });
        };
        /// 重新开始
        vh.rePlayBtn.onClick = () => {
            doric.modal(this.context)
                .confirm({
                title: "温馨提示",
                msg: "您确定要重新开始吗？",
                okLabel: "确定",
                cancelLabel: "取消",
            })
                .then(() => {
                // OK 确定
                this.reset(state);
                doric.animate(this.context)({
                    animations: () => {
                        this.resetSubViewsFrame(state);
                    },
                    duration: 300,
                });
            });
        };
    }
    // 重置
    reset(it) {
        it.steps = [];
        it.rolePositions = [
            {
                name: "张飞",
                type: 12,
                origin: { x: 0, y: 0 },
                photoPath: "pic11",
            },
            {
                name: "曹操",
                type: 22,
                origin: { x: 1, y: 0 },
                photoPath: "pic0",
            },
            {
                name: "赵云",
                type: 12,
                origin: { x: 3, y: 0 },
                photoPath: "pic10",
            },
            {
                name: "黄忠",
                type: 12,
                origin: { x: 0, y: 2 },
                photoPath: "pic14",
            },
            {
                name: "关羽",
                type: 21,
                origin: { x: 1, y: 2 },
                photoPath: "pic3",
            },
            {
                name: "马超",
                type: 12,
                origin: { x: 3, y: 2 },
                photoPath: "pic13",
            },
            {
                name: "卒1",
                type: 11,
                origin: { x: 1, y: 3 },
                photoPath: "pic6",
            },
            {
                name: "卒2",
                type: 11,
                origin: { x: 2, y: 3 },
                photoPath: "pic6",
            },
            {
                name: "卒3",
                type: 11,
                origin: { x: 0, y: 4 },
                photoPath: "pic6",
            },
            {
                name: "卒4",
                type: 11,
                origin: { x: 3, y: 4 },
                photoPath: "pic6",
            },
        ];
    }
    imageBase64String(path) {
        var base64Str = img$6;
        switch (path) {
            case "pic0":
                base64Str = img$6;
                break;
            case "pic3":
                base64Str = img$5;
                break;
            case "pic6":
                base64Str = img$4;
                break;
            case "pic10":
                base64Str = img$3;
                break;
            case "pic11":
                base64Str = img$2;
                break;
            case "pic13":
                base64Str = img$1;
                break;
            case "pic14":
                base64Str = img;
                break;
        }
        return base64Str;
    }
    build(rootView) {
        const state = this.dataModel;
        if (!state || !state.rolePositions)
            return;
        doric.vlayout([
            doric.text({
                text: "三国华容道",
                textColor: buttonColor,
                fontStyle: "bold",
                textSize: 20,
                layoutConfig: doric.layoutConfig()
                    .fit()
                    .configAlignment(doric.Gravity.Center)
                    .configMargin({ top: 30 }),
            }),
            doric.stack([
                ...(this.roleViews = state.rolePositions.map((item, index) => {
                    var view = doric.gestureContainer(doric.image({
                        imageBase64: this.imageBase64String(item.photoPath),
                        layoutConfig: doric.layoutConfig().most(),
                        scaleType: doric.ScaleType.ScaleAspectFill,
                    }), {
                        backgroundColor: colors[index % colors.length],
                        layoutConfig: doric.layoutConfig().just(),
                        top: item.origin.y * kMenuWidth,
                        left: item.origin.x * kMenuWidth,
                        width: Math.floor(item.type / 10) * kMenuWidth,
                        height: (item.type % 10) * kMenuWidth,
                        onPan: (dx, dy) => {
                            if (!this.responsedGesture) {
                                //direction: 1 left, 2 right, 3 top, 4 bottom
                                if (dx > 1 && Math.abs(dy) <= 5) {
                                    this.responsedGesture = true;
                                    this.checkRoleCanMoveToDirection(index, 1, view);
                                }
                                else if (dx < -1 && Math.abs(dy) <= 5) {
                                    this.responsedGesture = true;
                                    this.checkRoleCanMoveToDirection(index, 2, view);
                                }
                                else if (dy > 1 && Math.abs(dx) <= 5) {
                                    this.responsedGesture = true;
                                    this.checkRoleCanMoveToDirection(index, 3, view);
                                }
                                else if (dy < -1 && Math.abs(dx) <= 5) {
                                    this.responsedGesture = true;
                                    this.checkRoleCanMoveToDirection(index, 4, view);
                                }
                            }
                        },
                        onTouchUp: (event) => {
                            this.responsedGesture = false;
                        },
                    });
                    return view;
                })),
            ], {
                width: kWidth,
                height: kHeight,
                layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
                backgroundColor: buttonColor,
                border: {
                    color: buttonColor,
                    width: 4,
                },
            }),
            doric.flexlayout([
                (this.saveBtn = doric.text({
                    text: "保存进度",
                    textColor: doric.Color.WHITE,
                    layoutConfig: doric.layoutConfig().just(),
                    width: 90,
                    height: 32,
                    backgroundColor: buttonColor,
                    corners: 16,
                })),
                (this.rePlayBtn = doric.text({
                    text: "重新开始",
                    textColor: doric.Color.WHITE,
                    layoutConfig: doric.layoutConfig().just(),
                    width: 90,
                    height: 32,
                    backgroundColor: buttonColor,
                    corners: 16,
                })),
                (this.backBtn = doric.text({
                    text: "回退",
                    textColor: doric.Color.WHITE,
                    layoutConfig: doric.layoutConfig().just(),
                    width: 90,
                    height: 32,
                    backgroundColor: buttonColor,
                    corners: 16,
                })),
            ], {
                width: kWidth,
                layoutConfig: doric.layoutConfig()
                    .justWidth()
                    .fitHeight()
                    .configAlignment(doric.Gravity.Center)
                    .configMargin({ top: 20 }),
                flexConfig: {
                    flexDirection: doric.FlexDirection.ROW,
                    justifyContent: doric.Justify.SPACE_AROUND,
                },
            }),
        ], {
            layoutConfig: doric.layoutConfig().most(),
            backgroundColor: doric.Color.parse("#FDF5E6"),
            space: 20,
        }).in(rootView);
        this.attached(state, this);
    }
    onCreate() {
        this.dataModel.steps = [];
        this.dataModel.rolePositions = [
            {
                name: "张飞",
                type: 12,
                origin: { x: 0, y: 0 },
                photoPath: "pic11",
            },
            {
                name: "曹操",
                type: 22,
                origin: { x: 1, y: 0 },
                photoPath: "pic0",
            },
            {
                name: "赵云",
                type: 12,
                origin: { x: 3, y: 0 },
                photoPath: "pic10",
            },
            {
                name: "黄忠",
                type: 12,
                origin: { x: 0, y: 2 },
                photoPath: "pic14",
            },
            {
                name: "关羽",
                type: 21,
                origin: { x: 1, y: 2 },
                photoPath: "pic3",
            },
            {
                name: "马超",
                type: 12,
                origin: { x: 3, y: 2 },
                photoPath: "pic13",
            },
            {
                name: "卒1",
                type: 11,
                origin: { x: 1, y: 3 },
                photoPath: "pic6",
            },
            {
                name: "卒2",
                type: 11,
                origin: { x: 2, y: 3 },
                photoPath: "pic6",
            },
            {
                name: "卒3",
                type: 11,
                origin: { x: 0, y: 4 },
                photoPath: "pic6",
            },
            {
                name: "卒4",
                type: 11,
                origin: { x: 3, y: 4 },
                photoPath: "pic6",
            },
        ];
        // 读取进度缓存
        doric.storage(this.context)
            .getItem(kGameProgressKey)
            .then((cache) => {
            if (cache) {
                const s = JSON.parse(cache);
                this.dataModel = s;
                this.resetSubViewsFrame(s);
            }
        });
    }
};
HuaRongDao = __decorate$3([
    Entry
], HuaRongDao);

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const storedKey = "StoredKey";
const zone = "StorageDemo";
let StorageDemo = class StorageDemo extends doric.Panel {
    update() {
        doric.storage(context)
            .getItem(storedKey, zone)
            .then((e) => {
            this.stored.text = e || "";
            doric.log("Called in then");
        });
    }
    build(root) {
        doric.scroller(doric.vlayout([
            doric.text({
                text: "Storage Demo",
                layoutConfig: doric.layoutConfig().configWidth(doric.LayoutSpec.MOST),
                textSize: 30,
                textColor: doric.Color.WHITE,
                backgroundColor: colors$1[1],
                textAlignment: doric.gravity().center(),
                height: 50,
            }),
            label$1("Stored"),
            doric.text({
                layoutConfig: doric.layoutConfig().configWidth(doric.LayoutSpec.MOST),
                textSize: 20,
                textColor: doric.Color.WHITE,
                backgroundColor: colors$1[3],
                textAlignment: doric.gravity().center(),
                height: 50,
            }).also((it) => (this.stored = it)),
            label$1("store a value").apply({
                width: 200,
                height: 50,
                backgroundColor: colors$1[0],
                textSize: 30,
                textColor: doric.Color.WHITE,
                layoutConfig: doric.layoutConfig().just(),
                onClick: () => {
                    doric.storage(context)
                        .getItem(storedKey, zone)
                        .then((e) => {
                        doric.modal(context)
                            .prompt({
                            text: e,
                            title: "Please input text to store",
                            defaultText: "Default Value",
                        })
                            .then((text) => {
                            doric.storage(context)
                                .setItem(storedKey, text, zone)
                                .then(() => {
                                this.update();
                            });
                        });
                    });
                },
            }),
            label$1("remove value").apply({
                width: 200,
                height: 50,
                backgroundColor: colors$1[0],
                textSize: 30,
                textColor: doric.Color.WHITE,
                layoutConfig: doric.layoutConfig().just(),
                onClick: () => {
                    doric.storage(context)
                        .remove(storedKey, zone)
                        .then((e) => {
                        this.update();
                    });
                },
            }),
            label$1("clear values").apply({
                width: 200,
                height: 50,
                backgroundColor: colors$1[0],
                textSize: 30,
                textColor: doric.Color.WHITE,
                layoutConfig: doric.layoutConfig().just(),
                onClick: () => {
                    doric.storage(context)
                        .clear(zone)
                        .then((e) => {
                        this.update();
                    });
                },
            }),
        ]).apply({
            layoutConfig: doric.layoutConfig().most().configHeight(doric.LayoutSpec.FIT),
            gravity: doric.gravity().center(),
            space: 10,
        }))
            .apply({
            layoutConfig: doric.layoutConfig().most(),
        })
            .in(root);
        this.update();
    }
};
StorageDemo = __decorate$2([
    Entry
], StorageDemo);

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let SwitchDemo = class SwitchDemo extends doric.Panel {
    build(rootView) {
        let switchStatus;
        doric.vlayout([
            (switchStatus = doric.text({
                text: "Switch开关",
            })),
            doric.switchView({
                state: true,
                onSwitch: (state) => {
                    switchStatus.text = `Switch 当前状态:${state ? "ON" : "OFF"}`;
                },
            }),
            doric.switchView({
                state: true,
                onSwitch: (state) => {
                    switchStatus.text = `Switch 当前状态:${state ? "ON" : "OFF"}`;
                },
                offTintColor: doric.Color.RED,
                onTintColor: doric.Color.YELLOW,
                thumbTintColor: doric.Color.CYAN,
            }),
        ], {
            layoutConfig: doric.layoutConfig().most(),
            space: 20,
            gravity: doric.Gravity.Center,
        }).in(rootView);
    }
};
SwitchDemo = __decorate$1([
    Entry
], SwitchDemo);

class PanelRouter {
    constructor() {
        this.routeMap = new Map();
        this.routeMap = new Map([
            ['/keyboard', KeyboardDemo],
            ['/slider', SliderDemo],
            ['/effects', EffectsDemo],
            ['/effects/list', ListEffectsDemo],
            ['/AnimationsDemo', AnimationsDemo],
            ['/AnimatedImageDemo', AnimatedImageDemo],
            ['/AnimatorDemo', AnimatorDemo],
            ['/ComplicatedAnimationDemo', ComplicatedAnimationDemo],
            ['/RefreshableDemo', RefreshableDemo],
            ['/RefreshDemo', RefreshDemo],
            ['/CounterDemo', CounterDemo],
            ['/PopoverDemo', PopoverDemo],
            ['/FlowLayoutDemo', FlowLayoutDemo],
            ['/ScrollerDemo', ScrollerDemo],
            ['/DraggableDemo', DraggableDemo],
            ['/TextAnimationDemo', TextAnimationDemo],
            ['/PathButtonDemo', PathButtonDemo],
            ['/BlurEffectsDemo', BlurEffectsDemo],
            ['/NetworkDemo', NetworkDemo],
            ['/GestureContainerDemo', GestureContainerDemo],
            ['/GestureTSXDemo', GestureTSXDemo],
            ['/HuaRongDao', HuaRongDao],
            ['/StorageDemo', StorageDemo],
            ['/SwitchDemo', SwitchDemo],
        ]);
    }
    static instance() {
        if (!this._instance) {
            this._instance = new PanelRouter();
        }
        return this._instance;
    }
    registerPanel(path, panelClass) {
        this.routeMap.set(path, panelClass);
    }
    panelWithPath(path) {
        return this.routeMap.get(path);
    }
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function cell(context, model) {
    let padding = 10;
    let hPadding = 20;
    let cellHeight = 118;
    let titleLabel = doric.text({
        text: model.title,
        layoutConfig: doric.layoutConfig().mostWidth(),
        textSize: 18,
        fontStyle: "bold",
        textColor: doric.Color.BLACK,
        textAlignment: doric.Gravity.Left,
        maxLines: 1,
        height: 28,
    });
    let descLabel = doric.text({
        text: model.desc,
        layoutConfig: doric.layoutConfig().mostWidth(),
        textSize: 15,
        textColor: doric.Color.safeParse("#666666"),
        textAlignment: doric.Gravity.Left,
        maxLines: 2,
        lineSpacing: 4,
        height: 48,
    });
    let iconWidget = container({
        width: 60,
        height: 60,
        backgroundColor: bgColor,
        corners: 30,
        shadow: {
            opacity: 0.15,
            color: doric.Color.BLACK,
            offsetX: 2,
            offsetY: 2,
            radius: 6,
        },
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
        child: doric.text({
            text: model.title.substr(0, 1),
            textColor: themColor,
            textSize: 22,
            fontStyle: "bold",
            layoutConfig: doric.layoutConfig().fit().configAlignment(doric.Gravity.Center),
        }),
    });
    return doric.listItem(container({
        // 底部背景
        height: cellHeight,
        layoutConfig: doric.layoutConfig().mostWidth().justHeight(),
        padding: {
            left: hPadding,
            right: hPadding,
            top: padding,
            bottom: padding,
        },
        onClick: () => {
            if (model.path && model.path.length) {
                let panel = PanelRouter.instance().panelWithPath(model.path);
                doric.navigator(context).push(panel, {
                    extra: model,
                });
                // navigator(context).push(`assets://src/capacities/${model.capacityClass}.js`, {
                //     extra: model,
                // })
            }
            else {
                doric.navigator(context).push(ComponentDetail, {
                    extra: model,
                });
            }
        },
        child: container({
            // child 圆角白色 container
            corners: 8,
            border: {
                width: 1,
                color: themColor,
            },
            layoutConfig: doric.layoutConfig().most(),
            backgroundColor: doric.Color.WHITE,
            child: doric.hlayout([
                container({
                    width: 90,
                    layoutConfig: doric.layoutConfig().justWidth().mostHeight(),
                    child: iconWidget,
                }),
                doric.vlayout([titleLabel, descLabel], {
                    layoutConfig: doric.layoutConfig()
                        .most()
                        .configAlignment(doric.Gravity.Center),
                    gravity: doric.Gravity.Center,
                    space: 1,
                }),
            ], {
                space: 5,
                layoutConfig: doric.layoutConfig().most(),
            }),
        }),
    }), {
        identifier: "normalcell",
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight(),
    });
}
exports.MainWidget = class MainWidget extends doric.Panel {
    constructor() {
        super(...arguments);
        // 基础widgets数据源
        this.widgetModels = [];
        // 基础widgets list
        this.widgetList = new doric.List();
        // 常见功能数据源
        this.capacityModels = [];
        // 常见功能list
        this.capacityList = new doric.List();
        this.tabBar = new MyTabBar();
    }
    onCreate() {
        this.capacityModels = localCapacitiesJson;
        this.widgetModels = localComponentJson;
    }
    onShow() {
        doric.navbar(this.context).setTitle("DoricExamples");
    }
    build(rootView) {
        let normalImages = [
            doric.image({
                imageBase64: img$a,
                layoutConfig: doric.layoutConfig().fit(),
            }),
            doric.image({
                imageBase64: img$8,
                layoutConfig: doric.layoutConfig().fit(),
            }),
        ];
        let selectedImages = [
            doric.image({
                imageBase64: img$9,
                layoutConfig: doric.layoutConfig().fit(),
            }),
            doric.image({
                imageBase64: img$7,
                layoutConfig: doric.layoutConfig().fit(),
            }),
        ];
        this.widgetList = doric.list({
            itemCount: this.widgetModels.length,
            renderItem: (index) => cell(this.context, this.widgetModels[index]),
        }).apply({
            layoutConfig: doric.layoutConfig().most(),
        });
        this.capacityList = doric.list({
            itemCount: this.capacityModels.length,
            renderItem: (index) => cell(this.context, this.capacityModels[index]),
        }).apply({
            layoutConfig: doric.layoutConfig().most(),
        });
        doric.vlayout([
            doric.stack([this.widgetList, this.capacityList], {
                layoutConfig: doric.layoutConfig().most().configWeight(1),
            }),
            (this.tabBar = myTabBar({
                titles: ["基础组件", "常见功能"],
                normalImages: normalImages,
                selectedImages: selectedImages,
                onSelectedHandler: (currentIndex) => {
                    doric.log("currentIndex =" + currentIndex);
                    this.widgetList.hidden = currentIndex != 0;
                    this.capacityList.hidden = currentIndex != 1;
                },
            })),
        ], {
            layoutConfig: doric.layoutConfig().most(),
        }).in(rootView);
        if (this.tabBar.onSelectedHandler) {
            this.tabBar.onSelectedHandler(this.tabBar.selectedIndex);
        }
    }
};
exports.MainWidget = __decorate([
    Entry
], exports.MainWidget);
//# sourceMappingURL=DoricExamples.js.map
