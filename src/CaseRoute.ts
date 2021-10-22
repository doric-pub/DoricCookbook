import { stack } from "doric";

import * as Text_1 from "./components/Text_1"
import * as Text_2 from "./components/Text_2"
import * as Text_3 from "./components/Text_3"
import * as Text_4 from "./components/Text_4"
import * as Text_5 from "./components/Text_5"

import * as Stack_1 from "./components/Stack_1"

export function caseUIorCode(path: string, needCode?: boolean) {
    switch (path) {
        case 'Stack_1':
            return needCode ? Stack_1.codeString() : Stack_1.ui()
        case 'Text_1':
            return needCode ? Text_1.codeString() : Text_1.ui()
        case 'Text_2':
            return needCode ? Text_2.codeString() : Text_2.ui()
        case 'Text_3':
            return needCode ? Text_3.codeString() : Text_3.ui()
        case 'Text_4':
            return needCode ? Text_4.codeString() : Text_4.ui()
        case 'Text_5':
            return needCode ? Text_5.codeString() : Text_5.ui()
        default: return needCode ? '' : stack([])
    }
}