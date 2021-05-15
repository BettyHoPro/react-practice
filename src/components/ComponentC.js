import React from 'react'
import { NameContext, ColorContext} from '../App'


const ComponentC = () => {
    return (
        <div>
            <div>ComponentC</div>
            <NameContext.Consumer>
                {name => {
                    return (
                        <ColorContext.Consumer>
                          {color => (
                             <div>name: {name}, color {color}</div> 
                          )}
                        </ColorContext.Consumer>
                    )
                }}
            </NameContext.Consumer>
        </div>
    )
}

export default ComponentC
