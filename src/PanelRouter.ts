import { ClassType, log, Panel } from "doric"
import {KeyboardDemo} from "./capacities/KeyboardDemo"
import { SliderDemo } from "./capacities/SliderDemo"
import { EffectsDemo } from "./capacities/EffectsDemo"
import { ListEffectsDemo } from "./capacities/ListEffectsDemo"
import { AnimationsDemo } from "./capacities/AnimationsDemo"
import { AnimatedImageDemo } from "./capacities/AnimatedImageDemo"
import { AnimatorDemo } from "./capacities/AnimatorDemo"
import { ComplicatedAnimationDemo } from "./capacities/ComplicatedAnimationDemo"
import { RefreshableDemo } from "./capacities/RefreshableDemo"
import { RefreshDemo } from "./capacities/RefreshDemo"
import {CounterDemo} from "./capacities/CounterDemo"
import { PopoverDemo } from "./capacities/PopoverDemo"
import { FlowLayoutDemo } from "./components/FlowLayoutDemo"
import { ScrollerDemo } from "./capacities/ScrollerDemo"
import { DraggableDemo } from "./capacities/DraggableDemo"
import { TextAnimationDemo } from "./capacities/TextAnimationDemo"
import { PathButtonDemo } from "./capacities/PathButtonDemo"
import { BlurEffectsDemo } from "./capacities/BlurEffectsDemo"
import { NetworkDemo } from "./capacities/NetworkDemo"
import { GestureContainerDemo } from "./capacities/GestureContainerDemo"
import { GestureTSXDemo } from "./capacities/GestureTSXDemo"

export class PanelRouter {

    private routeMap: Map<string, ClassType<Panel>> = new Map()

    private static _instance: PanelRouter
    static instance() {
        if (!this._instance) {
            this._instance = new PanelRouter()
        }
        return this._instance
    }

    private constructor() { 
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
        ])
    }

    registerPanel(path: string , panelClass: ClassType<Panel>) {
        this.routeMap.set(path, panelClass)
    }

    panelWithPath(path: string) {
        return this.routeMap.get(path)
    }
}