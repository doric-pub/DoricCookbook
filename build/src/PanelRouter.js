import { KeyboardDemo } from "./capacities/KeyboardDemo";
import { SliderDemo } from "./capacities/SliderDemo";
import { EffectsDemo } from "./capacities/EffectsDemo";
import { ListEffectsDemo } from "./capacities/ListEffectsDemo";
import { AnimationsDemo } from "./capacities/AnimationsDemo";
import { AnimatedImageDemo } from "./capacities/AnimatedImageDemo";
import { AnimatorDemo } from "./capacities/AnimatorDemo";
import { ComplicatedAnimationDemo } from "./capacities/ComplicatedAnimationDemo";
import { RefreshableDemo } from "./capacities/RefreshableDemo";
import { RefreshDemo } from "./capacities/RefreshDemo";
import { CounterDemo } from "./capacities/CounterDemo";
import { PopoverDemo } from "./capacities/PopoverDemo";
import { FlowLayoutDemo } from "./components/FlowLayoutDemo";
import { ScrollerDemo } from "./capacities/ScrollerDemo";
import { DraggableDemo } from "./capacities/DraggableDemo";
import { TextAnimationDemo } from "./capacities/TextAnimationDemo";
import { PathButtonDemo } from "./capacities/PathButtonDemo";
import { BlurEffectsDemo } from "./capacities/BlurEffectsDemo";
export class PanelRouter {
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
//# sourceMappingURL=PanelRouter.js.map