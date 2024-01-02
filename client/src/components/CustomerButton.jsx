import React from 'react'

import state from '../store'
import { useSnapshot } from 'valtio'

const CustomerButton = (props) => {

    const snap = useSnapshot(state)

    const generateStyle = ()=>{
        if(props.type == "filled"){
        return {
            backgroundColor:snap.color,
            color:'#fff'
        }

    }
    }

  return (
    <button
    className={`px-2 py-1.2 flex-1 rounded-md ${props.customStyle}`}
    style={generateStyle()}
    onClick={props.handleClick}

    >
        {props.title}
    </button>
  )
}

export default CustomerButton