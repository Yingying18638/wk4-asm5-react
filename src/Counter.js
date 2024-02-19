import React,{useState, useEffect} from "react";
const Counter=({addCounter})=>{
    const [booleanChanged, setBooleanChanged]=useState(false)
    const handleSetNumberAll=()=>{
        setBooleanChanged((prev)=> !prev)
    }
    
    return (
        <>
            <button onClick={handleSetNumberAll} className="buttonAll">All + 1</button>
            <ButtonPlusOne 
                booleanChanged={booleanChanged}
            />
            <ButtonPlusOne 
                booleanChanged={booleanChanged}
            />
            <ButtonPlusOne  
                booleanChanged={booleanChanged}
            />
            <button onClick={addCounter} className="buttonAll">Add a Counter</button>
        </>
    )
}
const ButtonPlusOne=({ booleanChanged})=>{
    const [number, setNumber]=useState(-1)
    useEffect(()=>{
        setNumber(number+1)
    },[booleanChanged])
    return(
        <div>
            <button className="buttonPlusOne" 
                onClick={()=>setNumber(number+1)} 
                >+ 1
            </button>
            <span> { number } </span>
        </div>
    )
}



export default Counter;