import React, { useState } from 'react'

export const Greet = ({name}) => {
    const [increment, setButtonState] = useState(0);
  return (
    <>
    <div>Hello {"greet"}</div>
    <div><label htmlFor='yash'>yash</label>
    <input id="yash"/>
    <label >sagar
    <input id="yash"/>
    </label>
    <div data-testid='increment-counter' onClick={()=>setButtonState(increment+1)}> {increment}</div>
    </div>
    </>
  )
}
