import React,{useCallback, useState}  from "react";
import IAmChild from "../ChildComponent";


const CallbackHookDemo = () =>{

    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(()=>{
        setCount((prevCount) => prevCount+1);
    },[]);

    const handleDecrement = useCallback(() => {
        setCount((prevCount) => prevCount - 1);
      }, []);

    return(

        <>
        <IAmChild count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} ></IAmChild>

        </>
    );

}
export default CallbackHookDemo;