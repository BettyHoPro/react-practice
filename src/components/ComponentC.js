import React from 'react'
import { NameContext } from '../App'

const ComponentC = () => {
    return (
        <div>
            <div>ComponentC</div>
            <NameContext.Consumer>
                {name => {
                    return <div>{name}</div>
                }}
            </NameContext.Consumer>
        </div>
    )
}

export default ComponentC
