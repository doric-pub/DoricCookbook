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
const colors$1 = [
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
        backgroundColor: colors$1[1],
        textAlignment: doric.gravity().center(),
        height: 50,
    });
}

var __decorate$m = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
Container = __decorate$m([
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

function ui$o() {
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
function codeString$o() {
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
function ui$n() {
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
function codeString$n() {
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
function ui$m() {
    return doric.vlayout([
        doric.text({
            text: "Icon Font text from   \ue631 ",
            textSize: 20,
            font: '../fonts/iconfont.ttf'
        }),
        doric.text({
            text: "Icon Font text from assets/fonts/ \ue631 ",
            textSize: 20,
            font: '../fonts/Hanabi.ttf'
        }),
    ], {
        space: 10,
        gravity: doric.Gravity.Left,
        backgroundColor: bgColor,
        layoutConfig: doric.layoutConfig().most().configHeight(doric.LayoutSpec.FIT)
    });
}
function codeString$m() {
    return `
    /// 字体文件使用
    export function ui() {
        return vlayout([
            text({
                text: "Icon Font text from   \ue631 ",
                textSize: 20,
                font: 'iconfont'
            }),
            text({
                text: "Icon Font text from assets/fonts/ \ue631 ",
                textSize: 20,
                font: '/res/font/Hanabi.ttf'
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
function ui$l() {
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
function codeString$l() {
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
function ui$k() {
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
function codeString$k() {
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

function ui$j() {
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
function codeString$j() {
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
function ui$i() {
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
function codeString$i() {
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
function ui$h() {
    return doric.stack([
        ...subViews$3()
    ], {
        width: 240,
        height: 160,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$h() {
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

function ui$g() {
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
function codeString$g() {
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
function ui$f() {
    return doric.stack([
        ...subViews$2()
    ], {
        width: 240,
        height: 160,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$f() {
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
function ui$e() {
    return doric.stack([
        doric.vlayout([
            ...subViews$1()
        ], {
            space: 30,
            gravity: doric.Gravity.Center,
            layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configAlignment(doric.Gravity.Center),
        })
    ], {
        width: 240,
        height: 380,
        layoutConfig: doric.layoutConfig().just().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$e() {
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
                    layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                })
            ],
            {
                width: 240,
                height: 380,
                layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
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
function ui$d() {
    return doric.stack([
        doric.vlayout([
            ...subViews()
        ], {
            space: 10,
            gravity: doric.Gravity.Center,
            layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configAlignment(doric.Gravity.Center),
        })
    ], {
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$d() {
    return `function subViews() {
        // WebP
        let webPImage = image({
            imageUrl: "https://p.upyun.com/demo/webp/webp/jpg-0.webp",
            layoutConfig: layoutConfig().just(),
            width: 200,
            height: 200,
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
                    layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
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

var img$4 = "data:image/png;base64,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";

function ui$c() {
    return doric.stack([
        doric.vlayout([
            doric.image({
                imageBase64: img$4,
                scaleType: doric.ScaleType.ScaleToFill,
                layoutConfig: doric.layoutConfig().fit(),
            }),
            doric.image({
                imageBase64: img$4,
                scaleType: doric.ScaleType.ScaleToFill,
                layoutConfig: doric.layoutConfig().fit(),
                imageScale: 2,
            }),
            doric.image({
                imageBase64: img$4,
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
                imageBase64: img$4,
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
            layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configAlignment(doric.Gravity.Center),
        })
    ], {
        layoutConfig: doric.layoutConfig().mostWidth().fitHeight().configAlignment(doric.Gravity.Center),
        backgroundColor: bgColor,
    });
}
function codeString$c() {
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
                    layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                })
            ],
            {
                width: 240,
                layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                backgroundColor: PubTool.bgColor,
            }
        )
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
            backgroundColor: colors$1[index % colors$1.length]
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
            backgroundColor: colors$1[index % colors$1.length]
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
            backgroundColor: colors$1[index % colors$1.length]
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
            backgroundColor: colors$1[index % colors$1.length]
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
            backgroundColor: colors$1[index % colors$1.length]
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
        case 'Text_1':
            return needCode ? codeString$o() : ui$o();
        case 'Text_2':
            return needCode ? codeString$n() : ui$n();
        case 'Text_3':
            return needCode ? codeString$m() : ui$m();
        case 'Text_4':
            return needCode ? codeString$l() : ui$l();
        case 'Text_5':
            return needCode ? codeString$k() : ui$k();
        case 'Stack_1':
            return needCode ? codeString$j() : ui$j();
        case 'Stack_2':
            return needCode ? codeString$i() : ui$i();
        case 'Stack_3':
            return needCode ? codeString$h() : ui$h();
        case 'Stack_4':
            return needCode ? codeString$g() : ui$g();
        case 'Stack_5':
            return needCode ? codeString$f() : ui$f();
        case 'Image_1':
            return needCode ? codeString$e() : ui$e();
        case 'Image_2':
            return needCode ? codeString$d() : ui$d();
        case 'Image_3':
            return needCode ? codeString$c() : ui$c();
        case 'HLayout_1':
            return needCode ? codeString$b() : ui$b();
        case 'HLayout_2':
            return needCode ? codeString$a() : ui$a();
        case 'HLayout_3':
            return needCode ? codeString$9() : ui$9();
        case 'VLayout_1':
            return needCode ? codeString$8() : ui$8();
        case 'VLayout_2':
            return needCode ? codeString$7() : ui$7();
        case 'VLayout_3':
            return needCode ? codeString$6() : ui$6();
        case 'FlexLayout_1':
            return needCode ? codeString$5() : ui$5();
        case 'FlexLayout_2':
            return needCode ? codeString$4() : ui$4();
        case 'FlexLayout_3':
            return needCode ? codeString$3() : ui$3();
        case 'FlexLayout_4':
            return needCode ? codeString$2() : ui$2();
        case 'FlexLayout_5':
            return needCode ? codeString$1() : ui$1();
        case 'List_1':
            return needCode ? codeString() : ui();
        default: return needCode ? '' : doric.stack([]);
    }
}

var __decorate$l = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
CodeIDE = __decorate$l([
    Entry
], CodeIDE);

var __decorate$k = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
ComponentDetail = __decorate$k([
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
	}
];

var __decorate$j = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        if (config.titles && config.titles.length > 0) {
            var tabItems = [];
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
                let imageV;
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
MyTabBar = __decorate$j([
    doric.ViewComponent,
    __metadata("design:paramtypes", [])
], MyTabBar);
function myTabBar(config) {
    const ret = new MyTabBar;
    doric.log('myTabBar');
    if (config) {
        ret.apply(config);
        // ret.applyChild(config)
    }
    return ret;
}

var img$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGCAYAAAA6hjFpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkU0MTM1QjhGNzA0MTFFQUJDRTdGNTVBMThFRTFBMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkU0MTM1QjlGNzA0MTFFQUJDRTdGNTVBMThFRTFBMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRTQxMzVCNkY3MDQxMUVBQkNFN0Y1NUExOEVFMUEwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRTQxMzVCN0Y3MDQxMUVBQkNFN0Y1NUExOEVFMUEwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq6ykvgAAAI0SURBVHja7JzBSxRRAIfdMHOL1UMiumLZyZQuIuRoncKLCh7qXoIggohQ3YQg8KYH6VSgYH9AgngIliUIFDewoCSqv2CvW3rV7Tf4xG0pttld971xvg++i+zMG+d7Mzu74xjL5/N14A4X2AUEAYIQBAhCECAIQYAgBAGCAEEIAuVQX+sBM5lMqHaQ53kcIRwh4eWqnJFD8ki+ly/lT4LUnjG5ItsKfjYip+WEicObeg1IyFdysyjGCV3ynVySjQQ5W+7Kz3JKxkr8Xk/kR9lPkOpzSS6a09CNAMv1yh35LCyn5zAE6ZO78mmZ23tRPpfb8iZBKrvgmJcf5K0qrO+2/CTnSpzuCPIXuuWWXDAzvFrE5bJMy+sEKY0/c2fNTB44w3HuyS/yEUH+TadMyRfycg3Ga5JrckO2EuRPHso9OWxh7HEz9n2CHM/MN/K1bGY77Aa5I7+6MjMLjtRvsieKQfwrqBYHL3Ta5eMoBulz+DPQYNSCNNg+V5fgWtSCxAO+/q1Mms8p5Zg06/hfEnWWvvsKy5eLkzJbwfJZs44gXIlSkAMLY4biUTFbQQ4Dvr74zmBQOuRqwGWs3AYOyy3c0QpPWaGBvzohCBCEIEAQggBBCAIEIQgQBAhCECAIQSrjl8P75SCKQdIOB0lFMYj/qEHOwRg5s22RC/Jd+g+Br8t9B0Lsm23xzLZZwfYt3B/yAW/lp8T4v71cZQFBCAIEIQgQhCBAEIIAQYAgBAGCnAN+CzAA/M1JjGJ8jbcAAAAASUVORK5CYII=";

var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGCAYAAAA6hjFpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjhGNjI2NzNGNzA1MTFFQUJDRTdGNTVBMThFRTFBMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjhGNjI2NzRGNzA1MTFFQUJDRTdGNTVBMThFRTFBMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRTQxMzVCQUY3MDQxMUVBQkNFN0Y1NUExOEVFMUEwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOEY2MjY3MkY3MDUxMUVBQkNFN0Y1NUExOEVFMUEwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvSKt/cAAAI4SURBVHja7JzNSxRhAIfdKHOVrUMiuqHZqQ+6iJCbdpIuJXgoumYQRCARVLdAELzpQToVGJRXKYgOwrIEQRJBBRah/QV7Xd291vRbfKVtUXZnZ3fed5zngeey7Mw7zjMzOx/uJjzPawN3OMQqIAgQhCBAEIIAQQgCBCEIEAQIQhBohMNhD5hYuRWpFeTdXGYPYQ+JLifktByVf+QH+UxuESR8JuSS7K147aq8J2+bOHyoh0BKPpfvqmLsMijfywXZQZDWclmuy7vl84Maf9cj+VUOE6T5HJXz5jB02sd05+UnOROVw3MUggzJL/Jxg8t7RM7KNXmWIMFOOJ7Iz/JCE+Z3UX6TD2oc7giyB2fkRzlntvBmkZSLMidPEaSOC3l532zJIy0cZ1x+l1ME2Z9+mZVPZWcI4x2TL+Vb2UOQ/ynf4Pohr1gYe9KMfZ0gO1vma/lKHmc57AYZkz9d2TIr9tQNeS6OQcpnUN0Onuj0yYdxDDLk8DXQpbgFabd9rK7BQNyCJH2+f1WmzXVKI6bNPOol1Wbp3ldUbi7ekfkA0+fNPPzQFacgJQtjRuKrYraC/Pb5/uong345KV/4nMbKY+CoPMK9FvCQFRn4rxOCAEEIAgQhCBCEIEAQggBBgCAEAYIQJBjbDq+XUhyD5BwOko1jkPJXDQoOxiiYZYtdkE2ZkW9k0YEQRbMsGbNsVrD9CPeXvMFH+T8S/G4vZ1lAEIIAQQgCBCEIEIQgQBAgCEGAIAeAvwIMABctSYybE39uAAAAAElFTkSuQmCC";

var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGCAYAAAA6hjFpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0Q1MTUzQUVGNzA1MTFFQUJDRTdGNTVBMThFRTFBMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTg0ODFENjhGNzA1MTFFQUJDRTdGNTVBMThFRTFBMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RDUxNTNBQ0Y3MDUxMUVBQkNFN0Y1NUExOEVFMUEwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RDUxNTNBREY3MDUxMUVBQkNFN0Y1NUExOEVFMUEwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkjjnbEAAAKASURBVHja7JzPi4xxHMefQX4lM/biYEQcdmWL1NQclCPJxa+NQnLcA8sBZ7Vb26b1D2hrL4psSoqLi9LEXkTkSCGF2hy0ofH+tp8DWtH3+T77fB/f16tel519PjPNa7/PPDPfdmrdbjeDeFjEU0AQIAhBgCAEAYIQBAhCECAIEIQgQBCCQGiWLPQddjqdSj1B7XabFcIpq3qskYPytnwlZ+Vn+cJ+Nmi/wymrYJbLs/K8bPx221LZZ+6Tw3JMjssvrJDwbJSP5cg8MeajYVEe2bEECUhTPpD9Hsf227FNgoQ7TU3lfEKbNmMFQfIzJFsB5rRsFkFy0CMvBpx3wWYSxJOjsh5wXt1mEsST3QXM3EMQf7YXMHMbQfxZW5GZyQSZzRIj9iDvCpj5niD+vCxg5hOC+HOvgJl3CeLPNTkTcN6MzSSIJ5/kaMB5ozaTIDm4Ip8GmPPMZnGVlRO3uXRAvs0x443cn1Vgo6oqH79vlvflN4/jv2dz+yFb5SqC+LNDTsqPdmV0LPPbcl4sj8hb8oO8LncS5N/ZIm/IaXlcrgw4e5k8bCvmjkUnyB9YJyfsBfyQrBV8f3stulsxmwjyK6fkc3nSTjELRc1WjLsCGyLIHJflVbm6xMfg9trH7XEkHeSEPBfRadOt1NOpBnF/lSMRXlRcykrcdy8zyEF7IY+Nuq3c5IIMRPweaCC1IO5+d0UcpFXWu/qygmwo+arqb7hPBPpSCtKbxU9vSkHWVyBIM6Ug9QoEaaQU5GsGUQV5KGP/9s3plIK4/4Ryn+i+jjCE23M/I2+WdXlXFlMm/ESN7+3lNQQIQhAgCEGAIAQBghAECAIEIQgQ5D/ghwADAKBcV67fom8HAAAAAElFTkSuQmCC";

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGCAYAAAA6hjFpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTg0ODFENkJGNzA1MTFFQUJDRTdGNTVBMThFRTFBMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTg0ODFENkNGNzA1MTFFQUJDRTdGNTVBMThFRTFBMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBODQ4MUQ2OUY3MDUxMUVBQkNFN0Y1NUExOEVFMUEwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBODQ4MUQ2QUY3MDUxMUVBQkNFN0Y1NUExOEVFMUEwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqU9VzAAAAKBSURBVHja7Jy9axRBGId3VfxCvDONhSeKFokYUALXBSwVsfEjQUFFLFNotFBrwUAQSf6BINgIBoMggjY2goWmEUWxVFARVAgWElTO35C3MCGizM5mZ53ngadJsu8d92T29m4uyTudTgbxsIyHgCBAEIIAQQgCBCEIEIQgQBAgCEGAIASB0KxY6hvMJ0/W6gHqDNxghXDKqh8b5JC8K9/IWflVvrKvDdnPcMoqmdXynLwgmwu+t1L2mAfkFXlVjslvrJDwbJVP5cgiMRajaVGe2LEECUhLPpK9Hsf22rEtgoQ7TU0VfEBbNmMNQYozLNsB5rRtFkEK0CUvBZx30WYSxJNjshFwXsNmEsSTvSXM3EcQf3aXMHMXQfzZWJOZyQSZzRIj9iAfSpj5kSD+vC5h5jOC+POghJn3CeLPTTkTcN6MzSSIJ1/kaMB5ozaTIAUYl88DzHlhs7jKKojbXDok3xeY8U4ezGqwUVWXt9+3y4fyh8fxP7O5/ZCdch1B/OmT7iMfn+3K6Hjmt+W8XB6Vd+QneUv2E+Tf2SEn5bQ8IdcGnL1KDtiKuWfRCfIHNsnr9gR+ROYl395+i+5WzDaCzOe0fClP2SlmqchtxbgrsGGCzHFNTsj1Fd4Ht9c+Zvcj6SDuc6XnIzptupV6JtUg7rdyJMKListZhfvuVQY5bE/ksdGwlZtckMGIXwMNphbE3e6eiIO0q3pVX1WQLRVfVf0N945AT0pBurP46U4pyOYaBGmlFKRRgyDNlIJ8zyCqII9l7P99czqlIO4vodw7um8jDOH23M/K21Vd3lXFlAm/kfN/e3kOAYIQBAhCECAIQYAgBAGCAEEIAgT5D/glwAC6rVeuclZOsgAAAABJRU5ErkJggg==";

var __decorate$i = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
            backgroundColor: colors$1[0],
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
                    backgroundColor: colors$1[0],
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
                    backgroundColor: colors$1[0],
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
                    backgroundColor: colors$1[3],
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
KeyboardDemo = __decorate$i([
    Entry
], KeyboardDemo);

const icon_refresh = 'data:image/png;base64,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';
const colors = [
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
        it.backgroundColor = colors[idx || 0];
    });
}
function title(str) {
    return doric.text({
        text: str,
        layoutConfig: doric.layoutConfig().configWidth(doric.LayoutSpec.MOST),
        textSize: 30,
        textColor: doric.Color.WHITE,
        backgroundColor: colors[1],
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

var __decorate$h = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
                        it.backgroundColor = (colors[++start % colors.length]);
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
                backgroundColor: colors[1],
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
SliderDemo = __decorate$h([
    Entry
], SliderDemo);

var __decorate$g = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
EffectsDemo = __decorate$g([
    Entry
], EffectsDemo);

var __decorate$f = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
ListEffectsDemo = __decorate$f([
    Entry
], ListEffectsDemo);

var __decorate$e = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
AnimationsDemo = __decorate$e([
    Entry
], AnimationsDemo);

var __decorate$d = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
            doric.jsx.createElement(doric.Text, { textSize: 20, backgroundColor: colors$1[0], textColor: doric.Color.WHITE, padding: { left: 10, top: 10, right: 10, bottom: 10 }, onClick: () => __awaiter$4(this, void 0, void 0, function* () {
                    const isAnimating = yield imageRef.current.isAnimating(this.context);
                    doric.modal(this.context).alert(`Is Animating: ${isAnimating}`);
                }) }, "isAnimating"),
            doric.jsx.createElement(doric.Text, { textSize: 20, backgroundColor: colors$1[0], textColor: doric.Color.WHITE, padding: { left: 10, top: 10, right: 10, bottom: 10 }, onClick: () => {
                    imageRef.current.startAnimating(this.context);
                } }, "startAnimating"),
            doric.jsx.createElement(doric.Text, { textSize: 20, backgroundColor: colors$1[0], textColor: doric.Color.WHITE, padding: { left: 10, top: 10, right: 10, bottom: 10 }, onClick: () => {
                    imageRef.current.stopAnimating(this.context);
                } }, "stopAnimating"));
    }
};
AnimatedImageDemo = __decorate$d([
    Entry
], AnimatedImageDemo);

var __decorate$c = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        backgroundColor: colors[0],
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
                                    view.backgroundColor = colors[2];
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
                                    view.backgroundColor = colors[(idx++) % colors.length];
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
                backgroundColor: colors[1].alpha(0.3 * 255),
            }),
        ], {
            layoutConfig: doric.layoutConfig().most(),
            space: 10,
        }).in(rootView);
    }
};
AnimatorDemo = __decorate$c([
    Entry
], AnimatorDemo);

