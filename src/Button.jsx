import React from 'react'

const Button = (props) => {
    console.log({props})
    const variant = props.variant
    const style = getStyle(variant)

    console.log({style})

    return (
        <button onClick={props.onClick} style={style} >{props.children}</button>
    )
}

export default Button

function getStyle(variant = 'primary') {
    switch(variant) {
        case 'primary': return { backgroundColor: 'royalblue', color: 'white' };
        case 'secondary': return { backgroundColor: 'white', color: 'royalblue' };
    }
}
