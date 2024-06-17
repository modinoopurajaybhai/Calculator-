import { useState } from 'react'
import './Calculator.css'
export default function Calculator(){
    let [value,setValue]=useState("");

    let addtext=(event)=>{
        setValue(value + event.target.value);

    }
    return(
        <div className="container">
            <div className="calculator">
                <div className="input">
                    <input type="text" value={value}/>
                </div>
                <div className="button">
                <div className="row">
                        <button className="btn" onClick={e=>setValue("")}>AC</button>
                        <button className="btn" onClick={e=>setValue(value.slice(0,-1))}>DE</button>
                        <button className="btn" onClick={addtext} value=".">.</button>
                        <button className="btn" onClick={addtext} value="-">-</button>
                    </div>
                    <div className="row">
                        <button className="btn" onClick={addtext} value="7">7</button>
                        <button className="btn" onClick={addtext} value="8">8</button>
                        <button className="btn" onClick={addtext} value="9">9</button>
                        <button className="btn" onClick={addtext} value="*">*</button>
                    </div>
                    <div className="row">
                        <button className="btn" onClick={addtext} value="4">4</button>
                        <button className="btn" onClick={addtext} value="5">5</button>
                        <button className="btn" onClick={addtext} value="6">6</button>
                        <button className="btn" onClick={addtext} value="/">/</button>
                    </div>
                    <div className="row">
                        <button className="btn" onClick={addtext} value="1">1</button>
                        <button className="btn" onClick={addtext} value="2">2</button>
                        <button className="btn" onClick={addtext} value="3">3</button>
                        <button className="btn" onClick={addtext} value="+">+</button>
                    </div>
                    <div className="row">
                        <button className="btn" onClick={addtext} value="00">00</button>
                        <button className="btn" onClick={addtext} value="0">0</button>
                        <button className="btn" style={{width:"100px"}} value="=" onClick={e=>setValue(eval(value))}>=</button>
                        {/* <button className="btn">*</button> */}
                    </div>
                    
                </div>
            </div>

        </div>
    )
}