var __decorate$b = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        backgroundColor: colors[0],
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
                backgroundColor: colors[1].alpha(0.3 * 255),
            }),
        ], {
            layoutConfig: doric.layoutConfig().most(),
            gravity: doric.gravity().center(),
            space: 10,
        }).in(rootView);
    }
};
ComplicatedAnimationDemo = __decorate$b([
    Entry
], ComplicatedAnimationDemo);

var __decorate$a = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
                    backgroundColor: colors[0],
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
                    backgroundColor: colors[0],
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
                    backgroundColor: colors[0],
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
                    backgroundColor: colors[0],
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
RefreshableDemo = __decorate$a([
    Entry
], RefreshableDemo);

var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RefreshDemo = class RefreshDemo extends doric.Panel {
    build(rootView) {
        let refreshView;
        let offset = Math.ceil(Math.random() * colors.length);
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
                                offset = Math.ceil(Math.random() * colors.length);
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
                            it.backgroundColor = colors[(idx + offset) % colors.length];
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
RefreshDemo = __decorate$9([
    Entry
], RefreshDemo);

var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
CounterDemo = __decorate$8([
    Entry
], CounterDemo);

var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
                backgroundColor: colors[0],
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
                backgroundColor: colors[0],
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
                backgroundColor: colors[0],
                textSize: 30,
                textColor: doric.Color.WHITE,
                layoutConfig: doric.layoutConfig().just(),
                onClick: () => {
                    doric.popover(this.context).show(doric.stack([
                        doric.text({
                            width: 200,
                            height: 50,
                            backgroundColor: colors[0],
                            textColor: doric.Color.WHITE,
                            layoutConfig: doric.layoutConfig()
                                .just()
                                .configAlignment(doric.Gravity.Center),
                            text: "This is PopOver Window",
                        }).also((v) => {
                            let idx = 0;
                            v.onClick = () => {
                                v.backgroundColor = colors[++idx % colors.length];
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
PopoverDemo = __decorate$7([
    Entry
], PopoverDemo);

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
                    backgroundColor: colors$1[idx % colors$1.length],
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
                backgroundColor: colors$1[500 % colors$1.length],
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
FlowLayoutDemo = __decorate$6([
    Entry
], FlowLayoutDemo);

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
ScrollerDemo = __decorate$5([
    Entry
], ScrollerDemo);

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
DraggableDemo = __decorate$4([
    Entry
], DraggableDemo);

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
TextAnimationDemo = __decorate$3([
    Entry
], TextAnimationDemo);

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
            backgroundColor: colors[0],
            layoutConfig: doric.layoutConfig().most(),
        }).in(root);
    }
};
PathButtonDemo = __decorate$2([
    Entry
], PathButtonDemo);

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
                                color: colors[4],
                            } },
                            doric.jsx.createElement(doric.Stack, { ref: spinnerRef, backgroundColor: colors[6], layoutConfig: doric.layoutConfig().justWidth().justHeight(), height: 40 }))));
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
                                color: colors[4],
                            } },
                            doric.jsx.createElement(doric.Stack, { ref: spinnerRef, backgroundColor: colors[6], layoutConfig: doric.layoutConfig().justWidth().justHeight(), height: 40 }))));
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
                                color: colors[4],
                            } },
                            doric.jsx.createElement(doric.Stack, { ref: spinnerRef, backgroundColor: colors[6], layoutConfig: doric.layoutConfig().justWidth().justHeight(), height: 40 }))));
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
BlurEffectsDemo = __decorate$1([
    Entry
], BlurEffectsDemo);

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
                imageBase64: img$3,
                layoutConfig: doric.layoutConfig().fit(),
            }),
            doric.image({
                imageBase64: img$1,
                layoutConfig: doric.layoutConfig().fit(),
            }),
        ];
        let selectedImages = [
            doric.image({
                imageBase64: img$2,
                layoutConfig: doric.layoutConfig().fit(),
            }),
            doric.image({
                imageBase64: img,
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
