import { stack, Stack, View } from "doric";

export class Container extends Stack {

    constructor() {
        super();
    }

    static d(config: Partial<Stack>, child?: View) {
        if (child) {
            return stack([child],config)
        }
        return stack([],config)
    }

    static make(config: Partial<Stack> , child?: View) {
        if (child) {
            return stack([child],config)
        }
        return stack([],config)
    }
}
