import {
  Panel,
  Group,
  layoutConfig,
  navbar,
  AssetsResource,
  VLayout,
  jsx,
  GestureContainer,
  createRef,
  modal,
  Gravity,
  Color,
  Text,
  Image,
  RotationAnimation,
  TimingFunction,
} from "doric";
import THREE from "three";
import { OrbitControls, ThreeView, loadGLTF } from "doric-three";
import { vsync } from "dangle";
@Entry
export class LittlestTokyo extends Panel {
  onShow() {
    navbar(this.context).setTitle("3D模型");
  }
  build(root: Group) {
    const ref = createRef<GestureContainer>();
    const loadingRef = createRef<Text>();
    const loadingIconRef = createRef<Image>();

    <VLayout
      parent={root}
      layoutConfig={layoutConfig().most()}
      gravity={Gravity.Center}
    >
      <GestureContainer
        ref={ref}
        layoutConfig={layoutConfig().most()}
        backgroundColor={Color.parse("#bfe3dd")}
      >
        <VLayout
          layoutConfig={layoutConfig().fit().configAlignment(Gravity.Center)}
          gravity={Gravity.Center}
          space={20}
        >
          <Image
            ref={loadingIconRef}
            image={new AssetsResource("icon_loading.png")}
            layoutConfig={layoutConfig().just()}
            width={50}
            height={50}
          ></Image>
          <Text textSize={20} ref={loadingRef} textColor={Color.GRAY}>
            Loading...
          </Text>
        </VLayout>
        <ThreeView
          layoutConfig={layoutConfig().most()}
          gestureRef={ref}
          transparentBackground={true}
          onInited={async (renderer) => {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(
              40,
              renderer.domElement.width / renderer.domElement.height,
              1,
              100
            );
            camera.position.set(5, 2, 8);
            {
              const skyColor = 0xffffff;
              const groundColor = 0xffffff; // brownish orange
              const intensity = 1;
              const light = new THREE.HemisphereLight(
                skyColor,
                groundColor,
                intensity
              );
              scene.add(light);
            }
            {
              const color = 0xffffff;
              const intensity = 1.5;
              const light = new THREE.DirectionalLight(color, intensity);
              light.position.set(5, 10, 2);
              scene.add(light);
            }

            const controls = new OrbitControls(
              camera,
              renderer.domElement
            ) as any;
            controls.target.set(0, 0.5, 0);
            controls.update();
            controls.enablePan = false;
            controls.enableDamping = true;
            const requestAnimationFrame = vsync(
              this.context
            ).requestAnimationFrame;
            try {
              const gltf = await loadGLTF(
                this.context,
                new AssetsResource("threejs/LittlestTokyo/LittlestTokyo.gltf")
              );
              loadingIconRef.current.hidden = true;
              let mixer: THREE.AnimationMixer;
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
            } catch (error) {
              modal(this.context).alert(`${error}`);
            }
          }}
        />
      </GestureContainer>
    </VLayout>;
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
}
