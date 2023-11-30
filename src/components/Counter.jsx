import { useState } from "react";
import '../styles/Counter.css'



function Counter() {

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }
    function decrement(){
        setCount(count -1);
    }    
  return (
    <div>
        <div className="container">
            <h1>Counter</h1>
            <p>This is a simple example of a React component.</p>
            <div>
            <button onClick={increment}>+</button>
                <h3><span>{count}</span></h3>
                <button onClick={decrement}>-</button>        
            </div>              
        </div>
    </div>
  )
}

export default  Counter;
