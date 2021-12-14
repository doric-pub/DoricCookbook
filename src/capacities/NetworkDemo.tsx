import { Color, createRef, Gravity, gravity, Group, HLayout, IRequest, jsx, layoutConfig, log, modal, network, Panel, Scroller, Stack, Text, VLayout } from "doric";
import * as PubTool from "../PubTool"

@Entry
export class NetworkDemo extends Panel {
    build(rootView: Group): void {
        const padding = 15
        const resGetText = createRef<Text>();
        const resPostText = createRef<Text>();
        const resRequestText = createRef<Text>();
        <Scroller parent={rootView} layoutConfig={layoutConfig().most()}>
            <VLayout layoutConfig={layoutConfig().mostWidth().fitHeight()} space={15}>

                <Text layoutConfig={layoutConfig().fit().configMargin({ left: padding, top: 2 * padding })}
                    textSize={20} fontStyle={'bold'} textColor={PubTool.themColor}>
                    网络请求
                </Text>

                <HLayout layoutConfig={layoutConfig().fit().configMargin({ left: padding, top: padding })}
                    space={10} gravity={Gravity.CenterY}>
                    <Stack layoutConfig={layoutConfig().just()} height={12} width={12} corners={6} backgroundColor={PubTool.themColor}>
                    </Stack>
                    <Text layoutConfig={layoutConfig().fit()}
                        textSize={16} fontStyle={'bold'} textColor={Color.BLACK}>
                        GET请求
                    </Text>
                </HLayout>
                <Stack
                    layoutConfig={layoutConfig().mostWidth().justHeight().configMargin({ left: padding, right: padding })}
                    padding={{ top: padding, left: padding, bottom: padding, right: padding }}
                    backgroundColor={PubTool.bgColor} height={280}>
                    <VLayout
                        layoutConfig={layoutConfig().most()}
                        space={10}>
                        <Text fontStyle="bold">response:</Text>
                        <Scroller
                            layoutConfig={layoutConfig().mostWidth().fitHeight().configWeight(1)}
                        >
                            <Text layoutConfig={layoutConfig().fit()} ref={resGetText} maxLines={0} textSize={13}
                            ></Text>
                        </Scroller>
                        <Text
                            width={100} height={38} corners={19}
                            textColor={Color.WHITE}
                            layoutConfig={layoutConfig().just().configAlignment(gravity().bottom().center())}
                            backgroundColor={PubTool.themColor}
                            onClick={() => {
                                modal(this.context).toast('请求中...', Gravity.Center)
                                network(this.context).get('https://www.dmoe.cc/random.php?return=json').then(res => {
                                    log(`Response : ${res.data}`)
                                    const jsonStr = JSON.stringify(res)
                                    resGetText.current.text = jsonStr
                                    modal(this.context).alert(jsonStr)
                                }).catch(e => {
                                    modal(this.context).toast('Catched:' + JSON.stringify(e))
                                })
                            }}
                        > 发起请求
                        </Text>
                    </VLayout>
                </Stack>
                <HLayout layoutConfig={layoutConfig().fit().configMargin({ left: padding, top: padding })}
                    space={10} gravity={Gravity.CenterY}>
                    <Stack layoutConfig={layoutConfig().just()} height={12} width={12} corners={6} backgroundColor={PubTool.themColor}>
                    </Stack>
                    <Text layoutConfig={layoutConfig().fit()}
                        textSize={16} fontStyle={'bold'} textColor={Color.BLACK}>
                        POST请求
                    </Text>
                </HLayout>
                <Stack
                    layoutConfig={layoutConfig().mostWidth().justHeight().configMargin({ left: padding, right: padding })}
                    padding={{ top: padding, left: padding, bottom: padding, right: padding }}
                    backgroundColor={PubTool.bgColor} height={280}>
                    <VLayout
                        layoutConfig={layoutConfig().most()}
                        space={10}>
                        <Text fontStyle="bold">response:</Text>
                        <Scroller
                            layoutConfig={layoutConfig().mostWidth().fitHeight().configWeight(1)}
                        >
                            <Text layoutConfig={layoutConfig().fit()} ref={resPostText} maxLines={0} textSize={13}
                            ></Text>
                        </Scroller>
                        <Text
                            width={100} height={38} corners={19}
                            textColor={Color.WHITE}
                            layoutConfig={layoutConfig().just().configAlignment(gravity().bottom().center())}
                            backgroundColor={PubTool.themColor}
                            onClick={() => {
                                modal(this.context).toast('请求中...', Gravity.Center)
                                const data = 'start=1&num=1'
                                network(this.context).post('http://baobab.kaiyanapp.com/api/v4/discovery/hot', data).then(res => {
                                    log(`Response : ${res.data}`)
                                    const jsonStr = JSON.stringify(res)
                                    resPostText.current.text = jsonStr
                                    modal(this.context).alert(jsonStr)
                                }).catch(e => {
                                    modal(this.context).toast('Catched:' + JSON.stringify(e))
                                })
                            }}
                        > 发起请求
                        </Text>
                    </VLayout>
                </Stack>
                <HLayout layoutConfig={layoutConfig().fit().configMargin({ left: padding, top: padding })}
                    space={10} gravity={Gravity.CenterY}>
                    <Stack layoutConfig={layoutConfig().just()} height={12} width={12} corners={6} backgroundColor={PubTool.themColor}>
                    </Stack>
                    <Text layoutConfig={layoutConfig().fit()}
                        textSize={16} fontStyle={'bold'} textColor={Color.BLACK}>
                        通用request请求
                    </Text>
                </HLayout>
                <Stack
                    layoutConfig={layoutConfig().mostWidth().justHeight().configMargin({ left: padding, right: padding })}
                    padding={{ top: padding, left: padding, bottom: padding, right: padding }}
                    backgroundColor={PubTool.bgColor} height={280}>
                    <VLayout
                        layoutConfig={layoutConfig().most()}
                        space={10}>
                        <Text fontStyle="bold">response:</Text>
                        <Scroller
                            layoutConfig={layoutConfig().mostWidth().fitHeight().configWeight(1)}
                        >
                            <Text layoutConfig={layoutConfig().fit()} ref={resRequestText} maxLines={0} textSize={13}
                            ></Text>
                        </Scroller>
                        <Text
                            width={100} height={38} corners={19}
                            textColor={Color.WHITE}
                            layoutConfig={layoutConfig().just().configAlignment(gravity().bottom().center())}
                            backgroundColor={PubTool.themColor}
                            onClick={() => {
                                modal(this.context).toast('请求中...', Gravity.Center)
                                var r: IRequest = {
                                    url: 'http://baobab.kaiyanapp.com/api/v4/discovery/hot',
                                    method: 'post',
                                    data: 'start=1&num=1'
                                }
                                network(this.context).request(r).then(res => {
                                    log(`Response : ${res.data}`)
                                    const jsonStr = JSON.stringify(res)
                                    resRequestText.current.text = jsonStr
                                    modal(this.context).alert(jsonStr)
                                }).catch(e => {
                                    modal(this.context).toast('Catched:' + JSON.stringify(e))
                                })
                            }}
                        > 发起请求
                        </Text>
                    </VLayout>
                </Stack>

            </VLayout>
        </Scroller>
    }
}