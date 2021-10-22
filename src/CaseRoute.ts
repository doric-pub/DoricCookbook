import { stack } from "doric";

import * as Text_1 from "./components/Text_1"
import * as Text_2 from "./components/Text_2"
import * as Stack_1 from "./components/Stack_1"

export function caseUIorCode(path: string, needCode?: boolean) {
    switch (path) {
        case 'Stack_1':
            return needCode ? Stack_1.codeString() : Stack_1.ui()
        case 'Text_1':
            return needCode ? Text_1.codeString() : Text_1.ui()
        case 'Text_2':
            return needCode ? Text_2.codeString() : Text_2.ui()
        default: return needCode ? '' : stack([])
    }
}