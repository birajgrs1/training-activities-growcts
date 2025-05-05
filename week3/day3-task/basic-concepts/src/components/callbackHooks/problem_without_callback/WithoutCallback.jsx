import React, {useState} from "react";
import IAmChild from "./ChildComponent";

const WithoutCallback = () =>{

    const [count, setCount] = useState(0);

    const incrementCount = () =>{
        setCount(count+1);
    }

    const decrementCount = () =>{
        setCount(count-1);
    }

    return(

        <>
        <button onClick={incrementCount} className="myBtn">Increment Count</button>
        <button onClick={decrementCount}  className="myBtn">Decrement Count</button>

        <IAmChild count ={count}></IAmChild>

        </>
    );

}
export default WithoutCallback;