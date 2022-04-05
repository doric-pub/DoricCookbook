
import { AndroidAssetsResource, AssetsResource, createRef, Gravity, Image, jsx, layoutConfig, MainBundleResource, RemoteResource, ScaleType, Stack, VLayout } from "doric"
import * as PubTool from "../PubTool"

export function ui() {
    const imageRef = createRef<Image>()
    const remoteImageRef = createRef<Image>()
    return <Stack
        layoutConfig={layoutConfig().mostWidth().fitHeight()}
        backgroundColor={PubTool.bgColor}
        padding={{left: 10, right: 10, top: 10, bottom: 10}}>
        <VLayout
            layoutConfig={layoutConfig().mostWidth().fitHeight()}
            gravity={Gravity.Center} space={20}
        >
            <Image 
            image={new AssetsResource("coupon_bg2.png")}
            height={48}
            width={78}
            scaleType={ScaleType.ScaleAspectFill}
            layoutConfig={layoutConfig().just()}
            ></Image>
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

export function codeString() {

    return `export function ui() {
        const imageRef = createRef<Image>()
        const remoteImageRef = createRef<Image>()
        return <Stack
            layoutConfig={layoutConfig().mostWidth().fitHeight()}
            backgroundColor={PubTool.bgColor}
            padding={{left: 10, right: 10, top: 10, bottom: 10}}>
            <VLayout
                layoutConfig={layoutConfig().mostWidth().fitHeight()}
                gravity={Gravity.Center} space={20}
            >
                <Image 
                image={new AssetsResource("coupon_bg2.png")}
                height={48}
                width={78}
                scaleType={ScaleType.ScaleAspectFill}
                layoutConfig={layoutConfig().just()}
                ></Image>
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
    `
}