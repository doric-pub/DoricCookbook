import { ClassType, log, Panel } from "doric"
import {KeyboardDemo} from "./capacities/KeyboardDemo"

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
        ])
    }

    registerPanel(path: string , panelClass: ClassType<Panel>) {
        this.routeMap.set(path, panelClass)
    }

    panelWithPath(path: string) {
        return this.routeMap.get(path)
    }
}