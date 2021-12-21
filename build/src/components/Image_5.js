import { AndroidAssetsResource, createRef, Gravity, Image, jsx, layoutConfig, MainBundleResource, RemoteResource, ScaleType, Stack, VLayout } from "doric";
import * as PubTool from "../PubTool";
export function ui() {
    const imageRef = createRef();
    const remoteImageRef = createRef();
    return jsx.createElement(Stack, { layoutConfig: layoutConfig().mostWidth().fitHeight(), backgroundColor: PubTool.bgColor, padding: { left: 10, right: 10, top: 10, bottom: 10 } },
        jsx.createElement(VLayout, { layoutConfig: layoutConfig().mostWidth().fitHeight(), gravity: Gravity.Center, space: 20 },
            jsx.createElement(Image, { ref: imageRef, width: 200, height: 200, scaleType: ScaleType.ScaleAspectFit, image: Environment.platform === 'Android'
                    ? new AndroidAssetsResource('assets/The_Parthenon_in_Athens.jpeg')
                    : new MainBundleResource("assets/The_Parthenon_in_Athens.jpeg"), layoutConfig: layoutConfig().just(), loadCallback: (res) => {
                    var _a, _b;
                    imageRef.current.width = (_a = res === null || res === void 0 ? void 0 : res.width) !== null && _a !== void 0 ? _a : 200;
                    imageRef.current.height = (_b = res === null || res === void 0 ? void 0 : res.height) !== null && _b !== void 0 ? _b : 200;
                } }),
            jsx.createElement(Image, { ref: remoteImageRef, image: new RemoteResource("https://p.upyun.com/demo/webp/webp/jpg-0.webp"), width: 201, height: 200, layoutConfig: layoutConfig().just(), scaleType: ScaleType.ScaleAspectFit, loadCallback: (res) => {
                    var _a, _b;
                    remoteImageRef.current.width = (_a = res === null || res === void 0 ? void 0 : res.width) !== null && _a !== void 0 ? _a : 200;
                    remoteImageRef.current.height = (_b = res === null || res === void 0 ? void 0 : res.height) !== null && _b !== void 0 ? _b : 200;
                } })));
}
export function codeString() {
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
//# sourceMappingURL=Image_5.js.map