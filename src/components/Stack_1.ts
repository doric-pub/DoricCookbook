
import { Color, layoutConfig, Stack, stack, View, ViewComponent } from "doric"

export function ui() {

    let redView = stack([],
        {
            width: 50,
            height: 50,
            layoutConfig:layoutConfig().just(),
            backgroundColor: Color.RED
        }
    )

    let cyanView = stack([],
        {
            width: 50,
            height: 50,
            layoutConfig:layoutConfig().just(),
            backgroundColor: Color.CYAN
        }
    )

    return stack(
        [
            redView,
            cyanView
        ],
        {
            layoutConfig:layoutConfig().most(),
            backgroundColor: Color.LTGRAY
        }
    )
}


export function codeString() {
    
    return  ` export function ui() {
        let redView = stack([],
            {
                width: 50,
                height: 50,
                layoutConfig:layoutConfig().just(),
                backgroundColor: Color.RED
            }
        )
    
        let cyanView = stack([],
            {
                width: 50,
                height: 50,
                layoutConfig:layoutConfig().just(),
                backgroundColor: Color.CYAN
            }
        )
    
        return stack(
            [
                redView,
                cyanView
            ],
            {
                layoutConfig:layoutConfig().most(),
                backgroundColor: Color.LTGRAY
            }
        )
    }
    `
}