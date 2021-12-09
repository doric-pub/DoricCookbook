import { LayoutConfig, Stack, View, ViewComponent } from "doric";
import * as PubTool from "./PubTool"

@ViewComponent
export class Container extends Stack {
    child?: View
    isRandomColor?: boolean
    constructor() {
        super()
    }

    apply(config: Partial<this>) {
        let t = super.apply(config)
        let child = config.child
        if (child) {
            t.addChild(child)
        }
        if (config.isRandomColor) {
            t.backgroundColor = PubTool.randomColor()
        }
        return t
    }
}

export function container(config?: Partial<Container>) {
    const ret = new Container
    if (config) {
        ret.apply(config)
    }
    return ret
}
