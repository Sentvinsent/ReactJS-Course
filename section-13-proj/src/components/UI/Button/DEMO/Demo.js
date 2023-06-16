import React from "react"

const DemoOutput = props => {
    return <p>{props.show ? 'New' : ''}</p>
}

export default React.memo(DemoOutput)