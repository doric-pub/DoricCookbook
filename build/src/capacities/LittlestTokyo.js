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
import { Panel, layoutConfig, navbar, AssetsResource, VLayout, jsx, GestureContainer, createRef, modal, Gravity, Color, Text, Image, RotationAnimation, TimingFunction, } from "doric";
import THREE from "three";
import { OrbitControls, ThreeView, loadGLTF } from "doric-three";
import { vsync } from "dangle";
let LittlestTokyo = class LittlestTokyo extends Panel {
    onShow() {
        navbar(this.context).setTitle("3D模型");
    }
    build(root) {
        const ref = createRef();
        const loadingRef = createRef();
        const loadingIconRef = createRef();
        jsx.createElement(VLayout, { parent: root, layoutConfig: layoutConfig().most(), gravity: Gravity.Center },
            jsx.createElement(GestureContainer, { ref: ref, layoutConfig: layoutConfig().most(), backgroundColor: Color.parse("#bfe3dd") },
                jsx.createElement(VLayout, { layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center), gravity: Gravity.Center, space: 20 },
                    jsx.createElement(Image, { ref: loadingIconRef, image: new AssetsResource("icon_loading.png"), layoutConfig: layoutConfig().just(), width: 50, height: 50 }),
                    jsx.createElement(Text, { textSize: 20, ref: loadingRef, textColor: Color.GRAY }, "Loading...")),
                jsx.createElement(ThreeView, { layoutConfig: layoutConfig().most(), gestureRef: ref, transparentBackground: true, onInited: (renderer) => __awaiter(this, void 0, void 0, function* () {
                        const scene = new THREE.Scene();
                        const camera = new THREE.PerspectiveCamera(40, renderer.domElement.width / renderer.domElement.height, 1, 100);
                        camera.position.set(5, 2, 8);
                        {
                            const skyColor = 0xffffff;
                            const groundColor = 0xffffff; // brownish orange
                            const intensity = 1;
                            const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
                            scene.add(light);
                        }
                        {
                            const color = 0xffffff;
                            const intensity = 1.5;
                            const light = new THREE.DirectionalLight(color, intensity);
                            light.position.set(5, 10, 2);
                            scene.add(light);
                        }
                        const controls = new OrbitControls(camera, renderer.domElement);
                        controls.target.set(0, 0.5, 0);
                        controls.update();
                        controls.enablePan = false;
                        controls.enableDamping = true;
                        const requestAnimationFrame = vsync(this.context).requestAnimationFrame;
                        try {
                            const gltf = yield loadGLTF(this.context, new AssetsResource("threejs/LittlestTokyo/LittlestTokyo.gltf"));
                            loadingIconRef.current.hidden = true;
                            let mixer;
                            const clock = new THREE.Clock();
                            function animate() {
                                requestAnimationFrame(animate);
                                const delta = clock.getDelta();
                                mixer.update(delta);
                                controls.update();
                                renderer.render(scene, camera);
                            }
                            const model = gltf.scene;
                            model.position.set(1, 1, 0);
                            model.scale.set(0.01, 0.01, 0.01);
                            scene.add(model);
                            mixer = new THREE.AnimationMixer(model);
                            gltf.animations.forEach((e) => {
                                mixer.clipAction(e).play();
                            });
                            animate();
                        }
                        catch (error) {
                            modal(this.context).alert(`${error}`);
                        }
                    }) })));
        const rotationAnimation = new RotationAnimation();
        rotationAnimation.fromRotation = 0;
        rotationAnimation.toRotation = 2;
        rotationAnimation.repeatCount = -1;
        rotationAnimation.duration = 3000;
        rotationAnimation.timingFunction = TimingFunction.Linear;
        this.addOnRenderFinishedCallback(() => {
            loadingIconRef.current.doAnimation(this.context, rotationAnimation);
        });
    }
};
LittlestTokyo = __decorate([
    Entry
], LittlestTokyo);
export { LittlestTokyo };
//# sourceMappingURL=LittlestTokyo.js.map