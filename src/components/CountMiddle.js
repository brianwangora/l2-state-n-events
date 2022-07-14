import React, { useState } from "react";

function CountMiddle(){

    const [count, setCount] = useState(0)

    function addFifty(){
        setCount(50)
    }

    function addValue(current){
        setCount(current)
    }

    return(
            <div>
                <center>
                    <h4 className="btn-text">{count}</h4>
                    <button className="timeButton" onClick={(i) => addValue(20)}>CLICK ME</button>
                </center>
            </div>
    )

    // TODO: INCREMENT VALUE BY USING EVENT HANDLER
}


export default CountMiddle